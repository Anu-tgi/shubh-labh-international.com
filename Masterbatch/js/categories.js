let pc_next = document.querySelector(".pc_next");
let pc_prev = document.querySelector(".pc_prev");
let autoSlideInterval_pc;

// Function to move to the next slide
function nextSlide_pc() {
    let pc_items = document.querySelectorAll('.pc_item');
    document.querySelector('.pc_slide').appendChild(pc_items[0]);
    console.log(pc_items);
}

// Function to move to the previous slide
function prevSlide_pc() {
    let pc_items = document.querySelectorAll('.pc_item');
    document.querySelector('.pc_slide').prepend(pc_items[pc_items.length - 1]);
}

// Function to restart the automatic slider
function restartAutoSlide_pc() {
    clearInterval(autoSlideInterval_pc);
    autoSlideInterval_pc = setInterval(nextSlide_pc, 5000);
}

// Event listeners for next and previous buttons
pc_next.addEventListener('click', function() {
    nextSlide_pc();
    restartAutoSlide_pc();
});

pc_prev.addEventListener('click', function() {
    prevSlide_pc();
    restartAutoSlide_pc();
});

// Start the automatic slider initially
restartAutoSlide_pc();