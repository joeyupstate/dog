import React, {Component} from "react"
import { Link } from 'react-router-dom';

const ASSETS = {
    facebookLogo: require("../../assets/facebook.png"),
    redditLogo: require("../../assets/reddit.png"),
    twitterLogo: require("../../assets/twitter.png")
  };
  

class Footer extends Component{
    render(){
        const PAGES = [
            {
              title: 'Home',
              to: '/'
            },
            {
              title: 'Services',
              to: '/services'
            },
            {
              title: 'Our Story',
              to: '/about'
            },
            {
                title:"Advertise",
                to:'/advertise'
            }
         
          ];

        return(
            <div className = "footer">
              <div className = "icon-row">
          <img
          className="icons"
          src={ASSETS.facebookLogo}
        alt="facebookLogo"
        />
         <img
          className="icons"
          src={ASSETS.redditLogo}
        alt="redditLogo"
        />
        <img
          className="icons"
          src={ASSETS.twitterLogo}
        alt="redditLogo"
        />
        </div>
            <div className="links">
                {PAGES.map((page)=>(
                    <Link
                
                    className="link-list"
                    to ={page.to}
                    key={page.title}
                    
                  
                    >
                    {page.title}
                    
                    </Link>
                    
                ))}
            </div>
            </div>
        )
    }
}

export default Footer
