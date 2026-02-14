/**
 * data/news.js
 * ─────────────────────────────────────────────────
 *  Add or remove news items here.
 *  Types: "paper" | "award" | "talk" | "misc"
 * ─────────────────────────────────────────────────
 */

const NEWS = [
  {
    date: "Jan 2026",
    type: "paper",
    html: `Our full paper has been accepted to <strong>MIDL 2026</strong>, which will be held in Taipei.`,
  },
  {
    date: "Jan 2026",
    type: "Conference",
    html: `Our abstract has been accepted to <strong>OHBM 2026</strong>, which will be held in France. We will present our latest work on dynamic functional connectivity and brain connectivity modeling.`,
  },
  {
    date: "Aug 2025",
    type: "Milestone",
    html: `Successfully passed my Ph.D. Qualifying Exam!`,
  },
];

/* ─── RENDER ─── */
document.addEventListener("DOMContentLoaded", () => {
  const list = document.getElementById("news-list");
  if (!list) return;

  const badgeClass = { paper: "badge-paper", award: "badge-award", talk: "badge-talk", misc: "badge-misc" };
  const badgeLabel = { paper: "Paper", award: "Award", talk: "Talk", misc: "News" };

  list.innerHTML = NEWS.map(item => `
    <div class="news-item reveal">
      <div class="news-date">${item.date}</div>
      <div class="news-text">
        <span class="news-badge ${badgeClass[item.type]}">${badgeLabel[item.type]}</span>
        ${item.html}
      </div>
    </div>
  `).join("");
});
