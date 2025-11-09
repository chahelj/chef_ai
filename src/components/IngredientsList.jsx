import { GoogleGenAI } from "@google/genai"
import { use, useState } from "react"
import getRecipeAI from "../ai"
export default function IngredientsList({ingredientsListItems,ingredients,setRecipe,setShowRecipe}) 

{
    function getRecipe() {
        setRecipe(recipe = getRecipeAI(ingredients))
        setShowRecipe(true)
        console.log(recipe)}
    return (
            
                <section>
                <div className="Main--ingredient-list">
                    <p>List of  ingredients</p>
                    <ul>
                        {ingredientsListItems}
                    </ul>
                </div>
                

                
            </section>
        )
    }
