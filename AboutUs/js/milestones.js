const slides = document.querySelectorAll('.slide-m');
        const pagination = document.querySelector('.pagination');
        const prevButton = document.querySelector('.prev-button');
        const nextButton = document.querySelector('.next-button');

        let currentIndex = 0;
        let autoPlayInterval = setInterval(nextSlide, 10000); // Change slide every 10 seconds

        slides[currentIndex].classList.add('active');
        updatePagination();

        function updatePagination() {
            pagination.innerHTML = '';
            slides.forEach((slide, index) => {
                const span = document.createElement('span');
                span.textContent = slide.getAttribute('data-year');
                if (index === currentIndex) {
                    span.classList.add('active');
                }
                span.addEventListener('click', () => {
                    goToSlide(index);
                });
                pagination.appendChild(span);
            });
        }

        function nextSlide() {
            goToSlide(currentIndex + 1);
        }

        function prevSlide() {
            goToSlide(currentIndex - 1);
        }

        function goToSlide(index) {
            slides[currentIndex].classList.remove('active', 'prev');
            if (index < 0) {
                currentIndex = slides.length - 1;
            } else if (index >= slides.length) {
                currentIndex = 0;
            } else {
                currentIndex = index;
            }

            slides[currentIndex].classList.add('active');
            if (index === currentIndex + 1 || index === 0) {
                slides[currentIndex - 1]?.classList.add('prev');
            }
            updatePagination();
            resetAutoPlay();
        }

        function resetAutoPlay() {
            clearInterval(autoPlayInterval);
            autoPlayInterval = setInterval(nextSlide, 10000);
        }

        prevButton.addEventListener('click', prevSlide);
        nextButton.addEventListener('click', nextSlide);

        document.querySelector('.slides-container-m').addEventListener('mouseenter', () => {
            clearInterval(autoPlayInterval);
        });

        document.querySelector('.slides-container-m').addEventListener('mouseleave', () => {
            autoPlayInterval = setInterval(nextSlide, 10000);
        });