# 🎨 Personal Portfolio Template

A clean, modern portfolio template—**no build tools, no dependencies**. Just edit `js/content.js`, push to GitHub, and your portfolio is live! Perfect for developers who want a professional online presence without the complexity.

**[Live Demo](https://ursmaheshj.github.io/mj-folio/)** · **[Use as Template](#-quick-start)**

---

## ✨ What's Included

- **📱 Responsive Design** — Looks perfect on mobile, tablet, and desktop
- **🌗 Dark/Light Mode** — Automatic theme switching
- **📝 Medium Integration** — Auto-fetch your latest articles via RSS
- **✨ Interactive Features** — 3D cards, cursor trail, progress bar (opt-in)
- **🚀 Auto-Optimized** — Images, CSS, and JS minified automatically
- **⚡ Lightning Fast** — No build step, zero dependencies, pure HTML/CSS/JS

**Pages:** About · Blog · Projects · Certificates · CV · Contact

---

## 🚀 Quick Start

### 1. Fork This Repository
Click the **Fork** button or use this command:
```bash
git clone https://github.com/ursmaheshj/mj-folio.git
cd mj-folio
```

### 2. Add Your Profile Photo
Save your photo as `images/profile.jpg` (any size—will auto-optimize)

### 3. Update Your Content
Edit **one file**: [`js/content.js`](js/content.js)

That's it! The template uses this single file to generate all pages. Here's what to update:

```js
{
  "profile": {
    "name": "Your Name",
    "role": "Your Title",
    "photoUrl": "images/profile.jpg",
    "about": "Your bio paragraph...",
    "social": [
      { "label": "GitHub", "url": "https://github.com/you", ... },
      { "label": "LinkedIn", "url": "https://linkedin.com/in/you", ... }
    ],
    "mediumFeedUrl": "https://yourname.medium.com/feed"  // or null
  },
  "projects": [...],
  "experience": [...],
  "cv": { ... },
  // ... rest of your content
}
```

### 4. Deploy to GitHub Pages
- Push to the `main` branch
- Go to **Settings → Pages → Build and deployment**
- Select `main` branch as source
- Your portfolio is now live! 🎉

That's literally it. No build commands, no environment setup—just content in `js/content.js`.

---

## � Customizing Your Portfolio

### Edit `js/content.js` — Everything Starts Here

This is the **only file** you need to edit. It's structured like JSON and controls all your content:

```js
{
  "profile": {
    "name": "Chanandler Bong",
    "role": "Statistical Analysis & Humor",
    "photoUrl": "images/profile.jpg",
    "about": "Your introduction paragraph...",
    "social": [
      { "label": "GitHub", "url": "https://github.com/you", "icon": "fa-brands fa-github" },
      { "label": "LinkedIn", "url": "https://linkedin.com/in/you", "icon": "fa-brands fa-linkedin" }
    ],
    "mediumFeedUrl": "https://yourname.medium.com/feed"  // Auto-loads your Medium articles
  },
  "projects": [
    {
      "title": "Project Name",
      "year": "2024",
      "summary": "What it does",
      "images": ["images/projects/img1.jpg", "images/projects/img2.jpg"],
      "stack": ["Python", "AWS"],
      "links": [{ "label": "Live", "url": "..." }, { "label": "Code", "url": "..." }]
    }
  ],
  "experience": [
    {
      "type": "work",
      "period": "2024 - Present",
      "role": "Your Job",
      "company": "Company Name",
      "highlights": ["Achievement 1", "Achievement 2"]
    }
  ],
  "cv": {
    "summary": "Your professional summary",
    "languages": [
      { "language": "English", "proficiency": "Fluent" }
    ],
    "achievements": [...]
  },
  "certificates": [...]
  // See js/content.js for complete structure
}
```

### Common Customizations

**Change Theme Colors:**
Edit `css/styles.css` and update CSS variables:
```css
[data-theme="light"] {
  --accent: #7209b7;    /* Your brand color */
  --bg: #ffffff;
  --text: #1a1a1a;
}
```

**Add More Projects:**
Just add to the `projects` array in `content.js`. Multiple images automatically create an image slider.

**Use Your Medium Blog:**
Set `mediumFeedUrl` to your Medium RSS (format: `https://username.medium.com/feed`). Articles auto-load on the blog page.

**Add Certificates:**
Get the certificate image URL from the issuing platform (Udemy, Coursera, Credly, etc.) and add to `certificates` array.

**Toggle Interactive Features:**
Click the ⚙️ gear button (bottom-right) to enable 3D cards, cursor trail, or sound effects. Or edit defaults in `content.js`.

---

## ⚙️ GitHub Actions Automation

All optimizations are **manual and optional**. When you're ready to optimize your portfolio, use the workflow:

### How It Works

1. Go to **Actions → Portfolio Optimization Suite → Run workflow**
2. Select what you want to optimize:
   - ☑ **Optimize images** — Resize and compress photos
   - ☑ **Minify CSS/JS** — Reduce file sizes by 30-60%
   - ☑ **Compress files** — Generate Gzip/Brotli versions (60-80% smaller)
   - ☑ **Check links** — Find broken URLs and missing images
3. Click **Run workflow**
4. Done! Optimized files auto-commit to your repo

### What Gets Optimized

| Optimization | Impact | Auto-Enabled |
|---|---|---|
| 🖼️ Images | Profile photos → 400×400px, projects → 1200px max | When you run it |
| 🗜️ CSS/JS | Minifies to `.min.css` / `.min.js` | When you run it |
| 📦 Compression | Creates `.gz` and `.br` files | When you run it |
| 🔗 Link Check | Finds broken URLs and image references | When you run it |
| 📊 Lighthouse | Performance audit scores | Auto-generated |

**Cost?** GitHub's free tier includes 2000 minutes/month. This workflow uses ~3-5 minutes per run. That's 400+ optimizations per month for free.

---

## 🛠️ Technical Stack

- **Pure HTML/CSS/JavaScript** — No build tools, no npm packages
- **ES6+ features** — Works in all modern browsers
- **GitHub Pages ready** — Deploy with one push
- **Auto-optimized** — Images, CSS, JS compressed automatically
- **Accessible** — Semantic HTML, ARIA labels, keyboard navigation
- **Responsive** — Mobile-first design

### Browser Support
- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Mobile)


