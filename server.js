const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 7000;

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/dist"));
}
app.use("/", require("./routes/index"));

app.get("/*", (req, res) => {
  res.sendFile(path.resolve("client/dist/index.html"));
});

app.listen(PORT, () => console.log(`listening on http://localhost:${PORT}`));
