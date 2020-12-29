import './App.css';
import Home from './pages'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop';
import signinpage from './pages/signinpage'
import Error from './pages/error'

function App() {
  return (
    <Router>
      <ScrollToTop/>
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path="/signin" exact component={signinpage} />
        <Route component={Error}/>
      </Switch>
    </Router>
  );
}

export default App;
