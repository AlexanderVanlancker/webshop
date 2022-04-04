import React from 'react';
import Sidebar from "../components/sidebar";
import Store from "../components/store";

const ItemList = () => {
    return (
        <>
            <div className="w-1/5">
                <Sidebar/>
            </div>
            <div className="w-5/6 mt-12 ml-6">
                <Store/>
            </div>
        </>
    );
};

export default ItemList;