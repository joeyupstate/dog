import React, {Component} from "react"

const ASSETS ={
    mandog: require('../../assets/mandog.jpg'),
    pawnotitle: require("../../assets/paw-no-title.jpg")
    
};



class About extends Component{

    render(){
        return(
            <div className="about">
            <h1 className ="title">Our Story</h1>
            <h2 className ="sub-title">"My Paws are my Weels"<br></br><p className="dogquote">-Gus the Dog</p></h2>
            <div className="divider"></div>
            <img
            src={ASSETS.mandog}
            className="man-dog-photo"
            alt="man-and-dog"
            />
            <div className = "about-paragraph">
                <img
                src={ASSETS.pawnotitle}
                className="paw-no-title-picture"
                alt="paw"
                />
                <p>
                    My dog is a special dog.  You dont know how special.  I think he is the same as other dogs, i dont think so.  I never need
                    to do anything with it.  Do you need to do the same 
                    sdfjklsjfksdfjksdfjksdfjk.There are weasels jin my pants and i dont think there is an elephant thanty could save me.
                    <br></br>
                    My dog is a special dog.  You dont know how special.  I think he is the same as other dogs, i dont think so.  I never need
                    to do anything with it.  
                </p>

                <p>
                    My dog is a special dog.  You dont know how special.  I think he is the same as other dogs, i dont think so.  I never need
                    to do anything with it.  Do you need to do the same 
                   
                </p>
            </div>
            </div>
        )
    }
}


export default About