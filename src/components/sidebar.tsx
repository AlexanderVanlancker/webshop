import React from "react";

function Sidebar(props: any) {
    //differentiate between checkbox props and not
    let itemList = Object.keys(props).map(function (prop, index) {
        const keys = props[prop]
        let temp = Object.keys(keys).map(function (key, index) {
            return <li className="text-gray-600 text-sm pb-1.5 flex justify-between">
                <div className="flex">
                    <input type="checkbox" className="mr-2" value={key}></input><label>{key}</label>

                </div>
                <span className="text-right flex justify-end">{keys[key] > 0 ? keys[key] : ""}</span></li>
        });
        temp.unshift(<h1 className="w-44 border-b text-base pb-1 mb-3">{prop}</h1>)
        temp.push(<div className="mb-4"></div>)
        return temp;
    });

    return (
        <>
            <div
                className="w-64 border-0 absolute shadow sm:relative bg-white  md:h-full flex-col justify-between hidden sm:flex">
                <div className="px-8 mt-10 flex w-full justify-between text-gray-900 items-center mb-6">
                    <div className="flex items-center">
                        <span className="text-sm ml-2">
                                {itemList}
                        </span>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Sidebar;
