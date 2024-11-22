import React, { useState, useEffect } from 'react';
import Header from '../components/Common/Header';
import TabsComponent from '../components/Dashboard/Tabs';
import axios from 'axios';
import Search from '../components/Dashboard/Search';

function Dashboardpage() {
    const [coins, setCoins] = useState([]);
    const [search, setSearch] = useState("")
    const onSearchChange = (e) => {
        setSearch(e.target.value)
    }

    var filtercoins = coins.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase()) ||
        item.symbol.toLowerCase().includes(search.toLowerCase())
    )

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
            <Search search={search} onSearchChange={onSearchChange} />
            <TabsComponent coins={filtercoins} />


        </div>
    );
}

export default Dashboardpage;
