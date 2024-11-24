import React, { useState, useEffect } from "react";
import Header from "../components/Common/Header";
import TabsComponent from "../components/Dashboard/Tabs";
import axios from "axios";
import Search from "../components/Dashboard/Search";
import PaginationControlled from "../components/Dashboard/Pagination";

function Dashboardpage() {
    const [coins, setCoins] = useState([]);
    const [search, setSearch] = useState("");
    const [page, setPage] = useState(1);
    const [paginatedCoins, setPaginatedCoins] = useState([]);

    const onSearchChange = (e) => {
        setSearch(e.target.value);
    };

    // Fetch data from the API
    useEffect(() => {
        axios
            .get(
                "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
            )
            .then((response) => {
                setCoins(response.data);
                setPaginatedCoins(response.data.slice(0, 10)); // Set initial paginated data
            })
            .catch((error) => {
                console.error("Error fetching coins:", error.message);
            });
    }, []);

    // Filter coins based on the search input
    const filteredCoins = coins.filter(
        (coin) =>
            coin.name.toLowerCase().includes(search.trim().toLowerCase()) ||
            coin.symbol.toLowerCase().includes(search.trim().toLowerCase())
    );

    // Handle page change
    const handlePageChange = (event, value) => {
        setPage(value);
        const startIndex = (value - 1) * 10;
        const currentCoins = search ? filteredCoins : coins;
        setPaginatedCoins(currentCoins.slice(startIndex, startIndex + 10));
    };

    return (
        <div>
            <Header />
            <Search search={search} onSearchChange={onSearchChange} />
            <TabsComponent
                coins={search ? filteredCoins.slice((page - 1) * 10, page * 10) : paginatedCoins}
                setSearch={setSearch}
            />
            {!search && (
                <PaginationControlled
                    page={page}
                    handlePageChange={handlePageChange}
                    totalPages={Math.ceil(coins.length / 10)} // Total pages based on all coins
                />
            )}
            {search && (
                <PaginationControlled
                    page={page}
                    handlePageChange={handlePageChange}
                    totalPages={Math.ceil(filteredCoins.length / 10)} // Total pages based on filtered coins
                />
            )}
        </div>
    );
}

export default Dashboardpage;
