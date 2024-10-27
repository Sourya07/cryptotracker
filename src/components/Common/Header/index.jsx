import React from 'react'
import "./style.css"

function Header() {
  return (
    <div className='navbar'>
      <h1> Cryptotracker <span style={{ color: "var(--blue)" }}>.</span></h1>
      <div className='links'>
        <a href="/">
          <p className='link'>Compare</p>
        </a>
        <a href="/">
          <p className='link'>Watchlist</p>
        </a>
        <a href="/">
          <p className='link'>Dashboard</p>
        </a>
      </div>
    </div>
  )
}

export default Header;