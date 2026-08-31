/* =========================================================
   Natan Ben-David - portfolio v2
   Every localised value is a pair: [ english, hebrew ]
   ========================================================= */
var IMG = 'images/';
var C = {};

/* ---------------------------------------------------------
   UI strings
   --------------------------------------------------------- */
C.ui = {
  brand:      ['Natan Ben-David', 'נתן בן-דוד'],
  role:       ['Visual Communication Designer', 'מעצב תקשורת חזותית'],
  boot:       ['graphics is applied psychology - in every medium it appears in',
               'גרפיקה היא פסיכולוגיה יישומית - בכל מדיום שהיא מופיעה בו'],
  heroTitle:  ['I’m Natan Ben-David.', 'נתן בן-דוד.'],
  heroSub:    ['Branding and print, video and motion, product and interface. Different media, one question: what a person will notice, understand and remember.',
               'מיתוג ודפוס, וידאו ומוֹשן, מוצר וממשק. מדיומים שונים, שאלה אחת: מה אדם ישים לב אליו, יבין ויזכור.'],
  heroMeta1:  ['Brand & print', 'מיתוג ודפוס'],
  heroMeta2:  ['Video & motion', 'וידאו ומוֹשן'],
  heroMeta3:  ['Product & UX', 'מוצר ו־UX'],
  heroMeta4:  ['AI-assisted workflow', 'תהליך עבודה עם AI'],
  scrollCue:  ['scroll', 'גללו'],
  idle:       ['ready', 'מוכן'],
  typing:     ['writing', 'כותב'],
  openCase:   ['Open project', 'פתיחת פרויקט'],
  viewLive:   ['Visit the site', 'למעבר לאתר'],
  roleLabel:  ['My role', 'התפקיד שלי'],
  whenLabel:  ['When', 'מתי'],
  close:      ['Close', 'סגירה'],
  prev:       ['Previous', 'הקודם'],
  next:       ['Next', 'הבא'],
  backToWork: ['All work', 'כל העבודות'],
  emailLabel: ['Email', 'אימייל'],
  phoneLabel: ['WhatsApp', 'וואטסאפ'],
  indexTitle: ['in this portfolio', 'בתיק העבודות הזה'],
  idxCases:   ['product case studies', 'תיאורי מקרה במוצר'],
  idxReels:   ['motion pieces', 'עבודות מוֹשן'],
  idxBrand:   ['identity & print projects', 'פרויקטי זהות ודפוס'],
  idxArt:     ['drawings & paintings', 'רישומים וציורים'],
  chapters: {
    hero:       ['opening', 'פתיחה'],
    about:      ['about', 'אודות'],
    visual:     ['brand & print', 'מיתוג ודפוס'],
    motion:     ['motion', 'מוֹשן'],
    product:    ['product', 'מוצר'],
    artwork:    ['artwork', 'אמנות'],
    experience: ['experience', 'ניסיון'],
    contact:    ['contact', 'יצירת קשר']
  }
};

/* ---------------------------------------------------------
   Sections - the spine of the page.
   The order is the order he grew in: brand and print first,
   then video and motion, then product - and today, method.
   --------------------------------------------------------- */
C.sections = [
  {
    id: 'about',
    kicker: ['01 · Who', '01 · מי'],
    title:  ['I solve problems in visual communication.',
             'פותר בעיות בתקשורת חזותית.'],
    blocks: [
      ['lead', ['Every piece of visual communication starts with the same question: what will people notice, what will they understand, and what will stay with them afterward. That’s my starting point. Design isn’t just how something looks - it’s how it works.',
                'כל תקשורת חזותית מתחילה באותה שאלה: למה אנשים ישימו לב, מה הם יבינו, ומה יישאר איתם אחר כך. זו נקודת המוצא שלי. עיצוב הוא לא רק איך משהו נראה - הוא איך הוא עובד.']],
      ['p', ['I built my toolbox along the way: branding, print, photography and image; then video and motion; and later product design too. Each medium adds a different constraint, but the principle stays the same - take an idea and make it clear, precise and memorable.',
             'בניתי את ארגז הכלים שלי לאורך הדרך: מיתוג, דפוס, צילום ותמונה; אחר כך וידאו ומושן; ובהמשך גם עיצוב מוצר. כל מדיום מוסיף מגבלה אחרת, אבל העיקרון נשאר זהה - לקחת רעיון ולהפוך אותו לברור, מדויק וזכיר.']],
      ['p', ['The advantage is in the range. A brand that has to work on a bottle, at an exhibition stand, in a broadcast overlay and on a product screen isn’t four different problems. It’s one system, and it has to speak the same language at every touchpoint.',
             'היתרון הוא בטווח. מותג שצריך לעבוד על בקבוק, בדוכן בתערוכה, בשכבת שידור ובמסך של מוצר הוא לא ארבע בעיות שונות. זו מערכת אחת, שצריכה לדבר באותה שפה בכל נקודת מגע.']],
      ['p', ['Today my focus is method: building AI into the workflow itself - from content pipelines and asset production to scripting. Not to replace judgement, but to shorten the road from brief to result, produce faster, and build each client a workflow that fits how they actually work.',
             'היום המוקד שלי הוא המתודה: שילוב בינה מלאכותית בתוך תהליך העבודה עצמו - מפייפליינים של תוכן וייצור נכסים ועד סקריפטים. לא כדי להחליף שיקול דעת, אלא כדי לקצר את הדרך מבריף לתוצאה, לייצר יותר מהר, ולבנות לכל לקוח תהליך עבודה שמתאים לאופן שבו הוא באמת עובד.']],
      ['stats']
    ]
  },
  {
    id: 'visual',
    kicker: ['02 · Brand & print', '02 · מיתוג ודפוס'],
    title:  ['Where I started: one frame, no second chance.',
             'מאיפה התחלתי: פריים אחד, בלי הזדמנות שנייה.'],
    blocks: [
      ['p', ['Exhibitions, events, packaging and brochures - the half of the craft that ends at a printer rather than a browser. Concept, design, press-checks, proofs, vendors, installation. It teaches you something no screen does: you get one frame, it cannot animate its way out of a problem, and it has to work from across a room.',
             'תערוכות, אירועים, אריזות וברושורים - החצי של המקצוע שמסתיים בבית דפוס ולא בדפדפן. קונספט, עיצוב, בדיקות דפוס, פרוּפים, ספקים והתקנה. זה מלמד משהו ששום מסך לא מלמד: יש לך פריים אחד, הוא לא יכול להתחמק מבעיה דרך תנועה, והוא חייב לעבוד ממרחק של חדר.']],
      ['p', ['CannaTech 2018 brought around 700 people from nearly 40 countries into one venue. The visual language had to hold on a badge, on a stage and on a wall at the same time, and still be recognisable when someone only glanced at it.',
             'CannaTech 2018 כינסה כ־700 איש מכ־40 מדינות למקום אחד. השפה החזותית הייתה צריכה להחזיק על תג, על במה ועל קיר בו־זמנית, ולהישאר מזוהה גם כשמישהו רק העיף מבט.']],
      ['board', ['cannatech', 'bdan-brand', 'general-motors', 'outdoor-stage', 'netofa', 'jerusalem-360', 'nahar-shalom']]
    ]
  },
  {
    id: 'motion',
    kicker: ['03 · Video & motion', '03 · וידאו ומוֹשן'],
    title:  ['Then it started to move.', 'ואז זה התחיל לזוז.'],
    blocks: [
      ['p', ['Motion is a strategic tool, not a finishing touch. It captures attention, strengthens long-term memory, and uses motor encoding to make an interface easier to understand. In a live broadcast the eye is already busy - a well-placed movement in the periphery is the one signal biology cannot ignore, so I use it deliberately and sparingly.',
             'מוֹשן הוא כלי אסטרטגי, לא נגיעה אחרונה. הוא לוכד תשומת לב, מחזק זיכרון לטווח ארוך, ומשתמש בקידוד מוטורי כדי להפוך ממשק למובן יותר. בשידור חי העין כבר עסוקה - תנועה ממוקמת היטב בשדה ההיקפי היא האות היחיד שהביולוגיה לא מסוגלת להתעלם ממנו, ולכן היא נכנסת לתמונה בכוונה ובמשורה בלבד.']],
      ['p', ['Broadcast graphics for the Play Anywhere platform across LaLiga, Serie A, ATP and the NFL; a club membership game for beIN; and the product walkthroughs that shipped alongside them.',
             'גרפיקת שידור לפלטפורמת Play Anywhere בלה־ליגה, בסרייה A, ב־ATP וב־NFL; משחק דרגות מועדון ל־beIN; וסרטוני הסבר למוצר שיצאו איתם לדרך.']],
      ['reels']
    ]
  },
  {
    id: 'product',
    kicker: ['04 · Product & UX', '04 · מוצר ו־UX'],
    title:  ['Then someone had to use it.', 'ואז מישהו היה צריך להשתמש בזה.'],
    blocks: [
      ['p', ['Five years at T.K Open Systems designing for international SaaS clients - Catch Media and Play Anywhere - and before that the government platform work. The same question as a poster, under harder conditions: the person is now inside the thing, under time pressure, making decisions.',
             'חמש שנים ב־T.K Open Systems בעיצוב עבור לקוחות SaaS בינלאומיים - Catch Media ו־Play Anywhere - ולפני כן עבודת הפלטפורמות עבור ארגונים ממשלתיים. אותה שאלה כמו בכרזה, בתנאים קשים יותר: עכשיו האדם נמצא בתוך הדבר, תחת לחץ זמן, ומקבל החלטות.']],
      ['board', ['play-anywhere', 'admin-system', 'cm-analytics', 'idf-museums', 'bdan-ux', 'catchmedia-site']]
    ]
  },
  {
    id: 'artwork',
    kicker: ['05 · Personal', '05 · אישי'],
    title:  ['What I make for myself.', 'מרחב של שגשוג ויצירה.'],
    blocks: [
      ['p', ['This is where it started. Long before product design or motion, drawing was the first language I had - the study of form and light shaped who I am today more than anything I learned afterward.',
             'כאן הכול התחיל. עוד לפני עיצוב מוצר או מוֹשן, הציור היה השפה הראשונה שהייתה לי - חקר הצורה והאור עיצב את מי שאני היום, יותר מכל דבר שלמדתי אחר כך.']],
      ['p', ['It never really left. It’s still the first place an idea goes to get checked, sketched out, and said in the oldest, most direct way there is - before any of it reaches a screen.',
             'הוא אף פעם לא באמת עזב. הוא עדיין המקום הראשון שאליו הולך רעיון כדי להיבדק, להשתרטט, ולהיאמר בדרך העתיקה והישירה ביותר שיש - עוד לפני שהוא מגיע למסך.']],
      ['artstrip']
    ]
  },
  {
    id: 'experience',
    kicker: ['06 · Track record', '06 · רקורד'],
    title:  ['Where the work was made.', 'איפה העבודות נעשו.'],
    blocks: [
      ['timeline'],
      ['tools']
    ]
  },
  {
    id: 'contact',
    kicker: ['07 · Next', '07 · הלאה'],
    title:  ['Tell me what you’re building.', 'ספרו לי מה אתם בונים.'],
    blocks: [
      ['lead', ['What it is and who it’s for. That’s enough for a first conversation.',
                'מה זה ובשביל מי. זה מספיק בשביל שיחה ראשונה.']],
      ['contact']
    ]
  }
];

