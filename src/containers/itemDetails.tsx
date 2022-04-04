import React from 'react';
import items from "../data/items.json";
import ItemCard from "../components/itemCard";

const ItemDetails = () => {
    return (
        <>
            testtttttttttttttt
            <div className="grid grid-cols-4 gap-4">
                {
                    items.map(({id, title, brand="brand", description="description", price=240, imageUrl}) => (
                        <ItemCard key={id} id={id} title={title} brand={brand} description={description} price={price} imageUrl={imageUrl}/>
                    ))
                }
            </div>
        </>
    );
};

export default ItemDetails;