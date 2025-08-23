import React from "react"
import IngredientsList from "./IngredientsList"
import { useState } from "react"
import getRecipeAI from "../ai"
import Recipe from "./Recipe"

export default function Main(){
     
    const [ingredients, setIngredients] = React.useState([])
    const ingredientsListItems = ingredients.map(ingredient => (<li key ={ingredient}> {ingredient}</li>))
    
    function addIngredient(formData) {
        const newIngredient = formData.get("ingredient")
        setIngredients((prevIngredient)=> [...prevIngredient, newIngredient])
     }
    
    
    
    const [showRecipe, setShowRecipe] = React.useState(false)
    const [recipe, setRecipe] = React.useState("")
    async function getRecipe() {
        setRecipe(await getRecipeAI(ingredients))
        setShowRecipe(true)
        console.log(recipe)
    }
    return(
        <main>
            <form action={addIngredient} className="Main--ingredient-form">
                <input 
                    type="text" 
                    placeholder="e.g. oregano"
                    aria-label="Add ingredient"
                    name="ingredient"
                />
                <button>Add ingredient</button>
            </form>
            {ingredientsListItems.length>0?<IngredientsList ingredientsListItems={ingredientsListItems} ingredients={ingredients} setRecipe= {setRecipe} setShowRecipe = {setShowRecipe}/>: null}
            {ingredientsListItems.length>4?<div className="get-recipe-container">
                    <section>
                        <h1>Ready for a recipe?</h1>
                        <h2>Generate a recipe from your list of ingredients.</h2>
                    </section>
                    <button  onClick={getRecipe}>Get a recipe</button>
                    </div>:null}
            {showRecipe?<section className="recipe-container">
                <div>
                   <Recipe RECIPE={recipe}/> 
                </div>
            </section>: null
                }
        </main>
    )
}