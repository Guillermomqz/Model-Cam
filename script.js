document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

const elements = document.querySelectorAll(".fade-in");
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("opacity-100", "translate-y-0");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

elements.forEach(el => {
  el.classList.add("opacity-0", "translate-y-4", "transition-all", "duration-700");
  observer.observe(el);
});
