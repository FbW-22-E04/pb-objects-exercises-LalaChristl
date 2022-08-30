console.log("-----1. isPlainObject-----");
//1
const data = { a: 1 };
const datas = [1, 2, 3];

//write your code here

function isPlainObject(obj) {
  if (obj === null || Array.isArray(obj) === true) {
    return false;
  } else {
    return true;
  }
}
console.log(isPlainObject(data));
console.log(isPlainObject(datas));

console.log("-----2. makePairs-----");
// //2

const data2 = { a: 1, b: 2 };

//write your code here
// function makePairs(item) {
//    Object.entries(item).map((value) => {
//        console.log([value]);
//    })
// // }
// function makePairs (obj) {
//     const arr = [];

//     for(const key in obj) {
//         arr.push([key, obj[key]])
//     }
//     return arr;
// }

function makePairs(obj) {
  let entries = Object.entries(obj);
  return entries;
}
console.log(makePairs(data2)); // [['a', 1], ['b', 2]]

console.log("-----3. without-----");
//3
const data3 = { a: 1, b: 2 };
//write your code here
function without(x, y) {
  delete x[y];
  return x;
}

console.log(without(data3, "b")); // { a: 1 }

console.log("-----4. isEmpty-----");
//4
const data4 = { a: 1, b: undefined };
const data40 = { a: undefined };

function isEmpty(obj) {
  if (Object.keys(obj).length === 0 || obj[Object.keys(obj)[0]] === undefined){
      return true;
  } else {
      return false;
  }
}
//write your code here
console.log(isEmpty(data4)); // false
console.log(isEmpty(data40)); // true

console.log("-----5. isEqual-----");
//5
const data5 = { a: 1, b: 1 };
const data51 = { a: 1, b: 1 };
const data52 = { a: 1, b: 2 };
//write your code here
function isEqual(a, b) {
  for (var key in a) {
    if (a[key] !== b[key]) {
      return false;
    }
  }
  return true;
}

console.log(isEqual(data5, data51)); // true
console.log(isEqual(data5, data52)); // false

console.log("-----6. invoke-----");
//6
const data6 = { a: { b: [1, 2, 3] } };
//write your code here
function invoke(obj, ab, spl, arr) {

    const newArr = ab.split(".");

    console.log(newArr);

    const result = newArr.reduce((acc, key) => {
        acc = acc[key] === undefined ? obj[key] : acc[key];
        return acc;
    }, {})

    return obj
}


console.log(invoke(data6, "a.b", "splice", [1, 2])); // [2, 3]

console.log("-----7. isEmptyDeep-----");
// //7
// const data7 = { a: { b: undefined } };
// //write your code here
// console.log(isEmptyDeep(data7));

console.log("-----8. isEqualDeep-----");
// //8
// const data8 = { a: 1, b: { c: 1 } };
// const data81= { a: 1, b: { c: 1 } };
// const data82= { a: 1, b: { c: 2 } };
// //write your code here
// console.log(isEqualDeep(data8, data81));// true
// console.log(isEqualDeep(data8, data82)); // false

console.log("-----9. intersection-----");
// //9
// const data9 = { a: 1, b: 2 };
// const data91 = { c: 1, b: 2 };
// //write your code here
// console.log(intersection(data9, data91)); // { b: 2 }

console.log("-----10. intersectionDeep-----");
// //10
// const data10 = { a: 1, b: { c: 3 } };
// const data11 = { c: 1, b: { c: 3 } };
// //write your code here
// console.log(intersectionDeep(data10, data11)); // { b: { c: 3 } }
