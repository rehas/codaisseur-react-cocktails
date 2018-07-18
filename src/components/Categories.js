import React, {PureComponent} from 'react'
import {Link} from 'react-router-dom'

export default class Categories extends PureComponent{
    render(){
        return (
            <div className="category">
                <p>
                    <Link to={`/${this.props.id}`}>  {this.props.categoryname}</Link>
                </p>
            </div>
        )
    }
} 