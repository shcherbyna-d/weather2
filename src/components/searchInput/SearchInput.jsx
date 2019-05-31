import React from 'react';
import './SearchInput.scss';
import Suggestion from '../suggestion/Suggestion';

const SearchInput = () => {
    return (
        <div className='search-form__input-block input-block'>
            <input className='input-block__input form-control form-control-lg' type="text" placeholder='Search city' />
            <div className='input-block__suggestions list-group'>
                <Suggestion />
                <Suggestion />
                <Suggestion />
                <Suggestion />
                <Suggestion />
            </div>
        </div>
    )
}

export default SearchInput;