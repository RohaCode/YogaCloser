const slider = document.getElementById('transform-slider');
const image = document.getElementById('transform-image');
const label = document.getElementById('transform-label');

const imageUrls = ['image/women8.webp', 'image/women9.webp'];
const labelTexts = ['До', 'После'];

let currentImageIndex = 0;

if (image) {
  image.src = imageUrls[currentImageIndex];
  label.textContent = labelTexts[currentImageIndex];

  slider.addEventListener('click', () => {
    image.style.opacity = 0;
    label.style.opacity = 0;

    setTimeout(() => {
      currentImageIndex = (currentImageIndex + 1) % imageUrls.length;
      image.src = imageUrls[currentImageIndex];
      label.textContent = labelTexts[currentImageIndex];

      image.onload = () => {
        image.style.opacity = 1;
        label.style.opacity = 1;
      };
    }, 500);
  });
}

const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');
const burgerIcon = document.getElementById('burger-icon');
const closeIcon = document.getElementById('close-icon');

mobileMenuButton.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden');
  burgerIcon.classList.toggle('hidden');
  closeIcon.classList.toggle('hidden');
  if (!mobileMenu.classList.contains('hidden')) {
    document.body.classList.add('overflow-hidden');
  } else {
    document.body.classList.remove('overflow-hidden');
  }
});
