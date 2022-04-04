import React from "react";
function Sidebar() {
    return (
        <>
            {/* Sidebar starts */}
            {/* Remove class [ hidden ] and replace [ sm:flex ] with [ flex ] */}
            <div className="w-64 border-0 absolute sm:relative bg-white  md:h-full flex-col justify-between hidden sm:flex">
                <div className="px-8">
                    <ul className="mt-12">
                        <li className="flex w-full justify-between text-gray-900 items-center mb-6">
                            <div className="flex items-center">
                                <span className="text-sm  ml-2 ">
                                    <h1 className="w-44 border-b pb-2">Categories</h1>
                                <ul className="hover:cursor-pointer">
                                    <li className="text-gray-600 pb-1">
                                        Shirts
                                    </li>
                                    <li className="text-gray-600 pb-1">
                                        Sweaters
                                    </li>
                                    <li className="text-gray-600 pb-1">
                                        Jeans
                                    </li>
                                </ul></span>
                            </div>
                        </li>
                        <li className="flex w-full justify-between text-gray-900 items-center mb-6">
                            <div className="flex items-center">
                                <span className="text-sm  ml-2 ">
                                    <h1 className="w-44 border-b pb-2">Size</h1>
                                <ul className="hover:cursor-pointer">
                                    <li className="text-gray-600 pb-1">
                                        Small
                                    </li>
                                    <li className="text-gray-600 pb-1">
                                        Medium
                                    </li>
                                    <li className="text-gray-600 pb-1">
                                        Large
                                    </li>
                                </ul></span>
                            </div>
                        </li>
                        <li className="flex w-full justify-between text-gray-900 items-center mb-6">
                            <div className="flex items-center">
                                <span className="text-sm  ml-2 ">
                                    <h1 className="w-44 border-b pb-2">Brand</h1>
                                <ul className="hover:cursor-pointer">
                                    <li className="text-gray-600 pb-1">
                                        Gucci
                                    </li>
                                    <li className="text-gray-600 pb-1">
                                        Balenciaga
                                    </li>
                                    <li className="text-gray-600 pb-1">
                                        Nike
                                    </li>
                                </ul></span>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
}

export default Sidebar;
