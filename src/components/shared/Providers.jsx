import React,{Component} from 'react'



class Providers extends Component {

    render(){
        return(
            <div className="service-title">
            {this.props.title}
                <div className="service discription"></div>
                {this.props.breakdown}
            </div>

        )
    }
}


export default Providers