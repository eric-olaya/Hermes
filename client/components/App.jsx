import React from "react";
import SideBar from "./SideBar";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import LogsContainer from "./LogsContainer";
import HomePage from "./HomePage";
import AlertsContainer from "./AlertsContainer";
import CreateIndex from "./CreateIndex";
import Visualizer from "./Visualizer";
import Nav from "./Nav";

const App =()=>{

  return(
    <Router>
     
      <header className="header">
        <Nav/>
        <h1>Hermes</h1>
      </header>
      <div className="app-container">
        {false && <SideBar/>}
           
        <Switch>
          <Route exact path="/logs">
            
            <HomePage/>
          </Route>
          <Route path="/">
            <LogsContainer/>
          </Route>

          <Route path="/visualizer">
            <Visualizer/>
          </Route>

          <Route path="/alerts">
            <AlertsContainer/>
          </Route>
          <Route path="/indexes">
            <CreateIndex/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;