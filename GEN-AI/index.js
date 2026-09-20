import "dotenv/config";
import readline from "readline/promises";

import { ChatGoogle } from "@langchain/google";
import { HumanMessage } from "@langchain/core/messages";
import { createAgent, tool } from "langchain";
import { sendEmail } from "./mail.service.js";
import * as z from "zod";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const emailTool = tool(
    sendEmail,
    {
        name: "emailTool",

        description:
            "Send an email to a recipient. Use this tool whenever the user asks you to send an email.",

        schema: z.object({
            to: z.string().email().describe("Recipient's email address"),

            subject: z
                .string()
                .describe("Subject of the email"),

            text: z
                .string()
                .describe("Plain text content of the email")
        })
    }
);

const model = new ChatGoogle({
    model: "gemini-3.1-flash-lite",
    apiKey: process.env.GIMINI_API_KEY
});

const agent = createAgent({
    model,
    tools: [emailTool]
});

const messages = [];

while (true) {
    const userInput = await rl.question("You: ");

    messages.push(new HumanMessage(userInput));

    const response = await agent.invoke({
        messages
    });
    messages.push(response.messages[response.messages.length -1]);

    console.log(response.messages.at(-1)?.content);
}