
exports.seed = function(knex) {
  return knex("steps").insert([
    {
      recipe_id: 1,
      step_number: 1,
      step:
        "Add a bunch of sugar and flour into a bowl and add more sugar and pure fat sliced from wherever"
    },
    {
      recipe_id: 1,
      step_number: 2,
      step: "Heat the oven to 600 degrees and never wear oven mits "
    },
    {
      recipe_id: 2,
      step_number: 1,
      step: "Heat the oven to 900 degrees and use a blow torch if needed. "
    },
    {
      recipe_id: 2,
      step_number: 2,
      step: "Cut the pickles up into weird shapes and make it messy "
    },
    {
      recipe_id: 2,
      step_number: 3,
      step: "Take the pickles out of the oven and eat them. "
    }
  ]);
};
