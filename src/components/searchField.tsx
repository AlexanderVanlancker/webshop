import React, {ChangeEvent, useState} from 'react';

const SearchField = () => {
    const [searchValue, setSearchValue] = useState()

    const onChangeHandler = (e:ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.value);
    }

    return (
        <input type={"search"}
               placeholder={"Search for..."}
               className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
               style={{width: "25rem"}}
               onChange={onChangeHandler}
        />
    );
};

export default SearchField;