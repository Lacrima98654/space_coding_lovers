import React from 'react';
import Acceuil from './pages/Acceuil';
import Menu from './pages/Menu';
import Puzzle from './pages/Puzzle';
import Details from './pages/Details';
import Error from './pages/error';
import { Route,Switch} from 'react-router-dom';
import './styles/App.css';
import Quiz from './pages/Quiz';
import 'bootstrap/dist/css/bootstrap.min.css'

class App extends React.Component{
  render() {
    return (
      <React.Fragment>
        <Switch>
          <Route exact path='/space_coding_lovers/' component={Acceuil}/>
          <Route path='/space_coding_lovers/menu/' component={Menu}/>
          <Route path='/space_coding_lovers/quiz' component={Quiz}/>
          <Route path='/space_coding_lovers/puzzle' component={Puzzle}/>
          <Route path='/space_coding_lovers/details/:quiz' component={Details}/>
          <Route component={Error}/>
        </Switch>
      </React.Fragment>
      
    )
  }
}

export default App;
