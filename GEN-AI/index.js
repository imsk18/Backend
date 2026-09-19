import "dotenv/config"
import readline from "readline/promises";
// import {ChatMistralAI}  from "@langchain/mistralai"
import {ChatGoogle}from "@langchain/google"
import { HumanMessage } from "@langchain/core/messages";

const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

// const model = new ChatMistralAI({
//     model: "mistral-large-latest",
//     apiKey:process.env.MISTRAL_AI_API

   
// })

// console.log(process.env.MISTRAL_AI_API ? "API key loaded" : "API key missing");
// console.log(process.env.MISTRAL_AI_API);


const model = new ChatGoogle({
    model:"gemini-3.8-flash",
    apiKey: process.env.GIMINI_API_KEY
})


const message = [];

while(true){
    const userInput = await rl.question("you:")

    message.push(new HumanMessage(userInput))

     const Response = await model.invoke("Ai :"+ message);
     message.push(Response)

    console.log(Response.content);
}


   