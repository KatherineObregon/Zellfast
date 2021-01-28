import React from 'react'
import "./css/Home.css"
import Product from "./Product"
import Items from "./Items"



function Home() {
    return(
    <div className="home">
        <div className="home_container">
            <img className="home_image"
            src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_45M_es_US_1x._CB432534552_.jpg" />
        </div>

        <div className="home_row">
        <Product 
       
        />
        <Product />
            
        </div>
        <div className="home_row">
        <Product />
        <Product />
        <Product />

        </div>
        <div className="home_row">
        <Product />
        <Product />
        

        </div>
    
    </div>
    )
}

export default Home