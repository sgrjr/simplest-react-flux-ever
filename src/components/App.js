import React from 'react';
import { Route, RouteHandler, Link } from 'react-router';
import RequestService from '../util/RequestService';
import AppConstants from '../util/AppConstants';
import Loading from './Loading';

class App extends React.Component {
  render() {  
    return (
      <div>		
        {this.props.children}
      </div>
    );
  }
  
}

App.contextTypes = {
    router: React.PropTypes.object.isRequired
};

module.exports = App;