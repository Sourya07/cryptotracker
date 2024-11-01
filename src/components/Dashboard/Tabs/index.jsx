import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

export default function TabsComponent() {
    const [value, setValue] = useState('grid');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };


    const style = {
        color: "var(--white)",
        "& .Mui-selected": {
            color: "var(--blue) !important",
        },
        fontFamily: "Inter,sans-serif",
        fontWeight: 600,
        textTransform: "capitalize",
    };

    return (
        <div style={{}}>
            <TabContext value={value}>
                <div sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <TabList onChange={handleChange} variant='fullWidth'>

                        <Tab label="Grid" value="grid" sx={style} />
                        <Tab label="List" value="list" sx={style} />

                    </TabList>
                </div>
                <TabPanel value="grid">Item One</TabPanel>
                <TabPanel value="list">Item Two</TabPanel>

            </TabContext>
        </div>
    );
}
