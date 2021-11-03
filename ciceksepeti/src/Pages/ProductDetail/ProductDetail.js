import React, { useState } from 'react'
import { useLocation } from 'react-router';
import { Card, Button } from 'antd';
import { Typography } from 'antd';
import { ColumnGroup } from 'rc-table';


export default function ProductDetail(props) {
  const location = useLocation();
  const item = location.state.item;
  const { Meta } = Card;
  const { Title, Paragraph } = Typography;

  const [selectedQuantity, setSelectedQuantity] = useState(1);
  return (
    <div>
      <div style={{ display: 'flex', gap: 100 }}>
        <img alt="example" style={{ width: '38%', height: '100%' }} src={item.image} />
        
        <div>
          <Card style={{backgroundColor:'#dcddde'}}>
            <Title level={2}>{item.title}</Title>
            <Title level={3}>{item.price} TL</Title>
          </Card>


          <div style={{ display: 'flex', gap: 5, justifyContent:'flex-end' }}>
            <Button type="primary" size={"Large"} style={{ width: 150, backgroundColor: '#51b549' }}>
              Primary
            </Button>
            <div style={{ border: '1px solid #000', padding: 5 }}>
              <button onClick={() => {
                if (selectedQuantity <= 1)
                  return;
                setSelectedQuantity(selectedQuantity - 1)
              }}>-</button>
              <input value={selectedQuantity} style={{ width: 50 }} />
              <button onClick={() => {
                console.log(selectedQuantity);
                setSelectedQuantity(selectedQuantity + 1)
              }}>+</button>
            </div>
          </div>
          <div>
            <Card style={{backgroundColor:'#dcddde'}}>
            <Title level={3}>Ürün Açıklaması</Title>
            {item.description}
            </Card>
          </div>
        </div>
      </div>

    </div>
  )
}
