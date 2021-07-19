let products: {
  name: string;
  type: string;
  quantity: number;
  price: number;
}[] = [
  { name: 'きゅうり', type: '野菜', quantity: 0, price: 1 },
  { name: 'バナナ', type: 'フルーツ', quantity: 10, price: 15 },
  { name: 'セロリ', type: '野菜', quantity: 30, price: 9 },
  { name: 'オレンジ', type: 'フルーツ', quantity: 3, price: 5 },
];

let filteredProducts = [];
for (let i: number = 0; i < products.length; i++) {
  if (products[i].type === 'フルーツ') {
    filteredProducts.push(products[i]);
  }
}

console.log(filteredProducts);

// filterを使う
console.log(
  products.filter(function (product) {
    return product.type === 'フルーツ';
  })
);

// 種類が野菜で、量が０より多くて、値段が１０より小さい
console.log(
  products.filter(function (product) {
    return (
      product.type === '野菜' && product.quantity > 0 && product.price < 10
    );
  })
);

let post = { id: 4, title: 'はじめての投稿' };
let comments = [
  { postId: 4, content: 'いい記事ですね' },
  { postId: 3, content: '勉強になりました' },
  { postId: 4, content: '成程' },
];

function commentsForPost(post: any, comments: any) {
  return comments.filter(function (comment: any) {
    return comment.postId === post.id;
  });
}

console.log(commentsForPost(post, comments));

function reject(array: any, iteratorFunction: any) {
  return array.filter(function (hoge: any) {
    return !iteratorFunction(hoge);
  });
}

let numbers2: number[] = [10, 20, 30];
let lessThanFifteen = reject(numbers, function (number: any) {
  return number > 15;
});
console.log(lessThanFifteen);
