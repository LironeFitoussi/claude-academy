import type { Slide } from '../../slides/types'

export const desktopAppOverviewSlides: Slide[] = [
  {
    type: 'section',
    title: 'אפליקציית הדסקטופ של Claude',
    intro: 'אותו Claude, משולש בשלושה מצבי עבודה',
  },

  {
    type: 'content',
    title: 'מתי שיחה בדפדפן כבר לא מספיקה?',
    html: `<p>עד עכשיו עבדתם עם Claude בשיחה רגילה: שואלים, הוא עונה. אבל מה קורה כשהמשימה גדולה יותר – למשל לעבור על עשרות מסמכים, להריץ משהו כל בוקר בלי שתזכרו, או לכתוב ולהריץ קוד שלם?</p><p class="content-slide__prompt">שאלת מעבר: מה נותנת לכם אפליקציית הדסקטופ שדפדפן לא נותן?</p>`,
  },

  {
    type: 'content',
    title: 'שלושה מצבי עבודה באותה אפליקציה',
    html: `<p>שלושה מצבים, לפי גודל המשימה:</p><div style="display:flex;gap:14px;direction:rtl;margin-top:0.6em;">
<div style="flex:1;border:2px solid var(--brand-accent);border-radius:10px;padding:12px;box-sizing:border-box;">
<div style="background:var(--brand-accent);color:#fff;font-weight:800;border-radius:8px;padding:6px 8px;margin-bottom:8px;text-align:center;">💬 Chat</div>
<div style="color:var(--brand-ink);font-size:0.6em;">שיחה מהירה – שאלות, בראיינסטורמינג וטיוטות</div>
</div>
<div style="flex:1;border:2px solid var(--brand-accent);border-radius:10px;padding:12px;box-sizing:border-box;">
<div style="background:var(--brand-accent);color:#fff;font-weight:800;border-radius:8px;padding:6px 8px;margin-bottom:8px;text-align:center;">🤝 Cowork</div>
<div style="color:var(--brand-ink);font-size:0.6em;">עבודה עצמאית על מטרה – ממקורות שונים לתוצר מוגמר</div>
</div>
<div style="flex:1;border:2px solid var(--brand-accent);border-radius:10px;padding:12px;box-sizing:border-box;">
<div style="background:var(--brand-accent);color:#fff;font-weight:800;border-radius:8px;padding:6px 8px;margin-bottom:8px;text-align:center;">💻 Code</div>
<div style="color:var(--brand-ink);font-size:0.6em;">פיתוח תוכנה – כתיבה, בדיקה והרצה של קוד</div>
</div>
</div>`,
  },

  {
    type: 'content',
    title: 'מה שמחבר בין Cowork ל-Code',
    html: `<p>Cowork ו-Code רצים למעשה על אותו מנוע: שניהם הם Claude Code, שרץ מקומית על המחשב שלכם ומסוגל לעבוד באופן עצמאי על משימות ארוכות. Chat, לעומת זאת, נשאר שיחה קלאסית – בלי העצמאות הזו.</p><p class="content-slide__prompt">שאלת מעבר: אז מה בדיוק מקבלים בכל אחד משלושת המצבים?</p>`,
  },

]
