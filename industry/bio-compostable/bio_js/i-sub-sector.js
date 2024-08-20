document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.ind-slider-img');
    let currentIndex = 0;
    const totalImages = images.length;
    let intervalId;
  
    function showNextImage() {
      // Remove active class from the current image
      images[currentIndex].classList.remove('active');
  
      // Calculate the index of the next image
      currentIndex = (currentIndex + 1) % totalImages;
  
      // Add active class to the next image
      images[currentIndex].classList.add('active');
    }
  
    function startSlider() {
      intervalId = setInterval(showNextImage, 3000);
    }
  
    function stopSlider() {
      clearInterval(intervalId);
    }
  
    function showClickedImage(index) {
      // Remove active class from the current image
      images[currentIndex].classList.remove('active');
  
      // Set currentIndex to the clicked image index
      currentIndex = index;
  
      // Add active class to the clicked image
      images[currentIndex].classList.add('active');
  
      // Restart the slider
      stopSlider();
      startSlider();
    }
  
    images.forEach((image, index) => {
      image.addEventListener('click', () => showClickedImage(index));
    });
  
    // Initialize the slider
    startSlider();
  });
  
  