document.addEventListener('DOMContentLoaded', () => {
  const slider = document.getElementById('transform-slider');
  const image = document.getElementById('transform-image');
  const label = document.getElementById('transform-label');
  const imageUrls = ['image/women8.webp', 'image/women9.webp'];
  const labelTexts = ['До', 'После'];
  let currentImageIndex = 0;

  if (image) {
    image.src = imageUrls[currentImageIndex];
    if (label) {
      label.textContent = labelTexts[currentImageIndex];
    }

    if (slider) {
      slider.addEventListener('click', () => {
        if (image) {
          image.style.opacity = 0;
        }
        if (label) {
          label.style.opacity = 0;
        }

        setTimeout(() => {
          currentImageIndex = (currentImageIndex + 1) % imageUrls.length;
          if (image) {
            image.src = imageUrls[currentImageIndex];
          }
          if (label) {
            label.textContent = labelTexts[currentImageIndex];
          }

          if (image) {
            image.onload = () => {
              image.style.opacity = 1;
              if (label) {
                label.style.opacity = 1;
              }
            };
          }
        }, 500);
      });
    }
  }

  const mobileMenuButton = document.getElementById('mobile-menu-button');
  const mobileMenu = document.getElementById('mobile-menu');
  const burgerIcon = document.getElementById('burger-icon');
  const closeIcon = document.getElementById('close-icon');
  const mobileMenuLinks = document.querySelectorAll('#mobile-menu a');

  const toggleMenu = () => {
    if (mobileMenu && burgerIcon && closeIcon) {
      mobileMenu.classList.toggle('hidden');
      burgerIcon.classList.toggle('hidden');
      closeIcon.classList.toggle('hidden');
      document.body.classList.toggle(
        'overflow-hidden',
        !mobileMenu.classList.contains('hidden')
      );
    }
  };

  if (mobileMenuButton) {
    mobileMenuButton.addEventListener('click', toggleMenu);
  }

  mobileMenuLinks.forEach((link) => {
    link.addEventListener('click', () => {
      if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
        toggleMenu();
      }
    });
  });

  const downloadCourseBtn = document.getElementById('download-course-btn');
  const startPracticeBtn = document.getElementById('start-practice-btn');
  const startNowBtn = document.getElementById('start-now-btn');

  const courseLink =
    'https://docs.google.com/document/d/10o5X_CV322vUpl3h-30K4j_2o_2d5g6k/edit?usp=sharing&ouid=110974825923847896757&rtpof=true&sd=true';

  const openCourseLink = () => {
    window.open(courseLink, '_blank');
  };

  if (downloadCourseBtn) {
    downloadCourseBtn.addEventListener('click', openCourseLink);
  }
  if (startPracticeBtn) {
    startPracticeBtn.addEventListener('click', openCourseLink);
  }
  if (startNowBtn) {
    startNowBtn.addEventListener('click', openCourseLink);
  }
});
