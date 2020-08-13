import React, {Component, Fragment} from "react"
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Header from "./components/Header"
import Home from './components/Home'
import Services from "./components/Services"
import Nav from "./components/Nav"
import About from "./components/About"
import Footer from "./components/Footer"
import Advertise from "./components/Advertise"

class App extends Component{

render(){

  return(
    <Router>
    
      <Nav toggleMenu={this.toggleMenu} />
      <Header toggleMenu={this.toggleMenu} />
      {this.renderRoutes()}
      <Footer />
     
      
     </Router>




);
}
renderRoutes = () => (
  <Fragment>
    <Route
      exact
      path="/"
      render={() => <Home />}
    />
    <Route
      path="/services"
      render={() => <Services />}
    />

    <Route
      path="/about"
      render={() => <About />}
    />
      <Route
      path="/avertise"
      render={() => <Advertise />}
    />
 
  </Fragment>
)

toggleMenu = () => {
  const nav = document.querySelector('.nav');
  if (nav) {
    if (!nav.classList.contains('reveal')) {
      nav.classList.remove('hide');
      nav.classList.add('reveal');
    } else {
      nav.classList.add('hide');
      nav.classList.remove('reveal');
    }
  }
}


}

export default App