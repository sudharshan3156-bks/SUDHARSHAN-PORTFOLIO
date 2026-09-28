/**
 * ============================================================================
 * PORTFOLIO CLIENT ENGINE & CONFIGURATION
 * Futuristic, High-Performance, Vanilla JavaScript
 * ============================================================================
 */

/* ============================================================================
   1. USER CONFIGURATION & DATA BINDINGS (EDIT YOUR DETAILS HERE EASILY)
   ============================================================================ */
const PORTFOLIO_CONFIG = {
  // Personal Information
  fullName: "[ENTER YOUR NAME]",
  shortName: "[YOUR NAME]",
  role: "Engineering Student",
  email: "[ENTER EMAIL]",
  phone: "[ENTER PHONE]",
  location: "[ENTER LOCATION]",

  // Academic Details
  collegeName: "[COLLEGE NAME]",
  department: "[DEPARTMENT]",
  degree: "B.E. / B.Tech in [DEPARTMENT]",
  cgpa: "[CGPA]",

  // Hero Section Dynamic Cycling Roles
  typewriterRoles: [
    "Engineering Student",
    "Full Stack Developer",
    "AI & ML Enthusiast",
    "IoT Developer",
    "Problem Solver"
  ],

  // Social Links
  socialLinks: {
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    instagram: "https://instagram.com"
  }
};

/* ============================================================================
   2. DETAILED PROJECT CASE STUDIES (Populated in Modal)
   ============================================================================ */
const PROJECT_DETAILS = {
  "water-purification": {
    title: "Smart Water Purification & Quality Monitoring System",
    category: "AI + IoT • Embedded Systems • Telemetry",
    overview: "An automated edge IoT system integrating multi-parameter electrochemical sensors (pH, TDS, Turbidity) with an ESP32 microcontroller to evaluate water purity in real time, trigger failsafe filtration actuators, and publish telemetry to cloud monitoring dashboards.",
    problemStatement: "Industrial effluents and municipal water distribution points suffer from rapid chemical and microbial contamination. Conventional laboratory testing cycles require 24 to 72 hours, resulting in unsafe water distribution before contamination is detected.",
    proposedSolution: "Engineered an intelligent cyber-physical system using ESP32 edge processing. Sensor streams are normalized and evaluated using lightweight decision-tree threshold logic to instantly detect hazardous conditions and trigger automated electro-mechanical valve shutoffs.",
    technologies: ["ESP32 Microcontroller", "Sensors (pH, TDS, Turbidity)", "Embedded C/C++", "MQTT Protocol", "Python ML", "Wokwi Simulator"],
    features: [
      "Real-time sensor telemetry with multi-parameter calibration curves",
      "Low-latency MQTT edge messaging to interactive cloud monitoring dashboards",
      "Automated electro-mechanical shutoff valve isolation upon anomaly detection",
      "Firmware logic simulated and stress-tested in Wokwi simulator",
      "Low-power sleep cycles optimized for remote deployment"
    ],
    myContribution: "Architected firmware on ESP32, calibrated sensor analog-to-digital conversions, wrote MQTT transmission logic, and integrated live telemetry dashboard.",
    challenges: "Resolving sensor signal drift and high ADC noise on ESP32 by implementing a software-level exponential moving average (EMA) filter.",
    outcome: "Reduced contamination detection latency from days to under 3.5 seconds with 97.8% classification accuracy during test validation.",
    githubLink: "https://github.com",
    demoLink: "#live-demo"
  },

  "energy-optimizer": {
    title: "AI-Powered Self-Learning Energy Optimizer",
    category: "Artificial Intelligence • Industrial IoT • Analytics",
    overview: "A cyber-physical Digital Energy Twin solution that monitors and optimizes industrial and campus power consumption using continuous sensor telemetry, predictive load modeling, and unsupervised anomaly detection.",
    problemStatement: "Industrial facilities and commercial buildings face severe power peak tariffs and irregular load spikes due to uncoordinated HVAC, lighting, and motor equipment operation without automated predictive scheduling.",
    proposedSolution: "Built a Digital Energy Twin combining supervised machine learning regression algorithms that analyze historical power draw, ambient temperature, and production schedules to forecast peak loads and prescribe automated load shifting.",
    technologies: ["Python", "Scikit-Learn", "FastAPI", "IoT Current & Power Sensors", "Digital Twin Architecture", "Chart.js", "Docker"],
    features: [
      "Time-series power load forecasting with high predictive reliability",
      "Real-time anomaly detection for equipment overloads and phase imbalances",
      "Digital Twin telemetry dashboard displaying live current draw and carbon impact",
      "Automated alert notifications via Webhooks and RESTful endpoints",
      "Adaptive load scheduling recommendations for high-power machinery"
    ],
    myContribution: "Developed the predictive machine learning pipeline, trained time-series regressors, built the FastAPI backend, and designed the real-time monitoring interface.",
    challenges: "Handling missing sensor packets and noisy telemetry during rapid voltage dips by deploying an automated data imputation pipeline.",
    outcome: "Simulated up to 24.6% reduction in peak-hour energy billing through automated load shifting and predictive maintenance.",
    githubLink: "https://github.com",
    demoLink: "#live-demo"
  },

  "web-portal": {
    title: "Responsive Academic & Developer Web Portal",
    category: "Web Development • Database Systems • UI/UX",
    overview: "A responsive full-stack web platform engineered with role-based access control, relational database schema, dynamic project filtering, secure session workflows, and accessible responsive interfaces.",
    problemStatement: "Academic institutions and student developer teams lack a unified, secure platform for code sharing, project verification, milestone tracking, and technical peer review.",
    proposedSolution: "Designed a centralized full-stack web portal featuring normalized MySQL database models, modular RESTful APIs, responsive glassmorphic frontend UI, and secure authenticated endpoints.",
    technologies: ["HTML5 / Semantic Tags", "CSS3 / Modern Grid & Flexbox", "JavaScript (ES6+)", "PHP Backend", "MySQL Database", "REST APIs"],
    features: [
      "Dynamic project submission, categorization, and peer feedback workflow",
      "Responsive, mobile-first design with accessible keyboard navigation (WCAG 2.1)",
      "Relational MySQL database schema with parameterized queries for security",
      "RESTful API endpoints for seamless data integration and search filtering",
      "Instant client-side input validation and error feedback mechanisms"
    ],
    myContribution: "Designed normalized database tables, built RESTful endpoints, implemented client-side dynamic search filtering, and ensured cross-browser responsive design.",
    challenges: "Maintaining sub-100ms response times under multi-field search queries by indexing foreign keys and implementing client-side debouncing.",
    outcome: "Delivered a lightweight, highly responsive developer portal tested across desktop and mobile devices with zero external framework overhead.",
    githubLink: "https://github.com",
    demoLink: "#live-demo"
  }
};

