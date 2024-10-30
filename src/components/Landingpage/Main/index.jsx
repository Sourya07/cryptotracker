import React from 'react'
import "./styles.css"
import Buttons from '../../Common/Button'
import iphone from "../../../assets/iphone.png";
import gradient from "../../../assets/gradient.png"
function Main() {
    return (
        <div className='flex-info'>
            <div className='left-component'>
                <h1 className='track-crypto-heading'> Track Crypto</h1>
                <h1 className='real-time-heading'> Real Time. </h1>
                <p className='info-text'>Stringx the best crypto tracker,watchlist the bitcoin and ethereum and you favoutite coin  </p>

                <div className='btn-flex'>
                    <Buttons text={"Dashboard"}
                    />
                    <Buttons text={"Share"}
                        outlined={true}
                    />
                </div>
            </div>

            <div className='phone-container'>
                <img src={iphone} className='iphone' />
                <img src={gradient}
                    className='gradient' />

            </div>
        </div>
    )
}

export default Main