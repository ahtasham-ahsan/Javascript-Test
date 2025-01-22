// Write a function groupBy that takes an array of objects and a key, then returns a new object where the data is grouped by the specified key.
// Here the array can be as

// So if I want to Group by age it should return data like this
// {
//   '25': [
//     { name: 'Alice', age: 25, education: 'BSc' },
//     { name: 'Charlie', age: 25, education: 'BSc' }
//   ],
//   '30': [
//     { name: 'Bob', age: 30, education: 'MSc' },
//     { name: 'David', age: 30, education: 'PhD' }
//   ]
// }

// or if I want it by eduction it should return data like this
// {
//   'BSc': [
//     { name: 'Alice', age: 25, education: 'BSc' },
//     { name: 'Charlie', age: 25, education: 'BSc' }
//   ],
//   'MSc': [
//     { name: 'Bob', age: 30, education: 'MSc' }
//   ],
//   'PhD': [
//     { name: 'David', age: 30, education: 'PhD' }
//   ]
// }

// Your function should be like this

// Constraints
// - Array will contain atleast one valid object
// - A given key will be present in the Objects present in array
const people = [
  { name: "Alice", age: 25, education: "BSc" },
  { name: "Bob", age: 30, education: "MSc" },
  { name: "Charlie", age: 25, education: "BSc" },
  { name: "David", age: 30, education: "PhD" },
];

function groupBy(arr, keys) {
    let new_Arr = [];
    let this_Key = keys;
    let new_obj = {};

    arr.forEach((element, index) => {
        new_Arr.push(element[keys]);
        // console.log(element[keys]);
        // if(new_obj[element[keys]]){
        //     new_obj[element[keys]] = [...]
        // }
        new_obj[element[keys]] = new Array;
    });
    arr.forEach((element, index) => {

        for(let i = 0; i< arr.length; i++){
            if(new_Arr[i] === element[keys]){
                new_obj[element[keys]] = element; // Not getting how to push the element into the array (not getting the name to use to push to the array for array.push);
            }
        }
    });    
    // console.log(new_obj);
    return new_obj;
}

console.log(groupBy(people, 'age'));