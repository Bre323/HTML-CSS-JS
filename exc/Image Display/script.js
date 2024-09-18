
const galleryContainer = document.querySelector('.gallery-container');
const galleryControlsContainer = document.querySelector('.gallery-controls');
const galleryControls = ['previous', 'next'];
const galleryItems = document.querySelectorAll('.gallery-item');


class Carousel {
    constructor(container, controls, items) {
        this.carouselContainer = container;
        this.carouselControls = controls;
        this.carouselArray = [...items];
    }

    updateGallery() {
        this.carouselArray.forEach(element => {
            element.classList.remove('item-1');
            element.classList.remove('item-2');
            element.classList.remove('item-3');
            element.classList.remove('item-4');
            element.classList.remove('item-5');
        });

        this.carouselArray.slice(0, 5).forEach((element, index) => {
            element.classList.add(`item-${index + 1}`);
        });
    }

    setCurrentState(direction) {
        if(direction.className === 'gallery-controls-previous') {
            this.carouselArray.unshift(this.carouselArray.pop());
        }
        else {
            this.carouselArray.push(this.carouselArray.shift());
        }
        this.updateGallery();
    }

    setControls() {
        this.carouselControls.forEach(control => {
            let button = document.createElement('button');
            button.className = `gallery-controls-${control}`;
            galleryControlsContainer.appendChild(button);
            
            document.querySelector(`.gallery-controls-${control}`).innerText = control;
        });
    }

    useControls() {
        const triggers = [...galleryControlsContainer.childNodes];
        
        triggers.forEach(control => {
            control.addEventListener('click', event => {
                event.preventDefault();
                this.setCurrentState(control);
            });
        });
    }
}


const exampleCarousel = new Carousel(galleryContainer, galleryControls, galleryItems);
exampleCarousel.setControls();
exampleCarousel.useControls();
