import React from 'react';
import TheHandyBag from "../assets/bag_1.png";

function Product({labeltext, Bagtext, price, image}) {
    return (
        <>
            <article className="article">
                <span className="article span">{labeltext}</span>
                <img src={image} alt="bag"/>
                <p className="article p">{Bagtext} </p>
                <h4 className="article p">{price}</h4>
            </article>
        </>
    );
}

export default Product;