/* ============================================================================
   3. INITIALIZATION ON DOM CONTENT LOADED
   ============================================================================ */
document.addEventListener("DOMContentLoaded", () => {
  initDataBindings();
  initTheme();
  initTypewriter();
  initNavbar();
  initTechCanvas();
  initCustomCursor();
  initScrollProgress();
  initScrollReveal();
  initSkillsFilter();
  initProjectModals();
  initContactForm();
  initClipboardCopy();
  initBackToTop();
  updateCurrentYear();
});

/* ============================================================================
   4. DATA BINDINGS (Populates config values into elements with data-bind)
   ============================================================================ */
function initDataBindings() {
  document.querySelectorAll("[data-bind]").forEach(elem => {
    const key = elem.getAttribute("data-bind");
    if (PORTFOLIO_CONFIG[key]) {
      elem.textContent = PORTFOLIO_CONFIG[key];
    }
  });

  document.querySelectorAll("[data-bind-href]").forEach(elem => {
    const key = elem.getAttribute("data-bind-href");
    if (key === "emailLink") {
      elem.href = `mailto:${PORTFOLIO_CONFIG.email}`;
    } else if (key === "phoneLink") {
      elem.href = `tel:${PORTFOLIO_CONFIG.phone}`;
    }
  });
}

/* ============================================================================
   5. DARK / LIGHT THEME TOGGLE WITH LOCALSTORAGE
   ============================================================================ */
