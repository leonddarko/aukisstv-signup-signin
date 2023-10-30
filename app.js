import express from "express";

const app = express();
const port = 3000;

app.set("view engine", "ejs");
app.use(express.static("public"));

app.route("/").get((req, res) => {
  res.render("index");
});

app.listen(port, () => {
  console.log(`Application listing at http://localhost:${port}`);
});
