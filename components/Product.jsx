import React from 'react';
import Link from 'next/link';

import { urlFor } from '@/lib/client';

const Product = ({ product: { image, name, slug, price } }) => {
    return (


<>                <div className="col-md-3">
                    <Link className="product-item product-card" href={`/product/${slug.current}`}>

                        <div className="product-item-image">
                            <img style={ {"width":"100%"} }
                                 src="https://modernaweb.net/__data/img/products/apple-watch.png"
                                 alt="Stadium Full Exterior" />
                            <div className="product-item-image-hover">
                            </div>
                        </div>
                        <div className="product-item-content">
                            <div className="product-item-category">
                                Base Item
                            </div>
                            <div className="product-item-title">
                                {name}
                            </div>
                            <div className="product-item-price">
                                ${price}
                            </div>
                            <div className="button-pill">

                                <span>Shop Now</span>

                            </div>
                        </div>
                   </Link>
                </div>
        </>
        // <div>
        //     <Link href={`/product/${slug.current}`}>
        //         <div className="product-card">
        //             <img
        //                 src={urlFor(image && image[0])}
        //                 width={250}
        //                 height={250}
        //                 className="product-image"
        //             />
        //             <h5 className="product-name">{name}</h5>
        //             <p className="product-price">${price}</p>
        //         </div>
        //     </Link>
        // </div>
    )
}

export default Product