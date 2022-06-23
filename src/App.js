import './App.css';
import Home from './component/Home';
import Menubar from './component/Menubar';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import AddUser from './component/AddUser';
import EditUser from './component/EditUser';
import User from './component/User';

function App() {
  

  return (
    <div className="container">
      <Menubar/>
      <Router>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route path="/user/:id" component={User}></Route>
          <Route path="/addUser" component={AddUser}></Route>
          <Route path="/edit/:id" component={EditUser}></Route>

        </Switch>
      </Router>
     
    </div>
  );
}

export default App;
