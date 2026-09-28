# Futuristic Engineering & Developer Portfolio

A premium, modern, high-performance portfolio website engineered specifically for an **Engineering / Computer Science Student** applying for internships, campus placements, hackathons, academic research, and developer roles.

---

## 🚀 Live Preview & Quick Start

1. **Direct Browser View**:
   - Double-click [`index.html`](file:///C:/Users/ELCOT/.gemini/antigravity/brain/6556b81b-3b3e-4350-8bcc-557141086b32/portfolio/index.html) in your file explorer to open the website directly in Google Chrome, Microsoft Edge, Brave, or Firefox.
2. **VS Code Live Server**:
   - Open this `portfolio/` folder in VS Code.
   - Right-click `index.html` and select **"Open with Live Server"**.

---

## 📁 Project Structure

```
portfolio/
│
├── index.html          # Semantic HTML5 architecture with clearly marked EDITABLE sections
├── style.css           # Modern dark/light glassmorphic styling, responsive layout, animations
├── script.js           # Interactive particle canvas, typing engine, modals, and client config
│
├── assets/
│   ├── profile.svg     # Futuristic vector engineer avatar placeholder (replace with your profile.jpg)
│   ├── project1.svg    # Smart Water Purification & Quality Monitoring (AI + IoT) visual
│   ├── project2.svg    # AI-Powered Self-Learning Energy Optimizer visual
│   ├── project3.svg    # Responsive Academic & Developer Web Portal visual
│   ├── resume.pdf      # Sample resume template file
│   └── favicon.svg     # High-tech glowing SVG favicon
│
└── README.md           # Setup, customization guide, and deployment instructions
```

---

## 🎨 Key Features & Architectural Highlights

- **Aesthetic Engineering Identity**: Tailored color palette (deep navy `#060913`, electric cyan `#00f2fe`, vibrant blue `#4facfe`, and purple `#7928ca`), zero generic Bootstrap appearance.
- **Dark / Light Mode**: Seamless theme toggle stored in `localStorage` with system preference detection.
- **Dynamic Typewriter Effect**: Cycles through Engineering Student, Full Stack Developer, AI & ML Enthusiast, IoT Developer, and Problem Solver.
- **Profile Photo Stage**: Glowing multi-layered rotating HUD rings, subtle floating animation, "Open to Opportunities" status badge, and floating Digital Profile ID card.
- **Interactive Particle Constellation**: Lightweight HTML5 Canvas network reacting smoothly to mouse movement (respects `prefers-reduced-motion`).
- **Interactive Custom Cursor**: Desktop glowing follower ring that smoothly scales up on interactive elements.
- **Scroll Progress & Sticky Navbar**: Real-time progress bar at the top with glassmorphic backdrop-blur header and active section ScrollSpy.
- **Comprehensive Project Details Modal**: Click "View Details" on any project to inspect a full engineering case study (Problem Statement, Solution, Architecture, Contributions, Challenges, and Measurable Outcomes).
- **Skills Category Filtering**: Interactive filter tabs for Programming, Web Development, AI/ML, IoT, and Tools.
- **Client-Side Validated Contact Form**: Real-time feedback, simulated sending state, success notification, and direct `mailto:` fallback.
- **Accessibility & SEO Ready**: Semantic tags (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`), ARIA attributes, keyboard navigation, and Open Graph metadata.

---

## ✏️ How to Customize Your Details

You can edit your details in two quick ways:

### Method 1: Using `script.js` (Easiest)
Open [`script.js`](file:///C:/Users/ELCOT/.gemini/antigravity/brain/6556b81b-3b3e-4350-8bcc-557141086b32/portfolio/script.js) and update the `PORTFOLIO_CONFIG` object at the very top:
```javascript
const PORTFOLIO_CONFIG = {
  fullName: "Your Full Name",
  shortName: "Your First Name",
  role: "Engineering Student",
  email: "your.email@example.com",
  phone: "+91 98765 43210",
  location: "City, Country",
  collegeName: "Your College Name",
  department: "Computer Science & Engineering",
  cgpa: "8.8 / 10.0",
  ...
};
```

### Method 2: Editing [`index.html`](file:///C:/Users/ELCOT/.gemini/antigravity/brain/6556b81b-3b3e-4350-8bcc-557141086b32/portfolio/index.html) Directly
Every section in `index.html` has clear `<!-- EDITABLE: ... -->` comments:
- **Hero Section**: Edit your name, bio, and social links.
- **About Me**: Edit your background, degree, and location.
- **Education Timeline**: Update college name, regulation, CGPA, and coursework.
- **Skills Section**: Add or modify skill chips.
- **Featured Projects**: Update titles, descriptions, and GitHub/demo links.
- **Experience & Hackathons**: Update internship company, role, duration, and achievements.
- **Certifications**: Add issuing organization, dates, and credential IDs.

---

## 📷 How to Add Your Own Profile Photo

1. Place your photo inside the `assets/` folder and name it `profile.jpg` (or `.png`).
2. In [`index.html`](file:///C:/Users/ELCOT/.gemini/antigravity/brain/6556b81b-3b3e-4350-8bcc-557141086b32/portfolio/index.html), find line:
   ```html
   <img src="assets/profile.svg" alt="[YOUR NAME] - Profile Photo" class="profile-image" id="profile-img-element" onerror="this.src='assets/profile.svg';">
   ```
3. Change `src="assets/profile.svg"` to `src="assets/profile.jpg"`.
4. The styling automatically applies the circular mask, glowing animated borders, and floating effect!

---

## 📄 How to Replace Your Resume

1. Save your resume PDF as `resume.pdf` inside the `assets/` folder (replacing `assets/resume.pdf`).
2. The navbar button, hero CTA button, and dedicated resume section will all automatically download your new PDF!

---

## 🌐 Free 2-Minute Deployment Options

### Option A: GitHub Pages
1. Create a new GitHub repository named `portfolio` (or `<your-username>.github.io`).
2. Push all files from this directory to your repository.
3. In GitHub, go to **Settings** > **Pages** > Select branch `main` and root `/` > Click **Save**.
4. Your website will be live at `https://<your-username>.github.io/portfolio/`!

### Option B: Netlify
1. Go to [Netlify.com](https://www.netlify.com/) and log in.
2. Drag and drop this `portfolio` folder directly into the Netlify dashboard.
3. Your website goes live instantly with a free custom SSL certificate!
