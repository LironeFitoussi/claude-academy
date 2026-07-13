import type { Slide } from '../../slides/types'

export const writingPromptsSlides: Slide[] = [
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

]
