/**
 * ═══════════════════════════════════════════════════════════════════════════
 * PORTFOLIO CONFIGURATION
 * ═══════════════════════════════════════════════════════════════════════════
 * 
 * This is the ONLY file you need to edit to customize your portfolio.
 * 
 * ✏️  Edit Instructions:
 *    - Replace placeholder values with your actual information
 *    - All text fields accept plain text or simple HTML
 *    - Image paths are relative to the portfolio root folder
 *    - Font Awesome icons: browse at https://fontawesome.com/icons
 * 
 * 📦 JSON Format:
 *    - This file is structured as JSON for easy editing
 *    - All keys are in quotes: "key": "value"
 *    - Arrays use [brackets], objects use {braces}
 *    - No trailing commas on last items
 * 
 * 🚀 Getting Started:
 *    1. Add your profile photo to `images/profile.jpg`
 *    2. Update the profile section below with your details
 *    3. Customize projects, skills, and experience sections
 *    4. Open `index.html` in a browser to preview
 * 
 * ═══════════════════════════════════════════════════════════════════════════
 */

window.PORTFOLIO_DATA = {
  /**
   * ─────────────────────────────────────────────────────────────────────────
   * PROFILE — Your personal information and introduction
   * ─────────────────────────────────────────────────────────────────────────
   */
  "profile": {
    "name": "Chanandler Bong",
    "role": "Statistical Analysis · Sarcasm · Workplace Humor",
    "affiliation": null,
    
    // Profile photo: Add your image to images/ folder, then update path below
    // Recommended size: 400x400px square
    "photoUrl": "images/profile.jpg",
    
    "address": [
      "15 Yemen Road, Yemen",
    ],
    
    // Social links — Edit URLs and add/remove as needed
    "social": [
      { "label": "GitHub",   "url": "#",                         "icon": "fa-brands fa-github" },
      { "label": "LinkedIn", "url": "#",                         "icon": "fa-brands fa-linkedin-in" },
      { "label": "Medium",   "url": "#",                         "icon": "fa-brands fa-medium" },
      { "label": "Instagram",   "url": "#",                         "icon": "fa-brands fa-instagram" },
      { "label": "Email",    "url": "mailto:chandler@coffee.cup", "icon": "fa-solid fa-envelope" }
    ],
    
    // Medium RSS feed URL — Set to your Medium profile feed to auto-fetch articles
    // Format: "https://YOUR-USERNAME.medium.com/feed"
    // Set to null to disable live fetch
    "mediumFeedUrl": "null",
    
    // About section — Your introduction (displayed on homepage)
    "about": "I work in something involving numbers and data reconfiguration—honestly, even I'm not entirely sure what I do. But I do know how to make deadlines funny, navigate every social situation with deflection humor, and somehow get the job done despite looking like I'm perpetually unprepared. Could I BE any more overqualified?",
    
    // Signature points — 3 key statements about your work philosophy
    "signaturePoints": [
      "Delivering results with a punchline attached—because if you're not laughing, how would you know if I'm panicking?",
      "Turning awkward meetings into comedy sketches without sacrificing the actual work.",
      "Making the incomprehensible completely digestible through sheer force of personality."
    ]
  },

  /**
   * ─────────────────────────────────────────────────────────────────────────
   * NAVIGATION — Site navigation links (typically no need to change)
   * ─────────────────────────────────────────────────────────────────────────
   */
  "navigation": [
    { "label": "About",        "href": "index.html",        "faIcon": "fa-solid fa-user" },
    { "label": "Blog",         "href": "blog.html",         "faIcon": "fa-solid fa-pen-nib" },
    { "label": "Projects",     "href": "projects.html",     "faIcon": "fa-solid fa-code" },
    { "label": "Certificates", "href": "certificates.html", "faIcon": "fa-solid fa-award" },
    { "label": "CV",           "href": "cv.html",           "faIcon": "fa-solid fa-file-lines" },
    { "label": "Contact",      "href": "contact.html",      "faIcon": "fa-solid fa-envelope" }
  ],

  /**
   * ═════════════════════════════════════════════════════════════════════════
   * CV PAGE SECTIONS (in order as they appear on CV page)
   * ═════════════════════════════════════════════════════════════════════════
   */

  /**
   * ─────────────────────────────────────────────────────────────────────────
   * PROFESSIONAL SUMMARY — Your elevator pitch for CV page
   * ─────────────────────────────────────────────────────────────────────────
   * Displayed at the top of CV page after contact information
   * Keep it concise - 2-3 sentences that capture your expertise and value
   */
  "cv": {
    "summary": "Professional data analyst and professional self-saboteur. Excellent at making spreadsheets entertaining and workplace dysfunction manageable. Proven ability to stay employed despite appearing to have no idea what's happening. Fluent in excuses and Excel. References available upon request—assuming they'll still take my calls.",
    
    /**
     * Languages - Spoken/written languages with proficiency levels
     * Format: array of objects with language name and proficiency level
     */
    "languages": [
      { "language": "English", "proficiency": "Sarcasm Expert" },
      { "language": "Humor", "proficiency": "Native" },
      { "language": "Self-Deprecation", "proficiency": "Fluent" }
    ],
    
    /**
     * Achievements - Awards, recognitions, certifications, or notable accomplishments
     * Format: array of objects with title, issuer, date, and optional description
     */
    "achievements": [
      {
        "title": "Survived the Corporate World Without Getting Fired",
        "issuer": "Statistical Analysis & Data Reconfiguration, Inc.",
        "date": "2010-2024",
        "description": "Multiple departments, zero nervous breakdowns worth reporting"
      },
      {
        "title": "Made People Laugh During Mandatory Meetings",
        "issuer": "Office Life Achievement",
        "date": "Ongoing",
        "description": "Consistently turning awkward silence into actual entertainment"
      },
      {
        "title": "Reformed Smoker (Well, Mostly)",
        "issuer": "Internal Recognition",
        "date": "2009-Present",
        "description": "Quit cold turkey and proved nobody actually believed me until I stuck with it"
      }
    ]
  },

  /**
   * ─────────────────────────────────────────────────────────────────────────
   * SKILLS — Your technical and professional capabilities (CV page)
   * ─────────────────────────────────────────────────────────────────────────
   * Simple array of skill names - displayed as pills/buttons on CV page
   */
  "skills": [
    "Data Entry",
    "Excel Spreadsheets",
    "Awkward Humor",
    "Deflection",
    "Over-Thinking",
    "Sarcasm",
    "Self-Deprecation",
    "Panic Management",
    "Pretending to Know What's Happening",
    "Coffee Consumption",
    "Workplace Survival",
    "Could I BE any more prepared?",
    "Chandler-isms",
  ],

  /**
   * ─────────────────────────────────────────────────────────────────────────
   * EXPERIENCE — Work history and education (CV page)
   * ─────────────────────────────────────────────────────────────────────────
   * type: "work" or "education"
   * These render in separate sections on the CV page
   * Work entries go in Experience section, education entries go in Education section
   */
  "experience": [
    {
      "type": "work",
      "period": "2014 – Present",
      "role": "Advertisement Executive",
      "company": "Pierce and Flynn",
      "summary": "Finally got out of data reconfiguration and into a field where I can use my actual skills: making things sound better than they are.",
      "highlights": [
        "Convinced people to buy things they didn't know they needed.",
        "Survived learning entire new industry through panic and improvisation.",
        "Made partner while somehow still being the office joke."
      ]
    },
    {
      "type": "work",
      "period": "1996 – 2014",
      "role": "Statistical Analysis & Data Reconfiguration",
      "company": "Ziegler Fibber Warner",
      "summary": "Still genuinely unsure what I did here. Something involving data. Numbers were involved. Very important.",
      "highlights": [
        "Worked in an office for almost twenty years.",
        "Nobody really knew what I did, including me.",
        "Got promoted despite this fundamental ambiguity."
      ]
    },
    {
      "type": "education",
      "period": "1989",
      "role": "High School Diploma",
      "company": "New York Public Schools",
      "summary": "Survived high school through humor and avoiding eye contact.",
      "highlights": [
        "Did not get expelled",
        "Made friends who would stick around for decades",
        "Mastered the art of the cutting one-liner"
      ]
    },
    {
      "type": "education",
      "period": "1996",
      "role": "Self-directed Learning",
      "company": "School of Hard Knocks and Bad Relationships",
      "summary": "Continuous education in life, love, and learning to stop being your own worst enemy.",
      "highlights": [
        "Therapy (sooooo much therapy)",
        "Long-term relationship management",
        "Growing up without completely exploding"
      ]
    }
  ],

  /**
   * ═════════════════════════════════════════════════════════════════════════
   * OTHER PAGE CONTENT (Projects, Blog, Certificates, Contact)
   * ═════════════════════════════════════════════════════════════════════════
   */
  /**
   * ─────────────────────────────────────────────────────────────────────────
   * PROJECTS — Your portfolio projects (Projects page)
   * ─────────────────────────────────────────────────────────────────────────
   * Optional fields: images (array of image URLs - will show as slider if multiple)
   * Required fields: title, year, summary, stack, links
   * Recommended: impact, details (makes cards more informative)
   * Stack technologies are used for filtering on projects page
   */
  "projects": [
    {
      "title": "Could I BE Any More Organized? (Data Filing System)",
      "year": "2010",
      "summary": "A revolutionary approach to storing numbers in files in a way that makes sense. Shocking, I know.",
      // "impact": "Made spreadsheets slightly less terrifying.",
      "images": [
        "https://unsplash.com/photos/OXmym9cuaEY/download?force=true&w=640",
        "https://unsplash.com/photos/zoCDWPuiRuA/download?force=true&w=640",
        // "images/projects/xyz.png",
      ],
      "stack": ["Excel", "Procrastination", "Last-Minute Panic"],
      "details": [
        "Developed a filing system that actually makes sense.",
        "Color-coded spreadsheets so they look intentional instead of chaotic.",
        "Survived an office audit. Barely."
      ],
      "links": [
        { "label": "View System", "url": "#" },
        { "label": "Do Not Replicate", "url": "#" }
      ]
    },
    {
      "title": "The Breakup Newsletter Generator",
      "year": "2008",
      "summary": "An automated system for sending increasingly awkward emails to uh... well, a lot of people. Sometimes you need to end things via technology.",
      // "impact": "Perfected the art of digital ghosting.",
      "images": [
        "https://unsplash.com/photos/Y_LgXwQEx2c/download?force=true&w=640",
        // "images/projects/xyz.png"
      ],
      "stack": ["JavaScript", "Emotional Avoidance"],
      "details": [
        "Automated the entire relationship-ending process.",
        "Added template options for different situations.",
        "Surprisingly effective, though emotionally devastating."
      ],
      "links": [
        { "label": "Don't Look At This", "url": "#" }
      ]
    },
    {
      "title": "Could I BE Any More Awkward? (Conference Chat App)",
      "year": "2015",
      "summary": "A tool for making conversation starters less painful at networking events. Spoiler: they're always going to be awkward, but at least you have a script now.",
      "impact": "Reduced cold-sweat moments from 100% to 85% of social interactions.",
      "images": [
        "https://unsplash.com/photos/nN5L5GXKFz8/download?force=true&w=640",
      ],
      "stack": ["JavaScript", "Self-Help Books", "Anxiety Management"],
      "details": [
        "Built conversation starters for every networking scenario.",
        "Included emergency exit strategies for dead conversation.",
        "A work in progress, like everything in my life."
      ],
      "links": [
        { "label": "Use At Your Own Risk", "url": "#" }
      ]
    },
    {
      "title": "The Chandler Portfolio (This Very Website)",
      "year": "2026",
      "summary": "A personal site disguised as a professional portfolio but actually just a really elaborate way to explain myself to people who don't get my humor. Meta? Absolutely.",
      "impact": "Achieves confusing people while also impressing them. Simultaneously.",
      "images": [
        "https://unsplash.com/photos/mou0S7ViElQ/download?force=true&w=640",
        "https://unsplash.com/photos/zoCDWPuiRuA/download?force=true&w=640",
        "https://unsplash.com/photos/Y_LgXwQEx2c/download?force=true&w=640"
      ],
      "stack": ["HTML", "CSS", "JavaScript", "Excessive Self-Awareness"],
      "details": [
        "Built a portfolio that's actually fun to read.",
        "Managed to be professional AND funny. Mostly.",
        "Proves I can stick with something. Shocking."
      ],
      "links": [
        { "label": "You're Already Here", "url": "#top" }
      ]
    }
  ],
  /**
   * ─────────────────────────────────────────────────────────────────────────
   * BLOGS — Static blog entries (Blog page)
   * ─────────────────────────────────────────────────────────────────────────
   * If mediumFeedUrl is set, these entries are merged with live Medium posts
   * Platform options: "Medium", "Hashnode", "dev.to", "LinkedIn", "Personal"
   */
  "blogs": [
    {
      "title": "Could I BE Any More Afraid of Commitment? A Technical Deep Dive",
      "platform": "Medium",
      "date": "Mar 2026",
      "excerpt": "Why I've started three projects, abandoned five relationships, and only committed to one database. Mostly.",
      "url": "#"
    },
    {
      "title": "The Art of Looking Busy When You Have No Idea What You're Doing",
      "platform": "Hashnode",
      "date": "Jan 2026",
      "excerpt": "Strategies for surviving corporate life through strategic nodding and perfectly timed interruptions.",
      "url": "#"
    },
    {
      "title": "Why Your Resume Should Have A Sense Of Humor",
      "platform": "dev.to",
      "date": "Nov 2025",
      "excerpt": "If they're not laughing, they're not hiring. Probably. I don't make the rules. Actually, I do, and they're terrible.",
      "url": "#"
    },
    {
      "title": "Sarcasm As A Career Strategy: A Retrospective",
      "platform": "LinkedIn",
      "date": "Aug 2025",
      "excerpt": "I survived 20 years in corporate America on barely concealed disdain and well-timed one-liners. You can too.",
      "url": "#"
    }
  ],

  /**
   * ─────────────────────────────────────────────────────────────────────────
   * CERTIFICATES — Professional certifications (Certificates page)
   * ─────────────────────────────────────────────────────────────────────────
   * Display certificates using third-party URLs (Coursera, Udemy, LinkedIn, etc.)
   * Keywords are used for filtering on the certificates page
   */
  "certificates": [
    {
      "title": "Pretending To Understand DevOps & CI/CD While Looking Competent",
      "issuer": "Udemy",
      "date": "2021",
      "credentialUrl": "https://www.udemy.com/certificate/UC-your-certificate-id/",
      "imageUrl": "https://unsplash.com/photos/gkiZ-F3yPiY/download?force=true&w=640",
      "credentialId": null,
      "keywords": ["Fake It Till You Make It", "Deflection"]
    },
    {
      "title": "AWS Certified: I Can Talk About Clouds Without Crying",
      "issuer": "Amazon Web Services",
      "date": "2022",
      "credentialUrl": "https://www.credly.com/badges/your-badge-id",
      "imageUrl": "https://images.credly.com/images/0e284c3f-5164-4b21-8660-0d84737941bc/image.png",
      "credentialId": "AWS-ASA-12345",
      "keywords": ["Cloud", "Why Is This So Complicated?"]
    },
    {
      "title": "Microsoft Certified: Azure Fundamentals (Ask Me Anything, I Know Nothing)",
      "issuer": "Microsoft",
      "date": "2022",
      "credentialUrl": "https://www.credly.com/badges/your-badge-id",
      "imageUrl": "https://images.credly.com/images/be8fcaeb-c769-4858-b567-ffaaa73ce8cf/image.png",
      "credentialId": "AZ-900-12345",
      "keywords": ["Cloud", "Still Confused"]
    },
    {
      "title": "Java: From 'What Is This?' to 'I Still Don't Know'",
      "issuer": "Udemy",
      "date": "2020",
      "credentialUrl": "https://www.udemy.com/certificate/UC-your-certificate-id/",
      "imageUrl": "https://unsplash.com/photos/gkiZ-F3yPiY/download?force=true&w=640",
      "credentialId": null,
      "keywords": ["Programming", "Survivorship Bias"]
    },
    {
      "title": "JavaScript: Making Websites Do Things (Poorly)",
      "issuer": "LinkedIn Learning",
      "date": "2021",
      "credentialUrl": "https://www.linkedin.com/learning/certificates/your-certificate-id",
      "imageUrl": "https://unsplash.com/photos/JLj_NbvlDDo/download?force=true&w=640",
      "credentialId": null,
      "keywords": ["Web Development", "Panic Debugging"]
    },
    {
      "title": "UI/UX Design: How To Make Things Look Good (I Can't)",
      "issuer": "Coursera",
      "date": "2021",
      "credentialUrl": "https://www.coursera.org/account/accomplishments/certificate/your-certificate-id",
      "imageUrl": "https://unsplash.com/photos/6sG939tB3XQ/download?force=true&w=640",
      "credentialId": "COURSERA-12345",
      "keywords": ["Aesthetics", "My Apartment Begs To Differ"]
    },
    {
      "title": "Managing Virtual Teams: A Guide To Pretending You're In Control",
      "issuer": "LinkedIn Learning",
      "date": "2022",
      "credentialUrl": "https://www.linkedin.com/learning/certificates/your-certificate-id",
      "imageUrl": "https://unsplash.com/photos/JLj_NbvlDDo/download?force=true&w=640",
      "credentialId": null,
      "keywords": ["Leadership", "Organized Chaos"]
    }
  ],

  /**
   * ─────────────────────────────────────────────────────────────────────────
   * CONTACT — Contact page information
   * ─────────────────────────────────────────────────────────────────────────
   */
  "contact": {
    "copy": "I'm interested in opportunities where I can contribute my unique blend of expertise, humor, and questionable life choices. Whether it's contract work, collaboration, or just someone who gets my jokes—let's talk. Fair warning: I deflect with humor and over-explain things. It's a condition.",
    "resumeUrl": "#",
    "links": [
      { "label": "Email",    "faIcon": "fa-solid fa-envelope",     "value": "chandler@coffee.cup",          "url": "mailto:chandler@coffee.cup" },
      { "label": "LinkedIn", "faIcon": "fa-brands fa-linkedin-in", "value": "linkedin.com/in/chandler", "url": "#" },
      { "label": "GitHub",   "faIcon": "fa-brands fa-github",      "value": "github.com/can-i-be",      "url": "#" },
      { "label": "Writing",  "faIcon": "fa-brands fa-medium",      "value": "Read my rambling thoughts",           "url": "blog.html" }
    ]
  },

  /**
   * ═════════════════════════════════════════════════════════════════════════
   * INTERACTIVE FEATURES SETTINGS
   * ═════════════════════════════════════════════════════════════════════════
   * Control optional interactive features that enhance user experience
   * All features are DISABLED by default - users opt-in via settings panel
   */
  "interactiveFeatures": {
    "cardTilt": {
      "id": "cardTilt",
      "label": "3D Card Tilt",
      "description": "Cards tilt and follow your mouse with 3D depth effect",
      "defaultEnabled": false,
      "icon": "fa-solid fa-cube"
    },
    "cursorTrail": {
      "id": "cursorTrail",
      "label": "Cursor Trail",
      "description": "Elegant particles follow your cursor movement",
      "defaultEnabled": false,
      "icon": "fa-solid fa-wand-magic-sparkles"
    },
    "readingProgress": {
      "id": "readingProgress",
      "label": "Reading Progress Bar",
      "description": "Shows scroll progress at the top of pages",
      "defaultEnabled": false,
      "icon": "fa-solid fa-chart-simple"
    },
    "soundEffects": {
      "id": "soundEffects",
      "label": "Sound Effects",
      "description": "Subtle audio feedback on interactions",
      "defaultEnabled": false,
      "icon": "fa-solid fa-volume-high"
    }
  }
};
