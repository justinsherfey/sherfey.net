document.addEventListener("DOMContentLoaded", () => {
  // --- Smooth Scrolling for Navigation Links ---
  const navLinks = document.querySelectorAll("nav ul li a");

  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      const href = this.getAttribute("href");
      // Check if it's an internal link
      if (href && href.startsWith("#")) {
        e.preventDefault();
        const targetId = href.substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
          // Remove active class from all links
          navLinks.forEach((navLink) => navLink.classList.remove("active"));
          // Add active class to the clicked link
          this.classList.add("active");

          const offsetTop = targetElement.offsetTop - 60; // Adjust for fixed header height

          window.scrollTo({
            top: offsetTop,
            behavior: "smooth",
          });
        }
      }
    });
  });

  // --- Active Nav Link on Scroll ---
  const sections = document.querySelectorAll("main section");
  window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (pageYOffset >= sectionTop - sectionHeight / 3 - 70) {
        // 70 is header height
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href").substring(1) === current) {
        link.classList.add("active");
      }
    });
    // Special case for hero section if at the very top
    if (window.pageYOffset < sections[0].offsetTop - 70) {
      navLinks.forEach((link) => link.classList.remove("active"));
      const homeLink = document.querySelector('nav ul li a[href="#hero"]');
      if (homeLink) homeLink.classList.add("active");
    }
  });

  // --- Typing Animation for Hero Headline ---
  const heroHeadline = document.getElementById("hero-headline");
  if (heroHeadline) {
    const text = heroHeadline.innerText;
    heroHeadline.innerText = ""; // Clear original text
    let i = 0;
    const speed = 100; // Milliseconds per character

    function typeWriter() {
      if (i < text.length) {
        heroHeadline.innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
      }
    }
    // Start typing after a short delay to ensure page is settled
    setTimeout(typeWriter, 500);
  }

  // --- Update Copyright Year ---
  const currentYearSpan = document.getElementById("currentYear");
  if (currentYearSpan) {
    currentYearSpan.textContent = new Date().getFullYear();
  }

  // --- Optional: Simple Fade-in on Scroll for Sections ---
  // This is a basic version. For more complex animations, consider Intersection Observer API.
  const faders = document.querySelectorAll(".content-section, .portfolio-item");

  const appearOptions = {
    threshold: 0.2, // Trigger when 20% of the element is visible
    rootMargin: "0px 0px -50px 0px", // Adjust trigger point
  };

  const appearOnScroll = new IntersectionObserver(function (
    entries,
    appearOnScroll
  ) {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      } else {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
        appearOnScroll.unobserve(entry.target); // Stop observing once animated
      }
    });
  },
  appearOptions);

  faders.forEach((fader) => {
    fader.style.opacity = "0"; // Initially hide
    fader.style.transform = "translateY(20px)"; // Initial offset
    fader.style.transition = "opacity 0.6s ease-out, transform 0.6s ease-out";
    appearOnScroll.observe(fader);
  });
});
