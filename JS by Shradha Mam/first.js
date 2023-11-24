// console.log("Hello Kunal How are you ???????")

// Practise Question

// const product= {
//     name: "Parker Jotter Standard CT Ball Pen",
//     rating: 3.5,
//     price: 270,
//     offer: 5,
// };


// comments
/*
With these you can Comment
Operators
Assignment operators
Unary Operators

*/


// Conditional Statements

// let number= prompt("Enter a number");
// if(number % 5 === 0){
//     sssonsole.log("Multiple of 5")
// }else{
//     console.log("Not Multiple of 5");
// }
// let marks;
// marks = Number(prompt('Please enter your Marks'));
// if (marks >= 80 && marks <= 100) {
//     alert('Your grade is A');
//     } else if (marks > 69 && marks < 80) {
//         alert('Your Grade is B');
//         } else if (marks > 59 && marks < 70) {
//             alert('Your Grade is C');
//             } else if (marks > 49 && marks < 60) {
//                 alert('Your Grade is D');
//                 } else {
//                     alert('You Failed!')
//                 }


// for(let i=0; i<=100; i++){
//     if(i%2 == 0){
//         console.log(i)
//     }
// }



//Template Literals

/*let SpecialString = `Kunal Arya`;
console.log(SpecialString);


let obj = {
    item:"Pen",
    price: 100,
}
console.log("Object is ",obj.item,  "and its price is ", obj.price, "rupees");

*/


let name = prompt("Enter you name");
name = name.trim()
alert(`Your Username is ${name+ '@gmail.com'}`)


let marks=[85, 97, 44, 37, 76, 60];
let sum=0;
for(let val of marks){
    sum += val;
}
console.log('Mean of marks are ' , sum/marks.length);

let items= [250, 645, 300, 900, 50];
let discounted = [];
for(let val of items){
    let disVal = val * .1;
    discounted.push(val - disVal);
}
console.log(discounted)


function returnVowel(argu){
    let numberOfVowel = 0;
    for(let i=0; i<argu.length; i++){
        if(argu[i] == 'a'|| argu[i] == 'A'){
            numberOfVowel++;
        }
        if(argu[i] == 'e'|| argu[i] == 'E'){
            numberOfVowel++;
        }
        if(argu[i] == 'i'|| argu[i] == 'I'){
            numberOfVowel++;
        }
        if(argu[i] == 'o'|| argu[i] == 'O'){
            numberOfVowel++;
        }
        if(argu[i] == 'u' || argu[i] == 'U'){
            numberOfVowel++;
        }
    }
    console.log(numberOfVowel)
}

returnVowel("Kunal Arya");

//Question on forEach loop

let num= [1,2,3,4];

num.forEach((num) => {
    console.log(num ** 2)
})