/**
 * MAIN LMS INTERACTION SCRIPT
 * Science, Technology, and Society (STS)
 */

document.addEventListener("DOMContentLoaded", () => {
  initReadingProgress();
  initThemeToggle();
  initTeacherMode();
  initSidebarNavigation();
  initLightbox();
  initObjectivesTracker();
  initCollapsibles();
  initPrintButton();
});

/* 1. Reading Progress Bar */
function initReadingProgress() {
  const bar = document.getElementById("reading-progress-bar");
  if (!bar) return;

  window.addEventListener("scroll", () => {
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = totalHeight > 0 ? (window.scrollY / totalHeight) * 100 : 0;
    bar.style.width = `${Math.min(100, Math.max(0, progress))}%`;
  });
}

/* 2. Dark / Light Theme Toggle */
function initThemeToggle() {
  const toggleBtn = document.getElementById("theme-toggle-btn");
  const storedTheme = localStorage.getItem("sts_theme") || "light";
  document.documentElement.setAttribute("data-theme", storedTheme);
  updateThemeIcon(storedTheme);

  if (toggleBtn) {
    toggleBtn.addEventListener("click", () => {
      const current = document.documentElement.getAttribute("data-theme") || "light";
      const next = current === "light" ? "dark" : "light";
      document.documentElement.setAttribute("data-theme", next);
      localStorage.setItem("sts_theme", next);
      updateThemeIcon(next);
    });
  }
}

function updateThemeIcon(theme) {
  const icon = document.getElementById("theme-icon");
  if (icon) {
    icon.textContent = theme === "dark" ? "☀️" : "🌙";
  }
}

/* 3. Teacher Mode Toggle */
function initTeacherMode() {
  const teacherBtn = document.getElementById("teacher-mode-btn");
  const savedState = localStorage.getItem("sts_teacher_mode") === "true";

  if (savedState) {
    document.body.classList.add("show-teacher-notes");
    if (teacherBtn) {
      teacherBtn.classList.add("teacher-active");
      teacherBtn.innerHTML = `<span>🎓</span> Teacher Mode: ON`;
    }
  }

  if (teacherBtn) {
    teacherBtn.addEventListener("click", () => {
      const isNowActive = document.body.classList.toggle("show-teacher-notes");
      localStorage.setItem("sts_teacher_mode", isNowActive);
      if (isNowActive) {
        teacherBtn.classList.add("teacher-active");
        teacherBtn.innerHTML = `<span>🎓</span> Teacher Mode: ON`;
      } else {
        teacherBtn.classList.remove("teacher-active");
        teacherBtn.innerHTML = `<span>📖</span> Student Mode`;
      }
    });
  }
}

/* 4. Sidebar Navigation & Active ScrollSpy */
function initSidebarNavigation() {
  const navLinks = document.querySelectorAll(".nav-item-link");
  const sections = document.querySelectorAll(".teaching-section");
  const mobileToggle = document.getElementById("mobile-menu-toggle");
  const sidebar = document.querySelector(".course-sidebar");

  if (mobileToggle && sidebar) {
    mobileToggle.addEventListener("click", () => {
      sidebar.classList.toggle("open");
    });

    // Close sidebar on navigation click on mobile
    navLinks.forEach(link => {
      link.addEventListener("click", () => {
        if (window.innerWidth <= 1024) {
          sidebar.classList.remove("open");
        }
      });
    });
  }

  // ScrollSpy using IntersectionObserver
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute("id");
          navLinks.forEach(link => {
            if (link.getAttribute("href") === `#${id}`) {
              link.classList.add("active");
            } else {
              link.classList.remove("active");
            }
          });
        }
      });
    },
    { rootMargin: "-20% 0px -70% 0px" }
  );

  sections.forEach(sec => observer.observe(sec));
}

/* 5. Lightbox Modal for Images */
function initLightbox() {
  const modal = document.getElementById("image-lightbox-modal");
  const modalImg = document.getElementById("lightbox-img");
  const modalTitle = document.getElementById("lightbox-title");
  const modalDesc = document.getElementById("lightbox-desc");
  const closeBtn = document.getElementById("lightbox-close-btn");

  if (!modal) return;

  window.openLightbox = function(src, title, desc) {
    modalImg.src = src;
    modalTitle.innerText = title || "Visual Learning Material";
    modalDesc.innerText = desc || "";
    modal.classList.add("active");
    document.body.style.overflow = "hidden";
  };

  function closeModal() {
    modal.classList.remove("active");
    document.body.style.overflow = "auto";
  }

  if (closeBtn) closeBtn.addEventListener("click", closeModal);
  modal.addEventListener("click", (e) => {
    if (e.target === modal) closeModal();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.classList.contains("active")) {
      closeModal();
    }
  });
}

/* 6. Learning Objectives Tracker */
function initObjectivesTracker() {
  const checkboxes = document.querySelectorAll(".obj-checkbox");
  const counter = document.getElementById("obj-completed-counter");

  function updateCount() {
    let checkedCount = 0;
    checkboxes.forEach((cb, idx) => {
      if (cb.checked) checkedCount++;
    });
    if (counter) {
      counter.innerText = `${checkedCount} of ${checkboxes.length} Achieved`;
    }
  }

  checkboxes.forEach((cb, idx) => {
    const saved = localStorage.getItem(`sts_obj_${idx}`);
    if (saved === "true") cb.checked = true;

    cb.addEventListener("change", () => {
      localStorage.setItem(`sts_obj_${idx}`, cb.checked);
      updateCount();
    });
  });

  updateCount();
}

/* 7. Collapsibles */
function initCollapsibles() {
  const collapsibles = document.querySelectorAll(".collapsible-box");
  collapsibles.forEach(box => {
    const header = box.querySelector(".collapsible-header");
    if (header) {
      header.addEventListener("click", () => {
        box.classList.toggle("open");
      });
    }
  });
}

/* 8. Print/Export Handler */
function initPrintButton() {
  const printBtn = document.getElementById("print-lesson-btn");
  if (printBtn) {
    printBtn.addEventListener("click", () => {
      window.print();
    });
  }
}
