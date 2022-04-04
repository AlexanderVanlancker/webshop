import React from 'react';

const Category:any = ({title, brand, description, price, imageUrl}:any) => {
    console.log(price);
    return (
        <div className="shadow p-4 rounded-md">
            <img className="object-contain h-80 w-80 " src={imageUrl}/>
            <h2 className="mb-0 font-bold">{brand}</h2>
            <span>{description}</span>
            <p>{price}$</p>
        </div>
    );
};

export default Category;