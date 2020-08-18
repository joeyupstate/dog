import React, {Component, Fragment} from "react"
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Header from "./components/shared/Header"
import Home from './components/pages/Home'
import Services from "./components/pages/Services"
import Nav from "./components/shared/Nav"
import About from "./components/pages/About"
import Footer from "./components/shared/Footer"
import Advertise from "./components/pages/Advertise"

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