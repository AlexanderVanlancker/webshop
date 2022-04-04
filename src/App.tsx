import React from 'react';
import 'antd/dist/antd.css';
import {Layout} from "antd";
import Sidebar from "./components/sidebar";
import Navbar from "./components/navbar";
import Store from "./components/store";
import { Outlet, Link } from "react-router-dom";
import Test from "./components/testComponent";

const { Header, Content, Footer } = Layout;

function App() {
    console.log("render app");
    return (
        <>
            <Navbar/>
            <div className="flex mb-4" style={{minHeight:"100%"}}>
                <Outlet/>
            </div>
        </>
    );
}

export default App;