C.stats = [
  { k: ['~5M', '~5M'],       v: ['users onboarded during LaLiga & Paris 2024', 'משתמשים שנקלטו במהלך לה־ליגה ופריז 2024'] },
  { k: ['40', '40'],         v: ['countries at CannaTech 2018 in Tel Aviv', 'מדינות ב־CannaTech 2018 בתל אביב'] },
  { k: ['12', '12'],         v: ['museums unified into one national platform', 'מוזיאונים שאוחדו לפלטפורמה לאומית אחת'] },
  { k: ['10 yrs', '10 שנים'], v: ['across print, motion and product', 'בין דפוס, מוֹשן ומוצר'] }
];

/* ---------------------------------------------------------
   Career - straight from the CV
   --------------------------------------------------------- */
C.timeline = [
  { years: '2025 – 2026',
    role:  ['Marketing designer & automation', 'מעצב גרפי ואוטומציה שיווקית'],
    org:   'Tamnoon',
    body:  ['Ongoing social content and design for Instagram and Facebook, kept consistent as a brand rather than a feed. Produced social video and promotional pieces for a national LED screen network across every company branch. Built AI-assisted pipelines for content production - copy libraries, product imagery, campaign assets - and translated business needs into autonomous technical systems using AI tools and scripting.',
            'תוכן שיווקי שוטף ועיצוב לאינסטגרם ולפייסבוק, בשמירה על עקביות מותגית ולא רק על פיד. הפקת סרטוני סושיאל ומבצעים לרשת מסכי LED ארצית בכלל סניפי החברה. פיתוח תהליכי עבודה מבוססי AI להפקת תוכן - ספרי קופי, תמונות מוצר ונכסי קמפיין - ותרגום צרכים עסקיים למערכות טכניות עצמאיות באמצעות כלי AI וכתיבת סקריפטים.'] },
  { years: '2020 – 2025',
    role:  ['UX/UI & graphic design', 'UX/UI ועיצוב גרפי'],
    org:   'T.K Open Systems',
    body:  ['Supported international B2B and B2C SaaS clients including Catch Media and Play Anywhere: management and investor decks in English, sales video, product design, and the architecture and upkeep of design systems that held visual consistency across the whole product. Daily English with clients and teams, close work with stakeholders and product managers, design hand-off to development and UI QA.',
            'ליווי לקוחות SaaS בינלאומיים ב־B2B וב־B2C, ובהם Catch Media ו־Play Anywhere: מצגות הנהלה ומשקיעים באנגלית, סרטוני מכירה, עיצוב מוצר, וארכיטקטורה ותחזוקה של מערכות עיצוב ששמרו על עקביות חזותית בכלל המוצר. אנגלית יומיומית מול לקוחות וצוותים, עבודה צמודה מול בעלי עניין ומנהלי מוצר, העברת עיצוב לפיתוח וביקורת איכות ממשק.'] },
  { years: '2018 – 2019',
    role:  ['UX Design', 'עיצוב UX'],
    org:   'IKAN MAAS',
    body:  ['Mainly UX design for the Israeli Ministry of Defense - the Museums Unit and the Families and Commemoration Division - the IDF History Museums platform among them. Alongside that, graphic work in video, branding and print production.',
            'בעיקר עיצוב UX עבור משרד הביטחון - יחידת המוזיאונים ואגף משפחות והנצחה - ובהן פלטפורמת מוזיאוני מורשת צה״ל. לצד זה, עבודות גרפיות של וידאו, מיתוג והוצאה לדפוס.'] },
  { years: '2016 – 2018',
    role:  ['Graphic Designer & Illustrator', 'מעצב גרפי ומאייר'],
    org:   'Studio Gur',
    body:  ['Graphic language and exhibition materials for international conferences, CannaTech 2018 among them - roughly 700 participants from nearly 40 countries - from concept boards through to the interior visual language of the venue. Ran the full print production chain: files, press liaison, materials, proofs, ongoing work with small and large businesses.',
            'פיתוח שפה גרפית ועיצוב חומרי תערוכות לכנסים בינלאומיים, ובהם CannaTech 2018 - כ־700 משתתפים מכ־40 מדינות - מהצעת קונספטים ועד התאמת השפה החזותית לכלל עיצוב הפנים של הכנס. ניהול מלא של שרשרת הדפוס: קבצים, עבודה מול בתי דפוס, בחירת חומרים, בדיקת פרוּפים, עבודה שוטפת מול בתי עסק קטנים וגדולים.'] },
  { years: '-',
    role:  ['Visual Communication', 'תקשורת חזותית'],
    org:   ['Prog College', 'מכללת פרוג'],
    edu:   true,
    body:  ['', ''] }
];

C.tools = [
  { g: ['Graphic design', 'עיצוב גרפי'],        i: ['Photoshop', 'Illustrator', 'InDesign'] },
  { g: ['Video & motion', 'וידאו ומוֹשן'],       i: ['After Effects', ['editing', 'עריכה'], ['motion graphics', 'מוֹשן גרפיקס'], ['end-to-end production', 'הפקה מקצה לקצה']] },
  { g: ['Digital platforms', 'פלטפורמות דיגיטליות'], i: ['WordPress', 'Webflow', 'Wix'] },
  { g: ['Decks & office', 'מצגות ומשרד'],        i: ['PowerPoint', 'Microsoft Office', ['management & sales decks', 'מצגות הנהלה ומכירה']] },
  { g: ['Social', 'סושיאל'],                    i: ['Instagram', 'Facebook', ['daily content & paid', 'תוכן יומיומי וממומן']] },
  { g: ['AI', 'בינה מלאכותית'],                  i: [['design pipelines', 'תהליכי עיצוב'], ['narrative development', 'פיתוח נרטיב'], ['video scripting', 'תסריטים לווידאו']] },
  { g: ['English', 'אנגלית'],                    i: [['high level, daily with international clients', 'רמה גבוהה, יומיומית מול לקוחות בינלאומיים']] }
];

C.contact = {
  email: 'natanuxi@gmail.com',
  phone: '+972548161055',
  phoneLabel: '054-816-1055',
  closing: ['I’m looking for people and companies that inspire me. The fastest route is a direct email.',
            'תמיד שמח לפגוש אנשים וחברות שמעוררים השראה. המסלול המהיר - מייל ישיר.']
};

/* ---------------------------------------------------------
   Motion reels
   --------------------------------------------------------- */
C.reels = [
  { id: 'uOfxp4QjeDw', t: ['Play Anywhere - the Interactive Era', 'Play Anywhere - העידן האינטראקטיבי'], big: true },
  { id: '_wyXLHOgWrE', t: ['Serie A - Next-Gen TV', 'סרייה A - טלוויזיית הדור הבא'] },
  { id: 'BdavhmpXtKs', t: ['LaLiga - Next-Gen TV', 'לה־ליגה - טלוויזיית הדור הבא'] },
  { id: 'eesNwZIqvaY', t: ['ATP Interactive - Next-Gen TV', 'ATP אינטראקטיבי - טלוויזיית הדור הבא'] },
  { id: '4lMR2b6lBsY', t: ['MARS × LaLiga', 'MARS × לה־ליגה'] },
  { id: 'NmoocJ9bMnM', t: ['NFL - Play Anywhere app', 'NFL - אפליקציית Play Anywhere'] },
  { id: 'TbCY6WSZ8O8', t: ['beIN - club membership tier game', 'beIN - משחק דרגות מועדון'] },
  { id: 'pTFTyPbNhrc', t: ['Platform overview', 'סקירת הפלטפורמה'] },
  { id: '_XD3Zwpnuak', t: ['Play Anywhere × EaseLive', 'Play Anywhere × EaseLive'] },
  { id: 'Hq7ZjReviGY', t: ['Login & gameplay - UX draft', 'התחברות ומשחקיוּת - טיוטת UX'] }
];

C.projects = {};

