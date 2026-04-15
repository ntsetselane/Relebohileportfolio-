// Typing Animation
const words = ["Software Engineer", "Web Developer", "Problem Solver"];
let i = 0, j = 0, current = "", deleting = false;

function type() {
  current = words[i];

  if (deleting) {
    document.getElementById("typing").textContent = current.substring(0, j--);
  } else {
    document.getElementById("typing").textContent = current.substring(0, j++);
  }

  if (!deleting && j === current.length) {
    deleting = true;
    setTimeout(type, 1000);
    return;
  }

  if (deleting && j === 0) {
    deleting = false;
    i = (i + 1) % words.length;
  }

  setTimeout(type, deleting ? 50 : 100);
}
type();

// Scroll Reveal
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
});

document.querySelectorAll(".hidden").forEach(el => observer.observe(el));

// Active Nav
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    if (pageYOffset >= sectionTop - 200) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });
});

// Theme Toggle
document.getElementById("themeToggle").onclick = () => {
  document.body.classList.toggle("light");
};

// Fake Contact Submit
document.querySelector(".contact-form").onsubmit = (e) => {
  e.preventDefault();
  alert("Message sent successfully 🚀");
};