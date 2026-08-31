/* =========================================================
   Natan Ben-David — portfolio v2 · engine
   ========================================================= */
(function () {
'use strict';

var RM = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
var L  = 0;                       /* 0 = en, 1 = he — English is the default */
var GEN = 0;                      /* invalidates running work on a language switch */
var live = 0;

/* Language on first paint: a saved choice (the toggle was clicked before)
   always wins. Otherwise, detect the visitor's browser language and open in
   Hebrew for a Hebrew-speaking visitor — anyone else still gets English,
   which stays the default. Once the toggle is used, that explicit choice is
   what gets remembered from then on, not the browser language. */
(function pickInitialLanguage(){
  try {
    var saved = localStorage.getItem('nbd-lang');
    if (saved === 'he'){ L = 1; return; }
    if (saved === 'en'){ L = 0; return; }
  } catch (e) {}
  /* the visitor's single most-preferred language only — a bilingual browser
     profile that lists Hebrew as a secondary, accepted language shouldn't
     override a different primary preference */
  var lang = (navigator.language || '').toLowerCase();
  var isHebrew = lang === 'he' || lang.indexOf('he-') === 0 || lang === 'iw' || lang.indexOf('iw-') === 0; /* 'iw' — legacy code some old browsers still report */
  if (isHebrew) L = 1;
})();

function t(v){ return Array.isArray(v) ? (v[L] || v[0]) : v; }
function el(tag, cls, html){ var n=document.createElement(tag); if(cls)n.className=cls; if(html!=null)n.innerHTML=html; return n; }
function $(s,r){ return (r||document).querySelector(s); }
function $$(s,r){ return Array.prototype.slice.call((r||document).querySelectorAll(s)); }

/* =========================================================
   1 · streaming text
   Nothing is visible before its turn, and turns are taken in
   document order — which is reading order in both directions.
   ========================================================= */
function tokenize(node, mode){
  var walker = document.createTreeWalker(node, NodeFilter.SHOW_TEXT, null, false);
  var texts = [], toks = [];
  while (walker.nextNode()) texts.push(walker.currentNode);

  texts.forEach(function(n){
    var raw = n.nodeValue;
    if (!raw || !raw.trim()) return;
    var frag = document.createDocumentFragment();
    raw.split(/(\s+)/).forEach(function(p){
      if (p === '') return;
      if (/^\s+$/.test(p)) { frag.appendChild(document.createTextNode(p)); return; }
      if (mode === 'chars') {
        /* one unbreakable box per word, so a line never breaks mid-word */
        var w = el('span','tokw');
        p.split('').forEach(function(ch){
          var s = el('span','tok'); s.textContent = ch; w.appendChild(s); toks.push(s);
        });
        frag.appendChild(w);
      } else {
        var s2 = el('span','tok'); s2.textContent = p; frag.appendChild(s2); toks.push(s2);
      }
    });
    n.parentNode.replaceChild(frag, n);
  });
  return toks;
}

function prime(node, mode){
  if (node.__toks) return node.__toks;
  node.__html = node.innerHTML;
  node.__mode = mode || node.dataset.stream || 'words';
  node.__toks = tokenize(node, node.__mode);
  node.classList.add('lit');          /* every token is at opacity 0 by now */
  if (RM) finish(node);
  return node.__toks;
}

/* collapse the spans back into plain text — keeps the DOM light */
function finish(node){
  node.__done = true;
  if (node.__html != null) node.innerHTML = node.__html;
  node.__toks = null;
}

function stream(node, opts){
  opts = opts || {};
  var toks = prime(node, opts.mode);
  function end(){ node.__running = false; live--; setLive(); if (opts.done) opts.done(); }

  if (RM || node.__done){ if (opts.done) opts.done(); return; }
  if (!toks.length){ finish(node); if (opts.done) opts.done(); return; }

  var gen = GEN, i = 0, speed = opts.speed || (node.__mode === 'chars' ? 26 : 34);
  var caret = el('i','caret'), next = 0;
  node.__running = true; live++; setLive();

  /* driven by requestAnimationFrame, not setTimeout: a background tab clamps
     timers to one second, which would stall everything queued behind this
     block. rAF simply pauses while hidden and resumes at full speed. */
  (function step(ts){
    if (gen !== GEN){ node.__running = false; live--; setLive(); return; }
    /* something else finished this block early (a fast scroll, or a click) */
    if (node.__done){ caret.remove(); end(); return; }

    if (ts >= next){
      var burst = (node.__mode === 'chars' ? 1 : 2) + (Math.random() < 0.3 ? 1 : 0);
      while (burst-- > 0 && i < toks.length){ toks[i].classList.add('on'); i++; }

      if (i >= toks.length){ caret.remove(); finish(node); end(); return; }

      var last = toks[i-1];
      if (last.parentNode) last.parentNode.insertBefore(caret, last.nextSibling);
      var pause = speed + Math.random() * speed * 0.9;
      if (/[.,;:!?—]$/.test(last.textContent)) pause += speed * 3;
      next = ts + pause;
    }
    requestAnimationFrame(step);
  })(0);
}

/* ---- the queue: one block at a time, in document order ---- */
var queue = [], running = false;

function enqueue(node){
  if (node.__queued || node.__done) return;
  node.__queued = true;
  prime(node);                        /* hide it the instant it is spoken for */
  var i = 0;
  while (i < queue.length &&
        (queue[i].compareDocumentPosition(node) & Node.DOCUMENT_POSITION_FOLLOWING)) i++;
  queue.splice(i, 0, node);
  pump();
}

function pump(){
  if (running) return;
  var node;
  while ((node = queue.shift())){
    if (node.__done) continue;
    if (!node.isConnected){ node.__done = true; continue; }
    /* already scrolled past — no point animating it */
    var r = node.getBoundingClientRect();
    var vh = window.innerHeight;
    if (r.bottom < 0 || r.top > vh * 1.6){ prime(node); finish(node); continue; }
    break;
  }
  if (!node) return;
  running = true;
  stream(node, { mode: node.dataset.stream || 'words', done: function(){
    running = false;
    pump();
  }});
}

function resetQueue(){
  queue.forEach(function(n){ n.__queued = false; });
  queue = []; running = false;
}

function setLive(){
  var on = live > 0;
  var d = $('#statusDot'), n = $('#railNode');
  if (d) d.classList.toggle('live', on);
  if (n) n.classList.toggle('live', on);
}

var streamObserver = new IntersectionObserver(function(entries){
  entries.forEach(function(en){
    if (en.isIntersecting){ streamObserver.unobserve(en.target); enqueue(en.target); }
  });
}, { rootMargin: '0px 0px -12% 0px', threshold: 0.01 });

function watchStream(node){ streamObserver.observe(node); }

/* A fast scroll can outrun IntersectionObserver, which would leave a block
   hidden for good. This sweep is the safety net: anything already scrolled
   past is shown at once, anything on screen joins the queue. */
function sweepStreams(){
  var vh = window.innerHeight;
  $$('.stream').forEach(function(n){
    if (n.__done) return;
    var r = n.getBoundingClientRect();
    if (r.bottom < 0){                       /* already read past — just show it */
      if (!n.__running){ prime(n); finish(n); }
      return;
    }
    if (!n.__queued && r.top < vh) enqueue(n);
  });
}

/* generic reveal observer for images, pins and reels */
var revealObserver = new IntersectionObserver(function(entries){
  entries.forEach(function(en){
    if (en.isIntersecting){
      var n = en.target;
      revealObserver.unobserve(n);
      setTimeout(function(){ n.classList.add('on'); }, parseInt(n.dataset.rd || 0, 10));
    }
  });
}, { rootMargin: '0px 0px -8% 0px', threshold: 0.02 });

function watchReveal(n, d){ if (d) n.dataset.rd = d; revealObserver.observe(n); }

/* =========================================================
   2 · responsive images
   The Webflow export ships -p-500/800/1080/1600 variants;
   variants.js records which of them exist.
   ========================================================= */
function setImg(img, src, sizes){
  var file = src.split('/').pop();
  var widths = (typeof VARIANTS !== 'undefined' && VARIANTS[file]) || null;
  if (widths && widths.length){
    var dot = src.lastIndexOf('.'), stem = src.slice(0, dot), ext = src.slice(dot);
    img.srcset = widths.map(function(w){ return stem + '-p-' + w + ext + ' ' + w + 'w'; }).join(', ');
    if (sizes) img.sizes = sizes;
    img.src = stem + '-p-' + widths[widths.length - 1] + ext;
  } else {
    img.src = src;
  }
  img.decoding = 'async';
  return img;
}

/* =========================================================
   3 · builders
   ========================================================= */
function playSvg(){
  return '<span><svg viewBox="0 0 12 14" fill="currentColor"><path d="M0 0l12 7-12 7z"/></svg></span>';
}
function zoomSvg(){
  return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">' +
    '<circle cx="10.5" cy="10.5" r="6.5"/><path d="M15.5 15.5 21 21" stroke-linecap="round"/>' +
    '<path d="M10.5 7.5v6M7.5 10.5h6" stroke-linecap="round"/></svg>';
}

/* a pin — image first, words under it, Pinterest fashion */
function buildPin(id){
  var p = C.projects[id];
  var a = el(p.external ? 'a' : 'button', 'pin');
  if (p.external){ a.href = p.external; a.target = '_blank'; a.rel = 'noopener'; }
  else { a.type = 'button'; a.addEventListener('click', function(){ openReader(id); }); }

  var frame = el('div','pin__frame');
  var img = el('img','pin__img' + (p.blend ? ' blend' : ''));
  img.alt = t(p.title); img.loading = 'lazy';
  setImg(img, p.cover, '(max-width:860px) 100vw, (max-width:1280px) 46vw, 30vw');
  frame.appendChild(img);
  frame.appendChild(el('div','pin__veil',
    '<span class="pin__open label"><i></i>' + (p.external ? t(C.ui.viewLive) : t(C.ui.openCase)) + '</span>'));
  a.appendChild(frame);

  a.appendChild(el('div','pin__meta label', t(p.meta || p.kicker)));
  a.appendChild(el('h3','pin__title', t(p.title)));
  a.appendChild(el('p','pin__blurb', t(p.blurb)));
  return a;
}

function buildReel(r){
  var b = el('button','reel' + (r.big ? ' big' : ''));
  b.type = 'button';
  var f = el('div','reel__frame');
  f.style.backgroundImage = 'url(https://i.ytimg.com/vi/' + r.id + '/mqdefault.jpg)';
  f.appendChild(el('div','reel__play', playSvg()));
  b.appendChild(f);
  b.appendChild(el('p','reel__t', t(r.t)));
  b.addEventListener('click', function(){
    if (f.querySelector('iframe')) return;
    f.innerHTML = '<iframe src="https://www.youtube.com/embed/' + r.id + '?rel=0&autoplay=1" ' +
      'allow="autoplay; encrypted-media; fullscreen" allowfullscreen title="' + t(r.t) + '"></iframe>';
  });
  return b;
}

function buildArtStrip(){
  var wrap = el('div','artstrip');
  /* the marquee scrolls sideways, so lazy loading would leave most of the row
     at zero width — small variants are loaded eagerly instead */
  function thumb(src){ return src.replace(/(\.[a-z]+)$/i, '-p-500$1'); }
  var pool = C.artwork.slice(0, 26);
  [0,1].forEach(function(row){
    var r = el('div','artstrip__row' + (row ? ' rev' : ''));
    var set = row ? pool.slice(13).concat(pool.slice(0,13)) : pool;
    set.concat(set).forEach(function(src){
      /* the same card frame as the work board — sized for the strip in CSS */
      var card = el('figure','mcard');
      var i = el('img'); i.src = thumb(src); i.alt = ''; i.decoding = 'async';
      card.appendChild(i);
      card.addEventListener('click', function(){ openReader('artwork'); });
      r.appendChild(card);
    });
    wrap.appendChild(r);
  });
  var cta = el('div','artstrip__cta');
  var b = el('button','rnav','<i></i>' + t(C.ui.openCase));
  b.type = 'button';
  b.addEventListener('click', function(){ openReader('artwork'); });
  cta.appendChild(b);
  wrap.appendChild(cta);
  return wrap;
}

function buildTimeline(){
  var wrap = el('div','timeline');
  C.timeline.forEach(function(row){
    var r = el('div','tl' + (row.edu ? ' edu' : ''));
    /* a year range has no strong direction, so RTL would flip it to 2026–2025 */
    r.appendChild(el('div','tl__when label', '<bdi dir="ltr">' + row.years + '</bdi>'));
    var d = el('div');
    d.appendChild(el('h4','tl__role', t(row.role)));
    d.appendChild(el('p','tl__org label', t(row.org)));
    if (t(row.body)){
      var p = el('p','tl__body stream'); p.dataset.stream='words'; p.innerHTML = t(row.body);
      d.appendChild(p);
    }
    r.appendChild(d);
    wrap.appendChild(r);
  });
  return wrap;
}

function buildTools(){
  var wrap = el('div','tools');
  C.tools.forEach(function(g){
    var c = el('div','tool');
    c.appendChild(el('h5','label', t(g.g)));
    var ul = el('ul');
    g.i.forEach(function(item){ ul.appendChild(el('li', null, t(item))); });
    c.appendChild(ul);
    wrap.appendChild(c);
  });
  return wrap;
}

function buildContact(){
  var w = el('div','contact');
  var a = el('a','contact__mail', C.contact.email);
  a.href = 'mailto:' + C.contact.email;
  w.appendChild(a);
  var p = el('p','stream'); p.dataset.stream='words'; p.innerHTML = t(C.contact.closing);
  p.style.marginTop = 'var(--sp-8)';
  p.style.maxWidth = 'var(--col)';
  w.appendChild(p);
  var row = el('div','contact__row label');
  row.innerHTML =
    '<a href="mailto:' + C.contact.email + '">' + t(C.ui.emailLabel) + '</a>' +
    '<a href="https://wa.me/' + C.contact.phone.replace(/\D/g,'') + '" target="_blank" rel="noopener">' +
      t(C.ui.phoneLabel) + ' · ' + C.contact.phoneLabel + '</a>';
  w.appendChild(row);
  return w;
}

function buildSection(sec){
  var s = el('section','section');
  s.id = 'sec-' + sec.id;
  s.dataset.chapter = sec.id;

  var head = el('div','section__head');
  head.appendChild(el('p','section__kicker label', t(sec.kicker)));
  var h2 = el('h2','section__title stream'); h2.dataset.stream = 'chars'; h2.innerHTML = t(sec.title);
  head.appendChild(h2);
  s.appendChild(head);

  var body = el('div','section__body');
  sec.blocks.forEach(function(b){
    var kind = b[0], val = b[1];
    if (kind === 'p' || kind === 'lead'){
      var p = el('p', (kind === 'lead' ? 'lead ' : '') + 'stream');
      p.dataset.stream = 'words'; p.innerHTML = t(val);
      body.appendChild(p);
    } else if (kind === 'stats'){
      var st = el('div','stats');
      C.stats.forEach(function(x){
        var c = el('div','stat');
        c.appendChild(el('b', null, t(x.k)));
        c.appendChild(el('span', null, t(x.v)));
        st.appendChild(c);
      });
      body.appendChild(st);
    } else if (kind === 'board'){
      var g = el('div','board');
      val.forEach(function(id, i){ var c = buildPin(id); g.appendChild(c); watchReveal(c, i * 60); });
      body.appendChild(g);
    } else if (kind === 'reels'){
      var rg = el('div','reels');
      C.reels.forEach(function(r, i){ var c = buildReel(r); rg.appendChild(c); watchReveal(c, i * 45); });
      body.appendChild(rg);
    } else if (kind === 'artstrip'){ body.appendChild(buildArtStrip()); }
      else if (kind === 'timeline'){ body.appendChild(buildTimeline()); }
      else if (kind === 'tools'){    body.appendChild(buildTools()); }
      else if (kind === 'contact'){  body.appendChild(buildContact()); }
  });
  s.appendChild(body);

  $$('.stream', s).forEach(watchStream);
  return s;
}

/* =========================================================
   4 · project reader
   ========================================================= */
var readerEl = $('#reader'), readerBody = $('#readerBody'), readerScroll = $('#readerScroll');
var currentProject = null;

function figure(src, masonry){
  /* a lone full-bleed editorial image */
  if (!masonry){
    var f = el('figure','rd-figure');
    var i = el('img'); i.alt = ''; i.loading = 'lazy';
    setImg(i, src, '(max-width:900px) 100vw, min(1320px, 92vw)');
    i.addEventListener('click', function(){ openLightbox(src); });
    f.appendChild(i);
    watchReveal(i);
    return f;
  }
  /* a member of a gallery — the same Pinterest-style card as the work board */
  var card = el('figure','mcard');
  var img = el('img'); img.alt = ''; img.loading = 'lazy';
  setImg(img, src, '(max-width:520px) 100vw, (max-width:860px) 46vw, 30vw');
  card.appendChild(img);
  card.appendChild(el('div','mcard__veil', zoomSvg()));
  card.addEventListener('click', function(){ openLightbox(src); });
  watchReveal(card);
  return card;
}

function ytBlock(id){
  var w = el('div','rd-video');
  var f = el('div','reel__frame');
  f.style.backgroundImage = 'url(https://i.ytimg.com/vi/' + id + '/maxresdefault.jpg)';
  f.style.cursor = 'pointer';
  f.appendChild(el('div','reel__play', playSvg()));
  f.addEventListener('click', function(){
    if (f.querySelector('iframe')) return;
    f.innerHTML = '<iframe src="https://www.youtube.com/embed/' + id + '?rel=0&autoplay=1" allow="autoplay; encrypted-media; fullscreen" allowfullscreen></iframe>';
  });
  w.appendChild(f);
  return w;
}

function renderReader(id, keepRatio){
  var p = C.projects[id];
  if (!p) return;
  currentProject = id;
  resetQueue();
  var ratio = keepRatio ? readerScroll.scrollTop / Math.max(1, readerScroll.scrollHeight) : 0;

  readerBody.innerHTML = '';
  $('#readerCrumb').textContent = t(p.title);

  /* you land on the image, the way you land on a pin */
  var cover = el('div','rd-cover' + (/\.png$/i.test(p.cover) ? ' contain' : ''));
  var ci = el('img'); ci.alt = ''; setImg(ci, p.cover, '100vw');
  cover.appendChild(ci);
  readerBody.appendChild(cover);

  var hero = el('div','rd-hero');
  hero.appendChild(el('p','rd-kicker label', t(p.kicker)));
  var h = el('h1','rd-title stream'); h.dataset.stream = 'chars'; h.innerHTML = t(p.title);
  hero.appendChild(h);
  var bl = el('p','rd-blurb stream'); bl.dataset.stream='words'; bl.innerHTML = t(p.blurb);
  hero.appendChild(bl);

  var facts = el('dl','rd-facts');
  if (p.role){
    facts.appendChild(el('div', null,
      '<dt class="label">' + t(C.ui.roleLabel) + '</dt><dd>' + t(p.role) + '</dd>'));
  }
  if (p.meta){
    facts.appendChild(el('div', null,
      '<dt class="label">' + t(C.ui.whenLabel) + '</dt><dd>' + t(p.meta) + '</dd>'));
  }
  if (facts.children.length) hero.appendChild(facts);
  readerBody.appendChild(hero);

  (p.blocks || []).forEach(function(b){
    var k = b[0], v = b[1];
    if (k === 'h1'){ var n = el('h1','rd-h1 stream'); n.dataset.stream='chars'; n.innerHTML = t(v); readerBody.appendChild(n); }
    else if (k === 'h2'){ var n2 = el('h2','rd-h2 stream'); n2.dataset.stream='chars'; n2.innerHTML = t(v); readerBody.appendChild(n2); }
    else if (k === 'p'){ var pp = el('p','rd-p stream'); pp.dataset.stream='words'; pp.innerHTML = t(v); readerBody.appendChild(pp); }
    else if (k === 'note'){ var nt = el('p','rd-note stream'); nt.dataset.stream='words'; nt.innerHTML = t(v); readerBody.appendChild(nt); }
    else if (k === 'ul'){
      var ul = el('ul','rd-ul');
      (v[L] || v[0]).forEach(function(li){
        var l = el('li','stream'); l.dataset.stream='words'; l.innerHTML = li; ul.appendChild(l);
      });
      readerBody.appendChild(ul);
    }
    else if (k === 'img'){ readerBody.appendChild(figure(v)); }
    else if (k === 'pair' || k === 'grid'){
      var g = el('div', 'masonry ' + (k === 'pair' ? 'm2' : ''));
      v.forEach(function(s){ g.appendChild(figure(s, true)); });
      readerBody.appendChild(g);
    }
    else if (k === 'gallery'){
      var gl = el('div','masonry m4');
      C.artwork.forEach(function(s){ gl.appendChild(figure(s, true)); });
      readerBody.appendChild(gl);
    }
    else if (k === 'video'){ readerBody.appendChild(ytBlock(v)); }
    else if (k === 'link'){
      var wrap = el('div','rd-linkwrap');
      var a = el('a','rd-link','<i></i>' + t(v));
      a.href = b[2]; a.target='_blank'; a.rel='noopener';
      wrap.appendChild(a); readerBody.appendChild(wrap);
    }
  });

  var nav = $('#readerNav'); nav.innerHTML = '';
  var idx = C.order.indexOf(id);
  var prev = idx > 0 ? C.order[idx-1] : null;
  var next = idx > -1 && idx < C.order.length-1 ? C.order[idx+1] : null;
  function navBtn(pid, label){
    var b = el('button','rnav','<i></i>' + label + ' · ' + t(C.projects[pid].title));
    b.type='button';
    b.addEventListener('click', function(){ openReader(pid); });
    return b;
  }
  nav.appendChild(prev ? navBtn(prev, t(C.ui.prev)) : el('span'));
  var home = el('button','rnav', t(C.ui.backToWork)); home.type='button';
  home.addEventListener('click', closeReader);
  nav.appendChild(home);
  nav.appendChild(next ? navBtn(next, t(C.ui.next)) : el('span'));

  $$('.stream', readerBody).forEach(watchStream);
  readerScroll.scrollTop = keepRatio ? ratio * readerScroll.scrollHeight : 0;
}

function openReader(id){
  renderReader(id);
  readerEl.classList.add('open');
  readerEl.setAttribute('aria-hidden','false');
  document.body.classList.add('locked');
  try { history.replaceState(null, '', '#p/' + id); } catch(e){}
  $('#readerClose').focus();
}

function closeReader(){
  readerEl.classList.remove('open');
  readerEl.setAttribute('aria-hidden','true');
  document.body.classList.remove('locked');
  currentProject = null;
  resetQueue();
  try { history.replaceState(null, '', location.pathname + location.search); } catch(e){}
  setTimeout(function(){
    if (!readerEl.classList.contains('open')){ readerBody.innerHTML=''; $('#readerNav').innerHTML=''; }
  }, 500);
}

$('#readerClose').addEventListener('click', closeReader);
var rTick = false;
readerScroll.addEventListener('scroll', function(){
  var m = readerScroll.scrollHeight - readerScroll.clientHeight;
  $('#readerProgress').style.width = (m > 0 ? (readerScroll.scrollTop / m) * 100 : 0) + '%';
  if (rTick) return;
  rTick = true;
  requestAnimationFrame(function(){ rTick = false; sweepStreams(); });
}, { passive:true });

/* lightbox */
var lb = $('#lightbox'), lbImg = $('#lightboxImg');
function openLightbox(src){ lbImg.src = src; lb.classList.add('open'); lb.setAttribute('aria-hidden','false'); }
function closeLightbox(){ lb.classList.remove('open'); lb.setAttribute('aria-hidden','true'); }
lb.addEventListener('click', closeLightbox);

document.addEventListener('keydown', function(e){
  if (e.key === 'Escape'){
    if (lb.classList.contains('open')) return closeLightbox();
    if (readerEl.classList.contains('open')) return closeReader();
  }
});

/* =========================================================
   5 · scroll state
   ========================================================= */
var railFill = $('#railFill'), railNode = $('#railNode'), ticking = false;

function onScroll(){
  if (ticking) return;
  ticking = true;
  requestAnimationFrame(function(){
    ticking = false;
    var max = document.documentElement.scrollHeight - window.innerHeight;
    var pr  = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;
    if (railFill) railFill.style.height = (pr * 100) + '%';
    if (railNode) railNode.style.top = (pr * 100) + '%';

    var mid = window.innerHeight * 0.42, best = null;
    $$('[data-chapter]').forEach(function(s){
      var r = s.getBoundingClientRect();
      if (r.top <= mid && r.bottom > 0) best = s;
    });
    var key = best ? best.dataset.chapter : 'hero';
    $$('.nav a').forEach(function(a){ a.classList.toggle('on', a.dataset.target === key); });
    sweepStreams();
  });
}
window.addEventListener('scroll', onScroll, { passive:true });
window.addEventListener('resize', onScroll);

/* =========================================================
   6 · ambient field — human noise resolving into machine order
   ========================================================= */
(function fieldCanvas(){
  var cv = $('#field'); if (!cv || RM) { if (cv) cv.style.display='none'; return; }
  var ctx = cv.getContext('2d', { alpha:true }), pts = [], W = 0, H = 0;
  var mouse = { x: -999, y: -999 }, scrollT = 0, lastFrame = 0;

  function build(){
    W = cv.clientWidth; H = cv.clientHeight;
    cv.width = W; cv.height = H;                 /* ambient layer: css pixels are enough */
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    var gap = W < 720 ? 44 : (W > 1600 ? 64 : 48);
    pts = [];
    for (var y = gap; y < H + gap; y += gap)
      for (var x = gap; x < W + gap; x += gap)
        pts.push({ gx:x, gy:y,
          ox:(Math.random()-.5) * gap * 1.5, oy:(Math.random()-.5) * gap * 1.5,
          ph:Math.random() * Math.PI * 2 });
  }

  function draw(time){
    requestAnimationFrame(draw);
    if (time - lastFrame < 33) return;
    if (document.hidden || document.body.classList.contains('locked')) return;
    lastFrame = time;
    ctx.clearRect(0, 0, W, H);
    var rtl = document.documentElement.dir === 'rtl';
    for (var i = 0; i < pts.length; i++){
      var p = pts[i];
      var nx = p.gx / W; if (rtl) nx = 1 - nx;
      var order = Math.min(1, Math.max(0, (nx - 0.08) / 0.84));
      order = order * order * (3 - 2 * order);
      order = Math.min(1, order + scrollT * 0.35);
      var wob = (1 - order) * 3.4;
      var x = p.gx + p.ox * (1 - order) + Math.sin(time / 2600 + p.ph) * wob;
      var y = p.gy + p.oy * (1 - order) + Math.cos(time / 3100 + p.ph) * wob;
      var dx = x - mouse.x, dy = y - mouse.y, d2 = dx*dx + dy*dy;
      if (d2 < 16000){ var f = (1 - d2/16000) * 26, d = Math.sqrt(d2) || 1; x += dx/d*f; y += dy/d*f; }
      var a = 0.07 + order * 0.16;
      var r = order > 0.86 ? 1 : 2;
      ctx.fillStyle = (i % 43 === 0) ? 'rgba(197,24,45,' + (a + 0.26) + ')' : 'rgba(93,79,79,' + a + ')';
      ctx.fillRect(x - r/2, y - r/2, r, r);
    }
  }

  var rz; window.addEventListener('resize', function(){ clearTimeout(rz); rz = setTimeout(build, 180); });
  window.addEventListener('pointermove', function(e){ mouse.x = e.clientX; mouse.y = e.clientY; }, { passive:true });
  window.addEventListener('pointerleave', function(){ mouse.x = mouse.y = -999; });
  window.addEventListener('scroll', function(){
    var max = document.documentElement.scrollHeight - window.innerHeight;
    scrollT = max > 0 ? Math.min(1, window.scrollY / max) : 0;
  }, { passive:true });

  build();
  requestAnimationFrame(draw);
})();

/* =========================================================
   7 · language
   ========================================================= */
function buildNav(){
  var nav = $('#nav'); nav.innerHTML = '';
  C.sections.forEach(function(sec){
    var a = el('a', null, t(C.ui.chapters[sec.id]));
    a.href = '#sec-' + sec.id;
    a.dataset.target = sec.id;
    nav.appendChild(a);
  });
}

function buildHeroIndex(){
  var host = $('#heroIndex'); if (!host) return;
  function pad(n){ return (n < 10 ? '0' : '') + n; }
  var prod = 0, brand = 0;
  C.sections.forEach(function(sec){
    sec.blocks.forEach(function(b){
      if (b[0] !== 'board') return;
      if (sec.id === 'product') prod = b[1].length; else brand = b[1].length;
    });
  });
  /* same order as the page: brand and print, then motion, then product */
  var rows = [
    [pad(brand), t(C.ui.idxBrand)],
    [pad(C.reels.length), t(C.ui.idxReels)],
    [pad(prod), t(C.ui.idxCases)],
    [pad(C.artwork.length), t(C.ui.idxArt)]
  ];
  host.innerHTML = '<h6 class="label">' + t(C.ui.indexTitle) + '</h6><ul>' +
    rows.map(function(r){ return '<li><b>' + r[0] + '</b><span class="label">' + r[1] + '</span></li>'; }).join('') +
    '</ul>';
}

function applyStatic(){
  $$('[data-i18n]').forEach(function(n){ n.textContent = t(C.ui[n.dataset.i18n]); });
  $$('.langtoggle__opt').forEach(function(o){ o.classList.toggle('on', (o.dataset.lang === 'he') === (L === 1)); });
  document.title = L === 1
    ? 'נתן בן־דוד — מעצב תקשורת חזותית'
    : 'Natan Ben-David — Visual Communication Designer';
}

function render(){
  GEN++; live = 0; setLive(); resetQueue();
  document.documentElement.lang = L === 1 ? 'he' : 'en';
  document.documentElement.dir  = L === 1 ? 'rtl' : 'ltr';

  applyStatic();

  var ht = $('.hero__title');
  ht.innerHTML = '<span class="accent">' + t(C.ui.heroTitle) + '</span>';
  ht.classList.remove('lit');
  ht.__toks = null; ht.__html = null; ht.__done = false; ht.__running = false; ht.__queued = false;
  var hs = $('.hero__sub');
  hs.innerHTML = t(C.ui.heroSub);
  hs.classList.remove('lit');
  hs.__toks = null; hs.__html = null; hs.__done = false; hs.__running = false; hs.__queued = false;

  var wrap = $('#sections');
  wrap.innerHTML = '';
  C.sections.forEach(function(sec){ wrap.appendChild(buildSection(sec)); });

  var colo = el('div','colophon label');
  colo.innerHTML = '<span>© ' + new Date().getFullYear() + ' ' + t(C.ui.brand) + '</span>' +
                   '<span>' + (L === 1 ? 'ירושלים' : 'Jerusalem') + '</span>';
  wrap.appendChild(colo);

  buildNav();
  buildHeroIndex();

  /* the hero opens the reading order */
  ht.dataset.stream = 'chars'; hs.dataset.stream = 'words';
  setTimeout(function(){ enqueue(ht); enqueue(hs); }, RM ? 0 : 500);

  onScroll();
}

$('#langToggle').addEventListener('click', function(){
  var anchor = null, mid = window.innerHeight * 0.42;
  $$('[data-chapter]').forEach(function(s){
    var r = s.getBoundingClientRect();
    if (r.top <= mid && r.bottom > 0) anchor = s.dataset.chapter;
  });
  var wasOpen = readerEl.classList.contains('open');
  var openId = currentProject;

  L = L === 1 ? 0 : 1;
  try { localStorage.setItem('nbd-lang', L === 1 ? 'he' : 'en'); } catch(e){}

  render();

  if (anchor){
    var target = document.getElementById('sec-' + anchor);
    if (target) target.scrollIntoView({ behavior:'auto', block:'start' });
  }
  if (wasOpen && openId) renderReader(openId, true);
});

/* =========================================================
   8 · boot
   ========================================================= */
document.documentElement.classList.add('js-stream');
render();

function syncHash(){
  var h = location.hash.match(/^#p\/(.+)$/);
  if (h && C.projects[h[1]]){ if (currentProject !== h[1]) openReader(h[1]); }
  else if (readerEl.classList.contains('open')) closeReader();
}
syncHash();
window.addEventListener('hashchange', syncHash);

/* a block the reader has already scrolled past shouldn't hold up the queue */
setInterval(function(){
  $$('.stream').forEach(function(n){
    if (n.__running){
      var r = n.getBoundingClientRect();
      if (r.bottom < -40) finish(n);
    }
  });
  sweepStreams();
}, 900);

/* click anywhere to skip the block being written */
document.addEventListener('click', function(e){
  if (e.target.closest('button, a, input')) return;
  $$('.stream').forEach(function(n){ if (n.__running) finish(n); });
});

})();
