import type { Slide } from '../../slides/types'

export const troubleshootingSlides: Slide[] = [
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

]
