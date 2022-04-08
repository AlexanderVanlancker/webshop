import React, {useEffect, useState} from 'react';
import items from '../data/categories.json'
import CategoryCard from "../components/categoryCard";
import {buildCategory} from "../utils/categoryBuilder";

const CategoryList = () => {
    const [categoryList, setCategoryList] = useState([]);

    useEffect(()=>{
        const fetchData = async () => {
            const res = await buildCategory("http://localhost:5000/categories")
            setCategoryList(res)
        }
        fetchData()
    }, [])

    return (
        <div className="flex flex-wrap min-h-screen  mt-16   px-12 justify-center">

        <div className="flex flex-wrap min-h-screen  gap-12 ">
                {
                    categoryList.map(({index, category, imgUrl}:any) => (
                        <CategoryCard key={index} category={category} imgUrl={imgUrl}/>
                    ))

                }
        </div>
        </div>
    );
};

export default CategoryList;