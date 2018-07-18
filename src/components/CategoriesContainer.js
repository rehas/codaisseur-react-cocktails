import React, {PureComponent} from 'react';
import request from 'superagent'
import Categories from './Categories'

export default class CategoriesContainer extends PureComponent{
    state = {categories : null}

    componentDidMount(){
        request
            .get("https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list")
            .then(response => response.body.drinks)
            .then(categoriesDownloaded => this.updateCategories(categoriesDownloaded))
            .catch(console.error)
    }

    updateCategories(newCategories){
        this.setState({
            categories : newCategories
        })
    }



    render(){
        const categories = this.state.categories
        console.log(categories)
        return (
        <div>
            <p>Hello I'm Categories Container</p>
            {!categories && 'Loading Categories...' }
            {categories && categories.map((x,i)=> <Categories key={i} categoryname ={x.strCategory} />) }
        </div>
        )
    }
}