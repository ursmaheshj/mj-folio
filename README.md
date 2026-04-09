# 🎨 Personal Portfolio Template

A clean, professional static portfolio site with a modern design. No build tools, no dependencies—just HTML, CSS, and vanilla JavaScript. Perfect for developers, engineers, and technical professionals who want a beautiful online presence without the complexity.

---

## ✨ Features

### Core Features
- **📱 Fully Responsive** — Mobile-first design with hamburger navigation
- **🌗 Light/Dark Mode** — Automatic theme switching with user preference
- **📝 Live Medium Integration** — Auto-fetches your latest Medium articles via RSS
- **🎯 Easy Customization** — Single `content.js` file for all your data
- **⚡ Performance Optimized** — Static files, no build step, instant loading
- **♿ Accessible** — Semantic HTML, ARIA labels, keyboard navigation

### Interactive Features (Optional, Opt-In)
- **🎪 3D Card Tilt** — Cards respond to mouse with 3D depth effect
- **✨ Cursor Trail** — Elegant particle effects follow your cursor
- **📊 Reading Progress Bar** — Visual scroll indicator at top of pages
- **🔊 Sound Effects** — Subtle audio feedback on interactions
- **⚙️ Settings Panel** — User-controlled feature toggles with persistence

> **Note:** All interactive features are **disabled by default**. Users opt-in via a floating settings button. Features respect `prefers-reduced-motion` for accessibility and use idle callbacks for **zero performance impact** on page load.

### Pages Included

1. **About** (`index.html`) — Profile, bio, signature points, latest posts preview
2. **Blog** (`blog.html`) — Writing from Medium + other platforms with filtering
3. **Projects** (`projects.html`) — Portfolio projects with multi-image sliders & stack filters
4. **Certificates** (`certificates.html`) — Professional certifications with keyword filtering
5. **CV** (`cv.html`) — Full resume with work, education, skills, languages, achievements
6. **Contact** (`contact.html`) — Contact information and social links

---

## 🚀 Quick Start

### 0. Star repo: 
```

```
### 1. Clone or Download

```bash
git clone https://github.com/ursmaheshj/mj-folio.git
cd mj-folio
```

### 2. Add Your Profile Photo

Place your profile photo in the `images/` folder:
```
images/profile.jpg  (recommended: 400x400px square)
```

> **🤖 Auto-Optimization:** If you're using GitHub, images are automatically resized and optimized on every commit via GitHub Actions. Just upload any size image and the workflow will handle optimization! See [`images/IMAGES_README.md`](images/IMAGES_README.md) for details.

### 3. Edit Your Information

Open [`js/content.js`](js/content.js) and update:

#### Essential Fields
- **`profile.name`** — Your full name
- **`profile.role`** — Your title/specialization
- **`profile.photoUrl`** — Set to `"images/profile.jpg"` after adding your photo
- **`profile.address`** — Location displayed on homepage
- **`profile.social`** — Update URLs for GitHub, LinkedIn, Medium, Email
- **`profile.mediumFeedUrl`** — Your Medium RSS feed (format: `https://username.medium.com/feed`)
- **`profile.about`** — Your introduction paragraph
- **`profile.signaturePoints`** — 3 key statements about your work philosophy

#### Content Sections
- **`cv.summary`** — Professional summary for CV page
- **`cv.languages`** — Spoken languages with proficiency levels
- **`cv.achievements`** — Awards, certifications, recognitions
- **`skills`** — Technical skills (displayed as pills on CV)
- **`projects`** — Portfolio projects with images, stack, and details
- **`experience`** — Work history and education
- **`contact`** — Contact links and resume URL
- **`blogs`** (optional) — Static blog entries if not using Medium RSS
- **`interactiveFeatures`** (optional) — Configure interactive feature defaults

