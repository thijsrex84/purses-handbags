import React from 'react';

function Tile({image, title, para1, para2, children}) {
    return (
        <>
            {image && <img src={image} alt=""/>}
            {title && <h2>{title}</h2>}
            {children}
        </>
    );
}

export default Tile;