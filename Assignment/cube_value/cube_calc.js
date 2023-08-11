"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// install the promptSync package first to get input
// npm install prompt-sync
// Mathematical formula to getting cure is V = a3
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const prompt = (0, prompt_sync_1.default)();
let cubeArea = prompt("What is your the area = ");
let resultCube = Math.pow(cubeArea, 3);
console.log(` The result is ${resultCube}`);
