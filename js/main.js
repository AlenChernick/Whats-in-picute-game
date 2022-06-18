'use strict';

function createQuests() {
  return [
    { id: 1, opts: ['Tel Aviv?', 'Eilat?'], correctOptIndex: 1 },
    { id: 2, opts: ['Camel?', 'Dog?'], correctOptIndex: 0 },
    { id: 3, opts: ['Ship?', 'Plane?'], correctOptIndex: 1 },
  ];
}

var gQuests = createQuests();

var gCurrQuestIdx = 0;

function renderQuest() {
  var strHTML = '';

  var strImg = `<img src="img/${gQuests[gCurrQuestIdx].id}.jpg"/>`;

  for (var i = 0; i < gQuests[gCurrQuestIdx].opts.length; i++) {
    var optionTxt = gQuests[gCurrQuestIdx].opts[i];

    strHTML += `<button onclick="checkAnswer(${i})">${optionTxt}</button>`;
  }

  var elButton = document.querySelector('.btn-container');

  var elImg = document.querySelector('.img-box');

  elButton.innerHTML = strHTML;
  elImg.innerHTML = strImg;
}

function initGame() {
  renderQuest();
  gCurrQuestIdx = 0;

  var elRestart = document.querySelector('.btn-container');

  var elImg = document.querySelector('.img-box');

  var strHTML = ``;

  elRestart.innerHTML = strHTML;

  elImg.style.display = 'block';

  renderQuest();
}

function checkAnswer(i) {
  var correct = gQuests[gCurrQuestIdx].correctOptIndex;
  if (correct === i) {
    if (gQuests[gCurrQuestIdx].id === gQuests.length) {
      alert('Victorious');
      var elButton = document.querySelector('.btn-container');

      var elImg = document.querySelector('.img-box');

      var restartButton = `<button class="restart" onclick="initGame()"}>Play Again</button>`;

      elButton.innerHTML = restartButton;

      elImg.style.display = 'none';
    } else {
      gCurrQuestIdx++;
      renderQuest();
    }
  } else {
    alert('Try Again');
  }
}
