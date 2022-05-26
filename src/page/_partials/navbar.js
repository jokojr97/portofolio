import { Menu } from "antd";
import 'antd/dist/antd.css';
import '../../index.css';
import React from "react";
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';

const Navbar = () => {
    return (
        <div className="container-fluid">
            <div className="header">
                <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['mail']}>
                    <Menu.Item key="mail" icon={<MailOutlined />}>
                        Navigation One
                    </Menu.Item>
                    <Menu.SubMenu key="SubMenu" title="Navigation Two - Submenu" icon={<SettingOutlined />}>
                        <Menu.Item key="two" icon={<AppstoreOutlined />}>
                            Navigation Two
                        </Menu.Item>
                        <Menu.Item key="three" icon={<AppstoreOutlined />}>
                            Navigation Three
                        </Menu.Item>
                        <Menu.ItemGroup title="Item Group">
                            <Menu.Item key="four" icon={<AppstoreOutlined />}>
                                Navigation Four
                            </Menu.Item>
                            <Menu.Item key="five" icon={<AppstoreOutlined />}>
                                Navigation Five
                            </Menu.Item>
                        </Menu.ItemGroup>
                    </Menu.SubMenu>
                </Menu>
            </div>
        </div>
    )
}

export default Navbar