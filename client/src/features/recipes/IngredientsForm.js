import React from "react";

function IngredientsForm({ ingredients, setIngredients }) {
  const handleIngredientChange = (index, field, value) => {
    const newIngredients = [...ingredients];
    newIngredients[index][field] = value;
    setIngredients(newIngredients);
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
    <div>
      <label className="label">Ingredients:</label>
      {ingredients.map((ingredient, index) => (
        <div key={index}>
          <input
            type="text"
            placeholder="Name"
            value={ingredient.name}
            onChange={(e) =>
              handleIngredientChange(index, "name", e.target.value)
            }
          />
          <input
            type="number"
            placeholder="Quantity"
            value={ingredient.qty}
            onChange={(e) =>
              handleIngredientChange(index, "qty", e.target.value)
            }
          />
          <input
            type="text"
            placeholder="Unit"
            value={ingredient.unit}
            onChange={(e) =>
              handleIngredientChange(index, "unit", e.target.value)
            }
          />
          <button type="button" onClick={() => handleRemoveIngredient(index)}>
            Remove
          </button>
        </div>
      ))}
      <button className="btn" type="button" onClick={handleAddIngredient}>
        Click To Add Ingredient
      </button>
    </div>
  );
}

export default IngredientsForm;
