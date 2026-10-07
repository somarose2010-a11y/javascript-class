// const marvel_heros = ["thor", "Ironman", "spiderman"]
// const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);

// const all_new_heros = [...marvel_heros, ...dc_heros]

// console.log(all_new_heros);

// const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

// const real_another_array = another_array.flat(Infinity)
// console.log(real_another_array);



// console.log(Array.isArray("soma"))
// console.log(Array.from("soma"))
// console.log(Array.from({name: "soma"})) // interesting

// let score1 = 100
// let score2 = 200
// let score3 = 300

// console.log(Array.of(score1, score2, score3));

//slice

const products = ["Shirt", "Shoes", "Bag", "Sunglass"];// array slice always delete the last one

const newProducts = products.slice(0, 2);

console.log(newProducts);
// ["Shirt", "Shoes"]

const fruits = ["Apple", "Mango", "Orange"];

// const result = fruits.forEach(fruit => {
//     console.log(fruit);
// })
//["Apple", "Mango", "Orange"]


// const result2 = fruits.forEach(fruit => {
//     return fruit;
// })
// console.log(result2)
//undefined

const result3 = fruits.map(fruit => {
    return fruit;
})
console.log(result3)
//["Apple", "Mango", "Orange"]

//forEach() → perform an action

//map()     → return/create a new array

const productItems = [
    { name: "Shirt", price: 500 },
    { name: "Shoes", price: 1000 },
    { name: "Bag", price: 800 }
];

const productNames = productItems.map(product => product.price);

console.log(productNames);

// Original array
//      ↓
// change every item
//      ↓
// New array

//Filter

const productPrice = ['500', '400', '800', '1000', '1500']

const priceFilter = productPrice.filter(price => price > 400);

console.log(priceFilter)

const fashionProducts = [
    { name: "Shirt", category: "clothing" },
    { name: "Shoes", category: "footwear" },
    { name: "Pants", category: "clothing" }
];

const clothing = fashionProducts.filter(
    product => product.category === "clothing"
);
console.log(clothing)

//find

const productFind = [
    {id: 1, name: "Shirt"},
    {id: 2, name: "shoe"},
    {id: 3, name: "watch"}
]
const findProduct = productFind.find(product => product.id === 2);
console.log(findProduct)

// filter() → multiple matching items
// find()   → first matching item
//findIndex()

//includes

const fruitsIncludes = ["Apple", "Mango", "Orange"];

console.log(fruitsIncludes.includes("Mango"));