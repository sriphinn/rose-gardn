import React from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';
import './RoseItem.css';

export default function RoseItem(props) {
  return (
    <li className='rose-item'>
      <div className='rose-content'>
      <h3>
        {props.name}
      </h3>
      <p className='rose-type'>
        {props.type}
      </p>
      <p className='rose-date'>
        Date added:<br/>
        {moment(props.date_added).format("MM DD YYYY")}
      </p>
      </div>
      <div className='rose-buttons'>
        <button className='rose-log-button'>
          <Link to={`/rose-log/${props.id}`}>
            View Rose Log
          </Link>
        </button>
        <br/>
        <button className='rose-edit-button'>
          <Link to={`/edit-rose/${props.id}`}>
            Edit
          </Link>
        </button>
        <button className='rose-delete-button'>
          <Link to={`/delete-rose/${props.id}`}>
            Delete
          </Link>
        </button>
      </div>
    </li>
  )
}