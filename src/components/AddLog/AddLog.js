import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './AddLog.css';
import AppContext from '../../AppContext';
import config from '../../config';
import TextareaAutosize from 'react-textarea-autosize';


class AddLog extends Component {
  static contextType = AppContext;

  state = {
    error: null,
  };

  handleSubmit = e => {
    e.preventDefault()
    const { log, notes, date } = e.target
    const logObject = {
      log: log.value,
      notes: notes.value,
      date: date.value
    }
    this.setState({ error: null})
    fetch(config.API_ENDPOINT + '/logs/' + this.props.match.params.id, {
      method: 'POST',
      body: JSON.stringify(logObject),
      headers: {
        'content-type': 'application/json',
        'Authorization': `Bearer ${localStorage.authToken}`
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
        log.value = ''
        notes.value = ''
        date.value = ''
        this.props.history.push('/rose-log/' + this.props.match.params.id)
      })
      .catch(error => {
        this.setState({ error })
      })
  }


  handleClickCancel = () => {
    this.props.history.push('/rose-log/' + this.props.match.params.id)
  };

  render() {
    const { error } = this.state
    return (
      <section className='AddLog'>
        <h3>
          Add New Log
        </h3>
        <form
          className='add-log-form'
          onSubmit={this.handleSubmit}
        >
          <div className='add-log-error' role='alert'>
            {error && <p>{error.message}</p>}
          </div>
          <div>
            <label htmlFor='log'>
              Log Type
            </label>
            <select name='log'required >
              <option value='Water'>Water</option>
              <option value='Prune'>Prune</option>
              <option value='Fertilize'>Fertilize</option>
              <option value='Growth'>Growth</option>
              <option value='Fragrance'>Fragrance</option>
              <option value='Health'>Health</option>
              <option value='Pests'>Pests</option>
              <option value='Misc'>Misc</option>
            </select>
          </div>
          <div>
            <label htmlFor='Name'>
              Notes
            </label>
            <TextareaAutosize
              type='text'
              name='notes'
              id='notes'
              placeholder='notes'
            />
          </div>
          <div className='date-added'>
            <label htmlFor="date">Date Added</label>
            <input type="date" name="date" required />
          </div>
          <div className='add-log-buttons'>
            <button type='submit'>
              Submit
            </button>
            <button type='button' onClick={this.handleClickCancel}>
              Cancel
            </button>
          </div>
        </form>
      </section>
    )
  }
}

export default withRouter(AddLog);