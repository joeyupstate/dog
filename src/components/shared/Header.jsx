import React, {Component} from "react"

const ASSETS ={
    hamburger: require('../../assets/buger.png'),
    paw: require('../../assets/paw3.jpg')
};


class Header extends Component{
    render(){

        return(
            <div className ="Header">
            <img 
              src = {ASSETS.paw}
              className= "paw-image"
              alt ="paw-icon"
              onClick={this.props.toggleMenu}
              />
              <img 
              src = {ASSETS.hamburger}
              className= "burger-image"
              alt ="hamburger-icon"
              onClick={this.props.toggleMenu}
              />
            </div>
        )
    }
}

export default Header



 