C.projects['play-anywhere'] = {
  meta: ['T.K Open Systems · 2020–2025', 'T.K Open Systems · 2020–2025'],
  cover: IMG + 'Artboard-–-2.png',
  kicker: ['Product design · live broadcast', 'עיצוב מוצר · שידור חי'],
  title: ['Play Anywhere', 'Play Anywhere'],
  blurb: ['We turned live sport into a transactional experience - real-time data, betting, and shopping inside the broadcast itself.',
          'הפכנו ספורט חי לחוויה טרנזקציונית - נתונים בזמן אמת, הימורים וקנייה, בתוך השידור עצמו.'],
  role: ['Product Design Lead · User Research · Visual Direction', 'ראש עיצוב מוצר · מחקר משתמשים · ניהול חזותי'],
  blocks: [
    ['video', 'uOfxp4QjeDw'],
    ['h2', ['Overview', 'סקירה']],
    ['p', ['<b>Play Anywhere</b> is a technological ecosystem built to transform passive sports viewing into an interactive, real-time experience. It lets fans bet, shop and engage with data directly inside the live broadcast.',
           '<b>Play Anywhere</b> היא אקוסיסטם טכנולוגי שנבנה כדי להפוך צפייה פסיבית בספורט לחוויה אינטראקטיבית בזמן אמת. היא מאפשרת לאוהדים להמר, לקנות ולהתעסק בנתונים ישירות בתוך השידור החי.']],
    ['p', ['Over the course of the project I was responsible for user research and the first usability testing, for building dynamic design systems, and for marketing and branding. The product has been live for almost five years, running across multiple platforms worldwide.',
           'לאורך הפרויקט הייתי אחראי על מחקר המשתמשים ועל בדיקות השימושיות הראשונות, על בניית מערכות עיצוב דינמיות, ועל שיווק ומיתוג. המוצר חי כבר כמעט חמש שנים, ופועל בפלטפורמות רבות ברחבי העולם.']],
    ['img', IMG + 'Rectangle-416.jpg'],
    ['h1', ['The Challenge', 'האתגר']],
    ['h2', ['The war on attention in a noisy environment', 'המלחמה על תשומת הלב בסביבה רועשת']],
    ['p', ['Play Anywhere delivers interactive experiences during live sports broadcasts - connecting real-time data to game moments with advertising opportunities, trivia and fan engagement.',
           'Play Anywhere מספקת חוויות אינטראקטיביות במהלך שידורי ספורט חיים - מחברת נתונים בזמן אמת לרגעי משחק, יחד עם הזדמנויות פרסום, טריוויה ומעורבות אוהדים.']],
    ['p', ['In a live broadcast the user’s most precious resource is <b>time</b>. The viewer is laser-focused on one mission: watching their team score. In those moments the fan is at <b>maximum cognitive load</b>:',
           'בשידור חי המשאב היקר ביותר של המשתמש הוא <b>זמן</b>. הצופה ממוקד במשימה אחת: לראות את הקבוצה שלו כובשת. ברגעים האלה האוהד נמצא ב<b>עומס קוגניטיבי מרבי</b>:']],
    ['ul', [['<b>Tunnel vision</b> - intense focus on the action, ignoring anything outside the focal point.',
             '<b>External load</b> - a sensory bombardment of visuals and audio from the broadcast.',
             '<b>Time pressure</b> - the need to react instantly to live events.'],
            ['<b>ראיית מנהרה</b> - ריכוז עז בפעולה, והתעלמות מכל מה שמחוץ לנקודת המיקוד.',
             '<b>עומס חיצוני</b> - הפצצה חושית של תמונה וקול מהשידור.',
             '<b>לחץ זמן</b> - הצורך להגיב מיידית לאירועים חיים.']]],
    ['h2', ['The goal', 'המטרה']],
    ['p', ['To design a system that invites participation without being intrusive - placing calls to action at emotional touchpoints that respect the viewer’s focus on the game.',
           'לעצב מערכת שמזמינה השתתפות בלי להיות פולשנית - ולמקם קריאות לפעולה בנקודות מגע רגשיות שמכבדות את הריכוז של הצופה במשחק.']],
    ['img', IMG + 'nhl-stats.jpg'],
    ['h1', ['Research & Insights', 'מחקר ותובנות']],
    ['p', ['The first proof of concept was tested with <b>Turner Sports</b>, one of the largest sports broadcasting networks in the U.S. Viewers were invited to a website to predict live game outcomes during commercial breaks, with a prize for a correct guess.',
           'הוכחת ההיתכנות הראשונה נבדקה עם <b>Turner Sports</b>, אחת מרשתות שידורי הספורט הגדולות בארה״ב. הצופים הוזמנו לאתר כדי לנחש תוצאות משחק חי בהפסקות הפרסומות, עם פרס לניחוש נכון.']],
    ['p', ['The response was overwhelming - the servers crashed under the load of simultaneous requests. That failure was the idea: a scalable, user-friendly platform connecting live moments, interactivity and commercial engagement in real time.',
           'התגובה הייתה מוחצת - השרתים קרסו תחת עומס הבקשות הבו־זמניות. הכישלון הזה היה הרעיון: פלטפורמה מדרגית וידידותית שמחברת רגעים חיים, אינטראקטיביות ומעורבות מסחרית בזמן אמת.']],
    ['p', ['Our research focused on three questions:', 'המחקר שלנו התמקד בשלוש שאלות:']],
    ['ul', [['Who are our users? - market segmentation and audience understanding.',
             'What are they looking for? - value-driven solutions.',
             'How do we make them love using the platform? - emotional engagement and usability.'],
            ['מי המשתמשים שלנו? - פילוח שוק והבנת קהל.',
             'מה הם מחפשים? - פתרונות מונעי ערך.',
             'איך גורמים להם לאהוב את הפלטפורמה? - מעורבות רגשית ושימושיות.']]],
    ['p', ['To answer them we ran extensive user interviews, surveys and competitor analysis across different sports audiences.',
           'כדי לענות עליהן ערכנו ראיונות עומק, סקרים וניתוח מתחרים מקיף על פני קהלי ספורט שונים.']],
    ['video', 'Hq7ZjReviGY'],
    ['note', ['<b><i>Prototype for user testing:</i></b> <i>a UI prototype for an Apple TV application, showing possible interface behaviour against planned features.</i>',
              '<b><i>אב־טיפוס לבדיקות משתמשים:</i></b> <i>אב־טיפוס ממשק לאפליקציית Apple TV, שמדגים התנהגות ממשק אפשרית מול הפיצ׳רים המתוכננים.</i>']],
    ['h1', ['Key learnings & UX decisions', 'תובנות מפתח והחלטות UX']],
    ['h2', ['1. Game stats as engagement drivers', '1. סטטיסטיקות משחק כמנוע מעורבות']],
    ['p', ['We discovered users were drawn to real-time game stats more than to any other feature. They kept returning to screens showing team and player insights.',
           'גילינו שמשתמשים נמשכים לסטטיסטיקות בזמן אמת יותר מאשר לכל פיצ׳ר אחר. הם חזרו שוב ושוב למסכים עם נתוני קבוצות ושחקנים.']],
    ['p', ['We used that: interactive ad placements and merchandise offers were linked directly inside those screens - leading users to buy fan gear tied to their favourite team or player.',
           'ניצלנו את זה: מיקומי פרסום אינטראקטיביים והצעות מרצ׳נדייז שולבו ישירות בתוך המסכים האלה - והובילו משתמשים לקנות ציוד אוהדים של הקבוצה או השחקן שלהם.']],
    ['img', IMG + 'Nhl-TV.jpg'],
    ['h2', ['2. Timing user actions with emotion', '2. תזמון פעולות לפי רגש']],
    ['p', ['Behavioural research showed users were most willing to engage right after a positive emotional moment - a goal, a touchdown, a major play.',
           'מחקר התנהגותי הראה שמשתמשים מוכנים להיענות בעיקר מיד אחרי רגע רגשי חיובי - שער, טאצ׳דאון, מהלך גדול.']],
    ['p', ['So we designed post-highlight rating prompts, asking users to rate what they just saw. Ratings rewarded them with watch points, redeemable in season-end giveaways - building both excitement and loyalty.',
           'לכן עיצבנו בקשות דירוג אחרי הדגשים, שביקשו מהמשתמשים לדרג את מה שראו הרגע. הדירוג זיכה אותם בנקודות צפייה, שניתן לממש בהגרלות סוף עונה - ובנה גם התרגשות וגם נאמנות.']],
    ['p', ['In a moving video environment users suffer from <b>change blindness</b>. To counter it we used purposeful <b>motion design</b> to create a “motion signal”. Human biology is hardwired to detect sudden movement in the periphery - a survival instinct we leveraged for UX.',
           'בסביבת וידאו נעה משתמשים סובלים מ<b>עיוורון לשינוי</b>. כדי להתמודד עם זה השתמשנו ב<b>מוֹשן דיזיין</b> מכוון כדי ליצור ״אות תנועה״. הביולוגיה האנושית מחווטת לזהות תנועה פתאומית בשדה ההיקפי - אינסטינקט הישרדות שרתמנו לטובת ה־UX.']],
    ['img', IMG + 'nba-bets.jpg'],
    ['h2', ['3. Simplifying the betting experience', '3. פישוט חוויית ההימור']],
    ['p', ['Our studies found the digital betting market was losing users to long onboarding and confusing terminology. We simplified both the language and the interaction flow:',
           'המחקרים שלנו מצאו ששוק ההימורים הדיגיטלי מאבד משתמשים בגלל תהליכי הצטרפות ארוכים ומינוח מבלבל. פישטנו גם את השפה וגם את זרימת האינטראקציה:']],
    ['ul', [['Replaced jargon such as “Moneyline” with a natural question: “Who do you think will win this game?”',
             'Simplified odds from “+110 / −110” to a human-readable “<b>Bet $10 to win $100</b>”.'],
            ['החלפנו ז׳רגון כמו ״Moneyline״ בשאלה טבעית: ״מי לדעתך ינצח במשחק הזה?״',
             'פישטנו יחסים מ־״110+ / 110−״ לניסוח אנושי: ״<b>הימור של 10$ לזכייה של 100$</b>״.']]],
    ['p', ['We also introduced a risk-free trial mode: users could “place” a prediction without real money, then see a message showing how much they would have earned had they registered. It built curiosity, emotional investment, and eventual conversion.',
           'בנוסף הכנסנו מצב ניסיון נטול סיכון: משתמשים יכלו ״להניח״ ניחוש בלי כסף אמיתי, ואז לקבל הודעה שמראה כמה היו מרוויחים לו נרשמו. זה בנה סקרנות, השקעה רגשית - ובסוף המרה.']],
    ['img', IMG + 'atp-shop.jpg'],
    ['h2', ['4. Seamless commerce integration', '4. שילוב מסחר חלק']],
    ['p', ['During games we designed a “Quick Buy” feature that linked merchandise directly to on-screen player moments. When a player scored or made a highlight play, viewers could scan an on-screen QR code and instantly buy that player’s exclusive gear - connecting fan excitement to purchase behaviour.',
           'במהלך המשחקים עיצבנו פיצ׳ר ״Quick Buy״ שקישר מרצ׳נדייז ישירות לרגעי שחקן על המסך. כששחקן כבש או ביצע מהלך מרשים, הצופים יכלו לסרוק קוד QR ולקנות מיד את הציוד הבלעדי שלו - חיבור ישיר בין ההתרגשות לרכישה.']],
    ['img', IMG + 'design-system.jpg'],
    ['h2', ['5. Adaptive design systems', '5. מערכות עיצוב מסתגלות']],
    ['p', ['Each league - from the NBA to LaLiga - had its own visual identity. To support multiple clients we built modular design systems that allowed rapid re-theming of brand, typography and colour without reworking the core UX. That scalability made Play Anywhere visually flexible and consistent across sports ecosystems.',
           'לכל ליגה - מה־NBA ועד לה־ליגה - הייתה זהות חזותית משלה. כדי לתמוך בלקוחות מרובים בנינו מערכות עיצוב מודולריות שאפשרו החלפת ערכת מותג, טיפוגרפיה וצבע במהירות, בלי לגעת בליבת ה־UX. המדרגיות הזו הפכה את Play Anywhere לגמישה ועקבית חזותית בכל אקוסיסטם ספורט.']],
    ['img', IMG + 'olympics.jpg'],
    ['h1', ['Design highlights', 'הדגשים עיצוביים']],
    ['h2', ['Motion as guidance', 'מוֹשן כהכוונה']],
    ['p', ['In live-broadcast interfaces, especially on TV and desktop, screens are constantly in motion and competing for attention. We mapped attention patterns across game moments and used strong, purposeful animation to draw focus to key messages without feeling intrusive. Motion became a visual language - subtle enough to blend into the broadcast, clear enough to guide action.',
           'בממשקי שידור חי, במיוחד בטלוויזיה ובדסקטופ, המסכים בתנועה מתמדת ומתחרים על תשומת הלב. מיפינו דפוסי קשב לאורך רגעי המשחק, והשתמשנו באנימציה חזקה וממוקדת כדי למשוך מיקוד למסרים מרכזיים בלי להרגיש פולשניים. המוֹשן הפך לשפה חזותית - עדין מספיק כדי להשתלב בשידור, ברור מספיק כדי להוביל לפעולה.']],
    ['h2', ['Progressive disclosure', 'חשיפה הדרגתית']],
    ['p', ['To reduce friction and errors in betting flows we adopted progressive disclosure. Instead of overwhelming users with everything at once, we broke the process into smaller, digestible steps - each reinforcing understanding and commitment. It improved usability and raised conversion by creating a sense of gradual investment and control.',
           'כדי להפחית חיכוך וטעויות בזרימות ההימור אימצנו חשיפה הדרגתית. במקום להציף את המשתמשים בהכול בבת אחת, פירקנו את התהליך לצעדים קטנים וברי־עיכול - כשכל צעד מחזק הבנה ומחויבות. זה שיפר שימושיות והעלה המרות, דרך תחושה של השקעה מדורגת ושליטה.']],
    ['img', IMG + 'Laliga-Screen.jpg'],
    ['h1', ['Impact', 'השפעה']],
    ['p', ['The system’s ability to manage human attention was proven at the highest level of global sport:',
           'היכולת של המערכת לנהל תשומת לב אנושית הוכחה ברמה הגבוהה ביותר של הספורט העולמי:']],
    ['ul', [['<b>LaLiga partnership</b> - integrated with the Spanish league, delivering real-time data and engagement to millions of football fans worldwide.',
             '<b>Paris 2024 Olympics</b> - Play Anywhere served as the official supplementary experience for Olympic broadcasts across Europe, letting users track stats and follow multiple disciplines at once.',
             '<b>Unprecedented scale</b> - during those events the system onboarded and served roughly <b>5 million new users</b>, holding high performance and zero-latency interaction under extreme traffic.'],
            ['<b>שותפות לה־ליגה</b> - שולבה בליגה הספרדית, ומספקת נתונים ומעורבות בזמן אמת למיליוני אוהדי כדורגל בעולם.',
             '<b>אולימפיאדת פריז 2024</b> - Play Anywhere שימשה כחוויה המשלימה הרשמית לשידורים האולימפיים ברחבי אירופה, ואפשרה למשתמשים לעקוב אחר נתונים ואחר כמה ענפים בו־זמנית.',
             '<b>קנה מידה חסר תקדים</b> - במהלך האירועים האלה המערכת קלטה ושירתה כ<b>־5 מיליון משתמשים חדשים</b>, תוך שמירה על ביצועים גבוהים ואינטראקציה ללא השהיה, תחת עומסי תעבורה קיצוניים.']]],
    ['p', ['Personally, this project was a deep learning journey in real-time UX, cross-platform systems, and designing for human attention in high-stimulus environments.',
           'עבורי, הפרויקט הזה היה מסע למידה עמוק ב־UX בזמן אמת, במערכות חוצות־פלטפורמות, ובעיצוב לתשומת לב אנושית בסביבות רוויות גירוי.']],
    ['video', 'eesNwZIqvaY'],
    ['note', ['<b><i>An explanatory video of the final product released to ATP users</i></b><i>, summarising the expected user experience ahead of the new tennis season.</i>',
              '<b><i>סרטון הסבר של המוצר הסופי שהופץ למשתמשי ATP</i></b><i>, שמסכם את חוויית המשתמש הצפויה לקראת עונת הטניס החדשה.</i>']]
  ]
};

