import './App.css';
import MainPage from './pages/index.jsx';
import ErrorPage from './pages/error.jsx';
import ShowRecipe from './pages/showRecipe.jsx';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={MainPage} />
        <Route path="/recipe/:id" exact component={ShowRecipe} />
        <Route path="/404" component={ErrorPage} />
      </Switch>
    </Router>
  );
}

export default App;
