const express = require("express"),
  app = express(),
  PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.get("/", async (req, res) => {
  return res.json({response: "Response from server."});
});
app.use("/api/cats", require("./apis/cats"));
app.get("*", async (req, res) => {
  return res.sendStatus(404);
})

app.listen(PORT, () => console.log("listening on:", PORT));