C.projects['admin-system'] = {
  meta: ['T.K Open Systems · 2020–2025', 'T.K Open Systems · 2020–2025'],
  cover: IMG + 'Admin.png',
  kicker: ['Product design · internal tools', 'עיצוב מוצר · כלים פנימיים'],
  title: ['Admin System', 'מערכת ניהול'],
  blurb: ['The backbone behind Play Anywhere: a flexible interface for a data model that was still being invented.',
          'עמוד השדרה של Play Anywhere: ממשק גמיש למודל נתונים שעדיין היה בהמצאה.'],
  role: ['Product Design Lead · User Research', 'ראש עיצוב מוצר · מחקר משתמשים'],
  blocks: [
    ['h2', ['Overview', 'סקירה']],
    ['p', ['The Admin System was an internal product built for our product managers and development leads - a simple, intuitive way to manage the massive database behind Play Anywhere.',
           'מערכת הניהול הייתה מוצר פנימי שנבנה עבור מנהלי המוצר וראשי הפיתוח שלנו - דרך פשוטה ואינטואיטיבית לנהל את מסד הנתונים העצום שמאחורי Play Anywhere.']],
    ['p', ['From editing player and league data to fixing inconsistencies arriving from external feeds, the system became the backbone of Play Anywhere’s live ecosystem. I was lead product designer, working on it a few months before the platform itself entered production.',
           'מעריכת נתוני שחקנים וליגות ועד תיקון אי־התאמות שהגיעו מפידים חיצוניים, המערכת הפכה לעמוד השדרה של האקוסיסטם החי של Play Anywhere. שימשתי כמעצב המוצר הראשי, ועבדתי עליה כמה חודשים לפני שהפלטפורמה עצמה נכנסה לייצור.']],
    ['img', IMG + 'cover.jpg'],
    ['h1', ['The Challenge', 'האתגר']],
    ['p', ['Unlike typical admin dashboards that manage pre-defined data structures, we were designing for a dynamic, evolving ecosystem. At that stage the Play Anywhere data model was still being defined. The interface had to be flexible enough to:',
           'בניגוד לדשבורדים ניהוליים רגילים שמנהלים מבני נתונים מוגדרים מראש, אנחנו עיצבנו לאקוסיסטם דינמי ומתפתח. בשלב ההוא מודל הנתונים של Play Anywhere עדיין הוגדר. הממשק היה צריך להיות גמיש מספיק כדי:']],
    ['ul', [['adapt to new data types and hierarchies,', 'handle real-time changes, and', 'scale alongside the official product - without a complete redesign.'],
            ['להסתגל לסוגי נתונים והיררכיות חדשות,', 'להתמודד עם שינויים בזמן אמת,', 'ולגדול יחד עם המוצר הרשמי - בלי עיצוב מחדש מלא.']]],
    ['p', ['By understanding the user needs of the front-facing product, I could propose a design architecture that anticipated many of the database and usability issues before they appeared.',
           'מתוך הבנה של צורכי המשתמשים במוצר הפונה־החוצה, יכולתי להציע ארכיטקטורת עיצוב שצפתה מראש הרבה מבעיות מסד הנתונים והשימושיות עוד לפני שהופיעו.']],
    ['img', IMG + 'admin-final2.jpg'],
    ['h1', ['The Context', 'ההקשר']],
    ['p', ['While running early-stage research for the main platform, we realised we would need a dedicated administrative system to manage the expanding database. The Admin System was born directly out of that research.',
           'תוך כדי מחקר בשלב מוקדם עבור הפלטפורמה הראשית, הבנו שנצטרך מערכת ניהול ייעודית לניהול מסד הנתונים המתרחב. מערכת הניהול נולדה ישירות מתוך המחקר הזה.']],
    ['p', ['Every time we defined a new feature or data requirement for the main app, we mapped its administrative implications - how it would need to be created, updated or monitored on the backend. That led to a parallel process of discovery → conceptual iteration → internal user testing with the intended users: our own product and development teams.',
           'בכל פעם שהגדרנו פיצ׳ר חדש או דרישת נתונים לאפליקציה הראשית, מיפינו את ההשלכות הניהוליות שלו - איך הוא ייווצר, יתעדכן וינוטר בצד השרת. זה יצר תהליך מקביל של גילוי ← איטרציה קונספטואלית ← בדיקות משתמשים פנימיות עם המשתמשים המיועדים: צוותי המוצר והפיתוח שלנו.']],
    ['img', IMG + 'admin-tree.jpg'],
    ['h1', ['Key UX decisions', 'החלטות UX מרכזיות']],
    ['h2', ['1. Defining the right data architecture', '1. הגדרת ארכיטקטורת הנתונים הנכונה']],
    ['p', ['Since the platform was being developed around major sports experiences, we identified a universal hierarchy across most leagues and sports: <b>League / Tournament → Teams → Players</b>.',
           'מכיוון שהפלטפורמה נבנתה סביב חוויות ספורט גדולות, זיהינו היררכיה אוניברסלית שחוזרת ברוב הליגות והענפים: <b>ליגה / טורניר ← קבוצות ← שחקנים</b>.']],
    ['p', ['That became our core relational model. We then expanded it to include betting parameters, odds management and event data - all mapped directly onto the same hierarchy.',
           'זה הפך למודל היחסים המרכזי שלנו. אחר כך הרחבנו אותו לפרמטרי הימור, ניהול יחסים ונתוני אירועים - כולם ממופים ישירות לאותה היררכיה.']],
    ['img', IMG + 'admin-wireframes.jpg'],
    ['img', IMG + 'admin-quoaritine.jpg'],
    ['h2', ['2. The data quarantine', '2. הסגר נתונים']],
    ['p', ['Because much of our data came from third-party feeds, mismatches happened constantly - a new player name that didn’t align with our schema, for example.',
           'מכיוון שחלק גדול מהנתונים הגיע מפידים של צד שלישי, אי־התאמות קרו כל הזמן - שם שחקן חדש שלא מתיישב עם הסכמה שלנו, למשל.']],
    ['p', ['We designed a “Data Quarantine”: every incoming item that failed to map was automatically isolated and flagged. Admins could open the quarantine view, manually match the record to the correct schema, and revalidate it. This prevented corruption and gave data managers full visibility into the system’s integrity.',
           'עיצבנו ״הסגר נתונים״: כל פריט נכנס שלא הצליח להתמפות בודד וסומן אוטומטית. מנהלים יכלו לפתוח את תצוגת ההסגר, להתאים ידנית את הרשומה לסכמה הנכונה, ולאמת אותה מחדש. זה מנע השחתה של המסד ונתן למנהלי הנתונים נראוּת מלאה על תקינות המערכת.']],
    ['img', IMG + 'admin-quoaritine2.jpg'],
    ['h2', ['3. Manual record creation & editing', '3. יצירה ועריכה ידנית של רשומות']],
    ['p', ['We designed an intuitive flow for adding and editing records manually - a new team, player or match. Each hierarchical level had its own form, pre-populated with logical defaults to reduce entry errors. Admins could also make corrections and trigger syncs with external sources in real time, all from the same interface.',
           'עיצבנו זרימה אינטואיטיבית להוספה ועריכה ידנית של רשומות - קבוצה, שחקן או משחק חדשים. לכל רמה בהיררכיה היה טופס משלה, עם ברירות מחדל הגיוניות שממלאות מראש ומפחיתות שגיאות הזנה. מנהלים יכלו גם לבצע תיקונים ולהפעיל סנכרון עם מקורות חיצוניים בזמן אמת, הכול מאותו ממשק.']],
    ['img', IMG + 'admin-mockups.jpg'],
    ['img', IMG + 'admin-calendar.jpg'],
    ['h2', ['4. Match calendar & timeline builder', '4. לוח משחקים ובונה ציר זמן']],
    ['p', ['Two features internal users asked for: a league-wide calendar of upcoming matches, and a timeline editor for defining event triggers inside each match.',
           'שני פיצ׳רים שהמשתמשים הפנימיים ביקשו: לוח שנה ברמת הליגה עם כל המשחקים הקרובים, ועורך ציר זמן להגדרת טריגרים של אירועים בתוך כל משחק.']],
    ['p', ['The timeline editor let product managers define precise event points - down to the second - specifying what type of message or notification to trigger and when, based on the sport’s rhythm, pauses and structure. That ensured fan-engagement bets and messages appeared at emotionally relevant moments, enhancing rather than disrupting the viewing experience.',
           'עורך ציר הזמן אפשר למנהלי המוצר להגדיר נקודות אירוע מדויקות - עד רמת השנייה - ולציין איזה סוג הודעה או התראה יופעל ומתי, בהתאם לקצב הענף, להפסקות ולמבנה שלו. כך הימורים והודעות למעורבות אוהדים הופיעו ברגעים רלוונטיים רגשית, ושיפרו את חוויית הצפייה במקום להפריע לה.']],
    ['img', IMG + 'admin-research.jpg'],
    ['img', IMG + 'admin-timeline.jpg'],
    ['h1', ['Design process', 'תהליך העיצוב']],
    ['p', ['The design evolved through short, iterative cycles:', 'העיצוב התפתח במחזורים קצרים ואיטרטיביים:']],
    ['ul', [['<b>Discovery</b> - identifying operational pain points with internal users.',
             '<b>Conceptual design</b> - prototyping flexible data models and layouts.',
             '<b>Validation</b> - testing prototypes directly with dev leads and data managers.'],
            ['<b>גילוי</b> - זיהוי נקודות כאב תפעוליות מול המשתמשים הפנימיים.',
             '<b>עיצוב קונספטואלי</b> - אב־טיפוס למודלי נתונים ופריסות גמישות.',
             '<b>אימות</b> - בדיקת אבות־טיפוס ישירות מול ראשי פיתוח ומנהלי נתונים.']]],
    ['p', ['Each iteration improved usability and clarity - replacing complex database operations with clear, human-readable interactions.',
           'כל איטרציה שיפרה שימושיות ובהירות - והחליפה פעולות מסד נתונים מורכבות באינטראקציות ברורות וקריאות לבני אדם.']],
    ['img', IMG + 'admin-final1.jpg'],
    ['h1', ['Impact', 'השפעה']],
    ['p', ['The Admin System became the central operational hub for managing Play Anywhere’s expanding data universe. It let our internal teams:',
           'מערכת הניהול הפכה למרכז התפעולי לניהול יקום הנתונים המתרחב של Play Anywhere. היא אפשרה לצוותים הפנימיים שלנו:']],
    ['ul', [['onboard new leagues and sports in hours,', 'maintain consistent data integrity, and', 'respond instantly to live game updates without developer intervention.'],
            ['לקלוט ליגות וענפי ספורט חדשים בתוך שעות,', 'לשמור על תקינות נתונים עקבית,', 'ולהגיב מיידית לעדכוני משחק חי בלי מעורבות מפתחים.']]],
    ['p', ['For me it was a chance to design for internal users - turning a purely technical challenge into a human-centred product that let teams work faster, smarter, and with fewer errors.',
           'מבחינתי זו הייתה הזדמנות לעצב עבור משתמשים פנימיים - ולהפוך אתגר טכני נטו למוצר ממוקד־אדם, שאיפשר לצוותים לעבוד מהר יותר, חכם יותר, ועם פחות טעויות.']]
  ]
};

