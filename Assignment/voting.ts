import prompSync from 'prompt-sync'
const prompt = prompSync()
let personAge:any = prompt("What is your age")
// console.log(`Hello, Your age is ${personAge}`)
// let personAge = 17;
if(personAge>=18){
    console.log("You are eligibale to Vote")
}else{
    console.log("You are not eligibale to Vote")
}
// export{}