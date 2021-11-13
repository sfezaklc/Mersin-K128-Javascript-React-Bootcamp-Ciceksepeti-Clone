import React, { useState, useContext, useEffect } from 'react'
import { Input, Space, Image } from 'antd';
import { AudioOutlined } from '@ant-design/icons';
import ciceksepetiLogo from '../../images/logo-new-ciceksepeti.png'
import { useHistory } from "react-router-dom";
import './SearchBar.css';
import { UserOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import { UserContext } from '../../Context/Context';
import { useSelector, useDispatch } from 'react-redux';
import { GET_BASKET } from '../../store/reducers/constants';
const { Search } = Input;

const onSearch = value => console.log(value);

function getBasketStorage() {
  return async dispatch => {
    dispatch({
      type: GET_BASKET,
      payload: JSON.parse(localStorage.getItem("basket"))
    })
  }
}

let basketList = [];
export default function SearchBar() {
  const dispatch = useDispatch();
  const [totalCount, setTotalCount] = useState(0)
  basketList = useSelector(state => state.basket.basketList);

  if (basketList.length != 0) {
    localStorage.setItem("basket", JSON.stringify(basketList));
  }

  useEffect(() => {
      setTotalCount(basketList.reduce((a, v) => a + v.count, 0));
  }, [basketList]);

  useEffect(() => {
    if (JSON.parse(localStorage.getItem("basket")) != null) {
      dispatch(getBasketStorage());
    }
    console.log('güncelleme');
  }, [])

  const userContext = useContext(UserContext);
  const history = useHistory();
  const handleRoute = () => {
    history.push("/");
  }
  const { Search } = Input;



  return (

    <div className="searchbar" style={{ marginLeft: 200, marginTop: 20 }}>
      <span>
        <img src={ciceksepetiLogo} onClick={handleRoute} />
      </span>
      <span>
        <Space direction="vertical">
          <Search placeholder="Ürün ara..." onSearch={onSearch} enterButton />
        </Space>
      </span>
      <div className="user-icons">
        <ul className="user-menu-item">
          <li className="user-menu-item">
            <a href="/login">
              <span>
                <UserOutlined style={{ fontSize: '30px', color: 'rgb(226, 155, 24)' }} />
              </span>
              <span className="user-icons-title">{userContext.user ? userContext.user : 'Üyelik'}</span>
            </a>
          </li>
          <li>
            <span>
              <ShoppingCartOutlined style={{ fontSize: '30px', color: 'rgb(49, 194, 49)' }} />
            </span>
            <span className="user-icons-title">Sepetim {basketList != null ? '(' + totalCount + ')' : ""}
            </span>
          </li>
        </ul>
      </div>
    </div>

  )
}
