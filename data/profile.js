/**
 * data/profile.js
 * ─────────────────────────────────────────────────
 *  Edit this file to update your personal information.
 *  Changes here will automatically update the About
 *  section, sidebar, and contact info on the website.
 * ─────────────────────────────────────────────────
 */

const PROFILE = {

  name:       "Yiran Huang",
  initials:   "YH",                        // shown in avatar if no photo
  photo:      "./assets/img/yiran2.jpeg",                          // e.g. "assets/img/profile.jpg"

  title:      "Ph.D. Candidate",
  lab:        "NJIT XuLab",
  university: "New Jersey Institute of Technology",
  dept:       "Dept. of Data Science",

  email:      "yh87@njit.edu",
  office:     "GITC FL5",
  city:       "Newark, NJ 07102",

  // Social links (set to "" to hide)
  social: {
    scholar:  "https://scholar.google.com/citations?user=bieYyXYAAAAJ&hl=en",
    github:   "https://github.com/Yiran-H",
    linkedin: "https://www.linkedin.com/in/yiran-huang-040b54240/",
  },

  // Tags shown in hero section
  heroTags: [
    "Graph-based Machine Learning",
    "Dynamic Brain Functional Connectivity",
    "fMRI",
    "Large Language Models"
  ],

  // Research interests sidebar
  interests: [
    "Graph-based Machine Learning",
    "Dynamic Brain Functional Connectivity",
    "fMRI",
    "Large Language Models"
  ],

  // Education (newest first)
  education: [
    {
      degree:  "Ph.D. in Data Science",
      school:  "New Jersey Institute of Technology",
      note:    "",
      years:   "2024 — Present",
    },
    {
      degree:  "M.S. in Computer Science",
      school:  "Boston University",
      note:    "",
      years:   "2022 — 2024",
    },
  ],

  cv: {
    path:        "assets/cv.pdf",
    updated:     "January 2025",
    pages:       "~2 pages",
  },

};

/* ─── RENDER ─── */
document.addEventListener("DOMContentLoaded", () => {

  // Nav logo
  const logo = document.querySelector(".nav-logo");
  if (logo) logo.textContent = PROFILE.initials + ".phd";

  // Hero
  document.querySelector(".hero-name").textContent   = PROFILE.name;
  document.querySelector(".hero-title").innerHTML    =
    `<span>${PROFILE.lab}</span> · ${PROFILE.university}`;
  document.querySelector(".hero-eyebrow").innerHTML  =
    PROFILE.title;
  document.querySelector(".affil-uni").innerHTML     =
    `<span class="affil-dot"></span>${PROFILE.university}`;
  document.querySelector(".affil-dept").textContent  = PROFILE.dept;

  // Avatar
  const avatarImg = document.querySelector(".avatar-img");
  if (PROFILE.photo) {
    avatarImg.innerHTML = `<img src="${PROFILE.photo}" alt="${PROFILE.name}">`;
  } else {
    avatarImg.innerHTML = `<div class="avatar-placeholder"><span class="avatar-initials">${PROFILE.initials}</span></div>`;
  }

  // Hero tags
  const tagsEl = document.querySelector(".hero-tags");
  tagsEl.innerHTML = PROFILE.heroTags.map(t => `<span class="tag">${t}</span>`).join("");

  // Social links
  const socialEl = document.querySelector(".social-links");
  const icons = {
    scholar:  `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>`,
    github:   `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>`,
    twitter:  `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>`,
    linkedin: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>`,
    email:    `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>`,
  };
  const titles = { scholar:"Google Scholar", github:"GitHub", twitter:"Twitter/X", linkedin:"LinkedIn", email:"Email" };
  let socialHtml = "";
  Object.entries(PROFILE.social).forEach(([key, url]) => {
    if (url) socialHtml += `<a href="${url}" class="social-link" title="${titles[key]}">${icons[key]}</a>`;
  });
  socialHtml += `<a href="mailto:${PROFILE.email}" class="social-link" title="Email">${icons.email}</a>`;
  socialEl.innerHTML = socialHtml;

  // Interests sidebar
  const intEl = document.getElementById("interests-list");
  if (intEl) intEl.innerHTML = PROFILE.interests.map(i =>
    `<div class="interest-item"><span class="interest-dot"></span>${i}</div>`
  ).join("");

  // Contact
  const contactEl = document.getElementById("contact-info");
  if (contactEl) contactEl.innerHTML = `
    <div class="highlight">${PROFILE.email}</div>
    <div>${PROFILE.office}</div>
    <div>${PROFILE.university}</div>
    <div>${PROFILE.city}</div>
  `;

  // Education
  const eduEl = document.getElementById("edu-list");
  if (eduEl) eduEl.innerHTML = PROFILE.education.map(e => `
    <div class="edu-item">
      <div class="edu-degree">${e.degree}</div>
      <div class="edu-school">${e.school}${e.note ? " · " + e.note : ""}</div>
      <div class="edu-year">${e.years}</div>
    </div>
  `).join("");

  // CV section
  const cvInfo = document.querySelector(".cv-info");
  if (cvInfo) {
    cvInfo.querySelector("h3").textContent = `${PROFILE.name} — CV`;
    cvInfo.querySelector(".cv-meta").textContent =
      `Last updated · ${PROFILE.cv.updated} · PDF · ${PROFILE.cv.pages}`;
    cvInfo.querySelectorAll(".btn").forEach(btn => {
      btn.setAttribute("href", PROFILE.cv.path);
    });
  }

  // Footer name + email
  const footerLinks = document.querySelectorAll("footer a");
  if (footerLinks[0]) footerLinks[0].setAttribute("href", `mailto:${PROFILE.email}`);

});
