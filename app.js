// app.js

document.addEventListener("DOMContentLoaded", function () {
  var currentPath = window.location.pathname; 
  var navLinks = document.querySelectorAll("nav a"); 
  
  navLinks.forEach(function (link) {

      link.addEventListener("click", function () {
         
          navLinks.forEach(function (navLink) {
              navLink.classList.remove("active");
          });
          link.classList.add("active");
      });
 
      if (link.getAttribute("href") === currentPath) {
          link.classList.add("active"); 
      }
  });
});