function initTheme() {
  const themeToggleBtn = document.getElementById("theme-toggle-btn");
  const storedTheme = localStorage.getItem("portfolio_theme");

  if (storedTheme) {
    document.documentElement.setAttribute("data-theme", storedTheme);
  } else if (window.matchMedia && window.matchMedia("(prefers-color-scheme: light)").matches) {
    document.documentElement.setAttribute("data-theme", "light");
  } else {
    document.documentElement.setAttribute("data-theme", "dark");
  }

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener("click", () => {
      const currentTheme = document.documentElement.getAttribute("data-theme") || "dark";
      const newTheme = currentTheme === "dark" ? "light" : "dark";
      document.documentElement.setAttribute("data-theme", newTheme);
      localStorage.setItem("portfolio_theme", newTheme);
    });
  }
}

/* ============================================================================
   6. DYNAMIC TYPEWRITER EFFECT
   ============================================================================ */
function initTypewriter() {
  const textElement = document.getElementById("typewriter-text");
  if (!textElement) return;

  const roles = PORTFOLIO_CONFIG.typewriterRoles;
  let roleIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let typingSpeed = 100;

  function typeStep() {
    const currentRole = roles[roleIndex];

    if (isDeleting) {
      charIndex--;
      textElement.textContent = currentRole.substring(0, charIndex);
      typingSpeed = 50;
    } else {
      charIndex++;
      textElement.textContent = currentRole.substring(0, charIndex);
      typingSpeed = 110;
    }

    if (!isDeleting && charIndex === currentRole.length) {
      // Pause at full word
      typingSpeed = 1800;
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      // Switch to next word
      isDeleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
      typingSpeed = 450;
    }

    setTimeout(typeStep, typingSpeed);
  }

  typeStep();
}

/* ============================================================================
   7. NAVBAR BEHAVIOR (Sticky Blur, Mobile Drawer, Active Scroll Spy)
   ============================================================================ */
function initNavbar() {
  const navbar = document.getElementById("navbar");
  const mobileToggle = document.getElementById("mobile-toggle-btn");
  const navMenu = document.getElementById("nav-menu");
  const navLinks = document.querySelectorAll(".nav-link");

  // Sticky header blur on scroll
  window.addEventListener("scroll", () => {
    if (window.scrollY > 25) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  }, { passive: true });

  // Mobile drawer toggle
  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener("click", () => {
      const isOpen = navMenu.classList.toggle("open");
      mobileToggle.classList.toggle("active", isOpen);
      mobileToggle.setAttribute("aria-expanded", String(isOpen));
      document.body.style.overflow = isOpen ? "hidden" : "";
    });

    // Close mobile drawer on link click
    navLinks.forEach(link => {
      link.addEventListener("click", () => {
        if (navMenu.classList.contains("open")) {
          navMenu.classList.remove("open");
          mobileToggle.classList.remove("active");
          mobileToggle.setAttribute("aria-expanded", "false");
          document.body.style.overflow = "";
        }
      });
    });

    // Close on Escape key
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && navMenu.classList.contains("open")) {
        navMenu.classList.remove("open");
        mobileToggle.classList.remove("active");
        mobileToggle.setAttribute("aria-expanded", "false");
        document.body.style.overflow = "";
      }
    });
  }

  // Active section scroll spy
  const sections = document.querySelectorAll("section[id]");
  function updateActiveNav() {
    const scrollPos = window.scrollY + 180;
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute("id");

      if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
        navLinks.forEach(link => {
          if (link.getAttribute("href") === `#${sectionId}`) {
            link.classList.add("active");
          } else {
            link.classList.remove("active");
          }
        });
      }
    });
  }

  window.addEventListener("scroll", updateActiveNav, { passive: true });
  updateActiveNav();
}

/* ============================================================================
   8. INTERACTIVE BACKGROUND TECH CANVAS (Particle Network)
   ============================================================================ */
