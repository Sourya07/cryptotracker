import React, { useState } from 'react'
import './style.css'
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';

function Search({ onSearchChange, search }) {


    return (
        <div className='search-flex'>
            < SearchRoundedIcon />

            <input placeholder='Search ' type="text" value={search}
                onChange={(e) => onSearchChange(e)} />

        </div>
    )
}

export default Search;
