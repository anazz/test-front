import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

import Home from '../src/components/Home/Home';
import Doctors from './components/DoctorsAvailabilities/Doctors';
import DoctorsAvailabilities from "./components/DoctorsAvailabilities/DoctorsAvailabilities";
import Bookings from '../src/components/Bookings/Bookings';
import "./App.css";

function App() {
  return (
        <div className="App">
            <Router>
                <div className="navbar">
                    <Link to="/">Home</Link>
                    <Link to="/availabilities">Les docteurs et leurs disponibilités</Link>
                </div>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/availabilities" exact component={Doctors} />
                    <Route path='/availabilities/:id' exact component={DoctorsAvailabilities} />
                    <Route path="/bookings" exact component={Bookings} />
                </Switch>
            </Router>
        </div>
  );
}

export default App;
