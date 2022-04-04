import React from 'react';
import {Layout} from "antd";
import {Link} from "react-router-dom";
import categories from "../data/categories.json"
import Category from "../components/category";

const {Content} = Layout;

const Store = (props:any) => {
    return (
            <>
                <div className="grid grid-cols-4 gap-4">
                {
                         categories.map(({id, title, brand="brand", description="description", price=240, imageUrl}) => (
                                     <Category key={id} title={title} brand={brand} description={description} price={price} imageUrl={imageUrl}/>
                         ))
                     }
                </div>
            </>
    );
};

export default Store;