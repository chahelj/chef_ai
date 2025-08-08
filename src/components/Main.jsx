import React from "react"
import IngredientsList from "./IngredientsList"

export default function Main(){
     
    const [ingredients, setIngredients] = React.useState([])
    const ingredientsListItems = ingredients.map(ingredient => (<li key ={ingredient}> {ingredient}</li>))
    
    function addIngredient(formData) {
        const newIngredient = formData.get("ingredient")
        setIngredients((prevIngredient)=> [...prevIngredient, newIngredient])
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
            {ingredientsListItems.length>0?<IngredientsList ingredientsListItems={ingredientsListItems} />: null}
            
        </main>
    )
}