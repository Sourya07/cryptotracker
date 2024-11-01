import React from 'react'
import "./style.css"
import TemporaryDrawer from './drawer';
import Buttons from '../Button';
import { Link } from 'react-router-dom';


function Header() {
  return (
    <div className='navbar'>
      <h1> Cryptotracker <span style={{ color: "var(--blue)" }}>.</span></h1>
      <div className='links'>
        <Link to="/">
          <p className='link'>Home</p>
        </Link >
        <Link to="/compare">
          <p className='link'>Compare</p>
        </Link >
        <Link to="/watchlist">
          <p className='link'>Watchlist</p>
        </Link >
        <Link to="/dashboard">
          <Buttons
            text={"Dashboard"}
            onClick={() => console.log("hello there")}
          ></Buttons>
        </Link >


      </div>
      <div className="drawer-component">
        <TemporaryDrawer />
      </div>
    </div>
  )
}

export default Header;