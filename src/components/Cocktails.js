import React, {PureComponent} from 'react'

export default class Cocktails extends PureComponent{
    render(){
        console.log("Im coming from Cocktails Component")
        console.log(this.props)
        const imagesArr = this.props.imagesArray
        return (
            <div className="cocktail">
                {imagesArr && imagesArr.map(x =>{
                    return (
                        <div key={x.idDrink}>
                            <img src={x.strDrinkThumb} alt=""/>
                            <p> {x.strDrink}</p>
                        </div>
                    )
                })}
            </div>
        )
    }
} 