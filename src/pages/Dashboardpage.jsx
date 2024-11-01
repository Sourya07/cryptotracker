import React, { useState, useEffect } from 'react';
import Header from '../components/Common/Header';
import TabsComponent from '../components/Dashboard/Tabs';
import axios from 'axios';

function Dashboardpage() {
    const [coins, setCoins] = useState([]);

    useEffect(() => {
        axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr')
            .then(res => {
                const coindata = res.data;
                setCoins(coindata);
            })
            .catch(err => {
                console.error("Error fetching data: ", err);
            });
    }, []);

    return (
        <div>
            <Header />
            <TabsComponent coins={coins} />


        </div>
    );
}

export default Dashboardpage;
