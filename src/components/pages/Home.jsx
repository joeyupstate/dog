import React, {Component} from "react"
import List from "../shared/List";
import Button from "../shared/Button";
import Slider from "../shared/Slider"
import Quote from "../shared/Quote"



const ASSETS ={
    doggy: require('../../assets/doggy.jpg'),
    
};
const images = [
   
    require('../../assets/blood.jpg'),
    require('../../assets/fine.jpg')
    
  ]


class Home extends Component{
    render(){

        return(
            <div className="home-page">
                <h1 className ="title">Paw Daddy Paw Cream</h1>
                <h2 className ="sub-title">#1 Vet Recommend Paw Cream</h2>
                <div className="divider"></div>
                   <img
                    src= {ASSETS.doggy}t
                    class="dog-photo"
                    alt="dog-photo"
                    />
         <Button title="Buy Cream Now" />
          <List />
          <div className ="list-block-slide">
              <h2 className="change-descript">See the Change</h2>
          <Slider slides={images} autoPlay={2} />
          </div>
          <Quote />
         
            </div>
        )
    }
}

export default Home