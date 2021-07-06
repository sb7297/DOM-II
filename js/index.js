let navLinks = document.querySelectorAll("nav .nav-link");
for (let i = 0; i < navLinks.length; i++) {
    navLinks[i].addEventListener('pointerenter', (event) => {
        event.target.style.border = "2px solid red";
    });

    navLinks[i].addEventListener('pointerleave', (event) => {
        event.target.style.border = "";
    });
}

window.addEventListener('resize', (event) => {
    document.querySelector('body').textContent = "resizing is illegal"; 
});

window.addEventListener('load', (event) => {
    document.querySelector('.logo-heading').textContent = "Loaded Bus"; 
});

window.addEventListener('scroll', (event) => {
    document.querySelector('.logo-heading').style.color = "pink"; 
});

let btns = document.querySelectorAll('.destination .btn');
for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener('dblclick', (event) => {
        event.target.style.backgroundColor = 'red';
    });
}