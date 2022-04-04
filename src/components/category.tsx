import React from 'react';
import {Link} from "react-router-dom";

const Category = ({id,name,image,subcategories,brands}:any) => {
    return (
        <Link to={"/items/"}>
            <div className="shadow p-4 rounded-md">
                <img className="object-contain h-80 w-80 " src={image}/>
                <h2 className="mb-0 font-bold">{name}</h2>
            </div>
        </Link>

    );
};

export default Category;