import React, { useState, useEffect } from 'react'
import { useLocation, useParams } from 'react-router';
import { Card, Button } from 'antd';
import { Typography } from 'antd';
import { ColumnGroup } from 'rc-table';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from "react-router-dom";
import { ADD_BASKET, PRODUCT_DETAIL } from '../../store/reducers/constants';
import axios from 'axios';

export const fetchAddBasket = (item, defaultPrice) => {
  return async dispatch => {
    dispatch({
      type: ADD_BASKET,
      payload: {
        item,
        defaultPrice: defaultPrice,
        count: 1
      }
    })
  }
}

export const fetchProductDetail = (id) => {
  return async dispatch => {
    await axios.get('http://localhost:3001/products/' + id).then(i => {
      dispatch({
        type: PRODUCT_DETAIL,
        payload: i.data
      });
    });
  }
}

let basketList;
export default function ProductDetail(props) {
  async function addBasket() {
    await dispatch(fetchAddBasket(item, item.price));
    localStorage.setItem("basket", JSON.stringify(basketList));
  }

  const { id } = useParams();
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(fetchProductDetail(id));
  }, []);

  const item = useSelector(state => state.product.productDetail)

  const [products, setProducts] = useState([]);
  const [selectedQuantity, setSelectedQuantity] = useState(1);
  basketList = useSelector(state => state.basket.basketList)

  const { Meta } = Card;
  const { Title, Paragraph } = Typography;

  return (
    <div>
      <div style={{ display: 'flex', gap: 100 }}>
        <img alt="example" style={{ width: '38%', height: '100%' }} src={item.image} />

        <div>
          <Card style={{ backgroundColor: '#dcddde' }}>
            <Title level={2}>{item.title}</Title>
            <Title level={3}>{item.price} TL</Title>
          </Card>


          <div style={{ display: 'flex', gap: 5, justifyContent: 'flex-end' }}>
            <Button type="primary" size={"Large"} style={{ width: 150, backgroundColor: '#51b549' }}
              onClick={() => {
                  addBasket();
              }}
            >
              Sepete Ekle
            </Button>
            <div style={{ border: '1px solid #000', padding: 5 }}>
              <button onClick={() => {
                if (selectedQuantity <= 1)
                  return;
                setSelectedQuantity(selectedQuantity - 1)
              }}>-</button>
              <input value={selectedQuantity} style={{ width: 50 }} />
              <button onClick={() => {
                setSelectedQuantity(selectedQuantity + 1)
              }}>+</button>
            </div>
          </div>
          <div>
            <Card style={{ backgroundColor: '#dcddde' }}>
              <Title level={3}>Ürün Açıklaması</Title>
              {item.description}
            </Card>
          </div>
        </div>
      </div>

    </div>
  )
}
