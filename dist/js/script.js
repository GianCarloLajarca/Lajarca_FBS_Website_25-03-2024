const burgerbtn = document.querySelector(".burgir-menu");
const headerA = document.querySelector("nav");
burgerbtn.addEventListener("click", () => {
  burgerbtn.classList.toggle("open");
  headerA.classList.toggle("open");
});

window.addEventListener('scroll', function() {
  var header = document.querySelector('.back-top');

  if (window.scrollY > 0) {
      header.classList.remove(".back-top");
      header.classList.add("sticky");
  } else {
      header.classList.add(".back-top");
      header.classList.remove("sticky");
      
  }
});


