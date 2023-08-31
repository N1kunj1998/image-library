import React, { Fragment } from 'react';
import Image from "./ImageCard.js";
import "./Home.css";

const Home = () => {
    const images = ["logo192.png", "logo192.png", "logo192.png", "logo192.png", "logo192.png", "logo192.png", "logo192.png", "logo192.png", "logo192.png", "logo192.png", "logo192.png", "logo192.png", "logo192.png", "logo192.png", "logo192.png", "logo192.png", "logo192.png", "logo192.png", "logo192.png", "logo192.png"];
  return (
    <Fragment>
        <div className='images'>
            {/* <Image imageUrl={imageUrl}/> */}
            { 
                images.length !== 0 && 
                images.map((name) => {
                    return <Image imageUrl={process.env.PUBLIC_URL + "/images/" + name} favorite={true}/>
                })
            }
        </div>
    </Fragment>
  )
}

export default Home