---

## ❓ FAQ

**Q: How do I deploy this?**
A: Push your forked repo to GitHub, then enable GitHub Pages in settings (Settings → Pages → Deploy from `main` branch). Done!

**Q: Do I need to know JavaScript?**
A: No! Just edit `js/content.js`. It's structured like simple data—no coding required.

**Q: Can I use this for commercial purposes?**
A: Yes, it's free for personal and commercial use.

**Q: How do I update my Medium blog automatically?**
A: Set your Medium RSS feed URL in `content.js`: `"mediumFeedUrl": "https://yourname.medium.com/feed"`

**Q: My Medium feed isn't loading. Why?**
A: Check your RSS URL format. If still blocked, set it to `null` and add blog posts manually.

**Q: Can I use this on Netlify/Vercel instead of GitHub Pages?**
A: Yes! Both support static sites. Just push your repo and connect—no changes needed.

**Q: How do I customize colors?**
A: Edit the CSS variables in `styles.css`. Search for `[data-theme="light"]` and update color values.

**Q: Can I add more pages?**
A: Copy an existing HTML file, update the navigation in `content.js`, and match the structure.

**Q: What about interactive features?**
A: All optional. Click the ⚙️ gear button to enable 3D cards, cursor trail, sound, or progress bar. Disabled by default.

**Q: How much does optimization cost?**
A: Free! GitHub Actions free tier gives 2000 minutes/month. This workflow uses ~3-5 minutes per run.

**Q: Do I have to run optimizations?**
A: Nope! The portfolio works great without them. Optimizations are optional for faster load times.

---

## 📄 License

Free to use for personal and commercial projects. See LICENSE file for details.

---

## 🤝 Contributing

Found a bug or have a suggestion? Open an issue or submit a pull request!

---

## 🎉 Ready to Go?

1. **Fork this repo** on GitHub
2. **Edit `js/content.js`** with your information
3. **Add your profile photo** to `images/profile.jpg`
4. **Push to GitHub** and enable Pages
5. **Share your new portfolio!** 🚀

Built with ❤️ in India. Happy building!

Questions? Check the [FAQ](#-faq) or open an issue.