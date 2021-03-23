
// windo on scroll fixed class
window.addEventListener("scroll", ()=>{
	const header = document.querySelector('.header');
	header.classList.toggle("header-fixed", window.scrollY >= 200);
});

// top navbar dropdown
const navtoggle = document.querySelector('.nav-toggle');
const addLink = document.querySelector('.main-nav');
navtoggle.addEventListener("click", ()=>{
	addLink.classList.toggle("main-nav-toggle");
});


// main navbar dropdown
const navbartoggle = document.querySelector('.navbar-toggle');
const navbarLinks = document.querySelector('.navbar-links');
navbartoggle.addEventListener("click", ()=>{
	navbarLinks.classList.toggle("show-links");
});
