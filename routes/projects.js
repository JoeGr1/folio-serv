const knex = require("knex")(require("../knexfile"));
const express = require("express");
const router = express.Router();

// Get a list of projects
router.get("/", async (req, res) => {
  const data = await knex.select("*").from("projects");
  res.send(data);
});

// Get a project by ID
router.get("/:id", async (req, res) => {
  const project_id = req.params.id;

  const data = await knex
    .select("*")
    .from("projects")
    .where("id", "=", project_id);
  res.send(data);
});

module.exports = router;
