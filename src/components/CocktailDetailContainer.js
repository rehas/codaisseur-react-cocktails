import React, {PureComponent} from 'react'
import request  from 'superagent';
import CocktailDetail from './CocktailDetail'

export default class CocktailDetailContainer extends PureComponent{
    state = {
        cocktailId : this.props.match.params.cocktailId,
        cocktailDetails : null
    }
    
    getCocktailDetails(id){
        request
        .get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
        .then(resp => resp.body.drinks[0])
        .then(cocktailDetails => this.updateCocktailDetails(cocktailDetails))
    }
    
    updateCocktailDetails(cocktail){
        this.setState(
            {
                cocktailDetails : cocktail
            }
        )
    }
    
    componentDidMount(){
        this.getCocktailDetails(this.state.cocktailId)
        
    }
    
    render(){
        return(
            <div>
            {this.state.cocktailDetails === null && <p>Loading Details...</p>}
            {this.state.cocktailDetails !== null &&
                <CocktailDetail
                cocktail = {this.state.cocktailDetails}
                />
            }
            </div>
        )
    }
}