import React from 'react'

import {Routes, Route} from 'react-router-dom'

import Header from './components/Header'
import Home from './pages/Home'
import Cart from './pages/Cart'
import ProcessorComponent from './pages/ProcessorComponent'
import CoolingComponent from './pages/CoolingComponent'
import DramComponent from './pages/DramComponent'
import MotherboardComponent from './pages/MotherboardComponent'
import PowerunitComponent from './pages/PowerunitComponent'
import Ssd_hddComponent from './pages/Ssd_hddComponent'
import VideocardComponent from './pages/VideocardComponent'
import NotFound from './pages/NotFound'

import './scss/app.scss'

export const SearchContext = React.createContext('')

function App()
{
   const [searchValue, setSearchValue] = React.useState('')

    return (
        <div className="wrapper">
            <SearchContext.Provider value={{searchValue, setSearchValue}}>
                <Header/>
                <div className="content">
                    <Routes>
                        <Route path='/' element={<Home searchValue={searchValue}/>}/>
                        <Route path='/cart' element={<Cart/>}/>
                        <Route path='/Processors/:id' element={<ProcessorComponent/>}/>
                        <Route path='/Motherboards/:id' element={<MotherboardComponent/>}/>
                        <Route path='/Videocards/:id' element={<VideocardComponent/>}/>
                        <Route path='/Drams/:id' element={<DramComponent/>}/>
                        <Route path='/Powerunits/:id' element={<PowerunitComponent/>}/>
                        <Route path='/Coolings/:id' element={<CoolingComponent/>}/>
                        <Route path='/Ssd_hdd/:id' element={<Ssd_hddComponent/>}/>
                        <Route path='*' element={<NotFound/>}/>
                    </Routes>
                </div>
            </SearchContext.Provider>
        </div>
    );    
}

export default App