function initTechCanvas() {
  const canvas = document.getElementById("tech-canvas");
  if (!canvas) return;

  const ctx = canvas.getContext("2d");
  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  // Check reduced motion
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (prefersReducedMotion) return;

  let particles = [];
  const particleCount = Math.min(Math.floor((width * height) / 16000), 75);

  const mouse = {
    x: null,
    y: null,
    radius: 120
  };

  window.addEventListener("mousemove", (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  }, { passive: true });

  window.addEventListener("mouseleave", () => {
    mouse.x = null;
    mouse.y = null;
  });

  window.addEventListener("resize", () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
    createParticles();
  });

  class Particle {
    constructor() {
      this.x = Math.random() * width;
      this.y = Math.random() * height;
      this.size = Math.random() * 2 + 1;
      this.vx = (Math.random() - 0.5) * 0.7;
      this.vy = (Math.random() - 0.5) * 0.7;
    }

    update() {
      this.x += this.vx;
      this.y += this.vy;

      // Bounce off screen boundaries
      if (this.x < 0 || this.x > width) this.vx *= -1;
      if (this.y < 0 || this.y > height) this.vy *= -1;

      // Mouse interactive push
      if (mouse.x !== null && mouse.y !== null) {
        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < mouse.radius) {
          const force = (mouse.radius - dist) / mouse.radius;
          this.x -= (dx / dist) * force * 1.5;
          this.y -= (dy / dist) * force * 1.5;
        }
      }
    }

    draw() {
      const isLight = document.documentElement.getAttribute("data-theme") === "light";
      ctx.fillStyle = isLight ? "rgba(2, 132, 199, 0.4)" : "rgba(0, 242, 254, 0.55)";
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  function createParticles() {
    particles = [];
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }
  }

  function connectParticles() {
    const isLight = document.documentElement.getAttribute("data-theme") === "light";
    const maxDist = 130;

    for (let a = 0; a < particles.length; a++) {
      for (let b = a + 1; b < particles.length; b++) {
        const dx = particles[a].x - particles[b].x;
        const dy = particles[a].y - particles[b].y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < maxDist) {
          const alpha = (1 - dist / maxDist) * (isLight ? 0.15 : 0.22);
          ctx.strokeStyle = isLight
            ? `rgba(2, 132, 199, ${alpha})`
            : `rgba(0, 242, 254, ${alpha})`;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(particles[a].x, particles[a].y);
          ctx.lineTo(particles[b].x, particles[b].y);
          ctx.stroke();
        }
      }
    }
  }

  function animate() {
    ctx.clearRect(0, 0, width, height);
    for (let i = 0; i < particles.length; i++) {
      particles[i].update();
      particles[i].draw();
    }
    connectParticles();
    requestAnimationFrame(animate);
  }

  createParticles();
  animate();
}

/* ============================================================================
   9. CUSTOM INTERACTIVE CURSOR (Desktop Only)
   ============================================================================ */
function initCustomCursor() {
  const dot = document.getElementById("cursor-dot");
  const ring = document.getElementById("cursor-ring");

  if (!dot || !ring) return;

  // Disable on touch devices
  if ("ontouchstart" in window || navigator.maxTouchPoints > 0) {
    dot.style.display = "none";
    ring.style.display = "none";
    return;
  }

  let mouseX = -100, mouseY = -100;
  let ringX = -100, ringY = -100;

  window.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    dot.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
  });

  // Smooth lerp trailing ring
  function renderRing() {
    ringX += (mouseX - ringX) * 0.16;
    ringY += (mouseY - ringY) * 0.16;
    ring.style.transform = `translate(${ringX}px, ${ringY}px)`;
    requestAnimationFrame(renderRing);
  }
  renderRing();

  // Hover states on clickable elements
  const hoverTargets = document.querySelectorAll("a, button, input, textarea, .glass-card");
  hoverTargets.forEach(el => {
    el.addEventListener("mouseenter", () => ring.classList.add("cursor-hover"));
    el.addEventListener("mouseleave", () => ring.classList.remove("cursor-hover"));
  });
}

/* ============================================================================
   10. SCROLL PROGRESS INDICATOR BAR
   ============================================================================ */
function initScrollProgress() {
  const progressBar = document.getElementById("scroll-progress-bar");
  if (!progressBar) return;

  window.addEventListener("scroll", () => {
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = totalHeight > 0 ? (window.scrollY / totalHeight) * 100 : 0;
    progressBar.style.width = `${progress}%`;
  }, { passive: true });
}

/* ============================================================================
   11. SCROLL-TRIGGERED REVEAL ANIMATIONS
   ============================================================================ */
function initScrollReveal() {
  const revealElements = document.querySelectorAll("[data-reveal]");
  if (!revealElements.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-revealed");
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.12,
    rootMargin: "0px 0px -40px 0px"
  });

  revealElements.forEach(el => observer.observe(el));
}

/* ============================================================================
   12. SKILLS CATEGORY FILTER
   ============================================================================ */
