import React, {Component} from "react"
import List from "./List";

const ASSETS ={
    doggy: require('../assets/doggy.jpg'),
    
};


class Home extends Component{
    render(){

        return(
            <div className="home-page">
                <h1 className ="title">Paw Daddy Paw Cream</h1>
                <h2 className ="sub-title">#1 Vet Recommend Paw Cream</h2>
                <div className="divider"></div>
                <img
                src= {ASSETS.doggy}
                class="dog-photo"
                alt="dog-photo"
                />
         <div className="start-button"><p className="button-title">BUY CREAM</p></div>
          <List />      
         
            </div>
        )
    }
}

export default Home