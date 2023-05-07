/** 
Write a program to solve this problem. 

let data1 = { name: "sachin", address: "surat", pincode: 395865 }
let data2 = { fname: "Tendulkar", lname: "Ramesh", phoneno: 3213213213 }

 Want this array as a final result, 
[
  {name: "sachin", fname: "tendulkar"}, 
  {address: "surat", lname: "Ramesh"}, 
  {pincode: 395865, phoneno: "3213213213"}
];
 
Note: Don’t use any inbuilt es6 later javascript functions.
make a simple js file and run the code.
  */

let data1 = { name: "sachin", address: "surat", pincode: 395865 };
let data2 = { fname: "Tendulkar", lname: "Ramesh", phoneno: 3213213213 };

const result = Object.keys(data1).map((key, index) => {

  return ({ [key]: data1[key], [Object.keys(data2)[index]]: data2[Object.keys(data2)[index]] })
})
console.log(result)