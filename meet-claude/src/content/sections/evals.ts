import type { Slide } from '../../slides/types'

export const evalsSlides: Slide[] = [
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
