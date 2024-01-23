import { useState } from 'react';

function SearchInput({ onChange }) {
    const [state, setState] = useState('');

    const onChangeHandler = (value) => {
        setState(value);
        onChange(value)
    };

    return (
        <input
            className='search-input'
            type="text"
            placeholder="Search by Area"
            onChange={(event) => onChangeHandler(event.target.value)}
        />
    );
}

export default SearchInput;
