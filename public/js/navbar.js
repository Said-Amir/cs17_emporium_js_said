let navLogo = document.querySelector('#navLogo');
let nav = document.querySelector('nav');

window.addEventListener('scroll', () => {
    if (window.pageYOffset >= '10') {
        navLogo.classList.add('fixed-top');
        navLogo.classList.remove('flex-column');
        navLogo.classList.add('justify-content-between');
        nav.style.marginTop = '0px';
    }else{
        navLogo.classList.remove('fixed-top');
        navLogo.classList.add('flex-column');
        navLogo.classList.remove('justify-content-between');
        nav.style.marginTop = '80px';
    }
});

export {navLogo};