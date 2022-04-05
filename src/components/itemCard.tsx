import React from 'react';
import {Link} from "react-router-dom";

const ItemCard:any = ({id, title, Name, Brand, description, Price, imgUrls}:any) => {
    return (
        <Link to={`/items/${id}`} className=" grow">

            <div className="shadow p-4 rounded-md w-80" style={{height: "100%"}}>
                <img className="object-contain h-80 w-80 " src={imgUrls[0]}/>
                <h2 className="mb-0 font-bold">{Brand}</h2>
                <span>{Name}</span>
                <p>{Price}</p>
            </div>
        </Link>

    );
};

export default ItemCard;