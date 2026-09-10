const express = require("express");
const fs = require("fs");

const app = express();
const PORT = process.env.PORT || 3000;
const subscription = fs.readFileSync("./subscription.txt", "utf8").trim();

app.get("/", (req, res) => {
  res.type("text/plain").send("ZEUS Subscription is online");
});

app.get("/sub", (req, res) => {
  res.type("text/plain").send(subscription + "\n");
});

app.get("/subscription", (req, res) => {
  res.type("text/plain").send(subscription + "\n");
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`ZEUS subscription server listening on ${PORT}`);
});
