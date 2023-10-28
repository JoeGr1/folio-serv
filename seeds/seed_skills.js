const skillsData = require("../seed_data/skillsData");

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("skills").del();
  await knex("skills").insert(skillsData);
};
