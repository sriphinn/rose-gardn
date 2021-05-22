import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './MyGardn.css';
import RoseItem from '../RoseItem/RoseItem';
import config from '../../config';
import image from '../../images/my-roses-header.jpg';

class MyGardn extends Component {
  state = {
    roses: [],
    error: null
  }

  componentDidMount() { 
    fetch(config.API_ENDPOINT + '/roses/', {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
        'Authorization': `Bearer ${localStorage.authToken}`
      }
    })
      .then(res => {
        if (!res.ok) {
          throw new Error(res.status)
        }
        return res.json()
      })
      .then(roses => {
        this.setState({
          roses
        })
      })
      .catch(error => this.setState({ error }))
  }
  
  render() {
    return (
      <div className='my-gardn'>
        <img src={image} alt='cluster of pink, yellow and white roses' />
        <h2>
          MY ROSES
        </h2>
        <ul className='my-gardn-list'>
          {this.state.roses.map(rose =>
            <RoseItem
              key={rose.id}
              {...rose}
              history={this.props.history}
            />
          )}
        </ul>
        <button className='add-rose-button'>
          <Link to='/add-rose'>
            Add New Rose
          </Link> 
        </button>
      </div>
    )
  }
}

export default MyGardn;