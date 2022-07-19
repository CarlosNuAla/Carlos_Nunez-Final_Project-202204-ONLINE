import { useEffect, useState } from "react";
import { getAllRecipes } from "../../services/api-recipes";
import "./recipes-list.css"


export function RecipesList() {
    const initialState: Array<any> = [];
    const [recipes, setRecipes] = useState(initialState);


    useEffect(() => {
        getAllRecipes().then(data => {
            
            setRecipes(data.results);         
        })
    }, []);




    return (
        <>
            <ul>
                {recipes.map((item) => (
                    <li className="li-element" key={item.id}>
                        <span className="Recipe-title">{item.title}</span>
                        <span> 〰 </span>
                        <span role="button" 
                        className="button">🤍</span>
                        <br></br>
                        <span><img className="Recipe-img" alt="Img recipe" src={item.image}/></span>
                    </li>
                ))}
            </ul>

        </>
    );
}
