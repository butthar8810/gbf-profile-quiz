const allQuizData = [ //hints[属性, 得意武器, 種族, 性別, タイプ, 奥義名, １アビ, サポアビ, 年齢, 身長]
{answer:'ガウェイン',     hints: ['風', '斧/槍', 'ヒューマン', '男', '防御タイプ', '絶閃嵐破', 'フラクチャー', '無為の封縛', '29歳', '185cm'],             image: 'images/chara/ガウェイン.png'},
{answer:'アルタイル',     hints: ['水', '杖', 'ヒューマン', '男', 'バランスタイプ', 'ウンターガング・ルーン', '戦術策：方円', '戦賢の書', '26歳', '182cm'],  image: 'images/chara/アルタイル.png'},
{answer:'アレーティア',   hints: ['土', '剣/刀', 'ヒューマン', '男', '攻撃タイプ', '白刃無双', '序', '剣聖', '63歳', '162cm'],                            image: 'images/chara/アレーティア.png'},
{answer:'レ・フィーエ',   hints: ['光', '剣', 'ヒューマン', '女', '回復タイプ', 'セブンスディスパージョン', 'プルウィウス', '煌めきの結界', '17歳', '158cm'], image: 'images/chara/レ・フィーエ.png'},
{answer:'レディ・グレイ', hints: ['闇', '槍/格闘', 'ヒューマン', '女', '特殊タイプ', 'ボーン・デスワルツ', 'ダーク', '愛憎の衝動', '30歳', '164cm'],         image: 'images/chara/レディ・グレイ.png'},
{answer:'ユエル',        hints: ['火', '刀/楽器', 'エルーン', '女', 'バランスタイプ', '紅之舞・融月', '紅蓮', '融月', '19歳', '160cm'],                    image: 'images/chara/ユエル.png'},
];
const QUIZ_COUNT = 10;
const cardsForm = document.getElementById('cards-form');
const answerInput = document.getElementById('answer-input');
const submitBtn = document.getElementById('submit-btn');
const resultText = document.getElementById('result');
const scoreBoard = document.getElementById('score-board');
const resultImage = document.getElementById('result-image');
const scoreImage = document.getElementById('score-image');
const screenshotBtn = document.getElementById('screenshot-btn');
let quisSubset = [];
let currentIndex = 0;
let currentReveals = 0;
let score = 0;


function startgame() {
    quisSubset = shuffleArray(allQuizData).slice(0, Math.min(QUIZ_COUNT, allQuizData.length));
    currentIndex = 0;
    currentReveals = 0;
    score = 0;
    scoreImage.style.display = 'none';
    screenshotBtn.style.display = 'none';
    loadNextQuestion();
}

function loadNextQuestion () {
    resultText.textContent = '';
    resultImage.style.display = 'none';
    resultImage.src = '';
    answerInput.value = '';
    currentReveals = 0;
    cardsForm.innerHTML = '';
    submitBtn.disabled = true;
    answerInput.style.display = 'inline-block';
    submitBtn.style.display = 'inline-block';
    answerInput.disabled = false;
    scoreBoard.style.display = 'none';
    scoreImage.style.display = 'none';
    screenshotBtn.style.display = 'none';

    if( currentIndex >= quisSubset.length ){
        showFinalScore();
        return;
    } 
    const { hints } = quisSubset[currentIndex];
    const shuffledHints = shuffleArray(hints.slice());

    shuffledHints.forEach((hint, idx) => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.textContent = `ヒント${idx + 1}`;
        card.addEventListener('click', () => revealHint(card, hint));
        cardsForm.appendChild(card);
    });
}
function revealHint(card, hint){
    if( card.classList.contains('revealed') ){
        return;
    }
    card.classList.add('revealed');
    card.textContent = hint;
    currentReveals++;
    if (currentReveals > 0) {
        submitBtn.disabled = false;
    } 
}
function checkAnswer(){
    const userAnswer = answerInput.value.trim();
    const correntAnswer = quisSubset[currentIndex].answer;
    if ( currentReveals === 0 ) {
        alert('まずはヒントを１つ以上めくってから回答してください');
        return;
    }
    if ( userAnswer === '' ) {
        alert('答えを入力してください');
        return;
    }
    if ( userAnswer === correntAnswer ) {
        const points = Math.max(1, 11 - currentReveals);
        score += points;
        resultText.textContent = `正解！\n${points}点獲得`;
        showAnswerImage();
        submitBtn.disabled = true;
        answerInput.disabled = true;
        if ( currentIndex >= quisSubset.length - 1 ) {
            setTimeout(() => {showFinalScore();}, 1500);
        } else {
            setTimeout(() => {
                currentIndex++;
                loadNextQuestion();
            }, 1500);
        }
    } else {
        resultText.textContent = `不正解！`;
        showAnswerImage();
        submitBtn.disabled = true;
        if ( currentIndex >= quisSubset.length - 1 ) {
            answerInput.style.display = 'none';
            submitBtn.style.display = 'none';
            setTimeout(() => {showFinalScore();}, 1500);
        } else {
            answerInput.disabled = true;
            setTimeout(() => {
                currentIndex++;
                loadNextQuestion();
                answerInput.disabled = false;
            }, 2000);
        }
    }
}
function showAnswerImage() {
    resultImage.src = quisSubset[currentIndex].image;
    resultImage.style.display = 'block'
}
function showFinalScore(){
    // resultText はそのまま保持
    scoreBoard.style.display = 'block'
    scoreBoard.textContent = `団長の合計スコア：${score}`;
    scoreImage.style.display = 'block';
    screenshotBtn.style.display = 'inline-block';
}
function takeScreenshot(){
    html2canvas(document.querySelector("#screenshot-btn")).then(canvas =>{
        const link = document.createElement('a');
        link.download = 'gbf_quiz_result.png';
        link.href = canvas.toDataURL();
        link.click();
    });
}

const shuffleArray = (array) => {
    const cloneArray = [...array]
  
    for (let i = cloneArray.length - 1; i >= 0; i--) {
        let rand = Math.floor(Math.random() * (i + 1))
        // 配列の要素の順番を入れ替える
        let tmpStorage = cloneArray[i]
        cloneArray[i] = cloneArray[rand]
        cloneArray[rand] = tmpStorage
    }
  
    return cloneArray
}


submitBtn.addEventListener('click', checkAnswer);
screenshotBtn.addEventListener('click', takeScreenshot);
startgame();