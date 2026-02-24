// Prevent browser from restoring scroll position on reload (avoids layout shifts)
if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual';
}

// Ensure page starts at top on load so banner remains stable
window.addEventListener('load', () => {
  // run after load to override any browser automatic scrolling
  setTimeout(() => window.scrollTo(0, 0), 0);
});

const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {
  const windowHeight = window.innerHeight;

  reveals.forEach(section => {
    const top = section.getBoundingClientRect().top;

    if (top < windowHeight - 100) {
      section.classList.add("active");
    }
  });
}

// Only reveal when the user scrolls (prevents movement on reload)
window.addEventListener("scroll", revealOnScroll, { passive: true });
