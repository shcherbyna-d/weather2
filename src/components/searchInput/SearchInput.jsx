import React from 'react';
import './SearchInput.scss';
import cities from '../../utilities/city.list.min.json';
import Suggestion from '../suggestion/Suggestion';

const SearchInput = () => {
    return (
        <>
            <input 
                className='search-form__input'
                type="search" />
            <Suggestion />
        </>
    )
}

export default SearchInput;