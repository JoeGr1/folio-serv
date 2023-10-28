const knex = require("knex")(require("../knexfile"));
const express = require("express");
const router = express.Router();

// Get a list of skills
router.get("/", async (req, res) => {
  const data = await knex.select("*").from("skills");
  res.send(data);
});

// Get a skill by ID
router.get("/:id", async (req, res) => {
  const skill_id = req.params.id;

  const data = await knex.select("*").from("skills").where("id", "=", skill_id);
  res.send(data);
});

module.exports = router;
