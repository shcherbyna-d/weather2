import React from 'react';
import './SearchForm.scss';
import SearchInput from '../searchInput/SearchInput';

class SearchForm extends React.Component {

    render() {
        return (
            <form className='menu__search search-form form-group'>
                <SearchInput />
            </form>
        )
    }
}

export default SearchForm;