import './App.css'
import { useState, useEffect } from 'react'
import { Route, Switch } from 'react-router-dom'
import NavBar from './NavBar'
import Home from './Home'
import SignUp from './SignUp'
import LogIn from './LogIn'
import Crops from './Crops'
import CreateGarden from './CreateGarden'
import MyGardens from './MyGardens'
import Logout from './Logout'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [user, setUser] = useState(null)
  const [errors, setErrors] = useState([])
  const [crops, setCrops] = useState(null)
  const [currentGarden, setCurrentGarden] = useState(null)


  // useEffect(() => {
  //   fetch("/current_user").then((r) => {
  //     if (r.ok) {
  //       r.json().then((user) => setUser(user));
  //     } else {
  //       r.json().then((err) => console.log(err.error))
  //     }
  //   });
  // }, []);

  useEffect(() => {
    // console.log("its working")
    const validateUser = async () => {
      let req = await fetch("/current_user");
      if (req.ok) {
        setUser(await req.json())
        setIsLoggedIn(true)
        // let user = await req.json()
      } else {
        // handleLogin(false);
        // history.push(“/login”);
        let err = await req.json()
        setErrors([...errors, err.error])
        setIsLoggedIn(false)
      }
    };
    validateUser()
  }, [])

  //on every refresh, validateGarden checks if there is a current_garden stored in a session
  useEffect(() => {
    const validateGarden = async () => {
      let req = await fetch("/current_garden");
      if (req.ok) {
        setCurrentGarden(await req.json())
      } 
    };
    validateGarden()
  }, [])


  useEffect(() => {
    fetch('/crops')
    .then(r => r.json())
    .then(crops => setCrops(crops))
  }, [])


  const handleUserLogin = (loginUser) => {
    setUser(loginUser)
    setIsLoggedIn(true)
  }

  const handleLogout = (response) => {
    setIsLoggedIn(false)
    setCurrentGarden(null)
  }

  

  return (
    <div className="App">
      <NavBar isLoggedIn={isLoggedIn} handleLogout={handleLogout}/>
      <Switch>
        <Route exact path='/'>
          <Home isLoggedIn={isLoggedIn} user={user}/>
        </Route>
        <Route exact path='/signup'>
          <SignUp handleUserLogin={handleUserLogin}/>
        </Route>
        <Route exact path='/login'>
          <LogIn handleUserLogin={handleUserLogin}/>
        </Route>
        <Route exact path='/crops'>
          <Crops />
        </Route>
        <Route exact path='/create_garden'>
          <CreateGarden crops={crops} user={user} currentGarden={currentGarden} setCurrentGarden={setCurrentGarden}/>
        </Route>
        <Route exact path='/my_gardens'>
          <MyGardens user={user} setCurrentGarden={setCurrentGarden}/>
        </Route>
        <Route exact path='/logout'>
          <Logout handleLogout={handleLogout}/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
