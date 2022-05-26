import React from "react";
import '../index.css';
import CarouselComp from "./_partials/carousel";
import NavMenu from "./_partials/navbar";

const Home = () => {
    // console.log("halaman home");
    return <div>
        {
            <div>
                <NavMenu />
                <CarouselComp />

            </div>
        }
    </div>

}

export default Home;