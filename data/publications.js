/**
 * data/publications.js
 * ─────────────────────────────────────────────────
 *  Add your papers here.
 *  topics: array of strings used for filtering.
 *    Available filter keys: "llm", "safety", "nlp"
 *    (add more filter buttons in index.html to match)
 * ─────────────────────────────────────────────────
 */

const PUBLICATIONS = [
  {
    venue:   "Under Review",
    title:   "RGE-GCN: Recursive Gene Elimination with Graph Convolutional Networks for RNA-seq based Early Cancer Detection",
    authors: [{ name: "Shreyas Shende"}, { name: "Varsha Narayanan"}, { name: "Vishal Fenn"}, { name: "Yiran Huang", isMe: true }, { name: "Dincer Goksuluk"}, { name: "Gaurav Choudhary"}, { name: "Melih Agraz"}, { name: "Mengjia Xu"}],
    topics:  ["GNNs", "Differentially Expressed Genes (DEGs)", "RNA-Sequence", "Integrated Gradients (IG)"],
    award:   "",
    links: [
      { label: "Paper", url: "https://arxiv.org/pdf/2512.04333" },
      { label: "Code",  url: "#" },
    ],
  },
  {
    venue:   "Under Review",
    title:   "Hyperbolic large language models",
    authors: [{ name: "Sarang Patil"}, { name: "Zeyong Zhang"}, { name: "Yiran Huang", isMe: true }, { name: "Tengfei Ma"}, { name: "Mengjia Xu"}],
    topics:  ["llm", "Survey"],
    award:   "",
    links: [
      { label: "Paper", url: "https://arxiv.org/pdf/2509.05757?" },
      { label: "Code",  url: "#" },
    ],
  },
  {
    venue:   "MIDL 2026",
    title:   "BrainATCL: Adaptive Temporal Brain Connectivity Learning for Functional Link Prediction and Age Estimation",
    authors: [{ name: "Yiran Huang", isMe: true }, { name: "Amirhossein Nouranizadeh" }, { name: "Christine Ahrends" }, { name: "Mengjia Xu" }],
    topics:  ["dFC", "rs-fMRI", "Mamba", "GNNs"],
    // award:   "🏆 Spotlight",
    award:   "",
    links: [
      { label: "Paper",  url: "#" },
      { label: "Code",   url: "https://github.com/neuro-researcher123/dynamic-fc" },
      { label: "Slides", url: "#" },
      { label: "arXiv",  url: "https://arxiv.org/pdf/2508.07106" },
    ],
  },
    {
    venue:   "Aresty Rutgers Undergraduate Research Journal 2025",
    title:   "Quality Improvement of an AI System for Determining Pass-Fail in the Fundamentals of Laparoscopic Surgery: Accuracy on a Cohort of New Users",
    authors: [{ name: "Finn Kliewer" }, { name: "Yiran Huang", isMe: true }, { name: "Advaith Bongu" }, { name: "Yunzhe Xue" }, { name: "Andrew Hu" }, { name: "Usman Roshan" }],
    topics:  ["AI evaluation system", "laparoscopic surgery training (FLS)"],
    award:   "",
    links: [
      { label: "Paper", url: "https://arestyrurj.libraries.rutgers.edu/index.php/arestyrurj/article/download/332/263" },
      { label: "Code",  url: "#" },
    ],
  },
  {
    venue:   "SEG International Exposition and Annual Meeting 2024",
    title:   "Data-driven Seismic Velocity Inversion via Deep Residual U-Net ",
    authors: [{ name: "Yiran Huang", isMe: true }, { name: "Chuang Pan" }, { name: "Qingzhen Wang" }, { name: "Jun Li" }, { name: "Jianhua Xu" }],
    topics:  ["Full-wave inversion", "U-Net"], 
    award:   "",
    links: [
      { label: "Paper",  url: "https://openreview.net/pdf?id=QyI5YJuJsJ" },
      { label: "Code",   url: "https://github.com/Yiran-H/Seismic-Velocity-Inversion-Based-on-Deep-Convolutional-Neural-Networks" },
      { label: "Poster", url: "#" },
    ],
  },
  {
    venue:   "IJCNN 2024",
    title:   "Mechanistic Interpretability of Attention Heads in Transformer Language Models",
    authors: [{ name: "Chuang Pan" }, { name: "Yiran Huang", isMe: true }, { name: "Qingzhen Wang" }, { name: "Jun Li," }, { name: "Jianhua Xu" }],
    topics:  ["velocity inversion", "multi-view convolutional neural network"],
    award:   "",
    links: [
      { label: "Paper", url: "https://openreview.net/pdf?id=sMlYbFKKSb" },
      { label: "Code",  url: "#" },
      { label: "Talk",  url: "#" },
    ],
  },
];

/* ─── RENDER ─── */
document.addEventListener("DOMContentLoaded", () => {
  const list   = document.getElementById("pub-list");
  const filter = document.getElementById("pub-filter");
  if (!list) return;

  function renderPubs(topic) {
    const filtered = topic === "all"
      ? PUBLICATIONS
      : PUBLICATIONS.filter(p => p.topics.includes(topic));

    list.innerHTML = filtered.map(pub => {
      const authorsHtml = pub.authors.map(a =>
        a.isMe ? `<span class="me">${a.name}</span>` : a.name
      ).join(", ");

      const linksHtml = pub.links.map(l =>
        `<a href="${l.url}" class="pub-link" target="_blank" rel="noopener">${l.label}</a>`
      ).join("");

      return `
        <div class="pub-item reveal">
          <div class="pub-venue">${pub.venue}</div>
          <div class="pub-title">
            <a href="${pub.links[0]?.url || '#'}" target="_blank" rel="noopener">${pub.title}</a>
            ${pub.award ? `<span class="pub-award">${pub.award}</span>` : ""}
          </div>
          <div class="pub-authors">${authorsHtml}</div>
          <div class="pub-links">${linksHtml}</div>
        </div>
      `;
    }).join("");

    // re-observe new elements
    document.querySelectorAll(".pub-item.reveal:not(.visible)").forEach(el => revealObserver.observe(el));
  }

  renderPubs("all");

  // Filter buttons
  if (filter) {
    filter.addEventListener("click", e => {
      const btn = e.target.closest(".filter-btn");
      if (!btn) return;
      filter.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      renderPubs(btn.dataset.topic);
    });
  }
});
