let sliderIndex = 1;
const layers = document.querySelectorAll('.inn-layer');
const cover = document.querySelector('.inn-cover');

let timeout;

const changeCoverAnimState = (state) => {
  if(state === 1) {
    cover.style.transform = 'translateX(-100%)';
  } else {
    cover.style.transform = 'translateX(0)';
  }
}

const switchLayer = (step) => {
  const nextSlide = (sliderIndex + step) % 4 === 0 ? 4 : (sliderIndex + step) % 4;

  changeCoverAnimState(1);
  clearTimeout(timeout);
  timeout = setTimeout(() => {
    changeCoverAnimState(0)
  }, 500);

  for(let i of layers) {
    i.classList.remove('inn-layer-displayed');
    i.classList.remove('inn-layer-displayed-exit');
    if(i.dataset.scene == nextSlide) {
      i.classList.add('inn-layer-displayed');
    }
    if(i.dataset.scene == sliderIndex) {
      i.classList.add('inn-layer-displayed-exit');
    }
  }
  sliderIndex = nextSlide;
}