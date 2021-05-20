import React, { Component } from 'react';
import AppContext from '../../AppContext';
import config from '../../config';
import './DeleteLog.css';
import { withRouter } from 'react-router-dom';

class DeleteLog extends Component {
  static contextType = AppContext;

  state = {
    error: null
  };

  handleSubmit = e => {
    e.preventDefault()
    
    fetch(config.API_ENDPOINT + "/logs/" + this.props.match.params.roseId + '/' + this.props.match.params.id, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${localStorage.authToken}`
      }
    })
      .then(data => {
        this.props.history.push('/rose-log/' + this.props.match.params.roseId)
      })
      .catch(error => {
        this.setState({ error })
      })
  }

  handleClickCancel = () => {
    this.props.history.goBack()
  }

  render() {
    const error = this.state.error
    return (
      <div className='delete-log'>
        <h2>Are you sure you want to delete this log?</h2>
        
          <div className='delete-log-error' role='alert'>
          { error && <p>{ error.message }</p>}
          </div>  
          <div className='delete-log-buttons'>
            <button type='button' onClick={this.handleClickCancel}>
              Cancel
            </button>
            {' '}
            <button type='submit' onClick={this.handleSubmit}>
              Delete
            </button>
          </div>
        
      </div>
    )
  }
}

export default withRouter(DeleteLog);