let darkmode1 = document.querySelector('#darkMode1');
let darkmode2 = document.querySelector('#darkMode2');

darkmode2.addEventListener('click', () => {
    let whiteMode = document.querySelectorAll('.bg-white');
    let textWhite = document.querySelectorAll('.text-dark');
    console.log(whiteMode);
    
    whiteMode.forEach(element => {
        element.classList.remove('bg-white');
        element.classList.add('bg-dark');
    });

    textWhite.forEach(element => {
        element.classList.remove('text-dark');
        element.classList.add('text-white');
    });
});

darkmode1.addEventListener('click', () => {
    let darkMode = document.querySelectorAll('.bg-dark');
    let textDark = document.querySelectorAll('.text-white');
    console.log(darkMode);

    darkMode.forEach(element => {
        element.classList.remove('bg-dark');
        element.classList.add('bg-white');
    });

    textDark.forEach(element => {
        element.classList.remove('text-white');
        element.classList.add('text-dark');
    });
});

export {darkmode1, darkmode2};