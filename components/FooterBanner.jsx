import React from 'react';
import Link from 'next/link';
//
import { urlFor } from '@/lib/client';

const FooterBanner = ({ footerBanner: { discount, largeText1, largeText2, saleTime, smallText, midText, desc, product, buttonText, image } }) => {
    return (
        <section className="our-service position-relative overflow-hidden">
            <div className="container">
                <div className="row">
                    <div className="col-xxl-8 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                        <img style={ {"borderRadius": "45px 0;"} }
                            src="https://images.unsplash.com/photo-1501676491272-7bbd3e71f7e1?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=687a32748561c1902aca06a66f247776&auto=format&fit=crop&w=1500&q=90"
                            className="img-fluid" />
                    </div>
                    <div
                        className="col-xxl-4 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 ps-xxl-0 ps-xl-0 ps-lg-3 ps-md-3 ps-sm-3 ps-3">
                        <small className="fs-7 d-block">{discount}</small>
                        <h2 className="fs-2 text-black mb-0">{largeText1} {largeText2} {saleTime}</h2>
                        <p className="mb-0 fw-500 fs-7">{desc}</p>
                        <ul className="list-unstyled mb-0 pl-0">
                            <li className="d-flex flex-wrap align-items-start">
                                <i className="fa-solid fa-circle-check fs-4 pe-2"></i>
                                <span className="fs-7 text-black">List of the tasks that require your attention.</span>
                            </li>
                            <li className="d-flex flex-wrap align-items-start">
                                <i className="fa-solid fa-circle-check fs-4 pe-2"></i>
                                <span className="fs-7 text-black">Google Calendar integration to see when interruptions will happen</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FooterBanner