import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

const Home = () => (
  <div>
    <h3>Home!</h3>
  </div>
);

const About = () => (
  <div>
    <h3>About</h3>
  </div>
);

const Topic = ({match}) => {
  console.log(match);
  return (
    <div>
      <h2>{match.params.topicId}</h2>
    </div>
  )
};

const Topics = ({match}) => (
    <div>
      <h2>Topics</h2>
      <ul>
        <li><Link to={`${match.url}/rendering`}>Rendering with React</Link></li>
        <li><Link to={`${match.url}/components`}>Components</Link></li>
        <li><Link to={`${match.url}/props-vs-state`}>Props v. State</Link></li>
      </ul>

      <Route path={`${match.url}/:topicId`} component={Topic}></Route>
      <Route exact path={match.url} render={() => (<div><h3>Please select a topic</h3></div>)}></Route>
    </div>
);

const BasicExample = () => (
  <BrowserRouter>
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/topics">Topics</Link></li>

        <hr />

        <Route exact path="/" component={Home}></Route>
        <Route path="/about" component={About}></Route>
        <Route path="/topics" component={Topics}></Route>
      </ul>
    </div>
  </BrowserRouter>
);

export default BasicExample;