import React from 'react'

import {Routes, Route} from 'react-router-dom'



import Header from './components/Header'
import Home from './pages/Home'
import Order from './pages/Order'
import Cart from './pages/Cart'
import FullItemProc from './pages/FullItemProc'
import FullItemMotherboard from './pages/FullItemMotherboard'
import FullItemVideocard from './pages/FullItemVideocard'
import FullItemRam from './pages/FullItemRam'
import FullItemCooling from './pages/FullItemCooling'
import FullItemPow from './pages/FullItemPow'
import ThxPurchase from './components/ThxPurchase/index'
import NotFound from './pages/NotFound'

import './scss/app.scss'

export const SearchContext = React.createContext('')

export const AddressContext = React.createContext('')

function App()
{
   const [searchValue, setSearchValue] = React.useState('')
    const [addressValue, setAddressValue] = React.useState('')
    return (
        <div className="wrapper">
            <AddressContext.Provider value={{addressValue, setAddressValue}}>
                <SearchContext.Provider value={{searchValue, setSearchValue}}>
                    <Header/>
                    <div className="content">
                        <Routes>
                            <Route path='/' element={<Home searchValue={searchValue}/>}/>
                            <Route path='/Order' element={<Order/>}/>
                            <Route path='/cart' element={<Cart/>}/>
                            <Route path='/Processors/:id' element={<FullItemProc/>}/>
                            <Route path='/Motherboards/:id' element={<FullItemMotherboard/>}/>
                            <Route path='/Videocards/:id' element={<FullItemVideocard/>}/>
                            <Route path='/Rams/:id' element={<FullItemRam/>}/>
                            <Route path='/PowerSupplies/:id' element={<FullItemPow/>}/>
                            <Route path='/Coolings/:id' element={<FullItemCooling/>}/>
                            <Route path='/Purchase' element={<ThxPurchase/>}/>
                            <Route path='*' element={<NotFound/>}/>
                        </Routes>
                    </div>
                </SearchContext.Provider>
            </AddressContext.Provider>
        </div>
    );    
}

export default App