C.projects['cm-analytics'] = {
  meta: ['T.K Open Systems · 2020–2025', 'T.K Open Systems · 2020–2025'],
  cover: IMG + 'Active-Analytics.png',
  kicker: ['Product design · SaaS analytics', 'עיצוב מוצר · אנליטיקה SaaS'],
  title: ['Analytical Dashboard System', 'מערכת דשבורדים אנליטית'],
  blurb: ['Turning a technically complex analytics platform into something a campaign manager can actually run.',
          'הפיכת פלטפורמת אנליטיקה מורכבת טכנית למשהו שמנהל קמפיינים באמת יכול להפעיל.'],
  role: ['UX Researcher · Product Designer', 'חוקר UX · מעצב מוצר'],
  blocks: [
    ['h2', ['Overview', 'סקירה']],
    ['p', ['Catch Media is a startup providing user analytics and targeting services for media apps and content providers. When I joined, the company already had active clients and investors - but the product lacked a clear design language and a consistent user experience.',
           'Catch Media היא סטארט־אפ שמספק שירותי אנליטיקה ומיקוד משתמשים לאפליקציות מדיה וספקי תוכן. כשהצטרפתי, כבר היו לחברה לקוחות ומשקיעים פעילים - אבל למוצר חסרו שפה עיצובית ברורה וחוויית משתמש עקבית.']],
    ['p', ['My role was to bridge the gap between client needs and product reality: identify pain points, and turn a technically complex system into a usable, intuitive platform.',
           'התפקיד שלי היה לגשר על הפער בין צורכי הלקוחות למציאות המוצר: לזהות נקודות כאב, ולהפוך מערכת מורכבת טכנית לפלטפורמה שימושית ואינטואיטיבית.']],
    ['img', IMG + 'catch-media-hero.jpg'],
    ['h1', ['Research process', 'תהליך המחקר']],
    ['p', ['We ran two kinds of research:', 'ערכנו שני סוגי מחקר:']],
    ['ul', [['<b>User interviews</b> with clients, to understand how they used the system and what frustrated them.',
             '<b>Competitive analysis</b> of other analytics tools, to identify common interaction models and visualisation patterns.'],
            ['<b>ראיונות משתמשים</b> עם לקוחות, כדי להבין איך הם משתמשים במערכת ומה מתסכל אותם.',
             '<b>ניתוח מתחרים</b> של כלי אנליטיקה אחרים, כדי לזהות מודלי אינטראקציה ודפוסי ויזואליזציה מקובלים.']]],
    ['p', ['Every time a usability issue surfaced, I followed a structured cycle: problem discovery → ideation → validation → iteration → delivery. That kept every decision grounded in real user needs and aligned with business and development priorities.',
           'בכל פעם שצפה בעיית שימושיות, פעלתי במחזור מובנה: גילוי הבעיה ← רעיונאות ← אימות ← איטרציה ← מסירה. כך כל החלטה נשארה מעוגנת בצורכי משתמשים אמיתיים ומיושרת עם סדרי העדיפויות של העסק והפיתוח.']],
    ['h1', ['Design initiatives', 'יוזמות עיצוב']],
    ['h2', ['1. Building a design system', '1. בניית מערכת עיצוב']],
    ['pair', [IMG + 'catch-media-before1.jpg', IMG + 'catch-media-before4.jpg']],
    ['p', ['When I joined, the product was built on a static HTML/CSS template developed externally years earlier. Components were visually inconsistent and disconnected from user workflows.',
           'כשהצטרפתי, המוצר נשען על תבנית HTML/CSS סטטית שפותחה חיצונית שנים קודם לכן. הרכיבים היו לא עקביים חזותית ומנותקים מזרימות העבודה של המשתמשים.']],
    ['p', ['We initiated a comprehensive design system - mapping every component, defining behaviour patterns, and aligning them with real use cases.',
           'יזמנו מערכת עיצוב מקיפה - מיפוי כל רכיב, הגדרת דפוסי התנהגות, והתאמתם למקרי שימוש אמיתיים.']],
    ['pair', [IMG + 'catch-media-after-1.jpg', IMG + 'catch-media-after4.jpg']],
    ['p', ['Working closely with the development team, we made sure it was fully implemented in the live product - the foundation for scalable, consistent UI development.',
           'בעבודה צמודה עם צוות הפיתוח, דאגנו שהיא תיושם במלואה במוצר החי - הבסיס לפיתוח ממשק מדרגי ועקבי.']],
    ['h2', ['2. Campaign creation & KPI definition', '2. יצירת קמפיין והגדרת מדדים']],
    ['img', IMG + 'catch-media-before2.jpg'],
    ['p', ['One of the most critical pain points was the campaign creation flow, used for targeting users and suggesting content across apps integrated with our SDK. Users reported confusion, unclear field meanings, and a sense that “the system doesn’t work” - caused by layout issues and misleading interface logic.',
           'אחת מנקודות הכאב הקריטיות הייתה זרימת יצירת הקמפיין, ששימשה למיקוד משתמשים והצעת תוכן באפליקציות שמשולבות ב־SDK שלנו. משתמשים דיווחו על בלבול, על שדות שמשמעותם לא ברורה, ועל תחושה ש״המערכת לא עובדת״ - שנבעה מבעיות פריסה ומהיגיון ממשק מטעה.']],
    ['img', IMG + 'catch-media-before3.jpg'],
    ['p', ['We redesigned the whole flow: applying the 20/80 rule, clarifying terminology and the hierarchy between campaign elements, and structuring the UI into logical steps with contextual help.',
           'עיצבנו מחדש את כל הזרימה: יישמנו את כלל ה־20/80, הבהרנו את המינוח ואת ההיררכיה בין מרכיבי הקמפיין, וארגנו את הממשק בצעדים הגיוניים עם עזרה הקשרית.']],
    ['img', IMG + 'catch-media-after2.jpg'],
    ['p', ['We also added success metrics (KPIs) directly into the campaign creation process, letting users define and visualise performance goals - reach, engagement, conversions - in real time.',
           'בנוסף הוספנו מדדי הצלחה (KPI) ישירות לתוך תהליך יצירת הקמפיין, כך שמשתמשים יכולים להגדיר ולראות יעדי ביצוע - חשיפה, מעורבות, המרות - בזמן אמת.']],
    ['img', IMG + 'catch-media-after3.jpg'],
    ['h2', ['3. User funnels', '3. משפכי משתמשים']],
    ['p', ['Another major initiative was the User Funnels feature - letting campaign managers define user segments based on in-app behaviour.',
           'יוזמה מרכזית נוספת הייתה פיצ׳ר משפכי המשתמשים - שאפשר למנהלי קמפיינים להגדיר פלחי משתמשים לפי התנהגות בתוך האפליקציה.']],
    ['img', IMG + 'catch-media-funnel.jpg'],
    ['p', ['For example: targeting users who watched more than 20 minutes of content, or who engaged with a specific genre. We designed a modular, flexible funnel builder that allowed visual construction of user journeys - translating complex behavioural logic into a clear, intuitive interface.',
           'לדוגמה: מיקוד משתמשים שצפו ביותר מ־20 דקות תוכן, או שהתעניינו בז׳אנר מסוים. עיצבנו בונה משפכים מודולרי וגמיש שאפשר בנייה חזותית של מסעות משתמש - ותרגם היגיון התנהגותי מורכב לממשק ברור ואינטואיטיבי.']],
    ['h2', ['Continuous UX research', 'מחקר UX מתמשך']],
    ['p', ['Alongside feature design we kept an ongoing process of continuous user testing and competitive benchmarking - reverse-engineering strong solutions from other analytics platforms and adapting them to our users’ needs.',
           'לצד עיצוב הפיצ׳רים שמרנו על תהליך מתמשך של בדיקות משתמשים והשוואה מול מתחרים - פירוק לאחור של פתרונות חזקים מפלטפורמות אנליטיקה אחרות והתאמתם לצורכי המשתמשים שלנו.']],
    ['p', ['That improvement cycle became part of the product culture - ensuring data-driven decisions and constant alignment between product, engineering and users.',
           'מחזור השיפור הזה הפך לחלק מתרבות המוצר - והבטיח החלטות מבוססות נתונים ויישור קו מתמיד בין מוצר, הנדסה ומשתמשים.']]
  ]
};

