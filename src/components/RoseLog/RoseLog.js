import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './RoseLog.css';
import LogItem from '../LogItem/LogItem';
import config from '../../config';
import image from '../../images/rose-log-header.JPG';

class MyGardn extends Component {
  state = {
    logs: [],
    error: null
  }

  componentDidMount() { 
    fetch(config.API_ENDPOINT + '/logs/' + this.props.match.params.id, {
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
      .then(logs => {
        this.setState({
          logs
        })
      })
      .catch(error => this.setState({ error }))
  }
  
  render() {
    return (
      <div className='rose-log'>
        <img src={image} alt='floral print gardening gloves with pruners' />
        <h2>
          ROSE LOG
        </h2>
        <button className='add-log-button'>
          <Link to={'/add-log/' + this.props.match.params.id}>
            Add New Log
          </Link> 
        </button>
        <ul className='rose-log-list'>
          {this.state.logs.map(log =>
            <LogItem
              key={log.id}
              {...log}
              history={this.props.history}
            />
          )}
        </ul>
        <button className='add-log-button'>
          <Link to={'/add-log/' + this.props.match.params.id}>
            Add New Log
          </Link> 
        </button>
      </div>
    )
  }
}

export default MyGardn;

MyGardn.defaultProps = {
  match: {params:{}}
};