import React, { Component } from 'react';
import './Jumbotron.css'

class Jumbotron extends Component {
  render() {
    return (
        <section id="photo-bg" className="blue lighten-4">
        <div className="container">
          <div className="row">
            <div className="col s12">
              <h1 className="header center-on-small-only white-text">&nbsp;</h1>
              <h4 className="light white-text text-lighten-4 center-on-small-only">&nbsp;</h4>
            </div>
          </div>
        </div>  
        </section>
    );
  }
}

export default Jumbotron;