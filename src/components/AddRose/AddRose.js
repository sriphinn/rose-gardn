import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './AddRose.css';
import AppContext from '../../AppContext';
import config from '../../config';
import TextareaAutosize from 'react-textarea-autosize';
import image from '../../images/add-rose-header.JPG';


class AddRose extends Component {
  static contextType = AppContext;

  state = {
    error: null,
    // fileInputState = ''
  };

  handleSubmit = e => {
    e.preventDefault()
    const { name, type_name, color, date } = e.target
    const rose = {
      name: name.value,
      type_name: type_name.value,
      color: color.value,
      date: date.value
    }
    this.setState({ error: null})
    fetch(config.API_ENDPOINT + '/roses', {
      method: 'POST',
      body: JSON.stringify(rose),
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
        name.value = ''
        type_name.value = ''
        color.value = ''
        date.value = ''
        this.props.history.push('/mygardn')
      })
      .catch(error => {
        this.setState({ error })
      })
  }

  handleFileInputChange = e => {

  }

  handleClickCancel = () => {
    this.props.history.push('/mygardn')
  };

  render() {
    const { error } = this.state
    return (
      <section className='AddRose'>
        <img src={image} alt='small rose bud surrounded by new foliage' />
        <h3>
          Add New Rose
        </h3>
        <form
          className='add-rose-form'
          onSubmit={this.handleSubmit}
        >
          <div className='add-rose-error' role='alert'>
            {error && <p>{error.message}</p>}
          </div>
          <div>
            <label htmlFor='name'>
              Name
            </label>
            <TextareaAutosize
              type='text'
              name='name'
              id='name'
              placeholder='Cultivar Name'
              required
            />
          </div>
          <div>
            <label htmlFor='type_name'>
              Type
            </label>
            <select name='type_name'>
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
            <select name='color'>
              <option value='Apricot'>Apricot</option>
              <option value='Orange'>Orange</option>
              <option value='Multi-Color'>Multi-Color</option>
              <option value='Pink'>Pink</option>
              <option value='Purple'>Purple</option>
              <option value='Red'>Red</option>
              <option value='White'>White</option>
              <option value='Yellow'>Yellow</option>
            </select>
          </div>
          <div className='date-added'>
            <label htmlFor="date">Date Added</label>
            <input type="date" name="date" required />
          </div>
          <div className='add-rose-buttons'>
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

export default withRouter(AddRose);