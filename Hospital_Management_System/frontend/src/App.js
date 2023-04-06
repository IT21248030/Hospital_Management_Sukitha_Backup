import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import DoctorChat from './Pages/Ni_Chat/DoctorChat';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>


          <Route exact path='/DoctorChat' component={DoctorChat} />
        
         
        </Switch>

      </Router>


    </div>
  );
}

export default App;
