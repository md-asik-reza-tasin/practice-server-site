const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const cors = require('cors');

app.use(cors());
app.use(express.json());

const user = [
  {
    name: "tasin",
    age: 26,
  },
  {
    name: "pronoy",
    age: 26,
  },
  {
    name: "b",
    age: 26,
  },
  {
    name: "c",
    age: 26,
  },
];

app.get("/", (req, res) => {
  res.send("Hello word");
});

app.get("/user", (req, res) => {
  res.send(user);
});

app.post("/user", (req, res) => {
    const add = req.body;
    user.push(add);
    res.send(user)
})

app.listen(port, () => {
  console.log(`server is running on : ${port}`);
});
