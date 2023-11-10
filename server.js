require("dotenv").config();
const express = require("express");
const knex = require("knex")(require("./knexfile"));

const querystring = require("querystring");
const app = express();

const PORT = process.env.PORT || 8888;

const axios = require("axios");
const { response } = require("express");
require("dotenv").config();

const cors = require("cors");
const { get } = require("http");

app.use(cors());

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

const skillsRoutes = require("./routes/skills");
app.use("/skills", skillsRoutes);

const projectsRoutes = require("./routes/projects");
app.use("/projects", projectsRoutes);

// const skillsRoutes = require("./routes/skills"); // Corrected the require statement
// skillsRoutes(app); // Pass the 'app' object to your route module

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});
