import React from 'react';
import './index.scss';
import './output.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createRoot} from "react-dom/client";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Account from './routes/account';
import Cart from './routes/cart';
import Store from "./components/store";

const root = createRoot(document.getElementById('root') as HTMLDivElement);
root.render(
    <BrowserRouter>
        <Routes>
            <Route path={'/'} element={<App/>}>
                <Route path={'/'} element={<Store/>}/>
                <Route path={'/account'} element={<Account/>}/>
                <Route path={'/cart'} element={<Cart/>}/>
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
