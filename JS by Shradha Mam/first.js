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
//     console.log("Multiple of 5")
// }else{
//     console.log("Not Multiple of 5");
// }

let marks;
marks = Number(prompt('Please enter your Marks'));
if (marks >= 80 && marks <= 100) {
    alert('Your grade is A');
    } else if (marks > 69 && marks < 80) {
        alert('Your Grade is B');
        } else if (marks > 59 && marks < 70) {
            alert('Your Grade is C');
            } else if (marks > 49 && marks < 60) {
                alert('Your Grade is D');
                } else {
                    alert('You Failed!')
                }
