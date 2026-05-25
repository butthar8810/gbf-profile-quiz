const allQuizData = [ //hints[属性, 得意武器, 種族, 性別, タイプ, 奥義名, １アビ, サポアビ, 年齢, 身長]
{answer:'ガウェイン', hints: ['風', '防御タイプ', 'ヒューマン', '男', '斧/槍', '閃刃の剣斧', '絶閃嵐破', 'フラクチャー', '無為の封縛', '29歳'], image: 'images/chara/ガウェイン.png'},
{answer:'アルタイル', hints: ['水', 'バランスタイプ', 'ヒューマン', '男', '杖', 'ダーインスレイブ', 'ウンターガング・ルーン', '戦術策：方円', '戦賢の書', '26歳'], image: 'images/chara/アルタイル.png'},
{answer:'アレーティア', hints: ['土', '攻撃タイプ', 'ヒューマン', '男', '剣/刀', '宝剣アンダリス', '白刃無双', '序', '剣聖', '63歳'], image: 'images/chara/アレーティア.png'},
{answer:'ネツァワルピリ', hints: ['風', '攻撃タイプ', 'ヒューマン', '男', '槍', 'ピラム', 'ソル・ルプトゥラ', '覇装の構え', '翼の王者', '34歳'], image: 'images/chara/ネツァワルピリ.png'},
{answer:'レ・フィーエ', hints: ['光', '回復タイプ', 'ヒューマン', '女', '剣', 'ケーリュケイオン', 'セブンスディスパージョン', 'プルウィウス', '煌めきの結界', '17歳'], image: 'images/chara/レ・フィーエ.png'},
{answer:'レディ・グレイ', hints: ['闇', '特殊タイプ', 'ヒューマン', '女', '槍/格', 'ウコンバサラ', 'ボーン・デスワルツ', 'ダーク', '愛憎の衝動', '30歳'], image: 'images/chara/レディ・グレイ.png'},
{answer:'ユエル', hints: ['火', 'バランスタイプ', 'エルーン', '女', '刀/楽', '緋紋の絢斧', '紅之舞・融月', '紅蓮', '融月', '19歳'], image: 'images/chara/ユエル.png'},
{answer:'リリィ', hints: ['水', '回復タイプ', 'その他', '女', '杖', '氷晶杖', 'フローズン・ブルーム', '氷晶結界', 'シャインクリスタル', '12歳'], image: 'images/chara/リリィ.png'},
{answer:'サルナーン', hints: ['光', '特殊タイプ', 'エルーン', '男', '杖', '封鍵クラウストルム', 'エタニティ・デザイア', 'ルナティックベール', '精霊カザンの加護', '22歳'], image: 'images/chara/サルナーン.png'},
{answer:'カリオストロ', hints: ['土', '回復タイプ', 'ヒューマン', '女', '杖', 'ウロボロス', 'アルス・マグナ', 'コラプス', '世界で一番可愛いっ☆', '年齢：不明'], image: 'images/chara/カリオストロ.png'},
{answer:'シャルロッテ', hints: ['水', 'バランスタイプ', 'ハーヴィン', '女', '剣', '輝剣クラウ・ソラス', 'ノーブル・エクスキューション', 'ブルームーン', 'リュミエール聖騎士団団長', '24歳'], image: 'images/chara/シャルロッテ.png'},
{answer:'マギサ', hints: ['火', '特殊タイプ', 'ヒューマン', '女', '杖/格', 'イリュージョンセプター', 'メテオスウォーム・イメンス', 'イラプション', '魔神モラクス召喚', '年齢：不明'], image: 'images/chara/マギサ.png'},
{answer:'メーテラ', hints: ['風', 'バランスタイプ', 'エルーン', '女', '弓', 'エーテリアルボウ', 'グリームパルパーション', '飾り穿ち', '天才肌', '25歳'], image: 'images/chara/メーテラ.png'},
{answer:'セルエル', hints: ['光', '攻撃タイプ', 'エルーン', '男', '剣', 'フロッティ', 'レッドブランチ・サイクル', 'コートリーブレイド', 'アイルスト王国第一王子', '25歳'], image: 'images/chara/セルエル.png'},
{answer:'ケルベロス', hints: ['闇', '特殊タイプ', '星晶獣', '女', '格', 'ココ＆ミミ', 'トリニティ・ディザスター', 'アブソープション', '三位一体♪', '年齢：不明'], image: 'images/chara/ケルベロス.png'},
{answer:'アギエルバ', hints: ['火', '防御タイプ', 'ドラフ', '男', '剣', '雷公刃ユピテル', '撃滅暁天', '剛毅', '豪放磊落', '34歳'], image: 'images/chara/アギエルバ.png'},
{answer:'クリスティーナ', hints: ['風', 'バランスタイプ', 'ヒューマン', '女', '銃/短', 'ジュエルリゾートモデル', 'エンプレス・アフェクション', 'セカンドディール', 'クイーン・オブ・カジノ', '年齢：不明'], image: 'images/chara/クリスティーナ.png'},
{answer:'アルルメイヤ', hints: ['土', '特殊タイプ', 'ハーヴィン', '女', '杖', 'ガルガンチュア', 'セレネ・ティモリア', '月天', '未来幻視', '29歳'], image: 'images/chara/アルルメイヤ.png'},
{answer:'レナ', hints: ['風', '回復タイプ', 'ヒューマン', '女', '杖', 'ファラウェイ', 'ル・アンフェー・デ・フルール', 'ミストラルブーケ', '魔生花の楔', '27歳'], image: 'images/chara/レナ.png'},
{answer:'メルゥ', hints: ['土', '攻撃タイプ', 'エルーン', '女', '槍/斧', 'ヴァサーゴ', 'アクア・ラナキラ', 'ワイルドフロウ', 'さっちゃんといっしょ', '14歳'], image: 'images/chara/メルゥ.png'},
{answer:'ランスロット', hints: ['水', '攻撃タイプ', 'ヒューマン', '男', '剣/短', '霧氷剣ペルソス', 'ヴァイス・フリューゲル', 'ブレードインパルス', '一騎当千', '27歳'], image: 'images/chara/ランスロット.png'},
{answer:'ソフィア', hints: ['光', '回復タイプ', 'ヒューマン', '女', '杖', 'オーシャンハープ', 'レーベン・シュトラール', 'ハイルミッテル', 'ゼエン教僧侶', '19歳'], image: 'images/chara/ソフィア.png'},
{answer:'ジークフリート', hints: ['土', '特殊タイプ', 'ヒューマン', '男', '剣/刀', 'アスカロン', 'シュヴァルツ・ファング', 'ウーヴェ', '邪竜の返り血', '32歳'], image: 'images/chara/ジークフリート.png'},
{answer:'アニラ', hints: ['火', 'バランスタイプ', 'ドラフ', '女', '槍/格', '天干地支刀・未之飾', '羊瀾怒濤', '森羅万象', '羊神宮の主', '18歳'], image: 'images/chara/アニラ.png'},
{answer:'ゼタ', hints: ['火', '攻撃タイプ', 'ヒューマン', '女', '槍', 'ブリューナク', 'シリウスロア', 'アルベスの槍', 'アルベスの契約者', '21歳'], image: 'images/chara/ゼタ.png'},
{answer:'バザラガ', hints: ['闇', '攻撃タイプ', 'ドラフ', '男', '斧', 'ミストルテイン', 'カルネイジ・ムーン', '大鎌グロウノス', 'グロウノスの契約者', '30歳'], image: 'images/chara/バザラガ.png'},
{answer:'ウーノ', hints: ['水', '防御タイプ', 'ハーヴィン', '男', '槍', '無料で入手', '真槍破邪顕正陣', '螺旋回鉾', '開眼者', '年齢：不明'], image: 'images/chara/ウーノ.png'},
{answer:'ソーン', hints: ['光', 'バランスタイプ', 'ヒューマン', '女', '弓', '無料で入手', 'ステラ・ターミネイション', 'マーキュライト', '魔眼の狩人', '22歳'], image: 'images/chara/ソーン.png'},
{answer:'サラーサ', hints: ['土', '攻撃タイプ', 'ドラフ', '女', '剣/斧', '無料で入手', 'オリジン・ブレイカー/ゼロ・リグレッション', 'ヴォーパルレイジ', '怪力乱神', '年齢：不明'], image: 'images/chara/サラーサ.png'},
{answer:'カトル', hints: ['水', '特殊タイプ', 'エルーン', '男', '短', '無料で入手', 'モルス・ケルタ', 'シュリーヴァトサ', '閃耀の双剣', '17歳(自称)'], image: 'images/chara/カトル.png'},
{answer:'フュンフ', hints: ['光', '回復タイプ', 'ハーヴィン', '女', '杖', '無料で入手', '超！ 必殺技！！', 'サンシャイン', '魔道の申し子', '7歳'], image: 'images/chara/フュンフ.png'},
{answer:'シス', hints: ['闇', '攻撃タイプ', 'エルーン', '男', '格', '無料で入手', '神髄･鬼面阿修羅', '惡門・羅刹', '神狼', '19歳'], image: 'images/chara/シス.png'},
{answer:'シエテ', hints: ['風', '攻撃タイプ', 'ヒューマン', '男', '剣', '無料で入手', 'エスパーダ・ガラクシア', 'エンブレーマ', '天星剣王', '27歳'], image: 'images/chara/シエテ.png'},
{answer:'オクトー', hints: ['土', '攻撃タイプ', 'ドラフ', '男', '刀', '無料で入手', '尸祀噛顕鋳', '心解', '刀神', '年齢：不明'], image: 'images/chara/オクトー.png'},
{answer:'ニオ', hints: ['風', '特殊タイプ', 'ハーヴィン', '女', '楽', '無料で入手', 'ファーノナス・フリド', 'ニンアナンナ', '繊細の魔奏者', '20歳'], image: 'images/chara/ニオ.png'},
{answer:'エッセル', hints: ['火', 'バランスタイプ', 'エルーン', '女', '銃', '無料で入手', 'トリオンフォ・デラ・モルテ', 'インテンスバレット', '魔弾の射手', '17歳(自称)'], image: 'images/chara/エッセル.png'},
{answer:'ジャンヌダルク', hints: ['光', 'バランスタイプ', 'ヒューマン', '女', '剣/槍', 'カラドボルグ', '神槍マルテ', 'リヴァーサル', 'ラ・ピュセル', '19歳'], image: 'images/chara/ジャンヌダルク.png'},
{answer:'サラ', hints: ['土', '防御タイプ', 'ヒューマン', '女', '格', '砂城の宮樂弦', 'テラ・ミセリコルディア', 'マテルヌス・マエスティティア', '砂神グラフォスの慈愛', '9歳'], image: 'images/chara/サラ.png'},
{answer:'カルメリーナ', hints: ['風', '特殊タイプ', 'ドラフ', '女', '短', 'グランテピエ', 'アプローズ・レイン', 'ウォーフープ', 'ユニバーサルスター', '18歳'], image: 'images/chara/カルメリーナ.png'},
{answer:'ヴィーラ', hints: ['闇', '攻撃タイプ', 'ヒューマン', '女', '剣', 'ラスト・シン', 'アフェクション・アビス', 'レイヤーライズII', 'お姉様お姉様お姉様', '22歳'], image: 'images/chara/ヴィーラ.png'},
{answer:'ソシエ', hints: ['水', '特殊タイプ', 'エルーン', '女', '格/楽', '緋舞扇', '白之舞・鵬淨', '壱之舞・神楽', '失われた王家の末裔', '19歳'], image: 'images/chara/ソシエ.png'},
{answer:'アルベール', hints: ['光', '攻撃タイプ', 'ヒューマン', '男', '剣', 'オートクレール', 'レヴィン・アナイアレイション', 'インパルススラッシュ', '雷迅卿', '25歳'], image: 'images/chara/アルベール.png'},
{answer:'クラリス', hints: ['火', '特殊タイプ', 'ヒューマン', '女', '杖', 'メビウス', 'スフィア・エクスティンクション', 'ナノアナライズ', '烔眼の才女', '17歳'], image: 'images/chara/クラリス.png'},
{answer:'ペトラ', hints: ['風', 'バランスタイプ', 'ヒューマン', '女', '杖', 'ヘヴンズクラウド', 'ウェントス・イーラ', 'イリュジオン', '風の憩い', '18歳'], image: 'images/chara/ペトラ.png'},
{answer:'シルヴァ', hints: ['水', '攻撃タイプ', 'ヒューマン', '女', '銃', 'ヴリスラグナ', 'バリー・ブリット', 'イーグルアイ', '静かな威圧', '27歳'], image: 'images/chara/シルヴァ.png'},
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
            setTimeout(() => {showFinalScore();}, 2000);
        } else {
            setTimeout(() => {
                currentIndex++;
                loadNextQuestion();
            }, 3000);
        }
    } else {
        resultText.textContent = `不正解！`;
        showAnswerImage();
        submitBtn.disabled = true;
        if ( currentIndex >= quisSubset.length - 1 ) {
            answerInput.style.display = 'none';
            submitBtn.style.display = 'none';
            setTimeout(() => {showFinalScore();}, 2000);
        } else {
            answerInput.disabled = true;
            setTimeout(() => {
                currentIndex++;
                loadNextQuestion();
                answerInput.disabled = false;
            }, 3000);
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