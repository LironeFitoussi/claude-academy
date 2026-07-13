import type { Slide } from '../../slides/types'

export const desktopCodeSlides: Slide[] = [
  {
    type: 'section',
    title: 'Code',
    intro: 'סביבת פיתוח מלאה, בתוך אותה אפליקציה',
  },

  {
    type: 'content',
    title: 'כך נראה Code באפליקציה',
    html: `<div style="max-width:70%;margin:0 auto;"><img src="/assets/claude_app_code.png" alt="לשונית Code באפליקציית הדסקטופ של Claude" style="width:100%;display:block;border-radius:12px;box-shadow:0 10px 28px rgba(0,0,0,0.15);" /></div><p style="text-align:center;margin-top:0.6em;font-size:0.5em;color:var(--brand-ink);">בחירת ריפוזיטורי, מודל, וסביבת הרצה – לפני שהעבודה על הקוד מתחילה</p>`,
  },

  {
    type: 'content',
    title: 'מה זה Code?',
    html: `<p>לשונית Code נותנת גישה לכוח של Claude Code, ישירות בתוך אפליקציית הדסקטופ – סביבת פיתוח מלאה לבניית תוכנה. Claude עובד ישירות בתוך הקוד שלכם: קורא מה שיש, כותב ומשנה קוד, ומריץ פקודות. דיף חזותי מראה מה השתנה, טרמינל מובנה מראה את הפקודות שרצות, ו-git עוקב אחרי כל גרסה כך שתמיד אפשר לחזור אחורה.</p>`,
  },

  {
    type: 'content',
    title: 'בניגוד ל-Cowork: גישה מלאה, לא מוגבלת',
    html: `<p>Cowork רץ בסביבה מוגבלת לתיקיות ששיתפתם. Code שונה: הוא רץ ישירות בתוך הפרויקט שלכם, עם גישה מלאה למערכת הקבצים, לטרמינל ולכלי הפיתוח.</p>`,
  },

  {
    type: 'content',
    title: 'איפה העבודה קורית: Local או Remote',
    html: `<ul><li><strong>Local</strong> – בוחרים תיקייה במחשב, וClaude עובד ישירות על הקבצים האלה. מכיוון שזה רץ על המחשב שלכם, הוא יכול גם להריץ שרת פיתוח שאפשר לתצוגה מקדימה בדפדפן</li><li><strong>Remote</strong> – מחברים ריפוזיטורי GitHub, וClaude עובד בסביבת ענן. השיחה ממשיכה גם אם סוגרים את האפליקציה – טוב לרפקטורינג גדול, או כשרוצים לשמור את הפיתוח מחוץ למחשב המקומי</li></ul>`,
  },

  {
    type: 'content',
    title: 'כמה שליטה נותנים ל-Claude: שלושה מצבי אינטראקציה',
    html: `<p>נזכרים ב-Diligence מה-4D Framework – זהירות ובקרה אנושית? כאן זה הופך לבחירה קונקרטית:</p><ul><li><strong>Ask</strong> – Claude מציע כל שינוי, ומחכה לאישור. רואים דיף חזותי ומחליטים לפני שמשהו משתנה</li><li><strong>Code</strong> – Claude מבצע שינויי קבצים אוטומטית, אבל בודק לפני שהוא מריץ פקודות בטרמינל</li><li><strong>Plan</strong> – Claude מציג את הגישה המלאה שלו לפני שהוא נוגע בכל דבר, בצופה תוכנית ייעודי שאפשר לחזור אליו לאורך העבודה</li></ul>`,
  },

  {
    type: 'content',
    title: 'כמה sessions במקביל',
    html: `<p>אפשר להריץ כמה sessions במקביל על כמה פרויקטים, ולסנן אותם מהסיידבר לפי סטטוס (Active או Archived) ולפי סביבה (Local או Cloud).</p><p style="margin-top:0.6em;font-size:0.6em;opacity:0.8;">לשונית Code זמינה למשתמשי Pro, Max, Team ו-Enterprise.</p>`,
  },

  {
    type: 'content',
    title: 'שלושת המצבים זה לצד זה',
    html: `<div style="display:flex;gap:14px;direction:rtl;margin-top:0.4em;">
<div style="flex:1;background:var(--brand-accent);color:#fff;border-radius:14px;padding:16px 12px;text-align:center;box-sizing:border-box;">
<div style="font-size:1.6em;margin-bottom:0.3em;">💬</div>
<div style="font-weight:800;">Chat</div>
<div style="font-size:0.55em;margin-top:0.4em;opacity:0.9;">החלפות מהירות: רעיונות, טיוטות, תשובות, למידה בשיחה</div>
</div>
<div style="flex:1;background:var(--brand-accent);color:#fff;border-radius:14px;padding:16px 12px;text-align:center;box-sizing:border-box;">
<div style="font-size:1.6em;margin-bottom:0.3em;">🤝</div>
<div style="font-weight:800;">Cowork</div>
<div style="font-size:0.55em;margin-top:0.4em;opacity:0.9;">עבודה מורכבת וממושכת: מחקר, ניתוח, ארגון קבצים, תוצרים מוגמרים</div>
</div>
<div style="flex:1;background:var(--brand-accent);color:#fff;border-radius:14px;padding:16px 12px;text-align:center;box-sizing:border-box;">
<div style="font-size:1.6em;margin-bottom:0.3em;">💻</div>
<div style="font-weight:800;">Code</div>
<div style="font-size:0.55em;margin-top:0.4em;opacity:0.9;">בניית תוכנה: כתיבה, בדיקה, הרצה ופריסה של קוד</div>
</div>
</div>`,
  },

  {
    type: 'content',
    title: 'עכשיו תורכם',
    html: `<p>לפני שממשיכים, שווה לעצור ולחשוב:</p><ul><li>על המשימות שאתם הכי הרבה עושים מול Claude – לאיזה מצב, Chat, Cowork או Code, כל אחת מהן הכי מתאימה?</li><li>תחשבו על פרויקט שדרש לכם לשלוף מידע ממקורות שונים – איך Cowork היה יכול לשנות את התהליך הזה?</li></ul>`,
  },

  {
    type: 'content',
    title: 'בשיעור הבא',
    html: `<p>במודול הבא נלמד לארגן את העבודה והידע שלכם באמצעות Projects.</p>`,
  },

]
