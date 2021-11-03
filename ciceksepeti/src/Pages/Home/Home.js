import React from 'react'
import './Home.css'
import Carousel from '../../Components/Carousel/MyCarousel'
import { Content } from 'antd/lib/layout/layout'
import { Typography } from 'antd'
import { Row, Col, List, Card, Layout, Image } from 'antd'
import { useState, useEffect } from 'react'
import { useHistory } from "react-router-dom";
import { Link } from 'react-router-dom'
import coksatanlar from '../../images/cok-satanlar.jpeg'
import yenileblir from '../../images/yenilebilir-cicek.jpg'
import takisaat from '../../images/takı-saat.jpg'
import cicek from '../../images/cicek.jpg'
import dekorasyon from '../../images/dekorasyon.jpg'
export default function Home() {

    const { Title, Paragraph } = Typography;
    const { Meta } = Card;
    const [products, setProducts] = useState([]);
    let history = useHistory();



    useEffect(() => {
        fetch('http://localhost:3001/products')
            .then(res => res.json())
            .then(json => handleData(json))
    }, [])
    const handleData = (data) => {
        //handleCategoryList(data);
        setProducts(data);
    }
    return (
        <div>
            <Content>
                <Carousel />

                <Row align="middle" gutter={10}>
                    <Col span={12}>
                        <div style={{ paddingBlock: 30 }}>
                            <img src={coksatanlar} style={{ width: '100%' }} />
                        </div>
                    </Col>
                    <Col gutter={10} span={12}>
                        <Row gutter={16}>
                            <Col span={12}>

                                <Image src={yenileblir} width={'100%'} />

                            </Col>
                            <Col span={12}>
                                <Image src={cicek} width={'100%'} />
                            </Col>
                            <Col span={12}>
                                <Image src={takisaat} width={'100%'} />
                            </Col>
                            <Col span={12}>
                                <Image src={dekorasyon} width={'100%'} />
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Layout>
                    <div>
                        <List
                            grid={{ gutter: 16, column: 3 }}
                            dataSource={products}
                            renderItem={item => {
                                return (
                                    <List.Item>
                                        <Card
                                            onClick={() => history.push(
                                                '/product-detail',
                                                {
                                                    item: item,
                                                })}
                                            hoverable
                                            style={{ width: 240 }}
                                            cover={<img alt="example" style={{ width: '100%' }} src={item.image} />}
                                        >
                                            <Meta title={item.title} description={`${item.price} TL`} />
                                            
                                        </Card>
                                    </List.Item>
                                )
                            }}
                        />

                    </div>
                </Layout>
            </Content>
        </div >
    )
}