function initSkillsFilter() {
  const filterButtons = document.querySelectorAll(".skill-tab-btn");
  const skillCards = document.querySelectorAll(".skill-card");

  filterButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      filterButtons.forEach(b => {
        b.classList.remove("active");
        b.setAttribute("aria-selected", "false");
      });
      btn.classList.add("active");
      btn.setAttribute("aria-selected", "true");

      const category = btn.getAttribute("data-category");

      skillCards.forEach(card => {
        const cardCat = card.getAttribute("data-category");
        if (category === "all" || cardCat === category) {
          card.classList.remove("hidden");
          card.style.opacity = "1";
        } else {
          card.classList.add("hidden");
          card.style.opacity = "0";
        }
      });
    });
  });
}

/* ============================================================================
   13. PROJECT DETAILS MODAL
   ============================================================================ */
function initProjectModals() {
  const modal = document.getElementById("project-modal");
  const modalContentArea = document.getElementById("modal-content-area");
  const closeBtn = document.getElementById("modal-close-btn");
  const backdrop = modal ? modal.querySelector(".modal-backdrop") : null;
  const detailButtons = document.querySelectorAll(".project-details-btn");

  if (!modal || !modalContentArea) return;

  function openProjectModal(projectId) {
    const data = PROJECT_DETAILS[projectId];
    if (!data) return;

    modalContentArea.innerHTML = `
      <div class="modal-header-block">
        <span class="modal-category-tag">${data.category}</span>
        <h2 class="modal-title" id="modal-project-title">${data.title}</h2>
      </div>

      <div class="modal-case-section">
        <h3 class="modal-section-title">Project Overview</h3>
        <p class="modal-text">${data.overview}</p>
      </div>

      <div class="modal-case-section">
        <h3 class="modal-section-title">Problem Statement</h3>
        <p class="modal-text">${data.problemStatement}</p>
      </div>

      <div class="modal-case-section">
        <h3 class="modal-section-title">Proposed Engineering Solution</h3>
        <p class="modal-text">${data.proposedSolution}</p>
      </div>

      <div class="modal-case-section">
        <h3 class="modal-section-title">Key Engineering Features</h3>
        <ul class="modal-feature-list">
          ${data.features.map(f => `<li>${f}</li>`).join("")}
        </ul>
      </div>

      <div class="modal-case-section">
        <h3 class="modal-section-title">Technologies &amp; Frameworks</h3>
        <div class="project-tags" style="margin-top: 0.5rem;">
          ${data.technologies.map(t => `<span class="tag">${t}</span>`).join("")}
        </div>
      </div>

      <div class="modal-case-section">
        <h3 class="modal-section-title">My Technical Contribution</h3>
        <p class="modal-text">${data.myContribution}</p>
      </div>

      <div class="modal-case-section">
        <h3 class="modal-section-title">Engineering Challenges &amp; Solutions</h3>
        <p class="modal-text">${data.challenges}</p>
      </div>

      <div class="modal-case-section">
        <h3 class="modal-section-title">Measurable Outcome &amp; Impact</h3>
        <p class="modal-text">${data.outcome}</p>
      </div>

      <div class="modal-actions-bar">
        <a href="${data.githubLink}" target="_blank" rel="noopener noreferrer" class="btn btn-outline-cyan">
          <span>View on GitHub</span>
          <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
        </a>
        <a href="${data.demoLink}" class="btn btn-primary">
          <span>Live Demo / Presentation</span>
          <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
        </a>
      </div>
    `;

    modal.classList.add("active");
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  }

  function closeModal() {
    modal.classList.remove("active");
    modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  }

  detailButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const pid = btn.getAttribute("data-project-id");
      openProjectModal(pid);
    });
  });

  if (closeBtn) closeBtn.addEventListener("click", closeModal);
  if (backdrop) backdrop.addEventListener("click", closeModal);

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.classList.contains("active")) {
      closeModal();
    }
  });
}

/* ============================================================================
   14. CONTACT FORM VALIDATION & CLIENT-SIDE SIMULATION
   ============================================================================ */
