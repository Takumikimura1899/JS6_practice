// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// 基本編

// 型定義したusers idは無いものも欲しいので?を付けて抽象化する
let users: { name: string; id?: number }[] = [
  { name: '太郎' },
  { name: '次郎', id: 1 },
  { name: '三郎' },
  { name: '次郎', id: 10 },
];

// 同様に
let user: { name?: string } = {};

// for文を用いた方法
for (let i: number = 0; i < users.length; i++) {
  if (users[i].name === '次郎') {
    user = users[i];
    break;
  }
}
console.log(user);

// array.findを用いた方法
// nameが'次郎'のオブジェクトを探している。
// 最初に見つかった次郎つまりid:1の次郎だけが出力される
console.log(
  users.find((user: { name: string }) => {
    return user.name === '次郎';
  })
);

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// 応用編

// Posts用の型定義
type Posts = {
  id: number;
  title: string;
};

// Comment用の型定義
type Comment1 = { postId: number; content: string };

// Postsの型定義に基づいた配列
let posts: Posts[] = [
  { id: 1, title: '古い投稿' },
  { id: 2, title: '新しい投稿' },
];

// Comment1の型定義に基づいたプロパティ
let comment: Comment1 = {
  postId: 2,
  content: 'いいね',
};

// PostのIDとcommentのIDが紐づいているものを探す関数
function postForComment(arg1: Posts[], arg2: Comment1) {
  return arg1.find(function (post) {
    return post.id === arg2.postId;
  });
}

// id２が紐づいた{ id: 2, title: '新しい投稿' }が表示される。
console.log(postForComment(posts, comment));
