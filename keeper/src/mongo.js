import express from "express";
import mongoose from "mongoose";
import ejs from "ejs";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(express.static("public"));
app.set("view engine", "ejs");
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

mongoose.connect("mongodb://localhost:27017/KeeperDB", {
  useNewUrlParser: true,
});
// mongoose.set("useCreateIndex", true);
const itemsSchema = {
  name: String,
  surname: String,
  email: String,
  password: String
};

const Item = mongoose.model("Item", itemsSchema);

// const item1 = new Item({
//   name: "Welcome to your todolist!",
// });

// const item2 = new Item({
//   name: "Hit the + button to add a new item.",
// });

// const item3 = new Item({
//   name: "<-- Hit this to delete an item.",
// });

const defaultItems = [item1, item2, item3];

const listSchema = {
  name: String,
  items: [itemsSchema],
};

const List = mongoose.model("List", listSchema);

app.get("/", function (req, res) {
  res.render("home");
});

app.get("/login", function (req, res) {
  res.render("login");
});

app.get("/register", function (req, res) {
  res.render("register");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
