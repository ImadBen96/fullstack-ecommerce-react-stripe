import React from 'react';
import Head from 'next/head'
import Link from "next/link";

const Layout = ({ children }) => {
    return (
        <div>
            <Head>
                <title>Order Canceled</title>
            </Head>

            <section className="page_404">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 ">
                            <div style={ {'width':'100%'} } className="col-sm-10 col-sm-offset-1  text-center">
                                <div className="four_zero_four_bg">
                                    <h1 className="text-center ">SUCCESS</h1>


                                </div>

                                <div className="contant_box_404">
                                    <h3 className="h2">
                                        Continue Shoping
                                    </h3>

                                    <Link href={'/'} className="link_404">Go to Home</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Layout