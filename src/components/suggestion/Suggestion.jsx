import React from 'react';
import './Suggestion.scss';

const Suggestion = () => {

    return (
        <div className='search-form__suggestion suggestion list-group-item list-group-item-action d-flex justify-content-between align-items-center' >
            <div className='suggestion__city'>
                <div className='suggestion__city-name'>City1</div>
                <div className='suggestion__country'>Ukraine</div>
            </div>
            <button className='suggestion__add-to-favorite btn btn-success'><i className="fas fa-star"></i></button>
        </div>
    )
}

export default Suggestion;