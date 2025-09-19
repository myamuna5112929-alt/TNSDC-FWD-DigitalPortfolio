// Smooth scroll

document.querySelectorAll("nav a").forEach(link => {

  link.addEventListener("click", function(e) {

    e.preventDefault();

    const targetId = this.getAttribute("href").substring(1);

    document.getElementById(targetId).scrollIntoView({ behavior: "smooth" });

  });

});

// Contact form

document.querySelector("form").addEventListener("submit", e => {

  e.preventDefault();

  alert("Thank you! Your message has been sent 🎉");

});