// const val = 24/0;
// console.log(val);


/////////// ERROR Handling Techniques with try,catch and finally
// try {
//     console.log("Hello")
// } catch(e) {
//     console.log("Error occured : ", e);
// } finally {
//     console.log("this will always run ");
// }

// Function which takes other function as perimeter is called
// HOF or Higher order function 

// let arr = [1,2,3,4,5,6,7,8,9]; 

// function filterNumber (filter) {
//     let b = [];
//     for(let i = 0; i < arr.length; i++) {
//         if(filter(arr[i])) {
//             b.push(arr[i]);
//         }
//     }
//     return b;
// }

// function isEven(a) {
//     return a % 2 == 0;
// }

// function isOdd(a) {
//     return a % 2 != 0;
// }

// let res = filterNumber(isEven);
// console.log(res);

// res = filterNumber(isOdd);
// console.log(res);



//////// Filter    Map       Find

// let arr = [1,2,3,4,5,6,7,8,9]; 

// function isEven(a) {
//     return a % 2 == 0;
// }

// const res = arr.filter(isEven);
// console.log(res);

//  Map function

let arr = [1,2,3,4,5,6,7,8,9]; 

function negative(n) {
    return -n;
}

let b = arr.map(negative);
console.log(b);

///  'find'  implementation is same as 'map' but it will find only one object
