import React from 'react';
import {Link} from "react-router-dom";

const ItemCard:any = ({id, title, brand, description, price, imageUrl}:any) => {
    return (
        <Link to={`/items/${id}`}>

            <div className="shadow p-4 rounded-md">
                <img className="object-contain h-80 w-80 " src={imageUrl[0]}/>
                <h2 className="mb-0 font-bold">{brand}</h2>
                <span>{description}</span>
                <p>{price}$</p>
            </div>
        </Link>

    );
};

export default ItemCard;