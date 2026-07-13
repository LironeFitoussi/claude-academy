import type { DeckMeta, Slide } from '../slides/types'

export const meta: DeckMeta = {
  title: 'היכרות עם Claude',
  author: {
    name: 'Lirone Fitoussi',
    role: 'Full Stack | IT | DevOps | Automations',
    githubUrl: '#',
  },
}

export const slides: Slide[] = [
  {
    type: 'cover',
    title: 'היכרות עם Claude',
  },

  {
    type: 'content',
    title: 'מפת הדרכים של הקורס',
    html: `<p>מבנה הקורס בקצרה:</p><div style="display:flex;gap:12px;align-items:stretch;direction:rtl;font-size:16px;line-height:1.35;margin-top:0.6em;">
<div style="flex:1;border:2px solid var(--brand-accent);border-radius:10px;padding:10px;box-sizing:border-box;">
<div style="background:var(--brand-accent);color:#fff;font-weight:800;border-radius:8px;padding:6px 8px;margin-bottom:8px;text-align:center;">היכרות עם Claude</div>
<div style="color:var(--brand-ink);">מה זה Claude, איך מדברים איתו, ואיך מקבלים תוצאות טובות?</div>
</div>
<div style="display:flex;align-items:center;color:var(--brand-accent);font-size:20px;font-weight:800;">←</div>
<div style="flex:1;border:2px solid var(--brand-accent);border-radius:10px;padding:10px;box-sizing:border-box;">
<div style="background:var(--brand-accent);color:#fff;font-weight:800;border-radius:8px;padding:6px 8px;margin-bottom:8px;text-align:center;">ארגון העבודה שלכם</div>
<div style="color:var(--brand-ink);">איך Projects, Artifacts ו-Skills נותנים ל-Claude מבנה וידע לשימוש חוזר?</div>
</div>
<div style="display:flex;align-items:center;color:var(--brand-accent);font-size:20px;font-weight:800;">←</div>
<div style="flex:1;border:2px solid var(--brand-accent);border-radius:10px;padding:10px;box-sizing:border-box;">
<div style="background:var(--brand-accent);color:#fff;font-weight:800;border-radius:8px;padding:6px 8px;margin-bottom:8px;text-align:center;">הרחבת הטווח של Claude</div>
<div style="color:var(--brand-ink);">איך Connectors, חיפוש ארגוני ו-Research מביאים את הכלים והאינטרנט שלכם לתוך השיחה?</div>
</div>
<div style="display:flex;align-items:center;color:var(--brand-accent);font-size:20px;font-weight:800;">←</div>
<div style="flex:1;border:2px solid var(--brand-accent);border-radius:10px;padding:10px;box-sizing:border-box;">
<div style="background:var(--brand-accent);color:#fff;font-weight:800;border-radius:8px;padding:6px 8px;margin-bottom:8px;text-align:center;">מחברים הכול יחד</div>
<div style="color:var(--brand-ink);">איך Claude נראה בפעולה בתפקידים שונים, ואיפה עוד אפשר לעבוד איתו?</div>
</div>
<div style="display:flex;align-items:center;color:var(--brand-accent);font-size:20px;font-weight:800;">←</div>
<div style="flex:1;border:2px solid var(--brand-accent);border-radius:10px;padding:10px;box-sizing:border-box;">
<div style="background:var(--brand-accent);color:#fff;font-weight:800;border-radius:8px;padding:6px 8px;margin-bottom:8px;text-align:center;">סיכום ותעודה</div>
<div style="color:var(--brand-ink);">לאן ממשיכים מכאן, ואיך מקבלים את התעודה?</div>
</div>
</div>`,
  },

  {
    type: 'section',
    title: 'Claude כשותף למחשבה',
    intro: 'לפני שמדברים על יכולות, כדאי להבין מה בעצם ההבדל',
  },

  {
    type: 'content',
    title: 'כמה דברים אנחנו צריכים לעשות ביום?',
    html: `<p>ביום עבודה רגיל אנחנו כותבים מיילים, מחפשים מידע, מנסים להבין מסמך ארוך, ולפעמים גם כותבים קוד. לכל משימה כזאת יש כלי אחר, ולכל כלי יש חוקים משלו.</p><ul><li>כתיבה</li><li>מחקר וניתוח מידע</li><li>תכנות</li><li>קבלת החלטות מורכבות</li></ul>`,
  },

  {
    type: 'content',
    title: 'האם מספיק כלי שעונה תשובה אחת?',
    html: `<p>הכלי המוכר ביותר לרוב האנשים הוא צ'אטבוט: שואלים שאלה, מקבלים תשובה קצרה, וזהו. זה עובד טוב לשאלות פשוטות, אבל לא עוזר כשצריך לחשוב יחד על בעיה, לעבור כמה סבבים, ולהגיע לתוצאה טובה יותר בכל פעם.</p><p>כאן נכנס <strong>Claude</strong>: לא כלי שעונה תשובה אחת, אלא שותף לחשיבה שאפשר לעבוד איתו על משימה שלמה.</p>`,
  },

  {
    type: 'content',
    title: 'איך יודעים שאפשר לסמוך על Claude?',
    html: `<p>מודל שפה חזק שיודע לכתוב, לחקור ולתכנת, הוא גם מודל שצריך לדעת מתי לא לעזור. Anthropic, החברה שבנתה את Claude, אימנה אותו לפי עקרונות מנחים שמטרתם למנוע פלט רעיל או מפלה, ולמנוע סיוע לפעילות לא חוקית או לא אתית.</p><ul><li>Helpful – מועיל</li><li>Harmless – לא מזיק</li><li>Honest – כן והוגן</li></ul><p>לשיטת האימון הזו קוראים <strong>Constitutional AI</strong> (בינה מלאכותית חוקתית), והיא מה שעוזר ל-Claude להתיישר עם ערכים אנושיים ולפעול בצורה שקופה.</p>`,
  },

  {
    type: 'content',
    title: 'Claude מקשיב להנחיות שלכם',
    html: `<p>מעבר לעקרונות הבסיס, אפשר לכוון את Claude: לבקש טון מסוים, אישיות מסוימת, או דרך עבודה מסוימת. משתמשים מדווחים ש-Claude פחות נוטה להפיק תוצרים מזיקים, קל יותר לשוחח איתו, וקל יותר לכוון אותו לתוצאה הרצויה – במאמץ קטן יותר.</p><p class="content-slide__prompt">שאלת מעבר: אם Claude הוא שותף חשיבה אמין וניתן לכיוון, על אילו משימות הוא באמת עוזר?</p>`,
  },

  {
    type: 'section',
    title: 'מה Claude יודע לעשות',
    intro: 'מעבר לשיחה – בואו נראה איפה Claude נכנס לעבודה בפועל',
  },

  {
    type: 'content',
    title: 'כתיבה ותוכן',
    html: `<p>Claude יכול לעבוד איתכם על פוסט לרשת חברתית, מייל מקצועי, או דוח מורכב. בגלל שהוא מאומן לקחת הנחיה על אישיות וטון, אפשר לעבוד יחד על מבנה ובהירות עד שהקול שלכם באמת נשמע בטקסט.</p>`,
  },

  {
    type: 'content',
    title: 'מחקר וניתוח מידע',
    html: `<p>Claude עוזר לכם לבדוק זוויות מחקר, לרכז ממצאים, ולנתח מידע כדי להוציא ממנו תובנות. אפשר להעלות מסמכים והוא יעזור לכם להבין מידע מורכב, כי יש לו חלון הקשר גדול מאוד.</p><ul><li>200K+ טוקנים – כ-500 עמודי טקסט ומעלה</li><li>עד 1M טוקנים בתוכניות Pro, Max, Team ו-Enterprise</li></ul><p>חלון כזה מאפשר ל-Claude להתייחס לחומר נרחב בתוך שיחה אחת.</p>`,
  },

  {
    type: 'content',
    title: 'תכנות',
    html: `<p>תכנות הוא אחד התחומים החזקים ביותר של Claude. ביצועים חזקים במשימות תכנות אמיתיות מאפשרים לו לעזור לכם לכתוב קוד, לנפות באגים, ולהסביר קוד בשפות תכנות שונות.</p>`,
  },

  {
    type: 'content',
    title: 'פתרון בעיות וחשיבה מעמיקה',
    html: `<p>Claude מתמודד גם עם משימות קוגניטיביות מורכבות: בעיות מתמטיות, חשיבה אסטרטגית, וניתוח מעמיק. הדגמים העדכניים של Opus ו-Sonnet הם דגמים היברידיים עם שני מצבים: תשובה כמעט מיידית, או חשיבה מורחבת לניתוח עמוק יותר.</p><ul><li>מצב מהיר – תשובה כמעט מיידית</li><li>Extended Thinking – עבודה שלב אחר שלב על הבעיה</li></ul>`,
  },

  {
    type: 'content',
    title: 'למידה של דברים חדשים',
    html: `<p>כשלומדים מיומנות חדשה או נכנסים לתחום לא מוכר, Claude מתאים את עצמו לקצב ולסגנון הלמידה שלכם. Learning Mode היא חוויה שמדריכה את תהליך החשיבה שלכם במקום פשוט לתת תשובה, וכך עוזרת לפתח חשיבה ביקורתית.</p><p class="content-slide__prompt">שאלת מעבר: עם כל היכולות האלה, איך בעצם מגיעים ל-Claude ביום־יום?</p>`,
  },

  {
    type: 'section',
    title: 'איך ניגשים ל-Claude',
    intro: 'אותה אינטליגנציה, כמה ממשקים – כל אחד מתאים למשימה אחרת',
  },

  {
    type: 'content',
    title: 'Claude.ai – הדרך המרכזית',
    html: `<p>Claude.ai, יחד עם אפליקציות הדסקטופ והמובייל, הוא הדרך העיקרית שרוב האנשים עובדים בה מול Claude. שם אפשר לשאול שאלות, לחשוב יחד על רעיונות, וליצור ולערוך מסמכים.</p><ul><li>זמין בכל התוכניות: Free, Pro, Max, Team, Enterprise</li><li>שיחות, פרויקטים, זיכרון והעדפות מסונכרנים בין המכשירים</li><li>עובד דרך דפדפן, דסקטופ או מובייל</li></ul><p>כאן נתמקד בקורס.</p>`,
  },

  {
    type: 'content',
    title: 'Claude Code – כשהעבודה היא בקבצים',
    html: `<p>Claude Code הוא כלי קידוד אגנטי שנועד למפתחים, אבל מתאים לכל עבודה עם קבצים במחשב. הוא יכול לערוך קבצים ישירות, להריץ פקודות, וליצור commits – בלי שאתם צריכים להעתיק־להדביק כל תשובה בעצמכם.</p>`,
  },

  {
    type: 'content',
    title: 'Claude מגיע לכלים שכבר עובדים בהם',
    html: `<p>Claude לא נשאר רק באתר שלו. הוא יכול להצטרף לכלים שאתם כבר משתמשים בהם כל יום, כדי שלא תצטרכו לעזוב את ההקשר שבו אתם עובדים.</p><ul><li>@Claude ב-Slack – שיחה בכל ערוץ, עם חיפוש בהודעות ובקבצים של הארגון</li><li>Claude Design – הופך תיאור, סקיצה או צילום מסך לפרוטוטייפ אינטראקטיבי</li><li>Claude for Microsoft 365 – סיידבר בתוך Excel, PowerPoint, Word ו-Outlook</li></ul>`,
  },

  {
    type: 'content',
    title: 'מכאן ממשיכים',
    html: `<p>נתמקד ב-Claude.ai; קידוד עם Claude Code הוא נושא להרחבה בהמשך.</p><p>בשיעור הבא: הממשק, ושיחה ראשונה עם Claude.</p>`,
  },

  {
    type: 'section',
    title: 'מתחילים שיחה',
    intro: 'הכול מתחיל בתיבת טקסט אחת',
  },

  {
    type: 'content',
    title: 'סרטון: מתחילים עם Claude.ai',
    html: `<div style="max-width:78%;margin:0 auto;"><div style="position:relative;padding-top:56.25%;border-radius:12px;overflow:hidden;background:#111827;"><iframe src="https://www.youtube.com/embed/0vZ_UVLhSQQ" title="Getting started with Claude.ai" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;border:0;"></iframe></div><p style="text-align:center;margin-top:0.6em;font-size:0.5em;"><a href="https://www.youtube.com/watch?v=0vZ_UVLhSQQ" target="_blank" rel="noopener noreferrer" style="color:var(--brand-accent);">אם הסרטון לא נטען: פתחו אותו ישירות ב-YouTube ↗</a></p></div>`,
  },

  {
    type: 'content',
    title: 'מה רואים כשפותחים את Claude.ai?',
    html: `<p>המסך פשוט: אין תפריטים מסובכים, רק תיבת טקסט בתחתית המסך. משם מתחילה כל שיחה.</p><p>הפרומפט הראשון יכול להיות שאלה פשוטה, כמו בקשה לרעיונות לשם של פיצ'ר חדש, או בקשה מורכבת ליצירת קובץ שלם יחד עם Claude.</p>`,
  },

  {
    type: 'section',
    title: 'כתיבת פרומפט טוב',
    intro: 'לפני שכותבים, כדאי לדעת מה בכלל הופך פרומפט לטוב',
  },

  {
    type: 'content',
    title: 'איך פונים ל-Claude?',
    html: `<p>כל שיחה עם Claude מתחילה בפרומפט, וכל מה שכותבים בו משפיע על התשובה. הדרך הכי טובה לפנות ל-Claude היא כמו שהייתם פונים לקולגה: בטבעיות, בקצרה, ובשיחה רגילה.</p><p class="content-slide__prompt">שאלת מעבר: אז מה בעצם הופך פרומפט לטוב?</p>`,
  },

  {
    type: 'content',
    title: 'שלושה דברים שכדאי להגדיר',
    html: `<p>לפני שכותבים פרומפט, שווה לחשוב על שלושה דברים:</p><div style="display:flex;gap:14px;direction:rtl;margin-top:0.5em;">
<div style="flex:1;background:var(--brand-accent);color:#fff;border-radius:14px;padding:18px 14px;text-align:center;box-sizing:border-box;">
<div style="font-size:1.6em;margin-bottom:0.3em;">🧭</div>
<div style="font-weight:800;">1. הצבת הבמה</div>
<div style="font-size:0.6em;margin-top:0.4em;opacity:0.9;">התפקיד וההקשר שלכם</div>
</div>
<div style="flex:1;background:var(--brand-accent);color:#fff;border-radius:14px;padding:18px 14px;text-align:center;box-sizing:border-box;">
<div style="font-size:1.6em;margin-bottom:0.3em;">✏️</div>
<div style="font-weight:800;">2. הגדרת המשימה</div>
<div style="font-size:0.6em;margin-top:0.4em;opacity:0.9;">הפעולה שרוצים מ-Claude</div>
</div>
<div style="flex:1;background:var(--brand-accent);color:#fff;border-radius:14px;padding:18px 14px;text-align:center;box-sizing:border-box;">
<div style="font-size:1.6em;margin-bottom:0.3em;">☑️</div>
<div style="font-weight:800;">3. קביעת כללים</div>
<div style="font-size:0.6em;margin-top:0.4em;opacity:0.9;">סגנון, טון ודוגמאות</div>
</div>
</div>`,
  },

  {
    type: 'content',
    title: 'דוגמה לפרומפט מלא',
    html: `<p>הנה פרומפט שמשתמש בכל שלושת החלקים יחד:</p><div style="font-family:Georgia,'Iowan Old Style','Times New Roman',serif;font-size:0.5em;color:var(--brand-accent);margin:0.6em 0 0.5em;">✳ כך זה נראה בתיבת השיחה</div><div dir="ltr" style="background:#fff;border:1px solid rgba(0,0,0,0.09);border-radius:26px;box-shadow:0 10px 28px rgba(0,0,0,0.07);text-align:left;overflow:hidden;">
<div style="padding:18px 22px 6px;font-size:0.55em;line-height:1.55;color:var(--brand-ink);">I'm the marketing lead at an indie streaming startup, and we're preparing an investor pitch deck for Series A investors. Can you research the current state of the independent film streaming market and identify key trends, competitor positioning, and growth opportunities? Use current web research with citations and structure it as a professional report of up to 5 pages, with an executive summary, market analysis, competitive landscape, and growth opportunities.</div>
<div style="display:flex;align-items:center;justify-content:space-between;padding:10px 18px;margin-top:10px;border-top:1px solid rgba(0,0,0,0.07);font-size:0.42em;color:#8a8378;">
<span style="display:inline-flex;align-items:center;justify-content:center;width:1.8em;height:1.8em;border:1px solid rgba(0,0,0,0.15);border-radius:50%;">+</span>
<span style="display:flex;align-items:center;gap:0.9em;">Claude Sonnet 4.5 · Medium 🎙</span>
</div>
</div>`,
  },

  {
    type: 'content',
    title: 'מה הפרומפט הזה עושה נכון?',
    html: `<p>אותם שלושה חלקים, בפרומפט אמיתי:</p><ul><li><strong>הצבת הבמה</strong> – ראש שיווק בסטארטאפ סטרימינג, לקראת גיוס Series A</li><li><strong>הגדרת המשימה</strong> – מחקר שוק, מגמות, מתחרים, הזדמנויות צמיחה</li><li><strong>קביעת כללים</strong> – מחקר עדכני עם מקורות, מבנה של דוח מקצועי עד 5 עמודים</li></ul>`,
  },

  {
    type: 'content',
    title: 'מאחורי השלושה: 4D Framework',
    html: `<p>שלושת החלקים האלה לא הומצאו סתם – הם מבוססים על <strong>4D Framework for AI Fluency</strong> (שטף עבודה עם AI), מסגרת של פרופ' Rick Dakan ופרופ' Joseph Feller, שמגדירה ארבע יכולות ליבה לעבודה מול AI:</p><ul><li><strong>Delegation</strong> – האצלה: מה נכון למסור ל-Claude. לדוגמה: את המחקר על שוק הסטרימינג – כן. את ההחלטה הסופית על אסטרטגיית התמחור – לא.</li><li><strong>Description</strong> – תיאור: איך מנסחים בקשה ברורה. זה בדיוק מה שעשינו בפרומפט של המשקיעים – הקשר, משימה וכללים מדויקים, לא סתם "תעזור לי עם השוק".</li></ul>`,
  },

  {
    type: 'content',
    title: 'עוד שתי יכולות: לשפוט ולהיזהר',
    html: `<ul><li><strong>Discernment</strong> – שיפוט: לבדוק את מה שחזר. לדוגמה: לוודא שהמקורות שClaude ציטט במחקר השוק אמיתיים ורלוונטיים, לא רק "נשמע טוב".</li><li><strong>Diligence</strong> – זהירות: להשתמש בתוצאה באחריות. לדוגמה: לעבור על הדוח לפני ששולחים אותו למשקיעים, לא לשלוח אותו כמו שהוא.</li></ul><p class="content-slide__prompt">שאלת מעבר: מה אם Claude צריך גם מידע שלא כתבתם בפרומפט עצמו?</p>`,
  },

  {
    type: 'section',
    title: 'נותנים ל-Claude הקשר',
    intro: 'לא כל מידע רלוונטי נכנס בנוחות לתוך טקסט',
  },

  {
    type: 'content',
    title: 'לא הכול צריך להיכנס לטקסט הפרומפט',
    html: `<p>לפעמים ההקשר הרלוונטי נמצא במסמך, בתמונה, או בטבלת נתונים – לא הגיוני להעתיק הכול לפרומפט. Claude יודע לנתח גם קבצים שמעלים אליו ישירות, כולל טקסט ואלמנטים ויזואליים כמו תרשימים ותמונות.</p><ul><li>PDF, DOCX, CSV, TXT</li><li>תמונות: PNG, JPEG ועוד</li></ul>`,
  },

  {
    type: 'content',
    title: 'מה אפשר לעשות עם קובץ שמעלים?',
    html: `<p>אחרי העלאה, הקובץ מופיע כצירוף בשיחה, ואפשר לשאול עליו ישירות.</p><ul><li>להעלות מסמך ולבקש סיכום נקודות מפתח</li><li>לשתף תמונה ולבקש תיאור או ניתוח</li><li>לצרף גיליון נתונים ולזהות מגמות</li><li>להעלות קוד ולבקש הסבר או איתור באגים</li></ul>`,
  },

  {
    type: 'content',
    title: 'העדפות קבועות בלי לחזור עליהן',
    html: `<p>אם יש העדפה שתמיד רלוונטית – למשל טון מסוים או פרטים על העבודה שלכם – אין צורך לכתוב אותה בכל שיחה מחדש. מגדירים אותה פעם אחת ב-Settings ← General, בשדה "Instructions for Claude", וזה חל על כל שיחה.</p><div dir="ltr" style="background:#fff;border:1px solid rgba(0,0,0,0.09);border-radius:16px;padding:16px 20px;box-shadow:0 8px 22px rgba(0,0,0,0.06);margin:0.6em 0;text-align:left;font-size:0.42em;">
<div style="color:#9a958c;margin-bottom:10px;">Settings → General → Profile</div>
<div style="font-weight:800;margin-bottom:4px;">Instructions for Claude</div>
<div style="color:#8a8378;margin-bottom:10px;">Claude will keep these in mind across chats, within Anthropic's guidelines.</div>
<div style="border:1px solid rgba(0,0,0,0.12);border-radius:10px;height:2.6em;"></div>
</div><p class="content-slide__prompt">שאלת מעבר: מה עושים כשהתשובה הראשונה של Claude לא בדיוק מה שרציתם?</p>`,
  },

  {
    type: 'section',
    title: 'משפרים את התשובה תוך כדי שיחה',
    intro: 'שיחה עם Claude נבנית בהדרגה, לא בפרומפט מושלם אחד',
  },

  {
    type: 'content',
    title: 'שיחה עם Claude היא לא ירייה אחת',
    html: `<p>אין ציפייה שהפרומפט הראשון יביא בדיוק את מה שרציתם. שיחה עם Claude בנויה מכמה פרומפטים קצרים שממשיכים אחד את השני, כשאתם מכוונים את הכיוון לפי מה שהוא עונה.</p>`,
  },

  {
    type: 'content',
    title: 'שלוש דרכים להמשיך את השיחה',
    html: `<ul><li><strong>שאלת המשך</strong> – "תוכל להרחיב על הנקודה השנייה?"</li><li><strong>משוב</strong> – "זה טוב, אבל הטון רשמי מדי. תוכל לנסח יותר בשיחה?"</li><li><strong>כיוון מחדש</strong> – "בעצם שאלתי על X, לא על Y. בוא נבהיר..."</li></ul><p>ואם השיחה ממש התפזרה, אפשר גם פשוט להתחיל שיחה חדשה.</p>`,
  },

  {
    type: 'content',
    title: 'אפשר גם לערוך פרומפט קודם',
    html: `<p>לחיצה על אייקון העיפרון ליד כל הודעה ששלחתם פותחת אותה לעריכה מחדש – שימושי כשרוצים לחדד בקשה, במקום להוסיף עוד הודעה חדשה.</p><p class="content-slide__prompt">שאלת מעבר: מה קורה כשרוצים ש-Claude יזכור דברים בין שיחה לשיחה?</p>`,
  },

  {
    type: 'section',
    title: 'Claude שמתאים את עצמו אליכם',
    intro: 'שתי יכולות שהופכות כל שיחה חדשה לקלה יותר',
  },

  {
    type: 'content',
    title: 'Claude זוכר הקשר לאורך זמן',
    html: `<p><strong>Memory</strong> שומר אוטומטית פרטים מרכזיים מהשיחות שלכם – התפקיד שלכם, העדפות, החלטות קודמות, סגנון עבודה – כדי שלא תצטרכו לחזור עליהם בכל שיחה חדשה. אם סיפרתם ל-Claude שאתם עובדים בשיווק בחברת B2B, הוא יזכור את זה גם בשיחה הבאה.</p><ul><li>אפשר לבדוק, לערוך או למחוק כל דבר ב-Settings</li><li>מסתנכרן בין כל המכשירים</li></ul>`,
  },

  {
    type: 'content',
    title: 'Styles קובע איך Claude מדבר',
    html: `<p>מעבר לתוכן, אפשר לקבוע גם איך Claude מתקשר: לבחור סגנון קבוע כמו תמציתי, רשמי, או מסביר, או להגדיר סגנון אישי משלכם. אחרי שההגדרה נשמרת, היא חלה אוטומטית על כל שיחה.</p><p>Styles היא בעצם השיטה הוותיקה להתאמה אישית. היום התפקיד הזה עבר בעיקר ל-<strong>Skills</strong> – עליהם נלמד בפרק הבא בקורס.</p>`,
  },

  {
    type: 'content',
    title: 'עכשיו תורכם',
    html: `<p>לפני שממשיכים, נסו לנסח פרומפט אמיתי ל-Claude, עם שלושת החלקים שלמדנו: הצבת הבמה, הגדרת המשימה, וקביעת כללים. הנה כמה רעיונות למשימה:</p><ul><li>לכתוב מייל מקצועי לצוות על עדכון סטטוס בפרויקט</li><li>לנתח שתי אפשרויות (כלי, גישה, או פתרון) ולהמליץ ביניהן</li><li>להסביר או לתקן קטע קוד שכתבתם</li><li>ללמד אתכם צעד אחר צעד מושג חדש מתחום העבודה שלכם</li></ul>`,
  },

  {
    type: 'content',
    title: 'בשיעור הבא',
    html: `<p>נלמד איך לכוון את Claude – טון, פורמט וגישה – בדיוק לפי הצורך שלכם.</p>`,
  },

  {
    type: 'section',
    title: 'כשהתשובה לא בדיוק מה שציפיתם',
    intro: 'זה חלק נורמלי מהעבודה עם Claude – והזדמנות לחדד את הגישה',
  },

  {
    type: 'content',
    title: 'התשובה לא בדיוק מה שציפיתם? זה נורמלי',
    html: `<p>ככל שעובדים יותר עם Claude, יגיעו רגעים שהתשובה לא בדיוק מה שציפיתם. זו לא כשלון – זו הזדמנות לחדד את הפרומפט. הנה כמה תקלות נפוצות, למה הן קורות, ואיך מתקנים אותן.</p>`,
  },

  {
    type: 'content',
    title: 'חמש תקלות נפוצות',
    html: `<div style="overflow-x:auto;"><table dir="rtl" style="width:100%;border-collapse:collapse;font-size:15px;line-height:1.4;">
<thead>
<tr style="background:#efece4;">
<th style="text-align:right;padding:8px 10px;border-bottom:2px solid rgba(0,0,0,0.15);">אתגר</th>
<th style="text-align:right;padding:8px 10px;border-bottom:2px solid rgba(0,0,0,0.15);">מה קורה בפועל</th>
<th style="text-align:right;padding:8px 10px;border-bottom:2px solid rgba(0,0,0,0.15);">מה לנסות</th>
</tr>
</thead>
<tbody>
<tr style="background:#faf9f6;">
<td style="padding:8px 10px;font-weight:800;vertical-align:top;border-bottom:1px solid rgba(0,0,0,0.08);">התשובה כללית מדי</td>
<td style="padding:8px 10px;vertical-align:top;border-bottom:1px solid rgba(0,0,0,0.08);">אין מספיק הקשר בפרומפט על המצב שלכם</td>
<td style="padding:8px 10px;vertical-align:top;border-bottom:1px solid rgba(0,0,0,0.08);">הוסיפו קהל, תפקיד או אילוצים. במקום "כתוב מייל על עיכוב" – "מייל ללקוח Enterprise: עיכוב שני של שבועיים, טון מקצועי אך מתנצל".</td>
</tr>
<tr style="background:#fff;">
<td style="padding:8px 10px;font-weight:800;vertical-align:top;border-bottom:1px solid rgba(0,0,0,0.08);">תשובה ארוכה או קצרה מדי</td>
<td style="padding:8px 10px;vertical-align:top;border-bottom:1px solid rgba(0,0,0,0.08);">Claude מנחש את האורך הרצוי</td>
<td style="padding:8px 10px;vertical-align:top;border-bottom:1px solid rgba(0,0,0,0.08);">בקשו אורך מפורש: "שני פסקאות", "עד 100 מילה", או "ניתוח מקיף, האורך לא משנה".</td>
</tr>
<tr style="background:#faf9f6;">
<td style="padding:8px 10px;font-weight:800;vertical-align:top;border-bottom:1px solid rgba(0,0,0,0.08);">הפורמט לא מה שרציתם</td>
<td style="padding:8px 10px;vertical-align:top;border-bottom:1px solid rgba(0,0,0,0.08);">Claude הבין מה, אבל לא איך להציג</td>
<td style="padding:8px 10px;vertical-align:top;border-bottom:1px solid rgba(0,0,0,0.08);">הראו דוגמה למבנה, או תארו במפורש: "נקודות עם כותרות מודגשות לכל סעיף".</td>
</tr>
<tr style="background:#fff;">
<td style="padding:8px 10px;font-weight:800;vertical-align:top;border-bottom:1px solid rgba(0,0,0,0.08);">מידע שנשמע בטוח אבל שגוי</td>
<td style="padding:8px 10px;vertical-align:top;border-bottom:1px solid rgba(0,0,0,0.08);">Claude לפעמים ממציא בביטחון, בעיקר בעובדות נישתיות</td>
<td style="padding:8px 10px;vertical-align:top;border-bottom:1px solid rgba(0,0,0,0.08);">במשימות קריטיות: בדקו עובדות לבד, בקשו מקורות או רמת ביטחון, הפעילו חיפוש רשת.</td>
</tr>
<tr style="background:#faf9f6;">
<td style="padding:8px 10px;font-weight:800;vertical-align:top;">הטון לא מתאים</td>
<td style="padding:8px 10px;vertical-align:top;">ברירת המחדל: מועיל ומקצועי</td>
<td style="padding:8px 10px;vertical-align:top;">תארו את הטון במילים פשוטות ("יותר שיחתי", "סמכותי ורשמי"), או צרפו דוגמת כתיבה.</td>
</tr>
</tbody>
</table></div><p class="content-slide__prompt">שאלת מעבר: מעבר לתיקון נקודתי, איך בכלל חושבים על עבודה מתמשכת עם Claude?</p>`,
  },

  {
    type: 'section',
    title: 'גישת האיטרציה',
    intro: 'פרומפט ראשון הוא התחלה של שיחה, לא ניסיון מושלם יחיד',
  },

  {
    type: 'content',
    title: 'הטיוטה הראשונה היא נקודת פתיחה',
    html: `<p>אחד השינויים החשובים בעבודה עם Claude הוא להבין שהפרומפט הראשון כמעט אף פעם לא מייצר תוצאה מושלמת – וזה בסדר. מתייחסים לתשובה הראשונה כטיוטה: בודקים מה עובד ומה לא, ואז מחדדים.</p>`,
  },

  {
    type: 'content',
    title: 'משוב ספציפי עובד טוב יותר',
    html: `<p>"תעשה את זה קצר יותר" זו התחלה סבירה, אבל "תוריד את שני הפסקאות הראשונות ותהפוך את הסיכום לממוקד יותר בפעולה" עובד הרבה יותר טוב. ככל שהמשוב מדויק יותר, כך התוצאה הבאה קרובה יותר למה שרציתם.</p>`,
  },

  {
    type: 'content',
    title: 'לפעמים עדיף להתחיל שיחה חדשה',
    html: `<p>אם שיחה ממש סטתה מהכיוון, לפעמים מהיר יותר לפתוח שיחה חדשה עם פרומפט ברור, במקום לנסות לכוון בחזרה שיחה שכבר התפזרה.</p><p class="content-slide__prompt">שאלת מעבר: התיקונים והמשוב שראינו כרגע – לאיזו יכולת רחבה יותר הם בעצם שייכים?</p>`,
  },

  {
    type: 'section',
    title: 'AI Fluency',
    intro: 'שם לכל מה שכבר תרגלתם',
  },

  {
    type: 'content',
    title: 'מה זה AI Fluency?',
    html: `<p><strong>AI Fluency</strong> היא היכולת לשתף פעולה ביעילות עם כלי AI – לא רק לדעת על אילו כפתורים ללחוץ, אלא לפתח שיקול דעת לשימוש נכון ב-AI במצבים שונים.</p>`,
  },

  {
    type: 'content',
    title: 'ארבע היכולות, כפי שכבר תרגלתם אותן',
    html: `<p>כבר הכרתם את ה-<strong>4D Framework</strong> בשיעור הקודם. עכשיו אפשר לראות איך הוא מתקשר למה שלמדתם היום:</p><ul><li><strong>Description</strong> – מסגרת הפרומפט (הצבת הבמה, הגדרת המשימה, קביעת כללים) מהשיעור הקודם</li><li><strong>Discernment</strong> ו-<strong>Diligence</strong> – טכניקות פתרון התקלות שראינו הרגע</li></ul><p class="content-slide__prompt">שאלת מעבר: איך בעצם יודעים אם Claude טוב במשימה הספציפית שלכם?</p>`,
  },

  {
    type: 'section',
    title: 'בודקים אם Claude מתאים למשימה שלכם',
    intro: 'כאן Discernment הופך למעשי',
  },

  {
    type: 'content',
    title: 'איך יודעים אם Claude טוב במשימה הזאת?',
    html: `<p>העבודה שלכם ייחודית. Claude עשוי להצטיין בכתיבת תוכן שיווקי, אבל לצריך יותר הכוונה בתיעוד טכני בתחום הספציפי שלכם. הדרך לגלות זאת נקראת <strong>Evals</strong> – בדיקות שיטתיות של הביצועים של Claude במשימות שחשובות לכם.</p>`,
  },

  {
    type: 'content',
    title: 'למה לטרוח עם eval?',
    html: `<ul><li>מבינים איפה Claude תורם הכי הרבה בעבודה שלכם</li><li>מזהים משימות שדורשות יותר הקשר או דוגמאות</li><li>בונים ביטחון בתוצרים של Claude למשימות חוזרות</li></ul>`,
  },

  {
    type: 'content',
    title: 'גישה פשוטה ל-eval',
    html: `<p>לא צריך תשתית מסובכת:</p><ul><li><strong>אספו דוגמאות</strong> – 5-10 דוגמאות ממשימה שאתם עושים באופן קבוע</li><li><strong>כתבו פרומפטים לבדיקה</strong> – עם ההקשר הטבעי שהיה לכם בעבודה האמיתית</li><li><strong>השוו תוצאות</strong> – האם Claude תפס את המידע המרכזי? הטון מתאים? מה חסר?</li><li><strong>חדדו</strong> – עדכנו את הפרומפט, הוסיפו דוגמאות, או סמנו איפה חובה בדיקה אנושית</li></ul>`,
  },

  {
    type: 'content',
    title: 'זה מעגל, לא רשימת משימות חד-פעמית',
    html: `<div style="display:flex;flex-direction:column;align-items:center;">
<p style="text-align:center;margin-bottom:0.2em;">ארבעת השלבים <strong>חוזרים על עצמם שוב ושוב</strong>, עד שהפרומפט מספיק מדויק:</p>
<svg viewBox="0 0 460 460" width="420" height="420" style="max-width:100%;">
<defs>
<marker id="cycleArrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
<path d="M0,0 L10,5 L0,10 z" fill="var(--brand-accent)"></path>
</marker>
</defs>
<path d="M230,90 A140,140 0 0,1 370,230" fill="none" stroke="var(--brand-accent)" stroke-width="4" marker-end="url(#cycleArrow)"></path>
<path d="M370,230 A140,140 0 0,1 230,370" fill="none" stroke="var(--brand-accent)" stroke-width="4" marker-end="url(#cycleArrow)"></path>
<path d="M230,370 A140,140 0 0,1 90,230" fill="none" stroke="var(--brand-accent)" stroke-width="4" marker-end="url(#cycleArrow)"></path>
<path d="M90,230 A140,140 0 0,1 230,90" fill="none" stroke="var(--brand-accent)" stroke-width="4" marker-end="url(#cycleArrow)"></path>
<circle cx="230" cy="230" r="68" fill="none" stroke="var(--brand-accent)" stroke-width="2" stroke-dasharray="3 6" opacity="0.5"></circle>
<text x="230" y="222" text-anchor="middle" font-size="15" font-weight="800" fill="var(--brand-ink)">חוזרים על זה</text>
<text x="230" y="242" text-anchor="middle" font-size="15" font-weight="800" fill="var(--brand-ink)">עד שסומכים על Claude</text>
<circle cx="230" cy="90" r="34" fill="var(--brand-accent)"></circle>
<text x="230" y="96" text-anchor="middle" font-size="20" font-weight="800" fill="#fff">1</text>
<text x="230" y="34" text-anchor="middle" font-size="16" font-weight="700" fill="var(--brand-ink)">אספו דוגמאות</text>
<circle cx="370" cy="230" r="34" fill="var(--brand-accent)"></circle>
<text x="370" y="236" text-anchor="middle" font-size="20" font-weight="800" fill="#fff">2</text>
<text x="370" y="288" text-anchor="middle" font-size="16" font-weight="700" fill="var(--brand-ink)">בנו פרומפט</text>
<circle cx="230" cy="370" r="34" fill="var(--brand-accent)"></circle>
<text x="230" y="376" text-anchor="middle" font-size="20" font-weight="800" fill="#fff">3</text>
<text x="230" y="428" text-anchor="middle" font-size="16" font-weight="700" fill="var(--brand-ink)">השוו תוצאות</text>
<circle cx="90" cy="230" r="34" fill="var(--brand-accent)"></circle>
<text x="90" y="236" text-anchor="middle" font-size="20" font-weight="800" fill="#fff">4</text>
<text x="90" y="288" text-anchor="middle" font-size="16" font-weight="700" fill="var(--brand-ink)">חדדו</text>
</svg>
</div>`,
  },

  {
    type: 'content',
    title: 'דוגמה: Claude וניתוח נתונים',
    html: `<div style="max-width:78%;margin:0 auto;"><div style="position:relative;padding-top:56.25%;border-radius:12px;overflow:hidden;background:#111827;"><iframe src="https://www.youtube.com/embed/Zzn-g8lvLMA" title="Using Claude for data analysis" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;border:0;"></iframe></div><p style="text-align:center;margin-top:0.6em;font-size:0.5em;">רלוונטי לכל מי שעובד עם נתונים, גם אם התחום שלכם שונה. <a href="https://www.youtube.com/watch?v=Zzn-g8lvLMA" target="_blank" rel="noopener noreferrer" style="color:var(--brand-accent);">אם הסרטון לא נטען, פתחו אותו ב-YouTube ↗</a></p></div>`,
  },

  {
    type: 'content',
    title: 'איך מריצים eval כזה על הנתונים שלכם',
    html: `<ul><li>מצאו dataset שכבר ניתחתם ידנית</li><li>בקשו מ-Claude לבצע את אותו ניתוח</li><li>השוו את התוצאה של Claude לניתוח המקורי שלכם</li><li>סמנו דפוסים וחדדו את הפרומפט – למשל, Claude מדייק במספרים אבל מפספס את המגמה הכללית</li></ul><p class="content-slide__prompt">שאלת מעבר: אז מה כדאי לבדוק אצלכם בעבודה, לפני שממשיכים הלאה?</p>`,
  },

  {
    type: 'content',
    title: 'עכשיו תורכם',
    html: `<p>לפני שממשיכים, שווה לעצור ולחשוב:</p><ul><li>איזו תקלה מהשיעור כבר פגשתם, ואיזו טכניקה תנסו בפעם הבאה?</li><li>איפה בעבודה שלכם eval פשוט יכול לעזור לכם להבין אם Claude מתאים למשימה חוזרת?</li></ul>`,
  },

  {
    type: 'content',
    title: 'בשיעור הבא',
    html: `<p>נכיר את אפליקציית הדסקטופ של Claude, ושלושת מצבי העבודה שלה: Chat, Cowork ו-Code.</p>`,
  },
]
