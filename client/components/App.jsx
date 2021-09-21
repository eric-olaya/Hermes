import React, { useEffect } from 'react';
import SideBar from './SideBar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LogsContainer from '../containers/LogsContainer';
import HomePage from './HomePage';
import AlertsContainer from '../containers/AlertsContainer';
import CreateIndex from '../containers/CreateIndex';
import Visualizer from '../containers/Visualizer';
import MonitorButton from './MonitorButton';
import Nav from './Nav';
import { useRecoilValue, useRecoilState } from 'recoil';
import { intervalIdsState, currentAlertsState } from '../atom';
import axios from 'axios';
import img from '../assets/Hermes-A-Gold.png';

const App = () => {
  const intervalIds = useRecoilValue(intervalIdsState);
  const [currentAlerts, setCurrentAlerts] = useRecoilState(currentAlertsState);

  useEffect(() => {
    axios
      .get('/alerts')
      .then((result) => {
        console.log('result', result);
        setCurrentAlerts(result.data);
      })
      .catch((error) => console.log('Error in App alerts get request ', error));
    return () => {
      for (const intervalId of intervalIds) {
        clearInterval(intervalId);
      }
    };
  }, []);

  return (
    <Router>
      <header className='header'>
        <Nav />
        <MonitorButton />
        <img src={img} alt='Hermes logo' />
      </header>
      <div className='app-container'>
        {false && <SideBar />}

        <Switch>
          <Route exact path='/'>
            <HomePage />
          </Route>
          <Route path='/logs'>
            <LogsContainer />
          </Route>
          <Route path='/visualizer'>
            <Visualizer />
          </Route>
          <Route path='/alertsManager'>
            <AlertsContainer />
          </Route>
          <Route path='/indices'>
            <CreateIndex />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
