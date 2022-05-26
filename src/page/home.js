

import React from "react";
import 'antd/dist/antd.css';
import '../index.css';
import { Layout, Menu, Breadcrumb } from 'antd';
import Navbar from './_partials/navbar';
const { Header, Content, Footer } = Layout;
// import Navbar from './_partials/navbar';

// import Navbar from "./_partials/navbar";

const Home = props => {
    // console.log("halaman home");
    return <div>
        {
            <div>
                <Layout className="layout">
                    <Header>
                        <div className="logo" />
                        <Navbar />
                    </Header>
                    <Content style={{ padding: '0 50px' }}>
                        <Breadcrumb style={{ margin: '16px 0' }}>
                            <Breadcrumb.Item>Home</Breadcrumb.Item>
                            <Breadcrumb.Item>List</Breadcrumb.Item>
                            <Breadcrumb.Item>App</Breadcrumb.Item>
                        </Breadcrumb>
                        <div className="site-layout-content">Content</div>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
                </Layout>
            </div>
        }
    </div>

}

export default Home;