C.projects['idf-museums'] = {
  meta: ['IKAN MAAS · 2018–2019', 'IKAN MAAS · 2018–2019'],
  cover: IMG + 'Layer-2.png',
  kicker: ['UX · Israeli Ministry of Defense', 'UX · משרד הביטחון'],
  title: ['IDF History Museums', 'מוזיאוני מורשת צה״ל'],
  blurb: ['Twelve independent museums, one national narrative - and one digital front door.',
          'שנים־עשר מוזיאונים עצמאיים, נרטיב לאומי אחד - ודלת כניסה דיגיטלית אחת.'],
  role: ['User Research · User Experience Lead', 'מחקר משתמשים · ראש חוויית משתמש'],
  blocks: [
    ['h2', ['Overview', 'סקירה']],
    ['p', ['Before the State of Israel was established, many underground movements operated to protect the Jewish people. Each had its own story, mission and heroes - and after 1948 those stories were told through separate museums across the country.',
           'לפני קום מדינת ישראל פעלו מחתרות רבות כדי להגן על העם היהודי. לכל אחת היו סיפור, ייעוד וגיבורים משלה - ואחרי 1948 הסיפורים האלה סופרו דרך מוזיאונים נפרדים ברחבי הארץ.']],
    ['p', ['Over time the Ministry of Defense recognised the need to unify these independent institutions into one coherent narrative, creating the Museums Unit. The goal: to tell the shared story of courage, unity and sacrifice that led to the formation of the IDF.',
           'עם השנים זיהה משרד הביטחון את הצורך לאחד את המוסדות העצמאיים האלה לנרטיב אחד קוהרנטי, והקים את יחידת המוזיאונים. המטרה: לספר את הסיפור המשותף של אומץ, אחדות והקרבה שהוביל להקמת צה״ל.']],
    ['img', IMG + 'Idf-hero.jpg'],
    ['h1', ['The Challenge', 'האתגר']],
    ['p', ['Each museum operated as an independent entity with separate funding and limited visibility. Some enjoyed strong marketing support; others struggled to reach the public at all.',
           'כל מוזיאון פעל כגוף עצמאי עם תקציב נפרד ונראוּת מוגבלת. חלקם נהנו מגיבוי שיווקי חזק; אחרים התקשו להגיע לציבור בכלל.']],
    ['p', ['That imbalance diluted the collective story of Israel’s early defence forces and fragmented the visitor experience. The challenge: one unified digital platform connecting all 12 museums, preserving each story’s uniqueness while presenting a cohesive national narrative for younger audiences.',
           'חוסר האיזון הזה דילל את הסיפור הקולקטיבי של כוחות ההגנה הראשונים ופיצל את חוויית המבקר. האתגר: פלטפורמה דיגיטלית מאוחדת אחת שמחברת את כל 12 המוזיאונים, שומרת על ייחודו של כל סיפור, ומציגה נרטיב לאומי מלוכד לקהלים צעירים.']],
    ['img', IMG + 'Idf-mockup-design1.jpg'],
    ['h1', ['Research & Insights', 'מחקר ותובנות']],
    ['p', ['Through user research and visitor journey mapping we explored how people engage with historical content, and what they expect from a museum visit - both online and on site.',
           'דרך מחקר משתמשים ומיפוי מסע מבקר בחנו איך אנשים מתחברים לתוכן היסטורי, ומה הם מצפים מביקור במוזיאון - גם אונליין וגם בשטח.']],
    ['p', ['We identified the main audiences - students, soldiers, families and educators - and defined their different motivations: learning, commemoration, and national identity. Our mission was to design the first digital encounter with these stories: the online experience that sparks curiosity and inspires a visit.',
           'זיהינו את הקהלים המרכזיים - תלמידים, חיילים, משפחות ומחנכים - והגדרנו את המניעים השונים שלהם: למידה, הנצחה וזהות לאומית. המשימה שלנו הייתה לעצב את המפגש הדיגיטלי הראשון עם הסיפורים האלה: החוויה המקוונת שמציתה סקרנות ומזמינה לביקור.']],
    ['h1', ['Key solutions', 'פתרונות מרכזיים']],
    ['h2', ['1. One unit, one platform', '1. יחידה אחת, פלטפורמה אחת']],
    ['p', ['We designed a unified hub site for the entire Museums Unit - bringing all 12 museums into one accessible digital framework.',
           'עיצבנו אתר־עוגן מאוחד לכל יחידת המוזיאונים - שמכניס את כל 12 המוזיאונים למסגרת דיגיטלית אחת ונגישה.']],
    ['img', IMG + 'Idf-innersite-design.jpg'],
    ['p', ['Each museum received a dedicated sub-site, built inside a shared conceptual model and design system - allowing fast development, consistent storytelling, and equal visibility.',
           'כל מוזיאון קיבל תת־אתר ייעודי, שנבנה בתוך מודל קונספטואלי ומערכת עיצוב משותפים - מה שאפשר פיתוח מהיר, סיפור עקבי, ונראוּת שווה.']],
    ['h2', ['2. The museums map', '2. מפת המוזיאונים']],
    ['img', IMG + 'Idf-map-design.jpg'],
    ['p', ['Because the museums are spread across Israel, we created an interactive geographic map that visually connects their physical locations to the broader historical narrative. Visitors can explore, learn each museum’s unique focus, and get directions straight to the site.',
           'מכיוון שהמוזיאונים פרוסים בכל הארץ, יצרנו מפה גיאוגרפית אינטראקטיבית שמחברת חזותית בין המיקומים הפיזיים לבין הנרטיב ההיסטורי הרחב. המבקרים יכולים לחקור, ללמוד את המיקוד הייחודי של כל מוזיאון, ולקבל ניווט ישיר אליו.']],
    ['h2', ['3. Stories, events & connection', '3. סיפורים, אירועים וחיבור']],
    ['p', ['Beyond static information we added a dynamic layer of events and stories - a unified calendar of ceremonies, anniversaries and educational activities across all museums.',
           'מעבר למידע סטטי הוספנו שכבה דינמית של אירועים וסיפורים - לוח שנה מאוחד של טקסים, ימי זיכרון ופעילויות חינוכיות בכל המוזיאונים.']],
    ['img', IMG + 'Idf-calendar-design.jpg'],
    ['p', ['We also designed a monthly newsletter interface, curated by the Museums Unit, to keep audiences connected to the living history of Israel’s defence heritage.',
           'בנוסף עיצבנו ממשק ניוזלטר חודשי, באוצרות יחידת המוזיאונים, כדי לשמור על חיבור הקהלים להיסטוריה החיה של מורשת הביטחון.']],
    ['img', IMG + 'Idf-mockup-design3.jpg'],
    ['h1', ['Outcome', 'תוצאה']],
    ['p', ['The result was a digital ecosystem balancing individual identity with collective purpose - giving each museum its rightful place in the shared story of Israel’s independence and defence. For the first time, users could experience a unified narrative reflecting the cooperation and sacrifice that built the nation - both historically and in design.',
           'התוצאה הייתה אקוסיסטם דיגיטלי שמאזן בין זהות פרטנית לתכלית קולקטיבית - ונותן לכל מוזיאון את מקומו הראוי בסיפור המשותף של העצמאות וההגנה. לראשונה, משתמשים יכלו לחוות נרטיב מאוחד שמשקף את שיתוף הפעולה וההקרבה שבנו את המדינה - גם היסטורית וגם עיצובית.']],
    ['link', ['Visit the live website', 'למעבר לאתר החי'], 'https://museums.mod.gov.il/Pages/default.aspx'],
    ['img', IMG + 'Idf-mockup-design2.jpg']
  ]
};

