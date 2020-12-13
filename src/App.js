import './App.css';
import Home from './pages'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop';
import SignIn from './pages/signin'
import Error from './pages/error'

function App() {
  return (
    <Router>
      <ScrollToTop/>
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path="/signin" exact component={SignIn} />
        <Route component={Error}/>
      </Switch>
    </Router>
  );
}

export default App;
