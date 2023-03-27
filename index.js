require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { Configuration, OpenAIApi } = require("openai");
const twilio = require("twilio");

const app = express();

app.listen(3000, () => console.log("listening on port 3000..."));
app.use(cors());
app.use(express.json());

app.post("/", async (req, res) => {
  const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
  });
  const openai = new OpenAIApi(configuration);
  console.log(process.env.OPENAI_API_KEY);

  const completion = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [
      {
        role: "user",
        content: `Give me in less than 1500 character a ${req.body.category} a project for a ${req.body.level} level with the following tool ${req.body.language} following this format Description: Objectif: Delivarables: Tools: `,
      },
    ],
  });
  console.log(completion.data.choices[0].message.content);

  const accountSid = process.env.ACCOUNT_ID; // Your Account SID from www.twilio.com/console
  const authToken = process.env.TOKEN; // Your Auth Token from www.twilio.com/console

  const client = require("twilio")(accountSid, authToken);

  client.messages
    .create({
      body: completion.data.choices[0].message.content,
      to: `whatsapp:${req.body.number}`, // Text this number
      from: `whatsapp:${process.env.FROM_NUMBER}`, // From a valid Twilio number
    })
    .then((message) => console.log(message.sid))
    .catch((error) => console.error(error));

  res.status(200).send("Operation sucessfull");
});
