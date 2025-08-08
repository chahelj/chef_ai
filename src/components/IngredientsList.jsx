import { GoogleGenAI } from "@google/genai"
import { use, useState } from "react"
export default function IngredientsList({ingredientsListItems}) 
{
    const genAI = new GoogleGenAI({
        apiKey: import.meta.env.VITE_GEMINI_API_KEY,})
    async function getRecipe()
    {
        const response = await genAI.models.generateContent({
        model: "gemini-2.5-flash"
        ,contents: "generate a random word just one word",})
        setResponse(response.text)
        console.log(response.text)
    }
    const [response,setResponse] = useState("")
    return (
            
                <section>
                <div className="Main--ingredient-list">
                    <p>List of  ingredients</p>
                    <ul>
                        {ingredientsListItems}
                    </ul>
                </div>
                {ingredientsListItems.length>4?<div><div className="get-recipe-container">
                    <section>
                        <h1>Ready for a recipe?</h1>
                        <h2>Generate a recipe from your list of ingredients.</h2>
                    </section>
                    <button  onClick={getRecipe}>Get a recipe</button>
                    
                </div>
                <p className="recipe-response">{response}</p>
                </div>:null}

                
            </section>
        )
    }
    