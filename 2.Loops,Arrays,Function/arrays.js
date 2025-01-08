//////////////////////Arrays ///////////////////////
// const words = ["hello", "how", 44, true,22.78];
// console.log(words);

let words = ["Anuj", "Harish", "Ram", "Shyam"];

//console.log(words[1])
// Mehods in Arrays

words.push("Mike");
//words.pop();

// It is used for iterating over objects and arrays
// for(userName in words) {
//     console.log(words[userName]);
// }

// words.sort();
// let isPresent = words.includes("Ram");
// console.log(isPresent);

//////////  splice(index_number, how_many_element, add_new_element)

words.splice(3,1);

console.log(words);