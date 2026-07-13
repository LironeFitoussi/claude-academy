import type { Slide } from '../../slides/types'

export const givingContextSlides: Slide[] = [
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

]
