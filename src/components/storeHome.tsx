import React from 'react';
import items from '../data/categories.json'
import Category from "./category";

const StoreHome = () => {
    return (
        <div>
            <div className="grid grid-cols-4 gap-4">
                {
                    items.map(({id, name, image, subcategories,brands}) => (
                        <Category key={id} id={id} name={name} image={image} subcategories={subcategories} brands={brands}/>
                    ))
                }
            </div>
        </div>
    );
};

export default StoreHome;