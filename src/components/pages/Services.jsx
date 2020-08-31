import React, {Component} from "react"
import Header from "../shared/Header"
import Providers from "../shared/Providers"
import ServicePhoto from "../shared/ServicePhoto"
import ServiceDescription from "../shared/ServiceDescripton"


const ASSETS ={
    cream: require('../../assets/jam.jpg'),
    shirt: require('../../assets/shirt.jpg'),
    brush: require('../../assets/brush.jpg')
    
};

const CreamDescription = 'We pride ourselves on being the number one dog and cat paw cream on the market.  We use all natural ingredients sources right here in america.';
const ClothesDescription = 'We also have developed a line of custom made dog and cat clothing.  The clothing is made from all organic materials from the US.';
const HairDescription = 'Maintaining your pets hair can be daunting.  We offer a full line of combs and brushes to leave your dog looking great.';

class Services extends Component{



    

    render(){
        return(
            <div className = "services">
               
          
            <h1 className ="title">Our Services</h1>
            <div className="divider"></div>
            <Providers title= "Custom Paw Cream" />
            <ServicePhoto photo = {ASSETS.cream}/>
            <ServiceDescription description ={CreamDescription} />
            <Providers title= "Dog Styled Clothing"/>
            <ServicePhoto photo = {ASSETS.shirt}/>
            <ServiceDescription description ={ClothesDescription} />
            <Providers title= "Dog Hair Supplies"/>
            <ServicePhoto photo = {ASSETS.brush}/>
            <ServiceDescription description ={HairDescription} />
            
            </div>
        )
    }

}

export default Services