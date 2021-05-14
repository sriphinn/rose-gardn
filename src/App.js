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


export default class App extends Component {

  state = {
    status: localStorage.status
  }

  render() {
    const contextValue = {
      status: this.state.status
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
            {/* <Route path='/rose-log/:id' component={RoseLog}/>
            <Route path='/add-note/:id' component={AddNote} />
            <Route path='/edit-note/:id' component={EditNote} />
            <Route path='/delete-note/:id' component={DeleteNote} /> */}
          </AppContext.Provider>
        </main>
      </div>
    )
  }
}
