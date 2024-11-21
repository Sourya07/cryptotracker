
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Homepage from './pages/Home'
import Dashboardpage from './pages/Dashboardpage'

function App() {


  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/dashboard" element={<Dashboardpage />} />
          {/* <Route path="/coin/:id" element={<CoinPage />} />
          <Route path="/compare" element={<ComaparePage />} />
          <Route path="/watchlist" element={<WatchlistPage />} /> */}
          <Route path="/compare" element={<ComaparePage />} />
          <Route path="/watchlist" element={<WatchlistPage />} />


        </Routes>
      </BrowserRouter>


    </div>



  )
}

export default App
