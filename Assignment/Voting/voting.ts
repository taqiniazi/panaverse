// install the promptSync package first to get input
// npm install prompt-sync

import prompSync from 'prompt-sync'
const prompt = prompSync()
let personAge:any = prompt("What is your age = ")
if(personAge>=18){
    console.log("You are eligibale to Vote")
}else{
    console.log("You are not eligibale to Vote")
}
