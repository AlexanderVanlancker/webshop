import React from 'react';
import items from '../data/categories.json'
import CategoryCard from "./categoryCard";

const Categories = () => {
    return (
        <div className="flex flex-wrap min-h-screen  mt-12   px-12 justify-center">

        <div className="flex flex-wrap min-h-screen  gap-12 ">
                {
                    items.map(({id, name, image, subcategories,brands}) => (
                        <CategoryCard key={id} id={id} name={name} image={image} subcategories={subcategories} brands={brands}/>
                    ))
                }
        </div>
        </div>
    );
};

export default Categories;