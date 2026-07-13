import type { Slide } from '../../slides/types'

export const introSlides: Slide[] = [
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

]
