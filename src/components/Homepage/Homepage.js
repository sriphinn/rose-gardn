import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Homepage.css';
import Image from '../../images/homepage-hero.JPG'

class Homepage extends Component {
  render() {
    return (
      <div className='homepage'>

        <section className='header-container'>
          <img src={Image} alt='rose garden with fountain in the middle' />
        </section>
        
        <section className="about">
          <h3>
            Welcome to the ROSE GARDN!
          </h3>
          <p>
            ROSE GARDN is an app for <br/>
            rosarians, obsessed rose addicts and casual rose enthusiasts <br/>
            to keep track of the roses in their gardens.<br /> 
          </p>
        </section>

        <section className='howto'>
          <p>
            In the ROSE GARDN you'll be able to add your roses and keep an activity log of each one.<br />
            No more guessing when you last watered, fertilized or pruned your roses.<br/>
            {/* You'll also be able to see other users photos and sort by cultivar, color and more. */}
          </p>
        </section>

        <section id='signin'>
        <h3>
            Join now to start tracking your roses!
            </h3>    
            <br/>
            After you create your account, <Link to='/login'>login</Link> <br/>
            and start by adding roses with the Add Rose button.<br/>
            Once it is added, view and expand the log by clicking View Log on each rose.<br/>
          <button id='sign-in'>
            <Link to='/signup'>Sign Up</Link>
          </button>
          <h3>
            Or feel free to peruse the ROSEGARDN in the demo account before signing up.
          </h3>
          <button id='login'>
            <Link to='/login'>Demo</Link>
          </button>
        </section>
      </div>
    )
  }
}

export default Homepage;