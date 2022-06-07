const express = require("express");
const app = express();
const cors = require("cors");
const PORT = 8000;

app.use(cors());

const employees = {
  "jim halpert": {
    birthYear: 1978,
    occupation: "Sales Rep",
    actor: "John Krasinski",
    famousQuote:
      "I am about to do something very bold in this job that I've never done before: try.",
  },
  "pam beesly": {
    birthYear: 1979,
    occupation: "Receptionist",
    actor: "Jenna Fischer",
    famousQuote:
      "There's a lot of beauty in ordinary things. Isn't that kind of the point?",
  },
  "dwight schrute": {
    birthYear: 1970,
    occupation: "Assistant to the Regional Manager",
    actor: "Rainn Wilson",
    famousQuote:
      "People underestimate the power of nostalgia. Nostalgia is truly one of the greatest human weaknesses, second only to the neck.",
  },
  "michael scott": {
    birthYear: 1965,
    occupation: "Regional Manager",
    actor: "Steve Carell",
    famousQuote:
      "Would I rather be feared or loved? Easy. Both. I want people to be afraid of how much they love me.",
  },
  "andy bernard": {
    birthYear: 1973,
    occupation: "Regional Director in Charge of Sales",
    actor: "Ed Helms",
    famousQuote:
      "I wish there was a way to know you're in the good old days before you've actually left them.",
  },
  "erin hannon": {
    birthYear: 1986,
    occupation: "Receptionist",
    actor: "Ellie Kemper",
    famousQuote:
      "I think Andy should be the boss. He's just so great. If I'm being objective, then Darryl, of course.",
  },
  "kelly kapoor": {
    birthYear: 1982,
    occupation: "Customer Service Rep",
    actor: "Mindy Kaling",
    famousQuote: "I have a lot of questions. Number one, how dare you?",
  },
  "toby flenderson": {
    birthYear: 1963,
    occupation: "HR Rep",
    actor: "Paul Lieberstein",
    famousQuote:
      "There's not a single appropriate outfit in this whole--except mine, quite honestly.",
  },
  "stanley hudson": {
    birthYear: 1951,
    occupation: "Salesman",
    actor: "Leslie David Baker",
    famousQuote: "If I don't have some cake soon, I might die.",
  },
  "unknown": {
    birthYear: 0,
    occupation: "unkown",
    actor: "unknown",
    famousQuote: "unknown",
  },
};

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.get("/api/:name", (req, res) => {
  const employeeName = req.params.name.toLocaleLowerCase();
  if (employees[employeeName]) {
    res.json(employees[employeeName]);
  } else {
    res.json(employees["unknown"]);
  }
});

app.listen(process.env.PORT || PORT, () => {
  console.log(`The server is listening on port ${PORT}`);
});
