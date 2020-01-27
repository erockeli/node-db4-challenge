const router = require("express").Router();

const recipeDB = require("./recipeModal");

router.get("/", (req, res) => {
  recipeDB
    .getRecipes()
    .then(recipes => {
      if (recipes) {
        res.status(200).json(recipes);
      } else {
        res.status(404).json({ message: "No recipes found" });
      }
    })
    .catch(error => {
      res.status(500).json({ message: "Error getting recipes", error: error });
    });
});

router.get("/:id/shoppinglist", (req, res) => {
  const id = req.params.id;

  recipeDB
    .getShoppingList(id)
    .then(shoppingList => {
      if (shoppingList) {
        res.status(200).json(shoppingList);
      } else {
        res.status(404).json({ message: "No ingredients found" });
      }
    })
    .catch(error => {
      res
        .status(500)
        .json({ message: "Error getting ingredients", error: error });
    });
});

router.get("/:id/instructions", (req, res) => {
  const id = req.params.id;

  recipeDB
    .getInstructions(id)
    .then(shoppingList => {
      if (shoppingList) {
        res.status(200).json(shoppingList);
      } else {
        res.status(404).json({ message: "No ingredients found" });
      }
    })
    .catch(error => {
      res
        .status(500)
        .json({ message: "Error getting ingredients", error: error });
    });
});

router.get("/search", (req, res) => {
  const ingredient = req.query.ingredient;
  
  recipeDB
    .getRecipesByIngredient(ingredient)
    .then(recipes => {
      if (recipes) {
        res.status(200).json(recipes);
      } else {
        res.status(404).json({ message: "No recipes found" });
      }
    })
    .catch(error => {
      res.status(500).json({ message: "Error getting recipes", error: error });
    });
});

module.exports = router;