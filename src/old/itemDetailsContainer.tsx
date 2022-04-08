import React from 'react';
import items from "../data/items.json";
import ItemCard from "../components/itemCard";
import Sidebar from "../components/sidebar";
import Store from "../components/store";
import ItemDetails from "../components/itemDetails";
import {useParams} from "react-router-dom";

const ItemDetailsContainer = () => {
    const params = useParams();
    const id = parseInt(params.id as string);
    const item = items.find((item) => item.id == id);
    return (
        <>
            <div className="w-1/5">
                <Sidebar/>
            </div>
            <div className="w-5/6 mt-12 ml-6">
                <p>feseifjdisghiush</p>
                <ItemDetails item={item}/>
            </div>
        </>
    );
};

export default ItemDetailsContainer;