let products = [
  { name: "きゅうり", type: "野菜", quantity: 0, price: 1 },
  { name: "バナナ", type: "フルーツ", quantity: 10, price: 15 },
  { name: "セロリ", type: "野菜", quantity: 30, price: 9 },
  { name: "オレンジ", type: "フルーツ", quantity: 3, price: 5 },
];

let filteredProducts = [];
for (let i = 0; i < products.length; i++) {
  if (products[i].type === "フルーツ") {
    filteredProducts.push(products[i]);
  }
}

console.log(filteredProducts);

// filterを使う
console.log(
  products.filter(function (product) {
    return product.type === "フルーツ";
  })
);

// 種類が野菜で、量が０より多くて、値段が１０より小さい
console.log(
  products.filter(function (product) {
    return (
      product.type === "野菜" && product.quantity > 0 && product.price < 10
    );
  })
);

let post = { id: 4, title: "はじめての投稿" };
let comments = [
  { postId: 4, content: "いい記事ですね" },
  { postId: 3, content: "勉強になりました" },
  { postId: 4, content: "成程" },
];

function commentsForPost(post, comments) {
  return comments.filter(function (comment) {
    return comment.postId === post.id;
  });
}

console.log(commentsForPost(post, comments));

function reject(array, iteratorFunction) {
  return array.filter(function (hoge) {
    return !iteratorFunction(hoge);
  });
}

let numbers = [10, 20, 30];
let lessThanFifteen = reject(numbers, function (number) {
  return number > 15;
});
console.log(lessThanFifteen);
