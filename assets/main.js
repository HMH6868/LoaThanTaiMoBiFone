const carousel = document.querySelector('.carousel-container');
const images = Array.from(document.querySelectorAll('.carousel img'));
const prevButton = document.querySelector('.carousel-button.prev');
const nextButton = document.querySelector('.carousel-button.next');

let currentIndex = 0; 

function updateCarousel() {
    const orderedImages = [
        images[currentIndex],
        images[(currentIndex + 1) % images.length],
        images[(currentIndex + 2) % images.length],
    ];

    carousel.innerHTML = '';
    orderedImages.forEach(image => {
        carousel.appendChild(image);
    });
}

// Xử lý nút prev
prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateCarousel();
});

// Xử lý nút next
nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % images.length; 
    updateCarousel();
});

updateCarousel();

