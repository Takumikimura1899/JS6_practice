// スタートをクリックする;

// １．単語が表示される;
// 配列で用意する
// シャッフルして先頭から取り出す。
// 2.単語は用意されているものからランダムで表示;

const words = ["momo", "melon", "banana", "cola"];

const arrayLength = words.length;

for (let i = arrayLength - 1; i >= 0; i--) {
  const randomIndex = Math.floor(Math.random() * (i + 1));
  [words[i], words[randomIndex]] = [words[randomIndex], words[i]];
}

console.log(words);

// 押したキーを判定する処理
document.addEventListener("keydown", (e) => {
  console.log(e.key);
});
// 単語の先頭から一文字ずつ取り出す;
// 押したキーを判定する;
// 押したキーと単語の文字が一致していたら文字を＿に置き換える;
// 間違った文字を入力しても何も起きない;
// 単語が全て＿になったら次の単語を表示する;
