let navLinks = document.querySelectorAll("nav .nav-link");
for (let i = 0; i < navLinks.length; i++) {
    navLinks[i].addEventListener('pointerenter', (event) => {
        event.target.style.border = "2px solid red";
    });

    navLinks[i].addEventListener('pointerleave', (event) => {
        event.target.style.border = "";
    });
}