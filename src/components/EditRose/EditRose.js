import React, { useState, useEffect } from 'react';
import config from '../../config';
import './EditRose.css';

function EditRose(props) {
  const [error, setError] = useState('')
  const [rose, setRoses] = useState({})
  
  useEffect(() => {
    fetch(config.API_ENDPOINT + '/roses/' + props.match.params.id, {
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
        setRoses(data)
      })
      .catch(error => setError({ error }))
  }, [props.match.params.id])

  const handleSubmit = e => {
    e.preventDefault()
    const { name, type, color, date } = e.target
    const post = {
      name: name.value,
      type: type.value,
      color: color.value,
      date: date.value
    }
    setError(null)
    fetch(config.API_ENDPOINT + "/posts/" + props.match.params.id, {
      method: 'PATCH',
      body: JSON.stringify(post),
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
        name.value = ''
        type.value = ''
        color.value = ''
        date.value = ''
        props.history.push('/mygardn')
      })
      .catch(error => {
        setError(error)
      })
  }

  const handleClickCancel = () => {
    props.history.push('/mygardn')
  }

  return (
    <div className='edit-rose'>
      <h2>Edit</h2>
      <form
        className='edit-rose-form'
        onSubmit={handleSubmit}
      >
        <div className='edit-rose-error' role='alert'>
          {error && <p>{error.message}</p>}
        </div>
        <div>
          <label htmlFor='name'>
            Name
              {' '} 
          </label>
          <input type='text' name='name' id='name' defaultValue={rose.name} />
        </div>
        <div>
          <label htmlFor='type'>
            Type
            </label>
          <select name='type' defaultValue={rose.type}>
            <optgroup label='Modern'>
              <option value='Canadian Hardy'>Canadian Hardy</option>
              <option value='Climbing'>Climbing</option>
              <option value='English'>English</option>
              <option value='Floribunda'>Floribunda</option>
              <option value='Grandiflora'>Grandiflora</option>
              <option value='Hybrid Tea'>Hybrid Tea</option>
              <option value='Miniature'>Miniature</option>
              <option value='Pernetiana'>Pernetiana</option>
            </optgroup>
            <optgroup label='Old'>
              <option value='Alba'>Alba</option>
              <option value='Bourbon'>Bourbon</option>
              <option value='Centifolia'>Centifolia</option>
              <option value='China'>China</option>
              <option value='Damask'>Damask</option>
              <option value='Gallica'>Gallica</option>
              <option value='Hybrid perpetual'>Hybrid perpetual</option>
              <option value='Hybrid rugosa'>Hybrid rugosa</option>
              <option value='Moss'>Moss</option>
              <option value='Noisette'>Noisette</option>
              <option value='Tea'>Tea</option>
            </optgroup>
            <option value='Not Listed'>Not Listed</option>
          </select>
        </div>
        <div>
          <label htmlFor='color'>
            Dominant Color
            </label>
          <select name='color' defaultValue={rose.color}>
            <option value='Apricot'>Apricot</option>
            <option value='Multi-Color'>Multi-Color</option>
            <option value='Orange'>Orange</option>
            <option value='Pink'>Pink</option>
            <option value='Purple'>Purple</option>
            <option value='Red'>Red</option>
            <option value='White'>White</option>
            <option value='Yellow'>Yellow</option>
          </select>
        </div>
        <div className='date-added'>
          <label htmlFor="date">Date Added</label>
          <input type="date" name="date" defaultValue={rose.date} />
        </div>
        <div className='edit-rose-buttons'>
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

EditRose.defaultProps = {
  match: {
    params: {}
  }
}

export default EditRose;

