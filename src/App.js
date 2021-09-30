import React from 'react';
import Acceuil from './pages/Acceuil';
import Menu from './pages/Menu';
import { Route,Switch} from 'react-router-dom';
import './styles/App.css';
import Quiz from './pages/Quiz';

class App extends React.Component{
  render() {
    return (
      <React.Fragment>
        <Switch>
          <Route exact path='/' component={Acceuil}/>
          <Route path='/menu' component={Menu}/>
          <Route path='/quiz' component={Quiz}/>
        </Switch>
      </React.Fragment>
      
    )
  }
}

export default App;
