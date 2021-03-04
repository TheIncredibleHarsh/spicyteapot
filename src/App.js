import './App.css';
import MainPage from './pages/index.jsx'
import ErrorPage from './pages/error.jsx'

import { BrowserRouter as Router, Route, Switch, Link, Redirect } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Route path="/" component={MainPage} />
      <Route path="/404" component={ErrorPage} />
    </Router>
  );
}

export default App;
