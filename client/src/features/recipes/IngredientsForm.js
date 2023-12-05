import React from "react";

function IngredientsForm({ ingredients, setIngredients }) {
  //   console.log(ingredients);
  const handleIngredientChange = (index, field, value, id) => {
    const updatedObj = { ...ingredients[index] };
    updatedObj[field] = value;
    const updatedIngredients = [...ingredients];
    updatedIngredients[index] = updatedObj;
    setIngredients(updatedIngredients);
  };
  const handleRemoveIngredient = (index) => {
    const newIngredients = [...ingredients];
    newIngredients.splice(index, 1);
    setIngredients(newIngredients);
  };
  const handleAddIngredient = () => {
    setIngredients([...ingredients, { name: "", qty: "", unit: "" }]);
  };
  return (
    <div className="mt-4">
      <label className="block text-sm font-bold text-gray-700">
        Ingredients:
      </label>
      {ingredients.map((ingredient, index) => (
        <div key={index} className="flex items-center space-x-2 mt-2">
          <input
            type="text"
            placeholder="Name"
            value={ingredient.name}
            onChange={(e) =>
              handleIngredientChange(index, "name", e.target.value)
            }
            className="w-1/4 border text-honey rounded-md px-3 py-2 focus:outline-none focus:ring focus:border-blue-300"
          />
          <input
            type="number"
            placeholder="Quantity"
            value={ingredient.qty}
            onChange={(e) =>
              handleIngredientChange(index, "qty", e.target.value)
            }
            className="w-1/4 border text-honey rounded-md px-3 py-2 focus:outline-none focus:ring focus:border-blue-300"
          />
          <input
            type="text"
            placeholder="Unit"
            value={ingredient.unit}
            onChange={(e) =>
              handleIngredientChange(index, "unit", e.target.value)
            }
            className="w-1/4 border text-honey rounded-md px-3 py-2 focus:outline-none focus:ring focus:border-blue-300"
          />
          <button
            type="button"
            onClick={() => handleRemoveIngredient(index)}
            className="bg-red-500 text-white rounded-md px-3 py-2 hover:bg-red-600 focus:outline-none"
          >
            Remove
          </button>
        </div>
      ))}
      <button
        className="mt-4 bg-blue-500 text-white rounded-md px-4 py-2 hover:bg-blue-600 focus:outline-none"
        type="button"
        onClick={handleAddIngredient}
      >
        Click To Add Ingredient
      </button>
    </div>
  );
}

export default IngredientsForm;
