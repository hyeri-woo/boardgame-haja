import React from 'react'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import HomePage from '../pages/HomePage'
import LoginSignPage from '../pages/LoginSignPage'
import DetailPage from '../pages/DetailPage'

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />}/>
                <Route path="/ranking" element={<HomePage/>}/>
                <Route path="/ranking/:page" element={<HomePage/>}/>
                <Route path="/search/:keyword" element={<HomePage/>}/>
                <Route path="/search/:keyword/:page" element={<HomePage/>}/>
                <Route path="/category" element={<HomePage/>}/>
                <Route path="/login" element={<LoginSignPage login/>}/>
                <Route path="/signup" element={<LoginSignPage/>}/>
                <Route path="/detail/:id" element={<DetailPage/>}/>
            </Routes>
        </BrowserRouter>
    )
}
