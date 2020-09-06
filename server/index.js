// section 1 - we add the express package import
const express = require("express");

// import install axios
const axios = require("axios");

// import cors - it will allow to access api of node to different application
//const cors = require("cors");

const path = require("path");

//section 2 we are calling function to initialize the application
const app = express();

// middleware
//app.use(cors());

app.use(express.static(path.join(__dirname, "..", "public")));

// section 3 - we are sending back HTML content with h1 tag by adding it
// to the response object when we acess the application

app.get("/", (req, res) => {
  res.send("<h1> Home Page </h1>");
});

app.get("/users", (req, res) => {
  axios.get("https://randomuser.me/api/?page=1&results=10").then((response) => {
    res.send(response.data);
  });
});

// section 4 - we are starting the express js server on port 3000
app.listen(3000, () => {
  console.log("server started on port 3000");
});
