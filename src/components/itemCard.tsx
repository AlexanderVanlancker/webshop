import React from 'react';

const ItemCard:any = ({id, title, brand, description, price, imageUrl}:any) => {
    return (
        <a href={"/item/"+id}>
            <div className="shadow p-4 rounded-md">
                <img className="object-contain h-80 w-80 " src={imageUrl[0]}/>
                <h2 className="mb-0 font-bold">{brand}</h2>
                <span>{description}</span>
                <p>{price}$</p>
            </div>
        </a>

    );
};

export default ItemCard;