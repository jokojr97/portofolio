import React from "react";
import '../index.css';
import AboutMe from "./_partials/aboutme";
import Banner from "./_partials/banner";
import CardList from "./_partials/cardlist";
import CarouselComp from "./_partials/carousel";
import NavMenu from "./_partials/navbar";

const Home = () => {
    // console.log("halaman home");
    const datapost = [{
        title: "judul 1 Lorem ipsum dolor sit, amet consectetur",
        image: "jr.png",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere optio blanditiis perferendis! Aperiam enim at excepturi optio iusto quaerat architecto perferendis quam labore atque modi sit, temporibus blanditiis cumque dolores.",
        link: "#"
    }]
    return <div>
        {
            <div>
                <NavMenu />
                <CarouselComp />
                <AboutMe />
                <CardList data={datapost} title="Latest Project" description="Web Design and Developement" link="#" />
                <Banner />
                <CardList data={datapost} title="Latest Post" description="Web Design and Developement" link="#" />

            </div>
        }
    </div>

}

export default Home;