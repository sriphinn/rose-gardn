import React from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';
import './LogItem.css';

export default function LogItem(props) {
  return (
    <li className='log-item'>
      <div className='log-content'>
      <h3>
        {props.log}
      </h3>
      <p className='log-notes'>
        {props.notes}
      </p>
      <p className='log-date'>
        Date added:<br/>
        {moment(props.date).format("MM DD YYYY")}
      </p>
      </div>
      <div className='log-buttons'>
        <br/>
        <button className='log-edit-button'>
          <Link to={`/edit-log/${props.rose_id}/${props.id}`} props={props}>
            Edit
          </Link>
        </button>
        <button className='log-delete-button'>
          <Link to={`/delete-log/${props.rose_id}/${props.id}`}>
            Delete
          </Link>
        </button>
      </div>
    </li>
  )
}