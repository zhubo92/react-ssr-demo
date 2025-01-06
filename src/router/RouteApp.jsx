import React from 'react';
import {Route, Routes} from 'react-router-dom';
import Home from '@/pages/Home';
import Movies from "@/pages/Movies";
import NotFound from "@/pages/NotFound";
import Header from "@/components/Header";

function RouteApp() {
    return (
        <div>
            <Header/>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/movies" element={<Movies/>} />
                <Route path="*" element={<NotFound/>} />
            </Routes>
        </div>
    );
}

export default RouteApp;
