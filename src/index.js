import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { HashRouter } from 'react-router-dom';


ReactDOM.render(<HashRouter><App /></HashRouter>, document.getElementById('root'));
registerServiceWorker();



// render((
//   <Router history={hashHistory}>
//     <Route path="/" component={App}/>
//     <Route path="/repos" component={Repos}/>
//     <Route path="/about" component={About}/>
//   </Router>
// ), document.getElementById('app'))