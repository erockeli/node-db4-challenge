const router = require("express").Router();

const recipeRouter = require("./recipes/recipeRouter");

router.use("/recipes", recipeRouter);

module.exports = router;