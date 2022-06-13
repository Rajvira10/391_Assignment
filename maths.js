const input = document.querySelector("input");
const max2 = document.querySelector(".max");
const min2 = document.querySelector(".min");
const sum2 = document.querySelector(".sum");
const average2 = document.querySelector(".average");
const reverse2 = document.querySelector(".reverse");

const inputchange = () =>{
    let hello = input.value.split(",");
    hello = hello.filter(Number);
    console.log(hello);
    const max = hello.reduce((a,b)=>{
        return Math.max(parseInt(a),parseInt(b));
    })
    max2.innerHTML = max;
    const min = hello.reduce((a,b)=>{
        return Math.min(parseInt(a),parseInt(b));
    })
    min2.innerHTML = min;
    const sum = hello.reduce((accumulator, curr)=>{
        return parseInt(accumulator)+parseInt(curr);
    })
    sum2.innerHTML = sum;
    const average = sum/hello.length;
    average2.innerHTML = average;
    hello.reverse();
    hello.toString();
    reverse2.innerHTML = hello;
}
