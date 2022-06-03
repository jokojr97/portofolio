import axios from "axios";
import React, { useEffect, useState } from "react";
import '../index.css';
import AboutMe from "./_partials/aboutme";
import Banner from "./_partials/banner";
import CardList from "./_partials/cardlist";
import CarouselComp from "./_partials/carousel";
import Footr from "./_partials/footer";
import NavMenu from "./_partials/navbar";

const Home = props => {
    // console.log("halaman home");
    const url = "https://backend-portojoe.netlify.app/";
    const [portofolios, setPortofolios] = useState(null);
    useEffect(() => {
        axios.get(url).then(res => {
            setPortofolios(res.data);
        })
    }, [url])




    const datapost = [{
        title: "judul 1 Lorem ipsum dolor sit, amet consectetur",
        image: "jr.png",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere optio blanditiis perferendis! Aperiam enim at excepturi optio iusto quaerat architecto perferendis quam labore atque modi sit, temporibus blanditiis cumque dolores.",
        link: "#"
    }, {
        title: "judul 2 Lorem ipsum dolor sit, amet consectetur",
        image: "jr.png",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere optio blanditiis perferendis! Aperiam enim at excepturi optio iusto quaerat architecto perferendis quam labore atque modi sit, temporibus blanditiis cumque dolores.",
        link: "#"
    }, {
        title: "judul 3 Lorem ipsum dolor sit, amet consectetur",
        image: "jr.png",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere optio blanditiis perferendis! Aperiam enim at excepturi optio iusto quaerat architecto perferendis quam labore atque modi sit, temporibus blanditiis cumque dolores.",
        link: "#"
    }]

    // datapost = portofolios;
    return <div>
        {
            <div>
                <NavMenu activeKey="/" />
                <CarouselComp />
                <AboutMe />
                <CardList data={datapost} title="Latest Project" description="Web Design and Developement" link="#" />
                <Banner />
                <CardList data={datapost} title="Latest Post" description="Web Design and Developement" link="#" />
                <Footr />
            </div>
        }
    </div>

}

export default Home;