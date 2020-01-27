exports.seed = function(knex) {
  return knex("ingredients").insert([
    { name: "butter" },
    { name: "Sugar" },
    { name: "Salt" },
    { name: "Flowers" },
    { name: "Pure Vanilla Extract" },
    { name: "Cocoa" },
    { name: "Slime" },
    { name: "Meat" },
    { name: "Oranges" },
    { name: "Olive Oil" },
    { name: "Cyanide" },
    { name: "Black Pepper" },
    { name: "Garlic" },
    { name: "Salty Beer" }
  ]);
};