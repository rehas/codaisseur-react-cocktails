import React, {PureComponent} from 'react';
import request from 'superagent'
import Categories from './Categories'

export default class CategoriesContainer extends PureComponent{
    state = {
        categories : null,
        categoryUrls : null
    }

    componentDidMount(){
        request
            .get("https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list")
            .then(response => response.body.drinks)
            .then(categoriesDownloaded => this.updateCategories(categoriesDownloaded))
            .catch(console.error)
    }

    updateCategories(newCategories){
        const escapedNewCategories = newCategories.map((nc, index)=>{
            console.log(nc)
            // console.log(nc.strCategory.replace(/\//g, '-'))
            return{   
                ...nc,
                id : index +1,
                categoryDisplayName : nc.strCategory.replace(/\Unknown/g, '').replace(/\//g, '-').replace(/\s/g, '')
                }
        })
        
        // const newCategoryUrls = newCategories.map(nc=>nc.strCategory)
            this.setState({
            categories : escapedNewCategories,
            // categoryUrls : newCategoryUrls
        })
    }



    render(){
        const categories = this.state.categories
         console.log(categories)
        return (
        <div>
            <p>Hello I'm Categories Container</p>
            {!categories && 'Loading Categories...' }
            {categories && categories.map((x,i)=> {
                {/* console.log("were mapping thorugh categories now") */}
                {/* console.log(x) */}
                return (
                    <Categories 
                        key={i}
                        id = {x.id} 
                        categoryname ={x.categoryDisplayName} 
                        categoryUrl = {x.strCategory}
                    />
                    )
                }) }
        </div>
        )
    }
}