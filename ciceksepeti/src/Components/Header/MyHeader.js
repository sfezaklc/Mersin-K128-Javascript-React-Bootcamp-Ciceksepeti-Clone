import React from 'react'
import { Layout, Menu, Image } from 'antd';
import './Header.css';
import { MenuOutlined } from '@ant-design/icons';
import { NavLink } from 'react-router-dom';

const { Header, Content, Sider } = Layout;
const { SubMenu } = Menu;
export default function MyHeader() {
    return (
        <div>
            <Layout>
                <Header className="header">
                    <div className="logo" />
                    <Menu theme="dark" mode="horizontal">
                            
                        
                            <Menu.Item key="1">
                                <NavLink to="/dogum-gunu">Doğum Günü</NavLink>
                            </Menu.Item>
                        
                        <NavLink to="/cicek">
                                <Menu.SubMenu key="2" title="Çicek"> 
                                    <Menu.Item key="11">Gül</Menu.Item>
                                    <Menu.Item key="12">Orkide</Menu.Item>
                                    <Menu.Item key="13">Teraryum</Menu.Item>
                                    <Menu.Item key="14">Saksı Çiçekleri</Menu.Item>
                                </Menu.SubMenu>
                        </NavLink>
                        <Menu.Item key="3"><NavLink to="/yenilebilir-cicek">Yenilebilir Çiçek</NavLink></Menu.Item>
                        <Menu.Item key="4"><NavLink to="/hediye">Hediye</NavLink></Menu.Item>
                        <Menu.Item key="5"><NavLink to="/elektronik">Elektronik</NavLink></Menu.Item>
                        <Menu.Item key="6"><NavLink to="/taki-saat">Takı&Saat</NavLink></Menu.Item>
                        <Menu.Item key="7"><NavLink to="/ev-yasam">Ev&Yasam</NavLink></Menu.Item>
                        <Menu.Item key="9"><NavLink to="/moda">Moda</NavLink></Menu.Item>
                        <Menu.Item key="10"><NavLink to="/oyuncak">Oyuncak</NavLink></Menu.Item>

                    </Menu>
                </Header>
            </Layout>
        </div>
    )
}
