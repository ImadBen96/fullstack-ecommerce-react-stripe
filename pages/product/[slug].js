import {AiFillStar, AiOutlineMinus, AiOutlinePlus, AiOutlineStar} from "react-icons/ai";
import {client, urlFor} from "@/lib/client";
import {useStateContext} from "@/context/StateContext";
import React, {useRef, useState} from "react";
import {Navbar, Product} from "@/components";
import getStripe from "@/lib/getStripe";
import {toast} from "react-hot-toast";
import SlugProduct from "@/components/SlugProduct";


const ProductDetails = ({ product, products }) => {
    const { image, name, details, price } = product;

    const [index, setIndex] = useState(0);
   const { decQty, incQty, qty, onAdd, } = useStateContext();
    const handleBuyNow = () => {
        onAdd(product, qty);

        setShowCart(true);
    }
    // checkout
    const cartRef = useRef();
    const { totalPrice, totalQuantities, cartItems, setShowCart, toggleCartItemQuanitity, onRemove } = useStateContext();

    const handleCheckout = async () => {
        const stripe = await getStripe();

        const response = await fetch('/api/stripe', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(cartItems),
        });

        if(response.statusCode === 500) return;

        const data = await response.json();

        toast.loading('Redirecting...');

         stripe.redirectToCheckout({sessionId: data.id});
    }

    return (
        <>
            <div>
                <Navbar />
                <section style={ {"textAlign":"center"} } className="our-service position-relative overflow-hidden">
                    <div className="container">
                        <div className="row">

                            <div
                                className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 ps-xxl-0 ps-xl-0 ps-lg-3 ps-md-3 ps-sm-3 ps-3">

                                <h2 className="fs-2 text-black mb-0">{name}</h2>
                                <p className="mb-0 fw-500 fs-7">{details}</p>

                            </div>
                        </div>
                    </div>
                </section>
                <div className="product-detail-container">
                    <div>
                        <div className="image-container">
                            <img src={urlFor(image && image[index])} className="product-detail-image" />
                        </div>
                        <div className="small-images-container">
                            {console.log(image)}
                            {image?.map((item, i) => (
                                <img
                                    key={i}
                                    src={urlFor(item)}
                                    className={i === index ? 'small-image selected-image' : 'small-image'}
                                    onMouseEnter={() => setIndex(i)}
                                />
                            ))}
                        </div>
                    </div>

                    <div className="product-detail-desc">
                        <h1>{name}</h1>
                        <div className="reviews">
                            <div>
                                <AiFillStar />
                                <AiFillStar />
                                <AiFillStar />
                                <AiFillStar />
                                <AiOutlineStar />
                            </div>
                            <p>
                                (20)
                            </p>
                        </div>

                        <p>{details}</p>
                        <p className="price">${price}</p>
                        <div className="quantity">
                            <h5>Quantity:</h5>
                            <p className="quantity-desc">
                                <span className="minus" onClick={decQty}><AiOutlineMinus /></span>
                                <span className="num">{qty}</span>
                                <span className="plus" onClick={incQty}><AiOutlinePlus /></span>
                            </p>
                        </div>
                        <div style={ { "marginTop": "20px" } } className="buttons">
                            <button type="button" className="button-5" onClick={() => onAdd(product, qty)}>Add to Cart</button>
                            <button type="button" className="button-5" onClick={handleBuyNow}>Buy Now</button>
                            {cartItems.length >= 1 &&
                                <button type="button" className="button-5" onClick={handleCheckout}>Checkout</button>
                            }

                        </div>
                    </div>
                </div>

                <div className="maylike-products-wrapper">
                    <h2>You may also like</h2>
                    <div style={{'height': '600px'}} className="marquee">
                        <div className="maylike-products-container track">
                            {products.map((item) => (
                                <SlugProduct key={item._id} product={item}/>

                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}
export const getStaticPaths = async () => {
    const query = `*[_type == "product"] {
    slug {
      current
    }
  }
  `;

    const products = await client.fetch(query);

    const paths = products.map((product) => ({
        params: {
            slug: product.slug.current
        }
    }));

    return {
        paths,
        fallback: 'blocking'
    }
}
export const getStaticProps = async ({ params: { slug }}) => {
    const query = `*[_type == "product" && slug.current == '${slug}'][0]`;
    const productsQuery = '*[_type == "product"]'

    const product = await client.fetch(query);
    const products = await client.fetch(productsQuery);

    console.log(product);

    return {
        props: { products, product }
    }
}
export default ProductDetails