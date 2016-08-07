(() => {
  'use strict';

  const slider = document.getElementById('js-slider');
  const label = document.getElementById('js-sliderLabel');
  const btn = document.getElementById('js-btn');
  const result = document.getElementById('js-result');
  const numbers = document.getElementById('js-numbers');
  const symbols = document.getElementById('js-symbols');

  function getPassword() {
    const seedLetters = 'abcdefghijklmnopqrstuvwxyz';
    const seedNumbers = '0123456789';
    const seedSymbols = '!#$%&()';

    var length = slider.value;
    var seed;
    var pwd = '';

    seed = seedLetters + seedLetters.toUpperCase();

    if (numbers.checked) {
      seed += seedNumbers;
    }

    if (symbols.checked) {
      seed += seedSymbols;
    }

    while (length--) {
      pwd += seed[Math.floor(Math.random() * seed.length)];
    }

    result.value = pwd;
  }

  slider.addEventListener('change', function(e) {
    label.textContent = this.value;
  }, false);

  btn.addEventListener('click', function(e) {
    getPassword();
  }, false);

  // 結果のテキストエリアをクリックしたら、文字を選択した状態にする
  result.addEventListener('click', function(e) {
    this.select();
  }, false);

  getPassword();

})();
