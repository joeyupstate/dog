import React,{Component} from 'react'



class ServiceDescription extends Component {

    render(){
        return(
          <div className="service-description">
              {this.props.description}
            </div>

        )
    }
}


export default ServiceDescription