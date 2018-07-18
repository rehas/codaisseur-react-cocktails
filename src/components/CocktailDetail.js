import React, {PureComponent} from 'react'

export default function CocktailDetail(props){
    console.log(props.cocktail)
    return (
        <div>
            <h1>{props.cocktail.strDrink}</h1>
            <h3>{props.cocktail.strInstructions}</h3>
            <img src={props.cocktail.strDrinkThumb} alt=""/>
        </div>
    )
}