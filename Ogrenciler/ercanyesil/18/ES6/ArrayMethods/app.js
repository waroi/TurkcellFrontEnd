let langs = ["Python", "C++", "Go", "Ruby", "Javascript"];
const numbers = [1, 4, 9, 16];

// map() fonksiyonu 
// const map1 = numbers.map(function(e)){
//     return e * 2;
// });

const map1 = numbers.map((x, i) => x * 2)
const map2 = numbers.map((x, i) =>{
    console.log(i, x);
    return x * 2;
});

console.log(map1);

//filter() fonksiyonu

const result = langs.filter(lang => lang.length > 4);

console.log(result);


langs.forEach(e=> console.log(e));