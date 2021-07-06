let navLinks = document.querySelectorAll("nav .nav-link");
for (let i = 0; i < navLinks.length; i++) {
    navLinks[i].addEventListener('pointerenter', (event) => {
        event.target.style.border = "2px solid red";
    });

    navLinks[i].addEventListener('pointerleave', (event) => {
        event.target.style.border = "";
    });
    
    navLinks[i].addEventListener('click', (event) => {
        event.preventDefault();
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
        event.stopPropagation();
        event.target.style.backgroundColor = 'red';
    });
}

let destinations = document.querySelectorAll('.destination');
console.log(destinations);
for (let i = 0; i < destinations.length; i++) {
    destinations[i].addEventListener('click', (event) => {
        event.stopPropagation();
        event.target.style.backgroundColor = 'green';
    });
}

/*
the following prevents clicking the button turning it green
the desired behavior is:
1. single clicking a button does nothing
2. double clicking a button turns its background red
3. single clicking any other element in a .destination div turns its background green
*/
for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener('click', (event) => {
        event.stopPropagation();
    });
}

document.addEventListener("keydown", (event) => {
    document.querySelector('title').textContent = event.code;
});

document.addEventListener('paste', (event) => {
    document.querySelector('.intro h2').textContent = event.clipboardData.getData('text');
});

document.addEventListener('contextmenu', (event) => {
    event.preventDefault();
    document.querySelector('body').style.backgroundColor = 'purple';
});