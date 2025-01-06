import React from 'react';
import Home from "@/pages/Home";
import Movies from "@/pages/Movies";
import NotFound from "@/pages/NotFound";
import Login from "@/pages/Login";
import Detail from "@/pages/Detail";
import Company from "@/pages/Detail/Company";
import School from "@/pages/Detail/School";

export default [
    {
        path: "/",
        element: <Home/>,
    },
    {
        path: "/movies",
        element: <Movies/>,
    },
    {
        path: "/detail",
        element: <Detail/>,
        children: [
            { path: "company", element: <Company /> },
            { path: "school", element: <School /> },
        ],
    },
    {
        path: "/login",
        element: <Login/>,
    },
    {
        path: "*",
        element: <NotFound/>,
    },
];
