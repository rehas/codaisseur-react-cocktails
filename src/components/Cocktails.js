import React, {PureComponent} from 'react'

export default class Cocktails extends PureComponent{
    render(){
        console.log("Im coming from Cocktails Component")
        console.log(this.props)
        const imageDetails = this.props.imageDetails
        return (
            <div className="cocktail">
                {imageDetails && 
                 <div key={imageDetails.idDrink} >
                    <img src={imageDetails.strDrinkThumb} alt=""/>
                    <p> {imageDetails.strDrink}</p>
                 </div>
                }
            </div>
        )
    }
} 