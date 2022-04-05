import React from 'react';
import {Link} from "react-router-dom";

const CategoryCard = ({id,name,image,subcategories,brands}:any) => {
    return (
        <Link to={"/items/"} className="w-96">
            <div className="rounded-md w-96" >
                <img className="object-contain h-96 w-96 " src={image}/>
                <h2 className="mb-0 font-bold text-3xl pt-2 justify-center flex">{name}</h2>
            </div>
        </Link>

    );
};

export default CategoryCard;