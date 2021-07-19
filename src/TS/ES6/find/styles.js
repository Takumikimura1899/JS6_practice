"use strict";
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// 基本編
let users = [
    { name: '太郎' },
    { name: '次郎', id: 1 },
    { name: '三郎' },
    { name: '次郎', id: 10 },
];
let user = {};
for (let i = 0; i < users.length; i++) {
    if (users[i].name === '次郎') {
        user = users[i];
        break;
    }
}
console.log(user);
console.log(users.find((user) => {
    return user.name === '次郎';
}));
console.log(users.filter(function (user) {
    user.name === '太郎';
}));
// Postsの型定義に基づいた配列
let posts = [
    { id: 1, title: '古い投稿' },
    { id: 2, title: '新しい投稿' },
];
// Comment1の型定義に基づいたプロパティ
let comment = {
    postId: 2,
    content: 'いいね',
};
// PostのIDとcommentのIDが紐づいているものを探す関数
function postForComment(arg1, arg2) {
    return arg1.find(function (post) {
        return post.id === arg2.postId;
    });
}
// id２が紐づいた{ id: 2, title: '新しい投稿' }が表示される。
console.log(postForComment(posts, comment));