> **📖 See [Content.js Field Reference](#-contentjs-field-reference) section below for detailed field descriptions**

### 4. Preview Locally

Simply open `index.html` in your browser:
```bash
# Windows
start index.html

# macOS
open index.html

# Linux
xdg-open index.html
```

### 5. Deploy

Deploy to any static hosting service:

- **GitHub Pages** — Push to `main` branch, enable Pages in settings
- **Netlify** — Drag and drop the folder
- **Vercel** — Import repository
- **AWS S3** — Upload to S3 bucket with static hosting enabled

No build step required! Just upload all files as-is.

---

## 📂 File Structure

```
portfolio/
├── index.html              # About page (homepage)
├── blog.html               # Blog/writing page
├── projects.html           # Projects showcase with multi-image sliders
├── certificates.html       # Certificates & achievements
├── cv.html                 # Full CV/resume with all sections
├── contact.html            # Contact information
├── README.md               # This file
├── INTERACTIVE_FEATURES.md # Interactive features guide
├── PERFORMANCE_OPTIMIZATION.md # JavaScript performance details
├── IMAGE_OPTIMIZATION.md   # Image workflow guide
├── PERFORMANCE_WORKFLOWS.md # Complete workflows guide
├── WORKFLOWS_QUICK_REF.md  # Quick reference for all workflows
├── lighthouserc.json       # Lighthouse performance config
├── .gitignore              # Git ignore rules
├── .github/                # 🤖 GitHub Actions workflow
│   ├── workflows/
│   │   └── portfolio-optimization.yml  # ⭐ Unified optimization workflow
│   └── link-check-config.json     # Link validation config
├── css/                    # 🎨 Stylesheets
│   ├── styles.css          # Main styles
│   ├── styles.min.css      # Minified (auto-generated)
│   ├── styles.min.css.gz   # Gzip compressed (auto-generated)
│   └── styles.min.css.br   # Brotli compressed (auto-generated)
├── js/                     # 📜 JavaScript
│   ├── content.js          # ✏️ YOUR DATA (edit this!)
│   ├── shared.js           # Utilities (theme, nav, hamburger)
│   ├── interactive.js      # Optional interactive enhancements
│   ├── script.js           # About page rendering
│   └── *.min.js            # Minified versions (auto-generated)
├── scripts/                # 🔧 Utility scripts
│   ├── optimize-images.py  # Image optimization script
│   └── requirements.txt    # Python dependencies
└── images/                 # 📁 Your images
    ├── profile.jpg         # Your photo (auto-resized to 400x400px)
    ├── projects/           # Project screenshots (auto-optimized)
    └── README.md           # Image guidelines
```

### File Organization

- **Root Level** — HTML pages + documentation
- **`css/`** — All stylesheets in one place
  - `styles.css` — Core styles + interactive feature styles
- **`js/`** — All JavaScript organized by purpose
  - `content.js` — **YOUR DATA** (only file you need to edit)
  - `shared.js` — Shared utilities across all pages
  - `interactive.js` — Optional interactive features (lazy-loaded)
  - `script.js` — About page-specific logic
- **`images/`** — All portfolio images and assets

---

## 🎨 Customization Guide

### Editing CV Sections

The CV page includes comprehensive sections. Edit in `js/content.js`:

#### Professional Summary
```js
"cv": {
  "summary": "Your elevator pitch - 2-3 sentences about your expertise"
}
```

#### Languages
```js
"languages": [
  { "language": "English", "proficiency": "Fluent" },
  { "language": "Hindi", "proficiency": "Native" }
]
```

#### Achievements
```js
"achievements": [
  {
    "title": "AWS Certified Solutions Architect",
    "issuer": "Amazon Web Services",
    "date": "2023",
    "description": "Brief description of the achievement"
  }
]
```

### Configuring Interactive Features

Interactive features are opt-in. To change defaults, edit `js/content.js`:

```js
"interactiveFeatures": {
  "cardTilt": {
    "defaultEnabled": false,  // Change to true to enable by default
    "label": "3D Card Tilt",
    "description": "Cards tilt and follow your mouse"
  }
  // ... other features
}
```

> **Performance:** Features use idle callbacks and lazy loading. Zero impact when disabled (default). See [PERFORMANCE_OPTIMIZATION.md](PERFORMANCE_OPTIMIZATION.md) for details.

### Changing Colors

Edit CSS custom properties in `styles.css`:

```css
/* Light theme */
[data-theme="light"] {
  --accent: #7209b7;        /* Purple accent */
  --bg: #ffffff;            /* Background */
  --text: #1a1a1a;          /* Text color */
}

/* Dark theme */
[data-theme="dark"] {
  --accent: #bd93f9;        /* Purple accent */
  --bg: #0f0f0f;            /* Background */
  --text: #e8e8e8;          /* Text color */
}
```

### Adding Certificates

Certificates are displayed using third-party URLs (no need to download images):

1. **Get your certificate URL** from the issuing platform:
   - **Udemy**: Go to your certificate → Right-click image → Copy image address
   - **Coursera**: Certificate page → View certificate → Copy image URL  
   - **LinkedIn Learning**: Certificate → Share → Copy image URL
   - **Credly** (AWS, Microsoft, etc.): Badge page → Copy badge image URL

2. **Add to `js/content.js`** in the `certificates` array:
   ```js
   {
     "title": "Your Certificate Name",
     "issuer": "Udemy",              // Platform name
     "date": "2024",                  // Year received
     "credentialUrl": "https://...",  // Link to verify certificate
     "imageUrl": "https://...",       // Direct image URL from platform
     "credentialId": "ABC123",        // Optional: credential ID
     "keywords": ["Python", "DevOps"] // For filtering
   }
   ```

3. **Keywords** create filter pills — use categories like:
   - Programming: `Python`, `Java`, `JavaScript`
   - Cloud: `AWS`, `Azure`, `Cloud`, `DevOps`
   - Other: `Web Development`, `UI/UX`, `Soft skills`

### Adding Project Images

Projects support **multiple images** with automatic slider:

1. Add images to `images/projects/`:
   ```
   images/projects/my-project-1.jpg
   images/projects/my-project-2.jpg
   images/projects/my-project-3.jpg
   ```

2. Update project in `js/content.js`:
   ```js
   {
     "title": "My Project",
     "images": [
       "images/projects/my-project-1.jpg",
       "images/projects/my-project-2.jpg",
       "images/projects/my-project-3.jpg"
     ],
     "stack": ["Python", "AWS"],  // Used for filtering
     ...
   }
   ```

> **Tip:** Multiple images automatically create a slider with navigation dots. Single image displays normally.

### Changing Fonts

Update Google Fonts imports in any HTML file's `<head>`:
```html
<link href="https://fonts.googleapis.com/css2?family=Your+Font&display=swap" rel="stylesheet">
```

Then update CSS variables in `styles.css`:
```css
--font-serif: 'Your Serif Font', serif;
--font-sans: 'Your Sans Font', sans-serif;
```

### Icons

This portfolio uses [Font Awesome 6.5.1](https://fontawesome.com/icons) for icons.

Browse icons and update `faIcon` fields in `content.js`:
```js
"faIcon": "fa-brands fa-github"  // Brand icons
"faIcon": "fa-solid fa-star"     // Solid icons
```

---

## 🛠️ Technical Details

### Browser Compatibility
- Modern browsers (Chrome, Firefox, Safari, Edge)
- JavaScript ES6+ features used
- Web Audio API for sound effects (optional feature)
- Canvas API for cursor trail (optional feature)
- No polyfills required for current browsers

### Performance
- **Zero dependencies** — No npm packages, no build step
- **Lazy loading** — Images and content load on demand
- **Single unified workflow** — All optimizations in one efficient GitHub Action
- **Auto-optimized images** — Resized and compressed automatically
- **Auto-minified assets** — CSS/JS minified on every commit
- **Pre-compressed files** — Gzip/Brotli generated for instant serving
- **Lighthouse monitoring** — Automated audits on push + when needed
- **Link validation** — Broken link detection + automatic issues
- **Async script loading** — interactive.js uses `defer` attribute
- **Idle callbacks** — Non-critical work during browser idle time
- **Throttled events** — Scroll/mouse handlers optimized to ~60fps
- **CSS custom properties** — Efficient theme switching
- **Minimal HTTP requests** — Optimized asset loading
- **Zero overhead** — Interactive features have <5ms impact when disabled (default)
 

### Interactive Features Architecture
- **Opt-in by default** — All features disabled until user enables them
- **localStorage persistence** — User preferences saved across sessions
- **Accessibility-first** — Respects `prefers-reduced-motion` preference
- **Lazy initialization** — Features only load when toggled on
- **Proper cleanup** — All event listeners removed when features disabled
- **Floating settings panel** — Easy access via bottom-right gear button

### Medium RSS Integration
The blog page auto-fetches your Medium articles via the RSS2JSON API:
- Works without CORS issues
- Falls back to static entries if fetch fails
- Merges Medium posts with other platform content

Set `mediumFeedUrl` to `null` in `content.js` to disable.

---

## 📝 Content.js Field Reference

### Profile Section
| Field | Type | Description | Example |
|-------|------|-------------|---------|
| `name` | String | Your full name | `"Chanandler Bong"` |
| `role` | String | Title/specialization | `"Statistical Analysis · Sarcasm · Workplace Humor"` |
| `affiliation` | String/null | Organization | `"Company Name"` or `null` |
| `photoUrl` | String/null | Profile photo path | `"images/profile.jpg"` |
| `address` | Array | City + Country | `["15, Yemen road, Yemen"]` |
| `social` | Array | Social links | See structure below |
| `mediumFeedUrl` | String/null | Medium RSS URL | `"https://username.medium.com/feed"` |
| `about` | String | About paragraph | Your introduction |
| `signaturePoints` | Array | 3 key statements | Work philosophy |

### CV Section
| Field | Type | Description |
|-------|------|-------------|
| `cv.summary` | String | Professional summary (2-3 sentences) |
| `cv.languages` | Array | Languages with proficiency levels |
| `cv.achievements` | Array | Awards, certifications, recognitions |

#### Languages Structure
```js
{
  "language": "English",
  "proficiency": "Fluent"  // or "Native", "Conversational", etc.
}
```

#### Achievements Structure
```js
{
  "title": "Achievement Name",
  "issuer": "Organization",
  "date": "2023",
  "description": "Brief description (optional)"
}
```

### Social Links Structure
```js
{
  "label": "GitHub",
  "url": "https://github.com/username",
  "icon": "fa-brands fa-github"
}
```

### Projects Structure
```js
{
  "title": "Project Name",
  "year": "2026",
  "summary": "One-line description",
  "impact": "Business impact (optional)",
  "images": [                          // Multiple images create slider
    "images/projects/img1.png",
    "images/projects/img2.png"
  ],
  "stack": ["Python", "AWS"],          // Used for filtering
  "details": ["Point 1", "Point 2"],
  "links": [
    { "label": "Demo", "url": "https://..." },
    { "label": "Source", "url": "https://..." }
  ]
}
```

> **Note:** The `stack` array values are used to create filter pills on the projects page. Any technology name becomes a filter.

### Experience Structure
```js
{
  "type": "work",                   // or "education"
  "period": "2024 – Present",
  "role": "Software Engineer",
  "company": "Company Name",
  "summary": "One-line summary",
  "highlights": [
    "Achievement 1",
    "Achievement 2"
  ]
}
```

---

## ⚙️ Interactive Features Guide

### What Are Interactive Features?

Optional visual enhancements that make your portfolio more engaging:

1. **🎪 3D Card Tilt** — Project/certificate cards tilt with mouse movement
2. **✨ Cursor Trail** — Elegant particles follow cursor (desktop only)
3. **📊 Reading Progress Bar** — Shows scroll progress at top of page
4. **🔊 Sound Effects** — Subtle audio on clicks/hovers

### How to Use

1. **Access Settings:** Click the floating **⚙️ gear button** (bottom-right corner)
2. **Toggle Features:** Turn features on/off with toggle switches
3. **Save:** Click "Save & Close" — preferences persist across sessions
4. **Test:** Move mouse, scroll, click to see effects

### Configuring Defaults

Edit `js/content.js` to change default states:

```js
"interactiveFeatures": {
  "cardTilt": {
    "defaultEnabled": false,  // Change to true to enable by default
    // ... other config
  }
}
```

### Disabling Interactive Features Completely

If you don't want interactive features at all:

**Option 1 — Remove script tag** from all HTML files:
```html
- Delete this line from all HTML files
 <script src="js/interactive.js" defer></script>
- remove js/interactive.js
- Then remove the interactive feature CSS from `css/styles.css` (search for "INTERACTIVE FEATURES").
```

> **Note:** Your site works perfectly without interactive features. They're purely optional enhancements.

### Performance Impact

- **Disabled (default):** <5ms overhead, <100KB memory
- **Enabled:** <2% CPU during animations, <2MB memory
- **Script loading:** Async/deferred, non-blocking
- **Accessibility:** Auto-disables if user prefers reduced motion


---

## 🎯 Next Steps After Setup

1. ✅ Add your profile photo to `images/profile.jpg`
2. ✅ Update all `#` placeholder URLs in `js/content.js`
3. ✅ Replace sample projects with your actual work
4. ✅ Update experience section with your job history
5. ✅ Add CV summary, languages, and achievements
6. ✅ Set your Medium RSS feed URL
7. ✅ Add project images to `images/projects/`
8. ✅ Upload your resume PDF and update `contact.resumeUrl`
9. ✅ Test interactive features (click gear button, enable features)
10. ✅ Test on mobile devices (especially hamburger menu)
11. ✅ Deploy to your hosting service
12. ✅ Share your new portfolio! 🎉

---

## 💡 Tips

### Content Best Practices
- **Keep it updated** — Portfolio sites work best when they reflect your current work
- **Real projects** — Focus on 3-5 strong projects rather than listing everything
- **Proofread** — First impressions matter; check spelling and grammar
- **Consistent voice** — Use the same writing style across all sections
- **Quantify impact** — Use numbers where possible (e.g., "improved efficiency by 40%")

### Technical Best Practices
- **Mobile first** — Most visitors will view on mobile; test thoroughly
- **Performance** — Keep images optimized (< 500KB each)
- **Accessibility** — Test with keyboard navigation and screen readers
- **Interactive features** — Leave disabled by default; let users choose their experience
- **Resume format** — Provide downloadable PDF in addition to online CV

### CV Section Tips
- **Professional Summary** — Keep to 2-3 sentences, focus on value proposition
- **Languages** — Only list languages you can actually use in professional context
- **Achievements** — Include date, issuer, and quantifiable impact where possible
- **Skills** — Group by category mentally but list as flat array (displayed as pills)

### Project Showcase Tips
- **Multiple images** — Use 2-4 images showing different aspects of the project
- **Stack filtering** — Use consistent technology names across projects
- **Links** — Provide live demo if possible, source code if public
- **Impact statement** — Answer "So what?" — why does this project matter?

---

## ❓ Frequently Asked Questions

### General Questions

**Q: Do I need to know JavaScript to use this template?**
A: No! Just edit `js/content.js` which is structured like JSON. Everything else is already built.

**Q: Can I use this for commercial purposes?**
A: Yes, this template is free to use for personal and commercial projects.

**Q: How do I add more pages?**
A: Copy an existing HTML file, update the navigation in `js/content.js`, and match the structure.

### Content Questions

**Q: How do I change the order of sections on the CV page?**
A: Edit `cv.html` and reorder the section blocks. Each section is clearly labeled in comments.

**Q: Can I add more than 3 signature points?**
A: Yes, edit the array in `profile.signaturePoints`. The layout will adapt automatically.

**Q: My Medium feed isn't loading. Why?**
A: Check that your Medium RSS URL is correct (format: `https://username.medium.com/feed`). Test it in a browser first. If blocked, set `mediumFeedUrl` to `null` and use static blog entries.

### Interactive Features Questions

**Q: Will interactive features slow down my site?**
A: No. Features use idle callbacks and lazy loading. When disabled (default), overhead is <5ms. 

**Q: Do interactive features work on mobile?**
A: Cursor trail is desktop-only. Other features (card tilt, progress bar, sound) work on mobile.

**Q: Can I customize the particle colors?**
A: Yes! Particles use your accent color from CSS variables. Change `--accent` in `css/styles.css`.

**Q: How do I enable features by default for all users?**
A: Edit `js/content.js` and set `defaultEnabled: true` for desired features in the `interactiveFeatures` object.

### Technical Questions

**Q: Do I need a build process?**
A: No! This is pure HTML/CSS/JS. Just open `index.html` or upload to any static host.

**Q: Can I use a custom domain?**
A: Yes. All hosting platforms (GitHub Pages, Netlify, Vercel) support custom domains.

**Q: How do I update Font Awesome to a newer version?**
A: Update the CDN link in the `<head>` of all HTML files. Current version is 6.5.1.

**Q: Can I add Google Analytics?**
A: Yes. Add your GA script to the `<head>` section of all HTML files.

**Q: What if a certificate image URL breaks?**
A: Update the `imageUrl` in `js/content.js` with a new URL. Or download the image and host it locally in `images/certificates/`.

### Image Optimization Questions

**Q: Do I need to manually resize images before uploading?**
A: No! If you're using GitHub, the automated workflow resizes and optimizes all images automatically on every commit. Just upload any size image.

**Q: How does automatic image optimization work?**
A: A GitHub Actions workflow triggers on every commit that includes image changes. It runs a Python script that:
- Resizes profile photos to 400x400px (cropped to center)
- Resizes project and certificate images to max 1200x800px (maintains aspect ratio)
- Compresses all images to <500KB with 85% JPEG quality
- Commits optimized images back automatically

**Q: Can I run image optimization locally?**
A: Yes! Install dependencies (`pip install Pillow`) and run `python scripts/optimize-images.py` from the project root.

**Q: What if I don't use GitHub?**
A: You can still run the optimization script manually before deploying. The GitHub Actions workflow is optional.

**Q: Will original large images be preserved?**
A: No, optimized images replace originals in the repository. Keep backups of original high-res images if needed.

**Q: What image formats are supported?**
A: JPG, PNG, and WebP formats are automatically optimized. Other formats are ignored.

### Workflow & Automation Questions

**Q: What automated workflows are included?**

A: One unified GitHub Actions workflow that includes:
1. **Image Optimization** — Resizes and compresses images (when images change)
2. **Asset Minification** — Creates `.min.css` and `.min.js` versions (when CSS/JS changes)
3. **Pre-Compression** — Generates `.gz` and `.br` files (when static files change)
4. **Link Health Check** — Detects broken links and missing images (on content changes)
5. **Lighthouse Audit** — Performance monitoring (on push/PR)

All steps run intelligently based on what files changed, in a single efficient workflow.


**Q: Do workflows cost money?**

A: GitHub Actions free tier includes 2000 minutes/month. The unified workflow uses ~3-5 minutes per push (only runs relevant steps). You can run ~400-600 optimizations per month on free tier 

**Q: Can I disable specific workflows?**

A: Yes. To disable the entire workflow, delete `.github/workflows/portfolio-optimization.yml` or disable Actions: Settings → Actions → Disable actions. To disable specific optimization steps, edit the workflow file and comment out unwanted steps.

**Q: How do I use minified assets?**
A: After workflows run, update HTML to reference `.min.css` and `.min.js` files:
```html
<link rel="stylesheet" href="css/styles.min.css">
<script src="js/shared.min.js"></script>
```

**Q: Do pre-compressed files work automatically?**
A: Yes on most CDNs (Netlify, Vercel, Firebase, Cloudflare). They automatically serve `.gz` or `.br` versions. GitHub Pages uses CDN compression, so pre-compressed files help indirectly.

**Q: How do I check Lighthouse scores?**
A: Go to Actions tab → "Lighthouse Performance Audit" → Latest run → View summary. Target: 90+ for all metrics.

---

## 📄 License

This portfolio template is free to use for personal and commercial projects.

---

## 🤝 Contributing

Found a bug or want to suggest an improvement? Feel free to:
- Open an issue
- Submit a pull request
- Fork and customize for your needs

---

## 🙏 Acknowledgments
- HTML
- CSS
- Javascript
- Bootstrap
- Copilot
- unsplash
- Github

Design inspired by [al-folio](https://github.com/alshedivat/al-folio) Jekyll theme.

Built with ❤️ in india.

---

**Happy building! 🚀**

Questions or issues? Open an issue or check the FAQ section above.