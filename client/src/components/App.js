import './App.css';
import { Route, Switch } from 'react-router-dom';
import NavBar from './NavBar'
import Home from './Home'
import SignUp from './SignUp'
import LogIn from './LogIn'
import Crops from './Crops'
import CreateGarden from './CreateGarden'
import MyGardens from './MyGardens'

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route exact path='/signup'>
          <SignUp />
        </Route>
        <Route exact path='/login'>
          <LogIn />
        </Route>
        <Route exact path='/crops'>
          <Crops />
        </Route>
        <Route exact path='/create_garden'>
          <CreateGarden/>
        </Route>
        <Route exact path='/my_gardens'>
          <MyGardens/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
