import React, {PureComponent} from 'react'
import request  from 'superagent';
import Cocktails from './Cocktails'

export default class CocktailContainer extends PureComponent{
    state = {
        cocktails : null,
        category : null, 
        id : this.props.match.params.categoryId,
        images : null
    }
    
    getCocktaiCategories = (id) =>{
        return request.get("https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list")
        .then(response => response.body.drinks)
        .then(categoriesDownloaded => this.updateCategory(categoriesDownloaded, id))
        .catch(console.error)
    }
    
    updateCategory = (newCategories, id) =>{
        const escapedNewCategories = newCategories.map((nc, index)=>{
            return{   
                ...nc,
                id : index +1,
                categoryDisplayName : nc.strCategory.replace(/\Unknown/g, '').replace(/\//g, '-').replace(/\s/g, '')
            }
        })
        this.setState({
            category : escapedNewCategories.filter(x=> parseInt( x.id) === parseInt( id))[0],
        })
        return this.state.category.strCategory
    }
    
    updateImages(imagesArray){
        this.setState({
            images : imagesArray
        })
        return this.state.images
    }
    
    componentDidMount(){
        this.getCocktaiCategories(this.state.id)
        .then((strCategory)=>{
            request
            .get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${strCategory}`)
            .then(response => response.body.drinks)
            .then(drinks =>  this.updateImages(drinks))
        })
    }
    
    render(){
        const categoryName = this.props.match.params.category
        return (
            <div>
                <h2>{categoryName}</h2>
                <p>I'm the cocktailContainer Babe!!</p>
                <p>{this.state.cocktails === null && 'Cocktails loading'}</p>
                <Cocktails
                    imagesArray = {this.state.images}
                />
            </div>
        )
    }
}