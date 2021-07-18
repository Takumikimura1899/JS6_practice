// スタートをクリックする;

// プレイ状態のステータス初回の
let isPlayng = false;

document.addEventListener("click", () => {
  if (isPlayng === true) {
    return;
  }

  isPlayng = true;
  startTime = Date.now();
  setWord();
});

// １．単語が表示される;
// 配列で用意する
// シャッフルして先頭から取り出す。
// 2.単語は用意されているものからランダムで表示;
// 押したキーを判定する;
// 押したキーと単語の文字が一致していたら文字を＿に置き換える;
// 間違った文字を入力しても何も起きない;

function setWord() {
  // word = words[Math.floor(Math.random() * words.length)];
  // 文字の重複を避けるため、spliceで抜き出す処理にする
  // （復習）spliceは抜き出したものが配列になるので、[0]で要素として取り出す
  word = words.splice(Math.floor(Math.random() * words.length), 1)[0];
  target.textContent = word;
  loc = 0;
}

const words = ["red", "blue", "pink", "yellow"];

let loc = 0;
単語の先頭から一文字ずつ取り出す;
// clickのほかkeydownでキーボード入力をトリガーにできる
document.addEventListener("keydown", (e) => {
  // 初めにメインとなる処理以外のケースを除外することでその後のコードを字下げせず書くことができる（early return）
  if (e.key !== word[loc]) {
    return;
  }

  // // eはキー入力した値とし、それがwordのloc番目の配列とあっているかを照合する
  // // 合っていたらlocの次の文字を参照する
  // if (e.key === word[loc]) {
  loc++;
  target.textContent = "_".repeat(loc) + word.substring(loc);

  // locがwordの要素数（文字数）となったとき、関数setWordを実行
  if (loc === word.length) {
    // words配列内要素がなくなったらhtmlのid=resultを取得しtextを表示
    if (words.length === 0) {
      const elapsedTime = ((Date.now() - startTime) / 1000).toFixed(2);
      const result = document.getElementById("result");
      result.textContent = `Finished ${elapsedTime} seconds!`;
      return;
    }

    setWord();
  }
});

// locがwordの要素数（文字数）となったとき、関数setWordを実行
if (loc === word.length) {
  // words配列内要素がなくなったらhtmlのid=resultを取得しtextを表示
  if (words.length === 0) {
    const elapsedTime = ((Date.now() - startTime) / 1000).toFixed(2);
    const result = document.getElementById("result");
    result.textContent = `Finished ${elapsedTime} seconds!`;
    return;
  }

  setWord();
}

// 単語が全て＿になったら次の単語を表示する;
