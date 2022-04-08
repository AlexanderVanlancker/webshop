import React, {useEffect, useState} from 'react';
import Sidebar from "../components/sidebar";
import Store from "../components/store";
import itemstemplate from "../data/items.json"
import {useParams} from "react-router-dom";

const ItemList = () => {
    const [clothes, setClothes] = useState([]);
    const [brands, setBrands] = useState([]);
    const [categories, setCategories] = useState([]);

    const sizes = {
        Small: 0,
        Medium: 0,
        Large: 0
    }

    let {category} = useParams()
    useEffect(() => {
        fetch("http://localhost:5000/clothing/category/Denim")
            .then(res => res.json())
            .then(res => setClothes(res))
            .catch(err => console.log("fetching clothes" + err))

        fetch("http://localhost:5000/brands/Denim")
            .then(res => res.json())
            .then(res => setBrands(res))
            .catch(err => console.log("fetching brands" + err))

        fetch("http://localhost:5000/categories")
            .then(res => res.json())
            .then(res => setCategories(res))
            .catch(err => console.log("fetching categories" + err))
    }, [])

    return (
        <>
            <div className="flex mb-4" style={{minHeight:"100%"}}>
            <div className="w-64 m-0 ">
                    <Sidebar Categories={categories} Sizes={sizes} Brands={brands}/>
                </div>
                <div className="flex-1 mt-12">
                    <Store clothes={clothes}/>
                </div>
            </div>
        </>
    );
};

export default ItemList;