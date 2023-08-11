// install the promptSync package first to get input
// npm install prompt-sync
// Mathematical formula to getting cure is V = a3
import prompSync from 'prompt-sync'
const prompt = prompSync()
let cubeArea:any = prompt("What is your the area = ")
let resultCube =  Math.pow(cubeArea, 3)
console.log(` The result is ${resultCube}`)