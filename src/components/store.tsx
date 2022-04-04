import React from 'react';
import {Layout} from "antd";
import {Link} from "react-router-dom";
import categories from "../data/items.json"
import ItemCard from "./itemCard";

const {Content} = Layout;

const Store = (props:any) => {
    return (
            <>
                <div className="grid grid-cols-4 gap-4">
                {
                         categories.map(({id, title, brand="brand", description="description", price=240, imageUrl}) => (
                                     <ItemCard key={id} id={id} title={title} brand={brand} description={description} price={price} imageUrl={imageUrl}/>
                         ))
                     }
                </div>
            </>
    );
};

export default Store;