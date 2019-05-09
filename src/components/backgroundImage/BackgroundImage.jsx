import React from 'react';
import './BackgroundImage.scss';

const BackgroundImage = ({url}) => {
    const style = {
        backgroundImage: `url(${url})`,
    }

    return <div className='background-image' style={style}></div>
}

export default BackgroundImage;