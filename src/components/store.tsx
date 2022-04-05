import React from 'react';
import {Layout} from "antd";
import {Link} from "react-router-dom";
import ItemCard from "./itemCard";

const {Content} = Layout;

const Store = ({clothes}:any) => {
    console.log(clothes);
    return (
            <>
                <div className="flex flex-wrap gap-4 content-evenly px-8 ">
                {

                    clothes.map(({_id=1, Name="Name", Brand="brand", description="description", Price=240, imgUrls=[]}) => (
                    <ItemCard key={_id} id={_id} Name={Name} Brand={Brand} description={description} Price={Price} imgUrls={imgUrls}/>
                    ))

                }
                </div>
            </>
    );
};

export default Store;


