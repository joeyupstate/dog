import React,{Component} from 'react'



class ServicePhoto extends Component {

    render(){
        return(
           <img
           src= {this.props.photo}
           className="service-photos"
           alt="service-icons" />

        )
    }
}


export default ServicePhoto