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
    type: "conference",
    html: `Our abstract has been accepted to <strong>OHBM 2026</strong>, which will be held in France. We will present our latest work on dynamic functional connectivity and brain connectivity modeling.`,
  },
  {
    date: "Aug 2025",
    type: "mil",
    html: `Successfully passed my Ph.D. Qualifying Exam!`,
  },
  {
    date: "Sep 2024",
    type: "conference",
    html: `Presented our paper at the SEG International Exposition and Annual Meeting 2024 in Houston.`,
  },
];

/* ─── RENDER ─── */
document.addEventListener("DOMContentLoaded", () => {
  const list = document.getElementById("news-list");
  if (!list) return;

  const badgeClass = { conference: "badge-conference", mil: "badge-milestone", paper: "badge-paper", award: "badge-award", talk: "badge-talk"};
  const badgeLabel = { conference: "Conference", mil: "Milestone", paper: "Paper", award: "Award", talk: "Talk"};

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
