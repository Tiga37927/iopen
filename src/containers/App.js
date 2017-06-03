import React, {Component} from 'react';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';

import Header from './Header';
import Footer from './Footer';
import ArticleContainer from './ArticleContainer';

import './App.css';

const Topics = ({ match }) => (
  <div>
    <h2>Topics</h2>
    <ul>
      <li>
        <Link to={`${match.url}/rendering`}>
          Rendering with React
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/components`}>
          Components
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/props-v-state`}>
          Props v. State
        </Link>
      </li>
    </ul>

    <Route exact path={match.url} render={() => (
      <h3>Please select a topic.</h3>
    )}/>
  </div>
)
class IopenApp extends Component {
  render() {
    return (
      <Router>
        <div className="App">
            <Header></Header>
              <Route path="/" component={ArticleContainer}/>
              <Route path="/topics" component={Topics}/>
            <Footer></Footer>
        </div>
      </Router>
    );
  }
}

export default IopenApp;
