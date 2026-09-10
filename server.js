const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 8080;
const CONFIG_FILE = path.join(__dirname, "subscription.txt");

app.use(express.static(path.join(__dirname, "public")));

function getConfigs() {
  return fs.readFileSync(CONFIG_FILE, "utf8")
    .split(/\r?\n/)
    .map(s => s.trim())
    .filter(Boolean);
}

app.get("/sub", (req, res) => {
  const body = getConfigs().join("\n");
  res.type("text/plain").send(Buffer.from(body, "utf8").toString("base64"));
});

app.get("/configs", (req, res) => {
  res.json({ configs: getConfigs() });
});

app.get("/health", (req, res) => {
  res.json({ ok: true, service: "reza_irvpn" });
});

app.listen(PORT, () => {
  console.log(`reza_irvpn panel listening on ${PORT}`);
});