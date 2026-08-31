# Natan Ben-David — portfolio v2

A rebuild of the Webflow portfolio as a single scroll-driven page. Every line of
prose writes itself token by token as you reach it, the way a chat model streams
— but there is no chat UI: the writing is the effect, not the metaphor.

## Run it

    cd "/Volumes/My Passport/natan/NATANUXI/natanuxi.webflow"
    python3 -m http.server 8899
    # open http://localhost:8899/v2/

Opening `v2/index.html` directly from Finder also works.

## Files

    v2/index.html          page shell (fixed chrome + empty containers)
    v2/assets/app.css      the whole visual system
    v2/assets/content.js   ALL copy and project data, bilingual
    v2/assets/app.js       streaming engine, reader, dock, canvas

Images are read from `../images/` — the original Webflow export is untouched.

## The narrative

The page follows the order Natan actually grew in, and says so:

    01 About      — I solve problems in visual communication
    02 Brand & print — where I started: one frame, no second chance
    03 Motion     — then it started to move
    04 Product    — then someone had to use it
    05 Artwork · 06 Experience · 07 Contact

The through-line is that graphics is applied psychology: every medium comes down
to what a person notices, understands and remembers. Leading with the oldest
work is deliberate — it is the arc, not a ranking — and it lands on the AI-
assisted workflow he is building now.

## The scale

Spacing, type, line-height and radii are all multiples of 4, declared as tokens
at the top of `app.css`. Nothing in the stylesheet uses a raw pixel value.

    spacing   4  8  12  16  24  40  64  104  168  272     (Fibonacci ×4 ≈ φ)
    type      12  16  20  24  32  44  68  108

Hebrew moves both small steps up one notch on the same scale — `--t-micro`
12 → 16 and `--t-small` 14–16 → 16–20 — because Hebrew has no ascenders,
descenders or capitals to help the eye, so sizes that read fine in Latin are
genuinely too small. The override lives in `html[lang="he"]`, so every label on
the site grows at once.

### Line-height

One law: **the bigger the type, the tighter the leading.** The ratio falls
monotonically as the size climbs, and every value still lands the line box on
the 4px grid at that size's ceiling.

    latin    12/24  16/28  20/32  32/44  44/52  68/76  108/112
             2.0    1.75   1.6    1.375  1.182  1.118  1.037

    hebrew   16/28  20/32  20/32  32/44  44/56  68/80  108/120
             1.75   1.6    1.6    1.375  1.273  1.176  1.111

Hebrew gets its own curve rather than a patch on the Latin one: its small sizes
are larger to begin with, and its two-line headlines want more air than 1.037
gives them. There are no per-element line-height values anywhere in the
stylesheet — every rule that sets a size sets the matching token, and the pairing
is machine-checkable.

The type ratio widens as it climbs — 1.33, 1.25, 1.20, 1.33, 1.375, 1.545,
1.588 — so the small end is compressed and the large end approaches φ. That is
deliberate: it keeps 12px labels legible beside a 108px headline instead of
letting the big sizes bully the small ones. Line-heights are chosen to land on
a 4px baseline at each size's ceiling (20 → 36, 44 → 48, 108 → 112).

## Editing copy

Everything readable lives in `content.js`. Localised values are pairs:

    ['English text', 'טקסט בעברית']

- `C.ui`         — interface labels
- `C.sections`   — the seven sections of the page, in narrative order
- `C.stats`      — the numbers under the About section
- `C.timeline` / `C.tools` — the career and skills, straight from the CV
- `C.reels`      — YouTube ids for the motion grid
- `C.projects`   — one entry per project; `blocks` is the article body,
                   `meta` is the employer and period that ties it to the CV
- `C.artwork`    — the drawing list
- `C.order`      — prev/next order inside the reader

Block types inside `blocks`: `h1 h2 p ul note img pair grid gallery video link`.

## How the streaming works

Blocks animate **one at a time, in document order** — which is reading order in
both directions. A single queue keeps them sorted; a block joins it when it
enters the viewport and only starts once the block before it has finished.

Nothing is readable before its animation. A `.stream` block is
`visibility:hidden` until the queue reaches it, then it is tokenised — each word
(or, for headings, each character) becomes a `<span class="tok">` at zero
opacity — and a caret walks along revealing them. Because the tokens always
occupy their final position, nothing reflows. When a block finishes, the spans
collapse back into plain text so the DOM stays light.

Three details that matter:

- The animation is driven by `requestAnimationFrame`, not `setTimeout`. A
  background tab clamps timers to one second, which would stall the whole queue
  behind one block. rAF simply pauses while hidden and resumes at full speed.
- A fast scroll can outrun IntersectionObserver. `sweepStreams()` is the safety
  net — anything already scrolled past is shown at once, anything on screen
  joins the queue — so no block can end up hidden forever.
- The guard class is added by JS, so with JavaScript off every word is visible.

Scrolling past an unfinished block, or clicking anywhere, fast-forwards it.
`prefers-reduced-motion` turns all of it off and renders the text immediately.

## Language

English is the default. On a visitor's first arrival, with nothing saved yet,
the page checks `navigator.language` — a single Hebrew locale primary (`he`,
`he-IL`, or the legacy `iw`) opens the page in Hebrew; anything else stays
English. A browser reporting Hebrew only as a secondary/accepted language
(some bilingual OS profiles do this) does not trigger it — only the visitor's
single most-preferred language counts, precisely to avoid false positives.

The `EN / עב` button is pinned to the physical top-right corner and never
mirrors — it is the one fixed point on the page. Clicking it swaps
`lang`/`dir`, rebuilds the page from `content.js`, and returns you to the
section you were reading. From that point on, `localStorage` remembers the
explicit choice, and it always wins over the browser's language on every
later visit — detection only ever applies before a first choice is made.

Hebrew uses Assistant for display and Heebo for body text, and resets the
negative tracking and wide letter-spacing that only suit Latin.

## Three things worth knowing

- The original `natan-ben-david-design-project---360-jerusalem-festival.html`
  carries the General Motors paragraph by mistake. This version has proper
  copy for the festival.
- Do not put `mix-blend-mode` on a full-viewport fixed overlay. It forces the
  page into a single composited group and Chrome then renders it blank on
  scroll. This cost an hour; the comment in `app.css` says so too.
- Project cards are a CSS `columns` masonry with natural image heights, and the
  reader opens on a full-bleed cover before any words appear. Every gallery on
  the site — the work board, image groups inside a case study, the artwork
  gallery, the homepage artwork marquee — shares one card component
  (`.mcard` inside a `.masonry` container), so a photo always gets the same
  rounded frame, hover lift and zoom affordance wherever it appears.
- The language toggle's own labels ("EN" / "עב") never change, so its
  font-size is hardcoded rather than pulled from `--t-micro` — that token is
  redefined per language for every other label on the page, and using it here
  made the toggle visibly resize when switching to Hebrew.
- The brand mark's source SVG viewBox (`0 0 197.57 54`) is the full wordmark;
  only the monogram polygons are drawn, so the viewBox used in code is cropped
  to their real bounding box (`0 0 53.83 54`). Using the wordmark's viewBox
  rendered the icon a third of its intended size.
