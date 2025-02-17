const product={
    name:'Vivo v40pro',
    "priceOfPhone":79999,
    brand:'Vivo',
    color:["black","White","Red"],
    quantity:10,
    description:'A Powerful smartphone with 6Gb RAM and 128GB storage.',
    reviews:[
        {rating:4,comment:'Good phone'},
        {rating:5,comment:'Excellent phone'},
        {rating:3,comment:'Average phone'},
        {rating:4,comment:'Great phone'},
    ],
    availability:true
}
console.log(product.availability);
// console.log(product);
console.log(product["availability"]);
let propertyName='name';
// console.log(product[propertyName]);
//dynamic key concept means variable used not a actual key
console.log(product["propertyName"]);

product.availability=false;
delete product.reviews;
console.log(product);


const product={
    name:'Vivi v40pro',
    "priceOfPhone":79999,
    brand:'Vivo',
    color:["black","white","red"],
    quantity:10,
    description:'A powerful smartphone with 6GB RAM and 128GB storage',
   reviews:[
   {rating:4,comment:'Good phone'},
   {rating:5,comment:'excellent phone'},
   {rating:3,comment:'average phone'},
   {rating:4,comment:'Great phone'},
   ],
   availability:true
}

console.log(product);
console.log(Object.keys(product));
console.log(Object.values(product));

for(let key in product.color){
    console.log(product.color[key]);
}

product.availability=false;
console.log(product);

delete product.reviews;
console.log(product);

let obj=
`{
    "name" : "xyz",
    "score":60,
"isSelected":false,
"license":null

}`
let JsObj=JSON.parse(obj);
console.log(JsObj);

console.log(JSON.stringify(product));