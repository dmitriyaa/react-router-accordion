import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import AccordionRoute from './AccordionRoute';
import AccortionLink from './AccordionLink';

import Home from './Home';
import About from './About';
import Contact from './Contact';


class App extends Component {

  render() {
    return (
      <div>
        <AccortionLink to="/home">Home</AccortionLink>
        <AccordionRoute exact path="/home" component={Home}/>

        <AccortionLink to="/about">About</AccortionLink>
        <AccordionRoute path="/about" component={About}/>

        <AccortionLink to="/contact">Contact</AccortionLink>
        <AccordionRoute path="/contact" component={Contact}/>
      </div>
    );
  }
}

export default withRouter(App);
