exports.seed = function(knex) {
  return knex("recipes").insert([
    {
      name: "Terrible Brownies",
      prep_time: 20,
      cook_time: 20,
      servings: "5 servings"
    },
    {
      name: "Roasted Pickles",
      prep_time: 50,
      cook_time: 70,
      servings: "12 Servings"
    }
  ]);
};