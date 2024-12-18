import React from 'react'
import "./styles.css"
import TrendingUpRoundedIcon from '@mui/icons-material/TrendingUpRounded';
import TrendingDownRoundedIcon from '@mui/icons-material/TrendingDownRounded';
function Listed({ coin }) {
    return (
        <tr className='list-row'>
            <td className='info-flex'>
                <img src={coin.image} className='coin-logo' alt={`${coin.name} logo`} />
                <td>
                    <div className='name-col'>
                        <p className='coin-symbol'>{coin.symbol}</p>
                        <p className='coin-name'>{coin.name}</p>
                    </div>
                </td>
            </td>

            {coin.market_cap_change_percentage_24h > 0 ? (
                <td className='chip-flex'>
                    <div className='price-chip'>
                        {coin.market_cap_change_percentage_24h.toFixed(2)}%
                    </div>
                    <TrendingUpRoundedIcon className='trending-icon' />
                </td  >
            ) : (
                <td className='chip-flex'>
                    <div className='price-chip chip-red'>
                        {coin.market_cap_change_percentage_24h.toFixed(2)}%
                    </div>
                    <TrendingDownRoundedIcon className='trending-icon-red' />
                </td >
            )}
            <td>
                <h3 className='coin-price'
                    style={{
                        color: coin.market_cap_change_percentage_24h > 0 ? 'green' : 'red'
                    }}
                >
                    Rs{coin.current_price.toLocaleString()}
                </h3>
            </td>
            <td>
                <p className='description'>
                    Market Cap: Rs{coin.total_volume.toLocaleString()}
                </p>
                <p className='description'>
                    Totalvolume: Rs{coin.market_cap.toLocaleString()}
                </p>
            </td>

        </tr>
    )

}

export default Listed