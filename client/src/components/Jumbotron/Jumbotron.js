import React, { Component } from 'react';
import './Jumbotron.css'

class Jumbotron extends Component {
  render() {
    return (
        <section id="photo-bg" class="blue lighten-4">
        <div class="container">
          <div class="row">
            <div class="col s12">
              <h1 class="header center-on-small-only white-text">&nbsp;</h1>
              <h4 class="light white-text text-lighten-4 center-on-small-only">&nbsp;</h4>
            </div>
          </div>
        </div>  
        </section>
    );
  }
}

export default Jumbotron;