const express = require("express");
const app = express();
const PORT = 5000;
const path = require("path");

// Init middleware

// Body parser middleware
// app.use(express.json()); // Allows us to handle raw JSON
// app.use(express.urlencoded({ extended: false })); // Allows us to handle form submissions/URL encoded data

// Set static folder
app.use(express.static(path.join(__dirname, "public"))); // This one line sets public as our static folder
// With this, simply creating about.html and then adding that to the end of localhost correctly loaded the page
app.use("/css", express.static(__dirname + "/css"));
app.use("/img", express.static(__dirname + "/img"));
app.use("/js", express.static(__dirname + "/js"));

// Set views
app.set("views", "./views");
app.set("view engine", "ejs");

app.get("", (req, res) => {
  res.render("index", { text: "This is neato" });
  // <h1><%= text %></h1>
});

app.listen(PORT, () => console.log(`Server running on: ${PORT}`));

// --------------------------------------------------

// // const http = require("http");
// const express = require("express");
// // const path = require("path");

// const app = express();

// // const PORT = process.env.PORT || 5000; // 5000 is a good one when in development stage?
// const PORT = 5000;

// // Init middleware

// // Body parser middleware
// // app.use(express.json()); // Allows us to handle raw JSON
// // app.use(express.urlencoded({ extended: false })); // Allows us to handle form submissions/URL encoded data

// // Set static folder
// // app.use(express.static(path.join(__dirname, "public"))); // This one line sets public as our static folder
// // With this, simply creating about.html and then adding that to the end of localhost correctly loaded the page
// // app.use("/", express.static(__dirname));
// app.use(express.static(__dirname));
//
// // app.use(express.static("public"));
// // app.use("/", express.static(__dirname));

// // Members API routes
// // app.use("/api/members", require("./routes/api/members"));

// app.get("", (req, res) => {
//   console.log("hi");
//   res.send(__dirname + "");
// });

// app.listen(PORT, () => console.log(`Server running on: ${PORT}`));
