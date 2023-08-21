import React from "react";
import Link from "next/link";
 import {useStateContext} from "@/context/StateContext";

const Navbar = () => {
    const { totalPrice, totalQuantities, cartItems, setShowCart, toggleCartItemQuanitity, onRemove } = useStateContext();

    return (
        <section className="navbar">
            <header style={{"width": "100%"}}>
                <div className='header-branding'>
                    <Link href={'/'}>
                        <h1 className='header-branding__title'>STORE</h1>
                    </Link>


                </div>
                <div className='header-links'>

                    <a style={ {"position":"relative"} } href='#' className='header-links__cart' title=''>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor"
                             strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                             className="feather feather-shopping-bag">
                            <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4zM3 6h18M16 10a4 4 0 0 1-8 0"/>
                        </svg>
                        <span className="countCart">{totalQuantities}</span>
                    </a>


                </div>

            </header>
        </section>

    )
}

export default Navbar