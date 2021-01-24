const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const items = require("./routes/api/items.js");
const path = require("path");

const app = express();

// Body Parser
app.use(bodyParser.json());

// DB Config
// Create keys file where the mongo URI will be stored
const db = require("./config/keys.js").mongoURI;
mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() =>
    console.log(
      `> Connected to the database \n Database can be seen at http://localhost:${port}/api/items`
    )
  )
  .catch((err) => console.log(err));

// use Routes
app.use("/api/items", items);

// Set static assets if in production
if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const port = process.env.PORT || 5000;

app.listen(port, () =>
  console.log(`\n > Server Running at http://localhost:${port} \n`)
);
