function checkPosNegNumber(num:number):string{
    if(num>0){
        return "Positive";
    }else if(num<0){
        return "Negative";
    }else{
        return "Zero";
    }
}
const myVal = 2;
const myVal2 = -2;
const myVal3 = 0;
console.log(`${myVal} is ${checkPosNegNumber(myVal)}`)
console.log(`${myVal2} is ${checkPosNegNumber(myVal2)}`)
console.log(`${myVal3} is ${checkPosNegNumber(myVal3)}`)