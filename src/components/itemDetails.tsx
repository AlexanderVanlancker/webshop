import React from 'react';
import {useParams} from "react-router-dom";
import items from "../data/items.json";
import {ShoppingCartIcon} from "@heroicons/react/outline";

const ItemDetails = () => {
    const params = useParams();
    const id = parseInt(params.id as string);
    const item = items.find((item) => item.id == id);
    const {imageUrl, brand, description, price}: any = item;
    return (
        <>
            <div className="flex mb-4 block">
                <div className="p-4 grid grid-cols-2 gap-4 w-2/3">
                    {
                        imageUrl.map((url: any, index: any) => {
                            return <img key={index} className="object-contain" src={url}/>
                        })
                    }
                </div>


                {/* Pictures and Checkout grid */}
                <div className="w-1/3 pr-16 mt-28">
                    <h1 className="mb-0 font-bold text-2xl">{brand}</h1>
                    <span className="text-lg">{description}</span>
                    <p className="text-lg mt-3">Price: {price}$</p>

                    <select defaultValue="placeholder"
                            className="shadow appearance-none border bg-white rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    >
                        <option value="placeholder" disabled>Select your size</option>
                        <option value="Small">Small</option>
                        <option value="Medium">Medium</option>
                        <option value="Large">Large</option>
                    </select>

                    <div className="flex mt-4">
                        <button
                            className="w-3/5 mr-2 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                            <ShoppingCartIcon className="h-5 w-5 mr-3 inline"/> Add to cart
                        </button>
                        <button
                            className="w-2/5  bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-2 border border-blue-500 hover:border-transparent rounded">Checkout
                        </button>
                    </div>
                </div>
            </div>
            <hr className="mr-8"/>
            <div className="flex mr-8 mt-4">
                <div className="w-1/3 grow">
                    <h1 className="mb-0 font-light text-xl">description</h1>
                </div>
                <div className=" shrink mr-8">
                    <hr style={{border: "none", borderLeft: "1px solid #e5e7eb", height: "100vh", width: "1px"}}/>
                </div>
                <div className="w-1/3 grow">
                    <h1 className="mb-0 font-light text-xl">Reviews</h1>
                </div>
            </div>
        </>
    );
};

export default ItemDetails;