C.projects['bdan-ux'] = {
  meta: ['Independent', 'עצמאי'],
  cover: IMG + 'bdan-hero.jpg',
  kicker: ['Brand → product → commerce', 'מותג ← מוצר ← מסחר'],
  title: ['From Branding to Online Shopping', 'ממיתוג לחנות מקוונת'],
  blurb: ['A liquor brand built from zero - research, identity, bottle, and the store that sells it.',
          'מותג משקאות שנבנה מאפס - מחקר, זהות, בקבוק, והחנות שמוכרת אותו.'],
  role: ['User Research · Brand & Graphic Design · Product Design', 'מחקר משתמשים · מיתוג ועיצוב גרפי · עיצוב מוצר'],
  blocks: [
    ['h2', ['Overview', 'סקירה']],
    ['p', ['There’s a story about a man who wanted revenge on a friend who wronged him. Instead of destroying his friend’s valuable wine collection, he quietly removed the labels from the bottles. In that single act, every rare and priceless bottle became just another drink on the shelf.',
           'יש סיפור על אדם שרצה לנקום בחבר שפגע בו. במקום להשמיד את אוסף היינות היקר של החבר, הוא פשוט הסיר בשקט את התוויות מהבקבוקים. במעשה אחד, כל בקבוק נדיר ויקר ערך הפך לעוד משקה על המדף.']],
    ['p', ['That story captures the essence of this project. Branding isn’t decoration - it’s user experience. In a market flooded with alcoholic beverages, creating a new product means creating emotional attachment. From the moment someone’s eyes meet the bottle, to the moment they open it, taste it and share it - it’s all one journey.',
           'הסיפור הזה מתמצת את מהות הפרויקט. מיתוג הוא לא קישוט - הוא חוויית משתמש. בשוק מוצף במשקאות אלכוהוליים, יצירת מוצר חדש פירושה יצירת קשר רגשי. מהרגע שבו העין פוגשת את הבקבוק, ועד לרגע שבו פותחים, טועמים ומשתפים - הכול מסע אחד.']],
    ['p', ['At Bdan Beverages I helped build a brand from the ground up. Working directly with the founder, I led user research, brand identity and product design - shaping the entire customer experience, from label to digital store.',
           'ב־Bdan Beverages עזרתי לבנות מותג מהיסוד. בעבודה ישירה עם המייסד, הובלתי את מחקר המשתמשים, את זהות המותג ואת עיצוב המוצר - ועיצבתי את כל חוויית הלקוח, מהתווית ועד החנות הדיגיטלית.']],
    ['img', IMG + 'bdan-hero.jpg'],
    ['h1', ['The Challenge', 'האתגר']],
    ['p', ['Breaking into the alcohol market is nearly impossible for small producers. Low production volumes mean higher costs, making it hard to compete on price. Our challenge was a brand strategy that bypassed traditional retail - supermarkets and liquor stores - and instead built a direct, emotional relationship with customers.',
           'פריצה לשוק האלכוהול כמעט בלתי אפשרית ליצרנים קטנים. נפחי ייצור נמוכים משמעם עלויות גבוהות, וקשה להתחרות במחיר. האתגר שלנו היה אסטרטגיית מותג שעוקפת את הקמעונאות המסורתית - סופרמרקטים וחנויות אלכוהול - ובונה במקום זאת קשר ישיר ורגשי עם הלקוחות.']],
    ['img', IMG + '1.bdan-illustrations.jpg'],
    ['h1', ['The Research', 'המחקר']],
    ['p', ['The alcohol market is saturated. To find our place we focused on three guiding questions:',
           'שוק האלכוהול רווי. כדי למצוא את מקומנו התמקדנו בשלוש שאלות מנחות:']],
    ['ul', [['What products should we lead with? - defining the right entry point.',
             'Who are our customers? - understanding audience and lifestyle.',
             'How can we stand out without competing on price?'],
            ['עם אילו מוצרים כדאי לפתוח? - הגדרת נקודת הכניסה הנכונה.',
             'מי הלקוחות שלנו? - הבנת הקהל וסגנון החיים.',
             'איך בולטים בלי להתחרות במחיר?']]],
    ['p', ['We ran taste tests, brand perception surveys and consumer interviews to understand what emotions people associate with alcohol - and how they describe a “good experience”. We also studied buying habits and contexts, from casual gatherings to celebratory moments, to find where the product naturally fits.',
           'ערכנו טעימות, סקרי תפיסת מותג וראיונות צרכנים כדי להבין אילו רגשות אנשים מקשרים לאלכוהול - ואיך הם מתארים ״חוויה טובה״. חקרנו גם הרגלי קנייה והקשרים, ממפגשים ספונטניים ועד רגעי חגיגה, כדי לאתר איפה המוצר מתיישב באופן טבעי.']],
    ['img', IMG + '2.bdan-concepts.jpg'],
    ['img', IMG + '3.bdan-mood-boards.jpg'],
    ['pair', [IMG + '4.bdan-icon.jpg', IMG + '5.bdan-logo.jpg']],
    ['h1', ['Design strategy & key insights', 'אסטרטגיית עיצוב ותובנות מפתח']],
    ['h2', ['1. Positive branding', '1. מיתוג חיובי']],
    ['p', ['Our research showed most alcohol consumption happens during happy, social moments - weekends, family dinners, celebrations, watching sport with friends. People use alcohol as a bridge to connection and self-expression.',
           'המחקר שלנו הראה שרוב צריכת האלכוהול מתרחשת ברגעים שמחים וחברתיים - סופי שבוע, ארוחות משפחתיות, חגיגות, צפייה בספורט עם חברים. אנשים משתמשים באלכוהול כגשר לחיבור ולביטוי עצמי.']],
    ['p', ['So we centred the brand on positivity, confidence and shared joy. The peacock became our symbol - a magnificent creature that knows its beauty and isn’t afraid to show it. That metaphor guided everything: palette, tone, typography and packaging language.',
           'לכן מיקדנו את המותג בחיוביות, בביטחון ובשמחה משותפת. הטווס הפך לסמל שלנו - יצור מרהיב שיודע שהוא יפה ולא מפחד להראות את זה. המטאפורה הזו הכתיבה הכול: פלטה, טון, טיפוגרפיה ושפת אריזה.']],
    ['img', IMG + '6.bdan-product-iteration.jpg'],
    ['img', IMG + '7.bdan-options.jpg'],
    ['h2', ['2. The story on the bottle', '2. הסיפור שעל הבקבוק']],
    ['p', ['From a range of possible beverages - beer, cocktails, grappa, cider - we focused on craft beer and apple cider: two approachable yet expressive drinks that let us tell a visual story through their packaging.',
           'מתוך מגוון משקאות אפשריים - בירה, קוקטיילים, גראפה, סיידר - התמקדנו בבירת מלאכה ובסיידר תפוחים: שני משקאות נגישים ובכל זאת אקספרסיביים, שאפשרו לנו לספר סיפור חזותי דרך האריזה.']],
    ['p', ['Each label was designed not just as a marker but as a story trigger - a conversation piece. We produced several label prototypes and tested them with 10 users for message clarity, shelf appeal and emotional response. Based on their feedback we refined the design to balance a handcrafted, authentic feel with a modern distinctiveness that could hold its own on a crowded shelf.',
           'כל תווית עוצבה לא רק כסימון אלא כטריגר לסיפור - פתיח לשיחה. הפקנו כמה אבות־טיפוס של תוויות ובדקנו אותן מול 10 משתמשים, לבחינת בהירות המסר, נוכחות על המדף ותגובה רגשית. על בסיס המשוב חידדנו את העיצוב כדי לאזן בין תחושה אותנטית ועבודת־יד לבין ייחוד מודרני שמחזיק מעמד על מדף עמוס.']],
    ['img', IMG + '7.bdan-ux-lo-fi.jpg'],
    ['img', IMG + '9.bdan-site-map.jpg'],
    ['h2', ['3. Digital store design', '3. עיצוב החנות הדיגיטלית']],
    ['p', ['Since we couldn’t rely on physical shelf presence, the online store became the main sales channel. We designed the eCommerce experience for desktop, tablet and mobile, with a focus on familiarity and trust.',
           'מכיוון שלא יכולנו להסתמך על נוכחות פיזית על מדף, החנות המקוונת הפכה לערוץ המכירה המרכזי. עיצבנו את חוויית הסחר לדסקטופ, לטאבלט ולמובייל, עם דגש על מוכרוּת ואמון.']],
    ['ul', [['Competitive research on leading beverage brands’ online stores.',
             'User surveys about ideal purchase flows and checkout pain points.'],
            ['מחקר מתחרים על חנויות מקוונות של מותגי משקאות מובילים.',
             'סקרי משתמשים על זרימות רכישה אידיאליות ועל נקודות כאב בתשלום.']]],
    ['p', ['This let us simplify the funnel, emphasising quick product discovery, transparent delivery information, and personal reassurance at every step.',
           'זה איפשר לנו לפשט את המשפך, ולהדגיש גילוי מוצר מהיר, מידע משלוח שקוף, והרגעה אישית בכל שלב.']],
    ['pair', [IMG + '10.bdan-mobile1.jpg', IMG + '10.bdan-mobile2.jpg']],
    ['h2', ['4. Designing positive user journeys', '4. עיצוב מסעות משתמש חיוביים']],
    ['p', ['We mapped both positive and negative user journeys, focusing on how customers feel at each step. From social media exposure → website visit → checkout → delivery, we identified stress points and designed an intervention for each.',
           'מיפינו מסעות משתמש חיוביים ושליליים כאחד, בהתמקדות בתחושת הלקוח בכל שלב. מחשיפה ברשתות ← ביקור באתר ← תשלום ← משלוח, זיהינו נקודות מתח ועיצבנו התערבות לכל אחת מהן.']],
    ['p', ['One key insight from behavioural research: people remember how an experience ends more than how it begins. So we designed a personal touchpoint for every completed order - a thank-you message and a direct phone contact option, letting customers know we were available and appreciative.',
           'תובנה מרכזית ממחקר התנהגותי: אנשים זוכרים את סוף החוויה יותר מאשר את תחילתה. לכן עיצבנו נקודת מגע אישית לכל הזמנה שהושלמה - הודעת תודה ואפשרות ליצירת קשר טלפוני ישיר, שמראה ללקוחות שאנחנו זמינים ומעריכים אותם.']],
    ['img', IMG + '10.bdan-mobile3.jpg'],
    ['h1', ['Impact', 'השפעה']],
    ['p', ['Bdan Beverages became a living example of how experience design extends beyond the screen - from digital journeys to the tactile moment of opening a bottle. By combining brand storytelling, product design and UX thinking, we created a young, authentic brand that resonated emotionally with its audience and built its first loyal community entirely online.',
           'Bdan Beverages הפכה לדוגמה חיה לאופן שבו עיצוב חוויה נמשך אל מעבר למסך - ממסעות דיגיטליים ועד לרגע המישושי של פתיחת בקבוק. בשילוב של סיפור מותג, עיצוב מוצר וחשיבת UX, יצרנו מותג צעיר ואותנטי שהדהד רגשית מול הקהל שלו, ובנה את הקהילה הנאמנה הראשונה שלו כולה אונליין.']],
    ['img', IMG + '11.bdan-web.jpg'],
    ['h1', ['Reflection', 'מחשבה לסיום']],
    ['p', ['This project reminded me that great design is about empathy, not just usability. Whether it’s a digital interface or a physical product, people are always looking for meaning, emotion and connection. My role was to translate those feelings into form, story and interaction - so that every bottle told a story worth sharing.',
           'הפרויקט הזה הזכיר לי שעיצוב טוב עוסק באמפתיה, לא רק בשימושיות. בין אם מדובר בממשק דיגיטלי או במוצר פיזי, אנשים תמיד מחפשים משמעות, רגש וחיבור. התפקיד שלי היה לתרגם את התחושות האלה לצורה, לסיפור ולאינטראקציה - כך שכל בקבוק יספר סיפור ששווה לשתף.']],
    ['img', IMG + '299019746_190993059962656_1126383825066745876_n.jpg']
  ]
};

C.projects['catchmedia-site'] = {
  meta: ['T.K Open Systems · 2020–2025', 'T.K Open Systems · 2020–2025'],
  cover: IMG + 'catchmedia.png',
  external: 'https://www.catchmedia.com/',
  kicker: ['Website · design & build', 'אתר · עיצוב ובנייה'],
  title: ['Catch Media Website', 'אתר Catch Media'],
  blurb: ['A complete redesign and build of the official company site, to lift brand perception and usability.',
          'עיצוב ובנייה מחדש של האתר הרשמי של החברה, כדי לחזק את תפיסת המותג ואת השימושיות.'],
  role: ['Design · Front-end', 'עיצוב · פרונט־אנד']
};

C.projects['bdan-brand'] = Object.assign({}, C.projects['bdan-ux'], {
  meta: ['Independent', 'עצמאי'],
  cover: IMG + '5.bdan-logo.jpg', fit: 'cover', blend: false,
  kicker: ['Brand identity · packaging', 'זהות מותג · אריזה'],
  title: ['Bdan Beverages', 'Bdan Beverages'],
  blurb: ['The peacock, the label, and a brand that had to earn its place on a crowded shelf.',
          'הטווס, התווית, ומותג שהיה חייב להרוויח את מקומו על מדף עמוס.']
});

C.projects['cannatech'] = {
  meta: ['Studio Gur · 2018', 'Studio Gur · 2018'],
  cover: IMG + 'al-402.jpg',
  kicker: ['Event design · Tel Aviv', 'עיצוב אירוע · תל אביב'],
  title: ['CannaTech 2018', 'CannaTech 2018'],
  blurb: ['A global hub for medical cannabis - 700 participants, 40 countries, one visual language.',
          'מרכז עולמי לקנאביס רפואי - 700 משתתפים, 40 מדינות, שפה חזותית אחת.'],
  role: ['Visual identity · Environmental & stage design', 'זהות חזותית · עיצוב סביבתי ובימתי'],
  blocks: [
    ['video', 'J5BiDNILzao'],
    ['p', ['The international CannaTech 2018 conference, held at Reading 3 in Tel Aviv, brought together around 700 participants from nearly 40 countries for a deep dive into the fast-evolving world of medical cannabis.',
           'ועידת CannaTech 2018 הבינלאומית, שהתקיימה ברידינג 3 בתל אביב, כינסה כ־700 משתתפים מכ־40 מדינות לצלילה עמוקה אל עולם הקנאביס הרפואי המתפתח במהירות.']],
    ['p', ['The event focused on breakthroughs in agricultural research, medical studies, regulation, investment, communication, innovation and sustainability - highlighting the industry’s global growth and Israel’s role at its forefront.',
           'האירוע התמקד בפריצות דרך במחקר חקלאי, במחקרים רפואיים, ברגולציה, בהשקעות, בתקשורת, בחדשנות ובקיימות - והבליט את הצמיחה העולמית של התעשייה ואת מקומה של ישראל בחזיתה.']],
    ['grid', [IMG+'al-107.jpg', IMG+'al-399.jpg', IMG+'al-402.jpg', IMG+'al-409.jpg', IMG+'b-l--371.jpg', IMG+'al-495.jpg', IMG+'b-l--931.jpg', IMG+'b-l--35.jpg', IMG+'b-l--187.jpg', IMG+'stage.jpg', IMG+'Screenshot-2025-10-29-at-14.41.23.jpg', IMG+'Screenshot-2025-10-29-at-14.41.54.jpg']]
  ]
};

C.projects['general-motors'] = {
  meta: ['Studio Gur · 2016–2018', 'Studio Gur · 2016–2018'],
  cover: IMG + 'MR3_3476.jpg',
  kicker: ['Event branding · Tel Aviv', 'מיתוג אירוע · תל אביב'],
  title: ['General Motors IL', 'ג׳נרל מוטורס ישראל'],
  blurb: ['A high-tech, festive evening marking the opening of GM Israel’s new Tel Aviv branch.',
          'ערב חגיגי והייטקי לציון פתיחת הסניף החדש של ג׳נרל מוטורס ישראל בתל אביב.'],
  role: ['Event identity · Environmental design', 'זהות אירוע · עיצוב סביבתי'],
  blocks: [
    ['p', ['The General Motors Israel event celebrated the opening of their new branch in Tel Aviv. The design challenge was to brand the evening using the company’s logo in a way that would blend with the venue’s atmosphere and create a warm, intimate celebration shared by employees and management alike.',
           'האירוע של ג׳נרל מוטורס ישראל חגג את פתיחת הסניף החדש בתל אביב. אתגר העיצוב היה למתג את הערב באמצעות הלוגו של החברה, באופן שישתלב באווירת המקום וייצור חגיגה חמה ואינטימית, משותפת לעובדים ולהנהלה.']],
    ['grid', [IMG+'MR3_3506.jpg', IMG+'MR3_3395.jpg', IMG+'MR3_3472.jpg', IMG+'MR3_3388.jpg', IMG+'MR3_3386.jpg', IMG+'MR3_3476.jpg', IMG+'MR3_3484.jpg', IMG+'MR4_3723.jpg', IMG+'MR4_3642.jpg', IMG+'MR3_3491.jpg', IMG+'MR3_3514.jpg', IMG+'MR4_3766.jpg', IMG+'MR3_3513.jpg']]
  ]
};

