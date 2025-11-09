import React from "react"
import IngredientsList from "./IngredientsList"
import Recipe from "./Recipe"
import getRecipeAI from "../ai"

// ... (other imports)

export default function Main(){
     
    const [ingredients, setIngredients] = React.useState([])
    // Note: ingredientsListItems is now an array of <li> elements
    const ingredientsListItems = ingredients.map(ingredient => (<li key ={ingredient}> {ingredient}</li>))
    
    function addIngredient(formData) {
        const newIngredient = formData.get("ingredient")
        // Basic check to prevent adding empty strings
        if (newIngredient.trim() === "") return; 
        setIngredients((prevIngredient)=> [...prevIngredient, newIngredient.trim()])
     }
    
    const [showRecipe, setShowRecipe] = React.useState(false)
    const [recipe, setRecipe] = React.useState("")
    const [RecipeButton, setRecipeButton] = React.useState("Get Recipe")

    async function getRecipe() {
        setRecipeButton("Generating...")
        setRecipe(await getRecipeAI(ingredients))
        setShowRecipe(true)
        setRecipeButton("New Recipe")
        
    }

    return(
        <main>
            {/* The wrapper for centering and max-width */}
            <div className="content-area">

                {/* 1. SHOPPING LIST (Visual Top) */}
                {/* Use a clear container class for the shopping list aesthetic */}
                {ingredientsListItems.length > 0 ? (
                    <div className="shopping-list-container">
                        <IngredientsList 
                            ingredientsListItems={ingredientsListItems} 
                            ingredients={ingredients} 
                            setRecipe={setRecipe} 
                            setShowRecipe={setShowRecipe}
                        />
                    </div>
                ) : null}
                
                {/* 2. ADD INGREDIENT FORM (Visual Second) */}
                <form action={addIngredient} className="Main--ingredient-form">
                    <input 
                        type="text" 
                        placeholder="e.g. oregano"
                        aria-label="Add ingredient"
                        name="ingredient"
                    />
                    <button>Add ingredient</button>
                </form>
                
                {/* 3. GET RECIPE CTA */}
                {ingredientsListItems.length > 4 ? (
                    <div className="get-recipe-container">
                        <section>
                            <h1>Ready for a recipe?</h1>
                            <h2>Generate a recipe from your list of ingredients.</h2>
                        </section>
                        <button onClick={getRecipe}>{RecipeButton}</button>
                    </div>
                ) : null}
                
                {/* 4. RECIPE OUTPUT */}
                {showRecipe ? (
                    <section className="recipe-container">
                        <div>
                          <Recipe RECIPE={recipe} />
                        </div>
                    </section>
                ) : null}
            </div>
        </main>
    )
}