import type { Slide } from '../../slides/types'

export const startingConversationSlides: Slide[] = [
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

]
