let next = document.querySelector('.next');
let previous = document.querySelector('.previous');
let slider = document.querySelector('.slider');

next.addEventListener('click', () => {
    let image = document.querySelectorAll('.image');
    slider.appendChild(image[0]);
});

previous.addEventListener('click', () => {
    let image = document.querySelectorAll('.image');
    slider.prepend(image[image.length - 1]);
});
