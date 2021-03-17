let signUp = document.querySelector(".signUp");
let register = document.querySelector(".register");
let left = document.querySelector(".left");
let right = document.querySelector(".right");

signUp.addEventListener("click", () => {
    if (!right.classList.contains('invisible')) {
        right.classList.add('invisible');
    }
    if (left.classList.contains('invisible')) {
        left.classList.remove('invisible');
    }
})

register.addEventListener("click", () => {
    if (!left.classList.contains('invisible')) {
        left.classList.add('invisible');
    }
    if (right.classList.contains('invisible')) {
        right.classList.remove('invisible');
    }
})

export {signUp,register};