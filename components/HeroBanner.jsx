import React from 'react';
import Link from 'next/link';
import {AiOutlineShopping} from "react-icons/ai";

 import { urlFor } from '@/lib/client';
import {useStateContext} from "@/context/StateContext";


const HeroBanner = ({ heroBanner }) => {
    const { totalQuantities } = useStateContext();


    return (
        <>
        <section className='hero'>
            <header>
                <div className='header-branding'>
                    <Link href={"/"}>
                        <h1 className='header-branding__title'>STORE</h1>
                    </Link>


                </div>
                <div className='header-links'>

                    <a style={ {"position":"relative"} } href='' className='header-links__cart' title=''>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor"
                             strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                             className="feather feather-shopping-bag">
                            <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4zM3 6h18M16 10a4 4 0 0 1-8 0"/>
                        </svg>
                        <span className="countCart">{totalQuantities}</span>
                    </a>


                </div>

            </header>
            <div className='hero-content'>
                <h2 className='hero-content__title'>{heroBanner.smallText}<br/>
                    {heroBanner.midText} <br/> {heroBanner.largeText1}
                    <br/> {heroBanner.desc}
                </h2>

                    <Link href="#">
                        <button type="button" className="button-5" >{heroBanner.buttonText}</button>
                    </Link>


            </div>




            <div className='hero-box-container'>
             <a href='#' className='hero-box'>
                    <span className='hero-box__circle hero-box__circle--blue'></span>
                    <h2 className='hero-box__title'>Sell your device</h2>
                    <h5 className='hero-box__body'>Get instant quote<br /> and ship device for free</h5>
            </a>
                <a href='#' className='hero-box'>
                    <span className='hero-box__circle hero-box__circle--green'></span>
                    <h2 className='hero-box__title'>Repair</h2>
                    <p className='hero-box__body'>Give a second chance<br/> to your device</p>
            </a>
            <a href='#' className='hero-box'>
                <span className='hero-box__circle hero-box__circle--orange'></span>
                <h2 className='hero-box__title'>Exchange</h2>
                <p className='hero-box__body'>Refurbished and lightly used<br/> device marketplace</p>
        </a>

</div>
            



</section>
        </>

)
}

export default HeroBanner