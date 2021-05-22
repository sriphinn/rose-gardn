import React, { Component } from 'react';
import { Route } from 'react-router-dom'; 
import './App.css';
import AppContext from './AppContext';
import Nav from './components/Navbar/Navbar';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import Homepage from './components/Homepage/Homepage';
import MyGardn from './components/MyGardn/MyGardn';
import AddRose from './components/AddRose/AddRose';
import EditRose from './components/EditRose/EditRose';
import DeleteRose from './components/DeleteRose/DeleteRose';
import RoseLog from './components/RoseLog/RoseLog';
import AddLog from './components/AddLog/AddLog';
import EditLog from './components/EditLog/EditLog';
import DeleteLog from './components/DeleteLog/DeleteLog';


export default class App extends Component {

  state = {
    status: localStorage.status
  }

  setStatus = status => {
    this.setState({
      status
    })
  }

  render() {
    const contextValue = {
      status: this.state.status,
      setStatus: this.setStatus
    }
    return (
      <div className='App'>
        <main>
          <AppContext.Provider value={contextValue}>
            <Nav />
            <Route exact path='/' component={Homepage} />
            <Route path='/signup' component={Signup} />
            <Route path='/login' component={Login} />
            <Route path='/mygardn' component={MyGardn} />
            <Route path='/add-rose' component={AddRose} />
            <Route path='/edit-rose/:id' component={EditRose} />
            <Route path='/delete-rose/:id' component={DeleteRose} />
            <Route path='/rose-log/:id' component={RoseLog}/>
            <Route path='/add-log/:id' component={AddLog} />
            <Route path='/edit-log/:roseId/:id' component={EditLog} />
            <Route path='/delete-log/:roseId/:id' component={DeleteLog} />
          </AppContext.Provider>
        </main>
        <footer>
          ROSEGARDN<br/>
          <a href="https://phinn.dev/">&copy; Phinn Sriployrung 2021</a>
        </footer>
      </div>
    )
  }
}
