var words = [{
    id: 1,
    word: 'MasterBatches',
    language: '40+ products',
    description: 'Masterbatches by polymer type offer tailored solutions for various plastic applications, catering to the unique requirements of different polymers. At SLI, we specialize in producing masterbatches for a wide range of polymer types, including PE, PET, PC, PMMA, ABS, TPU, PBT, Nylon, Bio Compostable, and PS/HIPS since the last 38 years. What sets us apart is our innovative approach to manufacturing, where we produce PC and PMMA masterbatches based on the respective polymers themselves, ensuring unparalleled transparency with 100% light transmission. Our color masterbatches for Nylon feature colors with high-temperature tolerance (up to 600°C), preventing oxidative fading. Additionally, our state-of-the-art facility allows us to create custom masterbatches to meet the specific needs of our clients, providing tailored solutions for diverse applications.'
  }];
  
  var body = document.body,
      card = document.getElementById('card'),
      cardWord = document.getElementById('word'),
      cardLang = document.getElementById('language'),
      cardDesc = document.getElementById('description'),
      bgWordBehind = document.getElementById('behind'),
      bgWordInfront = document.getElementById('infront'),
      lastBtn = document.getElementById('last'),
      nextBtn = document.getElementById('next'),
      i = 0,
      numWords = words.length,
      cardUrl = 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/380275/lightpaperfibers.png',
      cardImg = new Image();
  
  bgWordBehind.textContent = words[i].word;
  bgWordInfront.textContent = words[i].word;
  cardWord.textContent = words[i].word;
  cardLang.textContent = words[i].language;
  cardDesc.textContent = words[i].description;
  
  cardImg.onload = function() {
    card.style.background = "#FFF url(" + cardUrl + ") repeat fixed center";
  }
  cardImg.src = cardUrl;
  
  document.onkeydown = checkKey;
  function checkKey(e) {
    e = e || window.event;
    if (e.keyCode == '37') {
      goLeft();
    } else if (e.keyCode == '39') {
      goRight();
    }
  }
  lastBtn.addEventListener("click", function(e) {
    goLeft();
  }, false);
  nextBtn.addEventListener("click", function(e) {
    goRight();
  }, false);
  
  function goLeft() {
    if (i > 0)
      i--;
    else
      i = numWords - 1;
    changeCard();
  }
  
  function goRight() {
    if (i < numWords - 1)
      i++;
    else
      i = 0;
    changeCard();
  }
  
  function changeCard() {
    setTimeout(loadBG, 400);
    setTimeout(loadCard, 900);
    card.className += " fadeout";
    body.className += " fadeout";
  }
  
  function loadBG() {
    bgWordBehind.textContent = words[i].word;
    bgWordInfront.textContent = words[i].word;
    removeClass(body, "fadeout");
  }
  
  function loadCard() {
    removeClass(card, "fadeout");
    cardWord.textContent = words[i].word;
    cardLang.textContent = words[i].language;
    cardDesc.textContent = words[i].description;
  }
  
  //Function to easily remove classes, it takes two parameters: 
  //1. The element to have a class removed
  //2. The name of the class we want to remove from our element
  function removeClass(el, _class) {
    //Check if the element exists, 
    //if it has a class,
    //& specifically if it has the class we want to remove
    if (el && el.className && el.className.indexOf(_class) >= 0) {
      //Find the class to be removed (including any white space around it) using a regex search pattern
      var pattern = new RegExp('\\s*' + _class + '\\s*');
      //Replace that search with white space, therefore removing the class 
      el.className = el.className.replace(pattern, ' ');
    }
  }