const SYSTEM_PROMPT = 'You are an assistant that receives a list of ingredients that a user has and suggests a recipe they could make with some or all of those ingredients. You dont need to use every ingredient they mention in your recipe. The recipe can include additional ingredients they didnt mention, but try not to include too many extra ingredients. Format your response in markdown to make it easier to render to a web page'
import { GoogleGenAI } from "@google/genai"
const genAI = new GoogleGenAI({apiKey:import.meta.env.VITE_GOOGLE_API_KEY})
export default async function getRecipeAI(ingredients)
{
    const response = await genAI.models.generateContent(
    { model:"gemini-2.5-flash",
          contents: SYSTEM_PROMPT + "HERE IS THE LIST OF INGREDIENTS: " + ingredients.join(", ") + ". PLEASE PROVIDE THE RECIPE IN MARKDOWN FORMAT."});
    return response.text
}