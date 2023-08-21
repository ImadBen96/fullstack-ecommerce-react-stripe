import React from 'react';
import Head from 'next/head';

import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }) => {
    return (
        <div className="layout">
            <Head>
                <title>JS Mastery Store</title>
            </Head>

            <main className="main-container">
                {children}
            </main>

        </div>
    )
}

export default Layout