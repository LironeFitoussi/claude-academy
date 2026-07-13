import type { Slide } from '../../slides/types'

export const desktopChatSlides: Slide[] = [
  {
    type: 'section',
    title: 'Chat',
    intro: 'אותו Claude מ-claude.ai, עכשיו עם כוחות של דסקטופ',
  },

  {
    type: 'content',
    title: 'כך נראה Chat באפליקציה',
    html: `<div style="max-width:70%;margin:0 auto;"><img src="/assets/claude_app_chat.png" alt="לשונית Chat באפליקציית הדסקטופ של Claude" style="width:100%;display:block;border-radius:12px;box-shadow:0 10px 28px rgba(0,0,0,0.15);" /></div><p style="text-align:center;margin-top:0.6em;font-size:0.5em;color:var(--brand-ink);">שלוש הלשוניות למעלה – Chat, Cowork ו-Code – הן שלושת המצבים שנכיר בשיעור הזה</p>`,
  },

  {
    type: 'content',
    title: 'למה טוב Chat?',
    html: `<p>Chat מצטיין כשצריך לשאול שאלה, לחשוב יחד בקול רם, לכתוב טיוטה, או לעבוד על בעיה הלוך ושוב. אם הכרתם את claude.ai – זה בדיוק אותו דבר, פשוט רץ ישירות על המחשב שלכם, עם כמה יכולות שמגיעות מזה.</p>`,
  },

  {
    type: 'content',
    title: 'ארבע יכולות שמגיעות מהדסקטופ',
    html: `<ul><li><strong>Quick entry</strong> – לחיצה כפולה על Option (Mac) פותחת את Claude מעל כל מה שאתם עושים, בחלון קומפקטי שנשאר למעלה</li><li><strong>צילומי מסך ושיתוף חלון</strong> (Mac) – Claude רואה בדיוק מה שאתם רואים, בלי לתאר במילים</li><li><strong>הכתבה קולית</strong> (Mac) – מדברים במקום להקליד</li><li><strong>Desktop connectors</strong> – מחברים כלים ושירותים מקומיים כדי ש-Claude יעבוד גם איתם</li></ul>`,
  },

  {
    type: 'content',
    title: 'דוגמה: שאלה על מסך שרואים ממש עכשיו',
    html: `<p>אתם מסתכלים על דשבורד לא מוכר. לוחצים פעמיים על Option, גוררים את הסמן על החלון לצילום מסך, ושואלים: "מה המדדים האלה אומרים?" Claude עונה בחלון הצף, בזמן שהדשבורד עדיין מולכם.</p>`,
  },

  {
    type: 'content',
    title: 'דוגמה: Chat קורא את הכלים המחוברים שלכם',
    html: `<p>אספתם רעיונות להשקת מוצר בתוך Apple Notes, לאורך כמה שבועות. מוסיפים את ה-connector של Notes דרך ה-Settings, ושואלים את Claude: "תרכז את כל מה שיש בהערות שלי על ההשקה, תזהה איפה השארתי דברים באמצע, ותבדוק בכלים המחוברים האחרים אם יש שם משהו שמשלים את החוסרים." Claude קורא את ההערות במחשב שלכם, מרכיב מה שיש, וממשיך מהמקום שבו עצרתם.</p><p class="content-slide__prompt">שאלת מעבר: מה קורה כשלא מספיקה שיחה – וצריך שמישהו יעבוד על המשימה בעצמו?</p>`,
  },

]
