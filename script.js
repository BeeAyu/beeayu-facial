const menuBtn=document.getElementById("menuBtn"),nav=document.getElementById("navMenu");
menuBtn.addEventListener("click",()=>nav.classList.toggle("open"));
document.querySelectorAll("nav a").forEach(a=>a.addEventListener("click",()=>nav.classList.remove("open")));
window.addEventListener("scroll",()=>document.getElementById("header").classList.toggle("scrolled",window.scrollY>30));