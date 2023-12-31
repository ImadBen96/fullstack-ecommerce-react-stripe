import React from 'react'
import { client } from '@/lib/client';
import { Product, FooterBanner, HeroBanner } from '../components';
import {Footer} from "@/components";
const Home = ({ products, bannerData }) => {
  return (
      <div>
          <HeroBanner heroBanner={bannerData.length && bannerData[0]}  />
          <div style={{ 'textAlign':"center" }} className="products-heading">
              <h1>Best Seller Products</h1>
              <p>speaker There are many variations passages</p>
          </div>

          <div style={ {"marginBottom":"30px"} } className="products-container">

                 {products?.map((product) => <Product key={product._id} product={product} />)}




          </div>




          <FooterBanner footerBanner={bannerData && bannerData[0]} />

          <Footer />
      </div>
  )
}

export const getServerSideProps = async () => {
    const query = '*[_type == "product"]';
    const products = await client.fetch(query);

    const bannerQuery = '*[_type == "banner"]';
    const bannerData = await client.fetch(bannerQuery);

    return {
        props: { products, bannerData }
    }
}

export default Home;