# Recipe.destroy_all 
# RecipeTag.destroy_all 
# Ingredient.destroy_all 

# puts 'Seeding Data....'
# Tag.create(name: 'Mexican')
# Tag.create(name: 'Italian')
# Tag.create(name: 'Vegetarian')
# Tag.create(name: 'Chinese')
# Tag.create(name: 'Indian')
# Tag.create(name: 'Japanese')
# Tag.create(name: 'Thai')
# Tag.create(name: 'Mediterranean')
# Tag.create(name: 'American')
# Tag.create(name: 'French')
# Tag.create(name: 'Greek')
# Tag.create(name: 'Korean')
# Tag.create(name: 'Spanish')
# Tag.create(name: 'Vietnamese')
# Tag.create(name: 'Cajun')
# Tag.create(name: 'Middle Eastern')
# Tag.create(name: 'Tex-Mex')
# Tag.create(name: 'Caribbean')
# Tag.create(name: 'Sushi')
# Tag.create(name: 'Vegan')
# Tag.create(name: 'Brazilian')
# Tag.create(name: 'Russian')
# Tag.create(name: 'African')
# Tag.create(name: 'Irish')
# Tag.create(name: 'Scandinavian')
# Tag.create(name: 'Portuguese')
# Tag.create(name: 'Lebanese')
# Tag.create(name: 'Polish')
# Tag.create(name: 'German')
# Tag.create(name: 'Turkish')
# Tag.create(name: 'Cuban')
# Tag.create(name: 'Peruvian')
# Tag.create(name: 'Argentinian')
# Tag.create(name: 'Hawaiian')
# Tag.create(name: 'Fusion')
# Tag.create(name: 'Soul Food')
# Tag.create(name: 'Jamaican')
# Tag.create(name: 'British')
# Tag.create(name: 'Moroccan')
# Tag.create(name: 'Ethiopian')
# Tag.create(name: 'Pescatarian')
# Tag.create(name: 'Fusion')

# User.create(username: 'Base', email: 'sample@gmail.com', first_name: "sample", last_name: 'data', bio: 'null')

# Recipe.create(title: 'Skirt Steak and Grilled Onions', description: 'Juicy thinly sliced skirt steak paired with grilled onion. Try this authentic homemade Mexican dish for your next barbeque meal.', 
#     instructions: "Pound beef with a meat mallet to tenderize. In a large bowl, mix beer, lime juice and 2 tablespoons oil until blended. Add beef to marinade; turn to coat. Refrigerate, covered, at least 30 minutes.
#     Meanwhile, cut partially through onions, leaving tops intact. Drizzle with remaining 1 tablespoon oil; sprinkle with 1/4 teaspoon salt and 1/4 teaspoon pepper.
#     Drain beef, discarding marinade; sprinkle with the remaining 1 teaspoon salt and 1/2 teaspoon pepper. On a greased grill rack, grill steaks and onions, covered, over medium heat or broil 4 in. from heat until meat reaches desired doneness (for medium-rare, a thermometer should read 135°; medium, 140°; medium-well, 145°) and onions are crisp-tender, 2-4 minutes on each side. Cut steak diagonally across the grain into thin slices. Serve with tortillas, onions, cilantro and lime wedges." , 
#     prep_time: 15, cooking_time: 20, user_id: 1)
# Recipe.create(title: 'Garlic Mushroom Mac and Cheese', description: 'Ultra creamy garlic mushroom mac and cheese, with buttery mushrooms and a crispy cheese topping - this will make your house smell INCREDIBLE!', 
#     instructions: "Boil the macaroni in plenty of water, until it's just tender - approximately 10-12 minutes. Drain, and set aside.
#     Meanwhile, melt half of the butter in a large frying pan, and add the diced onion. Cook over a medium-low heat for a few minutes, until the onion is slightly softened. Add the garlic and mushrooms, and continue to cook for a further 5-10 minutes, stirring regularly. You don't want the pan to be too hot - a low simmer in the butter is better than a hot sizzle.
#     Next, make the cheesy sauce. I like to save on washing up, so I tend to create my sauce in the same pan as the vegetables. If you're new to making white sauces, you may prefer to use a separate pan - you can also read my detailed instructions about how to make a white sauce.
#     If you're using the same pan, just push the softened vegetables to the edges, leaving a space in the middle. Add the remaining butter to the centre of the pan, and allow it to melt. Add the flour, and mix it into the butter to form a paste (called a roux). It doesn't matter if a few bits of onion or mushroom get mixed in, but try to leave them around the edge of the pan if you can.
#     Add a splash of milk, and mix the centre of the pan again until the milk has combined with the roux. Continue to add the milk a little at a time, stirring to create a smooth sauce each time before adding more. Gradually, as the sauce becomes thinner, the mushrooms and onion will work themselves back into the mixture.
#     When you have a smooth, creamy sauce, add half of the grated cheddar and all of the chives, along with some black pepper. Mix thoroughly until the cheese has melted into the sauce.
#     Pour the cheesy sauce over the cooked pasta, and mix well to combine. Transfer the mixture into a baking dish - mine measured approximately 8 x 8 inches. Sprinkle the remaining grated cheese on top, and bake at 190°C (Gas Mark 5 / 375°F) for around 30 minutes, or until the mac and cheese is piping hot, and crisped up to your liking." , 
#     prep_time: 25, cooking_time: 30, user_id: 1)

# RecipeTag.create(recipe_id: 1, tag_id: 1)
# RecipeTag.create(recipe_id: 2, tag_id: 2)
# RecipeTag.create(recipe_id: 2, tag_id: 3)

# Ingredient.create(name: 'skirt steak', unit: 'pound', qty: 1, recipe_id: 1)
# Ingredient.create(name: 'beer', unit: 'ounces', qty: 12, recipe_id: 1)
# Ingredient.create(name: 'lime juice', unit: 'cup', qty: 0.25, recipe_id: 1)
# Ingredient.create(name: 'olive oil', unit: 'tablespoons', qty: 3, recipe_id: 1)
# Ingredient.create(name: 'spring onions', unit: 'whole', qty: 8, recipe_id: 1)


# Ingredient.create(name: 'macaroni', unit: 'cups', qty: 2, recipe_id: 2)
# Ingredient.create(name: 'butter', unit: 'ounces', qty: 2, recipe_id: 2)
# Ingredient.create(name: 'onion', unit: 'cups', qty: 0.5, recipe_id: 2)
# Ingredient.create(name: 'minced garlic',unit: 'teaspoons', qty: 2, recipe_id: 2)
# Ingredient.create(name: 'mushrooms',unit: 'ounces', qty: 9, recipe_id: 2)
# Ingredient.create(name: 'flour',unit: 'tablespoons', qty: 2, recipe_id: 2)
# Ingredient.create(name: 'milk',unit: 'cups', qty: 1.5, recipe_id: 2)
# Ingredient.create(name: 'cheddar cheese',unit: 'cups', qty: 1.5, recipe_id: 2)
# Ingredient.create(name: 'chives',unit: 'tablespoons', qty: 0.25, recipe_id: 2)
# Ingredient.create(name: 'black pepper',unit: 'teaspoons', qty: 0.25, recipe_id: 2)

# puts 'Done Seeding!'