import React, { Component } from 'react';
import Nav from '../Nav/Nav'
import bgImg from '../Custom/sitesrc/youtube-img.jpeg'

export default class Feed extends Component {
  render() {
    return (
    <div className='bg-[#f8f8f8] bgImg w-full h-[45rem] relative'>
      <div className="spacebox">
      </div>
      <div className="top z-10 relative">
        <Nav />
        <div className="main flex justify-center">
            <div className="search-space w-fu"></div>
        </div>
      </div>
    </div>
    )
  }
}
