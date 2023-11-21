let items= [250, 645, 300, 900, 50];
let discounted = [];
for(let val of items){
    let disVal = val * .1;
    discounted.push(val - disVal);
}
console.log(discounted)