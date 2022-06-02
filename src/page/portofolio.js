import React from "react";
import '../index.css';
import AboutMe from "./_partials/aboutme";
import Banner from "./_partials/banner";
import BreadCumb from "./_partials/breadcumb";
import CardList from "./_partials/cardlist";
import CarouselComp from "./_partials/carousel";
import Footr from "./_partials/footer";
import NavMenu from "./_partials/navbar";

const Portofolio = () => {
    // console.log("halaman Portofolio");
    const site = [{
        title: "Portofolio",
        description: "Lorem ipsum dolor sit, amet consectetur",
        icon: "",
        keywords: "Lorem ipsum dolor sit, amet consectetur",
        breadcrumbs: [
            {
                name: "Home",
                link: "/"
            }, {
                name: "Portofolio",
                link: "/portofolio"
            }
        ]
    }];
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
    return <div>
        {
            <div>
                <NavMenu activeKey="/portofolio" />
                <BreadCumb site={site} />
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

export default Portofolio;