C.projects['jerusalem-360'] = {
  meta: ['Studio Gur · 2016–2018', 'Studio Gur · 2016–2018'],
  cover: IMG + '899787c5-7e76-4d7e-9954-0c90d1213414.png',
  kicker: ['Festival identity · Jerusalem', 'זהות פסטיבל · ירושלים'],
  title: ['360 Festival Jerusalem', 'פסטיבל 360 ירושלים'],
  blurb: ['Jerusalem’s 360 Festival turns public space into a stage - the identity had to travel with it.',
          'פסטיבל 360 בירושלים הופך את המרחב הציבורי לבמה - והזהות הייתה צריכה לנוע איתו.'],
  role: ['Visual identity · Campaign', 'זהות חזותית · קמפיין'],
  blocks: [
    ['p', ['Jerusalem’s 360 Festival transforms public spaces into theatre stages, breaking the boundary between performer and passer-by and bringing audiences together in the middle of the city.',
           'פסטיבל 360 בירושלים הופך מרחבים ציבוריים לבמות תיאטרון, שובר את הגבול בין השחקן לעובר האורח, ומקבץ קהלים בלב העיר.']],
    ['p', ['The identity had to work everywhere the festival goes: on a wall, on a flyer in someone’s hand, on a screen, and in the middle of a street with no frame around it. It’s built to stay recognisable when the surroundings change every few metres.',
           'הזהות הייתה צריכה לעבוד בכל מקום שאליו הפסטיבל מגיע: על קיר, על עלון ביד, על מסך, ובאמצע רחוב בלי מסגרת סביבו. היא בנויה להישאר מזוהה גם כשהסביבה מתחלפת כל כמה מטרים.']],
    ['grid', [IMG+'899787c5-7e76-4d7e-9954-0c90d1213414.png', IMG+'5e3b0b44-f150-4f2a-8780-ff91e337f85d.jpg', IMG+'48c588d7-bf71-40ab-b846-d0f9b94ef690.jpg', IMG+'96e73af8-ca3e-4d75-b106-22d66c6145ab.jpg', IMG+'2bd82026-b55b-4bd7-80e3-839ac40d4b80.jpg', IMG+'cedc9123-c099-41f3-a3ca-3166d4cf4183.jpg']],
    ['video', 'F_S6RnwEoQc']
  ]
};

C.projects['outdoor-stage'] = {
  meta: ['Studio Gur · 2016–2018', 'Studio Gur · 2016–2018'],
  cover: IMG + 'Screenshot-2025-10-29-at-17.12.08.png',
  kicker: ['Visual identity · theatre', 'זהות חזותית · תיאטרון'],
  title: ['Outdoor Stage Group', 'קבוצת במת חוצות'],
  blurb: ['Identity for a theatre collective that performs in the street rather than in a hall.',
          'זהות לקבוצת תיאטרון שמופיעה ברחוב ולא באולם.'],
  role: ['Visual identity', 'זהות חזותית'],
  blocks: [
    ['p', ['The visual identity for “Bamat Hutzot” (Outdoor Stage) - a theatre collective that brings performances into public spaces. The branding blends the spirit of traditional theatre with the energy of the city, resulting in a playful yet professional identity that invites people to experience art beyond the stage, out in the streets.',
           'הזהות החזותית של ״במת חוצות״ - קבוצת תיאטרון שמביאה הצגות אל המרחב הציבורי. המיתוג משלב את רוח התיאטרון הקלאסי עם האנרגיה של העיר, ויוצר זהות שובבה אך מקצועית, שמזמינה אנשים לחוות אמנות מחוץ לבמה, ברחובות.']],
    ['grid', [IMG+'c6cebd59-5a13-485b-b657-2bc63d093013.jpg', IMG+'Screenshot-2025-10-29-at-17.09.36.png', IMG+'Screenshot-2025-10-29-at-17.10.30.png', IMG+'Screenshot-2025-10-29-at-17.11.27.png', IMG+'Screenshot-2025-10-29-at-17.12.08.png', IMG+'Screenshot-2025-10-29-at-17.13.38.png']]
  ]
};

C.projects['netofa'] = {
  meta: ['Studio Gur · 2016–2018', 'Studio Gur · 2016–2018'],
  cover: IMG + 'Screenshot-2025-10-29-at-17.38.21.png',
  kicker: ['Packaging · illustration', 'אריזה · איור'],
  title: ['Netofa Winery', 'יקב נטופה'],
  blurb: ['A full bottle series, drawn by hand from the landscape the wine comes from.',
          'סדרת בקבוקים מלאה, מצוירת ביד מתוך הנוף שממנו בא היין.'],
  role: ['Illustration · Packaging design', 'איור · עיצוב אריזה'],
  blocks: [
    ['p', ['The design for Netofa Winery’s wine series began with a simple sketch of the landscape surrounding the village of Netofa in northern Israel. The illustration symbolises the craftsmanship and personal attention that go into every stage of the winemaking process.',
           'העיצוב לסדרת היינות של יקב נטופה התחיל בסקיצה פשוטה של הנוף סביב הכפר נטופה שבצפון הארץ. האיור מסמל את המלאכה ואת תשומת הלב האישית שנכנסות לכל שלב בתהליך ייצור היין.']],
    ['grid', [IMG+'Screenshot-2025-10-29-at-17.38.21.png', IMG+'Screenshot-2025-10-29-at-17.39.07.png', IMG+'Screenshot-2025-10-29-at-17.39.21.png', IMG+'Screenshot-2025-10-29-at-17.38.56.png', IMG+'Screenshot-2025-10-29-at-17.38.34.png', IMG+'Screenshot-2025-10-29-at-17.38.47.png', IMG+'Screenshot-2025-10-29-at-17.39.33.png', IMG+'artwork-014.png', IMG+'natofa-Mockup1.jpg']]
  ]
};

C.projects['nahar-shalom'] = {
  meta: ['Studio Gur · 2018', 'Studio Gur · 2018'],
  cover: IMG + 'Screenshot-2025-10-29-at-18.17.44.png',
  kicker: ['Print · fundraising brochure', 'דפוס · חוברת גיוס'],
  title: ['Nahar Shalom Brochure', 'חוברת נהר שלום'],
  blurb: ['A quiet, careful piece for one of Jerusalem’s oldest yeshivas.',
          'עבודה שקטה וקפדנית עבור אחת הישיבות הוותיקות בירושלים.'],
  role: ['Editorial & print design', 'עיצוב עריכתי ודפוס'],
  blocks: [
    ['p', ['Sometimes I take part in projects not because of their scale or the exposure they bring, but precisely because of their humble, meaningful nature.',
           'לפעמים אני לוקח חלק בפרויקטים לא בגלל היקפם או החשיפה שהם מביאים, אלא דווקא בגלל האופי הצנוע והמשמעותי שלהם.']],
    ['p', ['This was the case with Yeshivat HaMekubalim Nahar Shalom in Jerusalem - one of the city’s oldest yeshivas, dedicated to the study of Kabbalah by scholars from across Israel. The design was created to speak to international philanthropists and to serve as a thoughtful tool supporting the fundraising effort for the expansion of the yeshiva building.',
           'כך היה עם ישיבת המקובלים נהר שלום בירושלים - מהישיבות הוותיקות בעיר, המוקדשת ללימוד קבלה על ידי תלמידי חכמים מכל הארץ. העיצוב נוצר כדי לפנות לפילנתרופים בינלאומיים ולשמש כלי מוקפד שתומך במאמץ גיוס התרומות להרחבת מבנה הישיבה.']],
    ['img', IMG + 'Layer-1.jpg'],
    ['img', IMG + '20181118_033745.jpg'],
    ['img', IMG + 'Layer-2.jpg']
  ]
};

/* --------------------------------------------------------- 
   Artwork
   --------------------------------------------------------- */
C.artwork = [
  IMG+'artwork-001.jpeg',
  IMG+'artwork-039.jpg',
  IMG+'artwork-020.jpg',
  IMG+'artwork-006.jpeg',
  IMG+'artwork-008.jpeg',
  IMG+'artwork-011.jpg',
  IMG+'artwork-018.jpg',
  IMG+'artwork-007.jpeg',
  IMG+'artwork-010.jpg',
  IMG+'artwork-004.jpeg',
  IMG+'artwork-015.jpg',
  IMG+'artwork-026.jpg',
  IMG+'artwork-012.jpg',
  IMG+'artwork-019.jpg',
  IMG+'artwork-016.jpg',
  IMG+'artwork-030.jpg',
  IMG+'artwork-017.jpg',
  IMG+'artwork-009.jpg',
  IMG+'artwork-028.jpg',
  IMG+'artwork-014.jpg',
  IMG+'artwork-029.jpg',
  IMG+'artwork-031.jpg',
  IMG+'artwork-037.jpg',
  IMG+'artwork-044.jpg',
  IMG+'artwork-003.jpeg',
  IMG+'artwork-041.jpg',
  IMG+'artwork-005.jpeg',
  IMG+'artwork-013.jpg',
  IMG+'artwork-042.jpg',
  IMG+'artwork-034.jpg',
  IMG+'artwork-033.jpg',
  IMG+'artwork-035.jpg',
  IMG+'artwork-027.jpg',
  IMG+'artwork-025.jpg',
  IMG+'artwork-046.jpg',
  IMG+'artwork-023.jpg',
  IMG+'artwork-022.jpg',
  IMG+'artwork-040.jpg',
  IMG+'artwork-045.jpg',
  IMG+'artwork-021.jpg',
  IMG+'artwork-038.jpg',
  IMG+'Layer-1_1.jpg',
  IMG+'10460499_684862598253584_3895939689930436078_n.jpg'
];

C.projects['artwork'] = {
  meta: ['Personal work', 'עבודה אישית'],
  cover: IMG + 'Screenshot-2025-10-28-at-23.02.54.png',
  kicker: ['Personal work · drawing & painting', 'עבודה אישית · רישום וציור'],
  title: ['My Artwork', 'העבודות שלי'],
  blurb: ['Digital drawings and reflections collected over the years into imperfect fragments.',
          'רישומים דיגיטליים והרהורים שנאספו לאורך השנים לכדי שברים לא מושלמים.'],
  role: ['Drawing · Painting', 'רישום · ציור'],
  blocks: [
    ['p', ['There is no craft or exploration in the world of design that moves me as deeply as the study of form and light. My drawings and paintings often come as a surprise - I never plan their appearance, and that spontaneity lets them take on diverse shapes and styles.',
           'אין מלאכה או חקירה בעיצוב שנוגעת בי כמו חקר הצורה והאור. הרישומים והציורים מגיעים לרוב כהפתעה - בלי תכנון מראש, והספונטניות הזו מאפשרת להם ללבוש צורות וסגנונות מגוונים.']],
    ['p', ['When I paint I don’t think about <i>how</i> I’m painting; it feels more like walking - letting the body move on its own, and delighting in the realisation that I’m not the one creating. I’m simply allowing creation to happen.',
           'הציור לא עוסק ב<i>איך</i> מציירים אותו; הוא מרגיש יותר כמו הליכה - הגוף נע מעצמו, וזה עונג להבין שהיצירה לא נשלטת, אלא פשוט מותר לה לקרות.']],
    ['gallery']
  ]
};

/* order used by prev / next inside the reader */
C.order = ['play-anywhere','admin-system','cm-analytics','idf-museums','bdan-ux',
           'cannatech','bdan-brand','general-motors','outdoor-stage','netofa','jerusalem-360','nahar-shalom','artwork'];
