import React, {PureComponent} from 'react'
import request  from 'superagent';

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
            console.log(nc)
            // console.log(nc.strCategory.replace(/\//g, '-'))
            return{   
                ...nc,
                id : index +1,
                categoryDisplayName : nc.strCategory.replace(/\Unknown/g, '').replace(/\//g, '-').replace(/\s/g, '')
                }
        })
        // console.log(escapedNewCategories , id)
        // console.log(escapedNewCategories.filter(x=> {
        //     console.log(parseInt( x.id) === parseInt( id))
        //     x.id ===id
        // }))
        
        // const newCategoryUrls = newCategories.map(nc=>nc.strCategory)
            this.setState({
            category : escapedNewCategories.filter(x=> parseInt( x.id) === parseInt( id))[0],
            // categoryUrls : newCategoryUrls
        })
        return this.state.category.strCategory
    }


    // componentWillMount(){
    //     console.log("We're in WILL mount")
    //     console.log(this.state.cocktails)

    // }
    
    componentDidMount(){
        this.getCocktaiCategories(this.state.id)
            .then((strCategory)=>{
                request
                    .get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${strCategory}`)
                    .then(console.log)
            })
    }




    render(){
        const categoryName = this.props.match.params.category
        // console.log(this.props)
        return (
            <div>
                {categoryName}
                I'm the cocktailContainer Babe!!
                <p>{this.state.cocktails === null && 'Cocktails loading'}</p>
            </div>
        )
    }
}