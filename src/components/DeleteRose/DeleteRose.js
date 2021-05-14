import React, { Component } from 'react';
import AppContext from '../../AppContext';
import config from '../../config';
import './DeleteRose.css';
import { withRouter } from 'react-router-dom';

class DeleteRose extends Component {
  static contextType = AppContext;

  state = {
    error: null
  };

  handleSubmit = e => {
    e.preventDefault()
    
    fetch(config.API_ENDPOINT + "/roses/" + this.props.match.params.id, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${localStorage.authToken}`
      }
    })
      .then(data => {
        // callback(this.props.match.params.id)
        this.props.history.push('/mygardn')
      })
      .catch(error => {
        this.setState({ error })
      })
  }

  handleClickCancel = () => {
    this.props.history.push('/mygardn')
  }

  render() {
    const error = this.state.error
    return (
      <div className='delete-rose'>
        <h2>Are you sure you want to delete this rose?</h2>
        
          <div className='delete-rose-error' role='alert'>
          { error && <p>{ error.message }</p>}
          </div>  
          <div className='delete-rose-buttons'>
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

export default withRouter(DeleteRose);