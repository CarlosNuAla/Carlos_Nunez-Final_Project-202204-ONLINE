import { iRecipe } from "../models/recipe";

const url = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_APIKEY}&diet=vegetarian&number=100`

export function getAllRecipes(): Promise<iRecipe> {    
    return fetch(url).then(resp => resp.json());
}
