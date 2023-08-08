"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// install the promptSync package first to get input
// npm install prompt-sync
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const prompt = (0, prompt_sync_1.default)();
let personAge = prompt("What is your age = ");
if (personAge >= 18) {
    console.log("You are eligibale to Vote");
}
else {
    console.log("You are not eligibale to Vote");
}
