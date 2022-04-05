import React, {useEffect, useState} from 'react';
import Sidebar from "../components/sidebar";
import Store from "../components/store";
import itemstemplate from "../data/items.json"

const ItemList = () => {
    const [clothes, setClothes] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/clothing")
            .then(res => res.json())
            .then(res => setClothes(res))
            .catch(err => console.log("fetching clothes" + err))
    }, [])


    return (
        <>
            <div className="flex mb-4" style={{minHeight:"100%"}}>
            <div className="w-64 m-0 ">
                    <Sidebar/>
                </div>
                <div className="flex-1 mt-12">
                    <Store clothes={clothes}/>
                </div>
            </div>
        </>
    );
};

export default ItemList;