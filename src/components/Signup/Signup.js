import React, { Component } from 'react';
import './Signup.css';
import AppContext from '../../AppContext';
import config from '../../config';

class Signup extends Component {
  static contextType = AppContext;

  state = {
    error: null
  }

  handleSubmit = e => {
    e.preventDefault()
    const { username, password } = e.target
    const post = {
      username: username.value,
      password: password.value
    }
    this.setState({ error: null})
    fetch(config.API_ENDPOINT + '/users', {
      method: 'POST',
      body: JSON.stringify(post),
      headers: {
        'content-type': 'application/json',
      }
    })
      .then (res => {
        if (!res.ok){
          return res.json().then(error => {
            throw error 
          })
        }
        return res.json()
      })
      .then(data => {
        localStorage.status = 'valid'
        this.context.setStatus('valid')
        this.props.history.push('/login')
      })
      .catch(error => {
        this.setState({ error })
      })
  }

  handleCancelClick = () => {
    this.props.history.push('/')
  }

  render() {
    return (
      <div className='signup'>
        <h2>SIGN UP</h2>
        <form className='signup-form' onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="username">Username</label>
            <input type="text" name='username' id='username'/>
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input type="password" name='password' id='password' />
          </div>
          <p>
            Password must be at least 8 characters and include a number, 
            a capital letter, and a special character
          </p>
          <button type='submit'>
            Submit
          </button>
          {''}
          <button type='cancel-button' onClick={this.handleCancelClick}>
            Cancel
          </button>
        </form>
      </div>
    )
  }
}

export default Signup;