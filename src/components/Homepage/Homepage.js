import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Homepage.css';
import Image from '../../images/homepage-hero.JPG'

class Homepage extends Component {
  render() {
    return (
      <div className='homepage'>

        <section className='header-container'>
          <img src={Image} alt='notebook and pen with refracted light' />
        </section>
        
        <section className="about">
          <h3>
            Welcome to the ROSE GARDN!
          </h3>
          <p>
            ROSE GARDN is an gathering place for rosarians, obsessed rose addicts and casual rose enthusiasts to share and keep track of the roses in their gardens.<br /> 
          </p>
        </section>

        <section className='howto'>
          <p>
            In the ROSE GARDN you'll be able to upload photos of your roses and keep a log of each.<br />
            No more guessing when you last watered, fertilized or pruned your roses.<br/>
            You'll also be able to see other users photos and sort by cultivar, color and more.
          </p>
        </section>

        <section id='signin'>
        <h3>
            Join now to share your love of roses with the community!
          </h3>
          <button id='sign-in'>
            <Link to='/signup'>Sign Up</Link>
          </button>
          <h3>
            Or feel free to peruse the ROSE GARDN before signing up.
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