function initContactForm() {
  const form = document.getElementById("contact-form");
  const alertBox = document.getElementById("form-status-alert");
  const submitBtn = document.getElementById("contact-submit-btn");

  if (!form || !submitBtn) return;

  const btnText = submitBtn.querySelector(".btn-text");
  const btnIcon = submitBtn.querySelector(".btn-icon");
  const btnSpinner = submitBtn.querySelector(".btn-spinner");

  const nameInput = document.getElementById("contact-name");
  const emailInput = document.getElementById("contact-email");
  const subjectInput = document.getElementById("contact-subject");
  const messageInput = document.getElementById("contact-message");

  const nameError = document.getElementById("name-error");
  const emailError = document.getElementById("email-error");
  const subjectError = document.getElementById("subject-error");
  const messageError = document.getElementById("message-error");

  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    let isValid = true;

    // Validate Name
    if (!nameInput.value.trim()) {
      nameInput.classList.add("invalid");
      nameError.classList.add("visible");
      isValid = false;
    } else {
      nameInput.classList.remove("invalid");
      nameError.classList.remove("visible");
    }

    // Validate Email
    if (!validateEmail(emailInput.value.trim())) {
      emailInput.classList.add("invalid");
      emailError.classList.add("visible");
      isValid = false;
    } else {
      emailInput.classList.remove("invalid");
      emailError.classList.remove("visible");
    }

    // Validate Subject
    if (!subjectInput.value.trim()) {
      subjectInput.classList.add("invalid");
      subjectError.classList.add("visible");
      isValid = false;
    } else {
      subjectInput.classList.remove("invalid");
      subjectError.classList.remove("visible");
    }

    // Validate Message
    if (!messageInput.value.trim()) {
      messageInput.classList.add("invalid");
      messageError.classList.add("visible");
      isValid = false;
    } else {
      messageInput.classList.remove("invalid");
      messageError.classList.remove("visible");
    }

    if (!isValid) return;

    // Simulate sending state
    btnText.textContent = "Sending...";
    btnIcon.style.display = "none";
    btnSpinner.style.display = "inline-block";
    submitBtn.disabled = true;

    setTimeout(() => {
      btnText.textContent = "Send Message";
      btnIcon.style.display = "inline-block";
      btnSpinner.style.display = "none";
      submitBtn.disabled = false;

      // Show success notification
      alertBox.textContent = `Thank you, ${nameInput.value.trim()}! Your message has been sent successfully. I will get back to you soon.`;
      alertBox.className = "form-status-alert success";
      alertBox.style.display = "block";

      form.reset();

      // Hide alert after 6 seconds
      setTimeout(() => {
        alertBox.style.display = "none";
      }, 6000);
    }, 1200);
  });

  // Real-time error clearance on input
  [nameInput, emailInput, subjectInput, messageInput].forEach(input => {
    input.addEventListener("input", () => {
      input.classList.remove("invalid");
      const err = input.parentElement.querySelector(".field-error-msg");
      if (err) err.classList.remove("visible");
    });
  });
}

/* ============================================================================
   15. COPY TO CLIPBOARD HELPER
   ============================================================================ */
function initClipboardCopy() {
  const copyBtn = document.getElementById("copy-email-btn");
  if (!copyBtn) return;

  copyBtn.addEventListener("click", () => {
    const emailToCopy = PORTFOLIO_CONFIG.email;
    navigator.clipboard.writeText(emailToCopy).then(() => {
      copyBtn.classList.add("copied");
      copyBtn.title = "Copied to clipboard!";
      setTimeout(() => {
        copyBtn.classList.remove("copied");
        copyBtn.title = "Copy Email Address";
      }, 2000);
    }).catch(() => {
      console.warn("Clipboard write failed");
    });
  });
}

/* ============================================================================
   16. BACK TO TOP BUTTON
   ============================================================================ */
function initBackToTop() {
  const backToTopBtn = document.getElementById("back-to-top-btn");
  if (!backToTopBtn) return;

  window.addEventListener("scroll", () => {
    if (window.scrollY > 400) {
      backToTopBtn.style.opacity = "1";
      backToTopBtn.style.pointerEvents = "auto";
    } else {
      backToTopBtn.style.opacity = "0";
      backToTopBtn.style.pointerEvents = "none";
    }
  }, { passive: true });

  backToTopBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
}

/* ============================================================================
   17. FOOTER CURRENT YEAR
   ============================================================================ */
function updateCurrentYear() {
  const yearElement = document.getElementById("current-year");
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }
}
