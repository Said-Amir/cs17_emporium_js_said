let indicators = document.querySelectorAll('.indic');
let images = document.querySelectorAll('.img');

let translate = (nombre, translateValue) => {
    images.forEach((element, index) => {
        element.style.transform = `translateX(${(index*translateValue)-(nombre*translateValue)}%)`;
    });
};
indicators.forEach((element, index) => {
    element.addEventListener('click', () => {
        translate(index, 120);
    });
});
export {indicators,images};