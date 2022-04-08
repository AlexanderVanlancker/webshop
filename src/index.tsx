import React from 'react';
import './index.scss';
import './output.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createRoot} from "react-dom/client";
import {BrowserRouter, Routes, Route, Outlet} from "react-router-dom";
import Account from './routes/account';
import Cart from './routes/cart';
import Store from "./components/store";
import ItemDetails from "./components/itemDetails";
import CategoryList from "./containers/categoryList";
import Sidebar from './components/sidebar';
import ItemList from "./containers/itemList";
import Navbar from "./components/navbar";
import TestComponent from "./components/testComponent"

const root = createRoot(document.getElementById('root') as HTMLDivElement);
root.render(
    <BrowserRouter>
        <Routes>
            <Route path="testroute" element={<TestComponent/>}/>
            <Route path='/' element={<Navbar/>}>
                <Route index element={<CategoryList/>}/>
                <Route path="account" element={<Account/>}/>
                <Route path="cart" element={<Cart/>}/>
                <Route path="items" >
                    <Route path=":category" element={<ItemList/>}></Route>
                </Route>

                <Route path="test">
                    <Route path=":id" element={<ItemDetails/>}/>
                </Route>

                <Route
                    path="*"
                    element={
                        <main style={{ padding: "1rem" }}>
                            <p>There's nothing here!</p>
                        </main>
                    }
                />
            </Route>
        </Routes>
    </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
