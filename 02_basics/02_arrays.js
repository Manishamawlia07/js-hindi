// flat ,of,  concat, push, isArray, from( convert any data type into an array) 

const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

//Concat ( returns a new array)

// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);

const all_new_heros = [...marvel_heros, ...dc_heros]

// console.log(all_new_heros);

// flat ( Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.)

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);


// from (Creates an array from an iterable object.)


console.log(Array.isArray("Hitesh")) // bollion
console.log(Array.from("Hitesh"))
console.log(Array.from({name: "hitesh"})) // interesting ( puche ga key value mai se kis ko array mai convert krna hai or agr nhi define kis to empty value dede ga array mai)

// of (Returns a new array from a set of elements)

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));
