import React, {Component} from "react"


class Button extends Component{
    render(){
        return(

            <div className="start-button">
            <p className="button-title">{this.props.title}</p>
            </div>
        )
    }
}

export default Button