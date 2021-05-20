import React, { useState, useEffect } from 'react';
import config from '../../config';
import './EditLog.css';
import moment from 'moment';

function EditLog(props) {
  const [error, setError] = useState('')
  const [log, setLogs] = useState({})
  
  useEffect(() => {
    fetch(config.API_ENDPOINT + '/logs/' + props.match.params.roseId + '/' + props.match.params.id, {
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
      .then(data => {
        setLogs(data)
        console.log(data)
      })
      .catch(error => setError({ error }))
  }, [props.match.params.id])

  const handleSubmit = e => {
    e.preventDefault()
    const { log, notes, date } = e.target
    const logObject = {
      log: log.value,
      notes: notes.value,
      date: date.value
    }
    setError(null)
    fetch(config.API_ENDPOINT + "/logs/" + props.match.params.roseId + '/' + props.match.params.id, {
      method: 'PATCH',
      body: JSON.stringify(logObject),
      headers: {
        'content-type': 'application/json',
        'Authorization': `Bearer ${localStorage.authToken}`
      }
    })
      .then(res => {
        if (!res.ok) {
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
        props.history.push('/rose-log/' + props.match.params.roseId)
      })
      .catch(error => {
        setError(error)
      })
  }

  const handleClickCancel = () => {
    props.history.goBack()
  }

  const date = log.date ? moment(log.date).format('YYYY-MM-DD') : null

  return (
    <div className='edit-log'>
      <h2>Edit</h2>
      <form
        className='edit-log-form'
        onSubmit={handleSubmit}
      >
        <div className='edit-log-error' role='alert'>
          {error && <p>{error.message}</p>}
        </div>
        <div>
          <label htmlFor='log'>
            Log Type
            </label>
          <select name='log' defaultValue={log.log} >
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
          <label htmlFor='notes'>
            Notes
              {' '}
          </label>
          <input type='text' name='notes' id='notes' defaultValue={log.notes} />
        </div>
        <div className='date-added'>
          <label htmlFor="date">Date Added</label>
          <input type="date" name="date" defaultValue={date} />
        </div>
        <div className='edit-log-buttons'>
          <button type='button' onClick={handleClickCancel}>
            Cancel
            </button>
          {' '}
          <button type='submit'>
            Save
            </button>
        </div>
      </form>
    </div>
  )
}

EditLog.defaultProps = {
  match: {
    params: {}
  }
}

export default EditLog;

