# 🎓 PhD Personal Website

A sleek, dark-themed academic personal website. Fully static — no build tools, no frameworks.

## 📁 Project Structure

```
phd-site/
├── index.html              # Main page (structure only)
├── css/
│   ├── base.css            # Variables, reset, typography, layout
│   ├── components.css      # Nav, buttons, tags, cards
│   └── sections.css        # Hero, news, publications, about, cv
├── js/
│   ├── canvas.js           # Particle network background
│   └── app.js              # Scroll reveal, nav, mobile menu
├── data/
│   ├── profile.js          # ✏️  YOUR INFO — edit this
│   ├── news.js             # ✏️  YOUR NEWS — edit this
│   └── publications.js     # ✏️  YOUR PAPERS — edit this
└── assets/
    ├── cv.pdf              # Drop your CV here
    └── img/
        └── profile.jpg     # Drop your photo here (optional)
```

## ✏️ How to Update Content

You only need to edit the `data/` files — no HTML knowledge required.

### Personal Info → `data/profile.js`
- Name, affiliation, email, office
- Social links (Scholar, GitHub, Twitter, LinkedIn)
- Research interests, education history

### News → `data/news.js`
Add items to the `NEWS` array:
```js
{
  date: "Feb 2025",
  type: "paper",  // "paper" | "award" | "talk" | "misc"
  html: `Your paper <strong>"Title"</strong> accepted at <a href="#">ICML 2025</a>!`,
},
```

### Publications → `data/publications.js`
Add papers to the `PUBLICATIONS` array:
```js
{
  venue:   "ICML 2025",
  title:   "Your Paper Title",
  authors: [
    { name: "Your Name", isMe: true },
    { name: "Co-Author" },
  ],
  topics:  ["llm", "safety"],  // used for filter buttons
  award:   "🏆 Oral",          // or "" for none
  links: [
    { label: "Paper", url: "https://arxiv.org/..." },
    { label: "Code",  url: "https://github.com/..." },
  ],
},
```

## 🚀 Deploy to GitHub Pages (Free)

### Step 1 — Create a GitHub repository
1. Go to [github.com](https://github.com) → **New repository**
2. Name it `yourusername.github.io` (this gives you `yourusername.github.io` as URL)
   - Or any name, e.g. `academic-site` (URL: `yourusername.github.io/academic-site`)
3. Set it to **Public**

### Step 2 — Upload your files
**Option A: GitHub Web (easiest)**
1. Open your new repo on GitHub
2. Click **"uploading an existing file"**
3. Drag & drop ALL files and folders
4. Click **"Commit changes"**

**Option B: Git CLI**
```bash
cd phd-site
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/yourusername/yourusername.github.io.git
git push -u origin main
```

### Step 3 — Enable GitHub Pages
1. Go to your repo → **Settings** → **Pages** (left sidebar)
2. Under **Source**, select `main` branch → `/ (root)` → **Save**
3. Wait ~1 minute → your site is live at `https://yourusername.github.io`! 🎉

## 🖼️ Adding Your Photo
1. Put your photo at `assets/img/profile.jpg`
2. In `data/profile.js`, set: `photo: "assets/img/profile.jpg"`

## 📄 Adding Your CV
Drop your CV PDF at `assets/cv.pdf`. The download button is already wired up.

## 🎨 Customization

### Change accent color
In `css/base.css`, edit the CSS variables:
```css
--accent:  #00d4ff;   /* main cyan color */
--accent2: #7b61ff;   /* purple secondary */
--gold:    #f0c060;   /* award/highlight color */
```

### Add a custom domain
1. In your repo, create a file named `CNAME` containing your domain:
   ```
   yourname.com
   ```
2. Point your domain's DNS to GitHub Pages (see GitHub docs)
