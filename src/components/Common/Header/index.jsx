import React from 'react'
import "./style.css"
import TemporaryDrawer from './drawer';
import Buttons from '../Button';

function Header() {
  return (
    <div className='navbar'>
      <h1> Cryptotracker <span style={{ color: "var(--blue)" }}>.</span></h1>
      <div className='links'>
        <a href="/">
          <p className='link'>Home</p>
        </a>
        <a href="/">
          <p className='link'>Compare</p>
        </a>
        <a href="/">
          <p className='link'>Watchlist</p>
        </a>
        <a href="/">
          <Buttons
            text={"Dashboard"}
            outlined={true}
            onClick={() => console.log("hello there")}
          ></Buttons>
        </a>


      </div>
      <div className="drawer-component">
        <TemporaryDrawer />
      </div>
    </div>
  )
}

export default Header;