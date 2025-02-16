import { Favourite } from  "../models/favouritemodel.js"

// Add a recipe to favourites
const addfavourites = async (req, res) => {
    try {
        const { user, recipe } = req.body;

        let favs = await Favourite.findOne({ userId: user }); // Fixed query

        if (!favs) {
            favs = new Favourite({ userId: user, favourites: [{ recipeId: recipe.recipeId, title: recipe.title, image: recipe.image }] });
        } else {
            // Check if the recipe is already in the favourites
            const exists = favs.favourites.some(item => item.recipeId === recipe.recipeId);
            if (!exists) {
                favs.favourites.push({ recipeId: recipe.recipeId, title: recipe.title, image: recipe.image });
            }
        }

        await favs.save();
        res.json(favs);

    } catch (error) {
        console.log(error);
        return res.status(500).json({ success: false, message: "Internal server error" });
    }
};

// Remove a recipe from favourites
const removefavourites = async (req, res) => {
    try {
        const { user, recipe } = req.body;
        console.log("Received:", req.body);

        const favs = await Favourite.findOne({ userId: user });
        if (!favs) {
            return res.status(404).json({ message: "No favourites found for this user" });
        }

        // Check if the recipe exists before removing
        const recipeExists = favs.favourites.some(item => item.recipeId === recipe.recipeId);
        if (!recipeExists) {
            return res.status(400).json({ message: "Recipe not found in favourites" });
        }

        // Remove the recipe.filter(...) creates a new array that includes only the items that do not match the given recipeId.
// item.recipeId !== recipe.recipeId ensures that the item being removed is filtered out.
        favs.favourites = favs.favourites.filter(item => item.recipeId !== recipe.recipeId);

        // Save the updated favourites list
        await favs.save();
        res.json({ message: "Recipe removed successfully", favourites: favs.favourites });

    } catch (error) {
        console.log(error);
        return res.status(500).json({ success: false, message: "Internal server error" });
    }
};

export { addfavourites, removefavourites };
