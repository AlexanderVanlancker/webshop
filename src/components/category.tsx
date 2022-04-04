import React from 'react';

const Category = ({id,name,image,subcategories,brands}:any) => {
    return (
        <a href={"/item/"+id}>
            <div className="shadow p-4 rounded-md">
                <img className="object-contain h-80 w-80 " src={image}/>
                <h2 className="mb-0 font-bold">{name}</h2>
            </div>
        </a>

    );
};

export default Category;