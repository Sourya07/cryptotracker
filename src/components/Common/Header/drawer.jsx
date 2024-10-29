import * as React from 'react';
import Drawer from '@mui/material/Drawer';
import { useState } from 'react';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import { IconButton } from '@mui/material';

export default function TemporaryDrawer() {
    const [open, setopen] = useState(true)





    return (
        <div>

            <IconButton onClick={() => setopen(true)}><MenuRoundedIcon className='link' /> </IconButton>

            <Drawer
                anchor={"right"}
                open={open}
                onClose={() => setopen(false)}
            >

                <div className='drawer-div'>
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

            </Drawer>

        </div>
    );
}