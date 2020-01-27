exports.up = function(knex) {
    return knex.schema
      .createTable("recipes", tbl => {
        tbl.increments();
  
        tbl.string("name").notNullable();
  
        tbl
          .integer("prep_time")
          .unsigned()
          .notNullable();
  
        tbl
          .integer("cook_time")
          .unsigned()
          .notNullable();
  
        tbl.string("servings").notNullable();
      })
      .createTable("steps", tbl => {
        tbl
          .integer("recipe_id")
          .unsigned()
          .notNullable()
          .references("id")
          .inTable("recipes")
          .onDelete("CASCADE")
          .onUpdate("CASCADE");
  
        tbl.integer("step_number").notNullable();
  
        tbl.primary(["recipe_id", "step_number"]);
  
        tbl.text("step").notNullable();
      })
      .createTable("ingredients", tbl => {
        tbl.increments();
        tbl
          .string("name")
          .unique()
          .notNullable();
      })
      .createTable("recipe_ingredients", tbl => {
        tbl
          .integer("recipe_id")
          .unsigned()
          .notNullable()
          .references("id")
          .inTable("recipes")
          .onDelete("CASCADE")
          .onUpdate("CASCADE");
  
        tbl
          .integer("ingredient_id")
          .unsigned()
          .notNullable()
          .references("id")
          .inTable("ingredients")
          .onDelete("CASCADE")
          .onUpdate("CASCADE");
  
        tbl.primary(["recipe_id", "ingredient_id"]);
  
        tbl.float("quantity").notNullable();
  
        tbl.string("measurement").notNullable();
      });
  };
  
  exports.down = function(knex) {
    return knex.schema
      .dropTableIfExists("recipe_ingredients")
      .dropTableIfExists("steps")
      .dropTableIfExists("ingredients")
      .dropTableIfExists("recipes");
  };
