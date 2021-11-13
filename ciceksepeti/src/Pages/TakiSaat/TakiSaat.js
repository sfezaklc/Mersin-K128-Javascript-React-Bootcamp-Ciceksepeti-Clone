import React from 'react'
import { Row, Col, List, Card, Layout, Image } from 'antd'
import { useState, useEffect } from 'react'
import { useHistory } from "react-router-dom";
const { Meta } = Card;

export default function TakiSaat() {
    const [products, setProducts] = useState([]);
    let history = useHistory();



    useEffect(() => {
        fetch('http://localhost:3001/categories/4')
            .then(res => res.json())
            .then(json => handleData(json))
            
    }, [])
    const handleData = (data) => {
        //handleCategoryList(data);
        setProducts(data.products);
    }
    return (
        <div>
            <h1>Takı Saat</h1>
            <Layout>
                    <div>
                        <List
                            grid={{ gutter: 16, column: 3 }}
                            dataSource={products}
                            renderItem={item => {
                                return (
                                    <List.Item>
                                        <Card
                                            onClick={() => history.push('/product-detail/' + item.id)}
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
        </div>
    )
}
