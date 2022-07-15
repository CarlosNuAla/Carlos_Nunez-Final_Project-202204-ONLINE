const url = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_APIKEY}&diet=vegetarian&number=15`

export async function getAllRecipes() {    
    await fetch(url).then(resp => resp.json());
}
