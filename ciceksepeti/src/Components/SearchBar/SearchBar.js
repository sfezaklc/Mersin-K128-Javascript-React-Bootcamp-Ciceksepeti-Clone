import React, { useContext } from 'react'
import { Input, Space, Image} from 'antd';
        import { AudioOutlined } from '@ant-design/icons';
import ciceksepetiLogo from '../../images/logo-new-ciceksepeti.png'
import { useHistory } from "react-router-dom";
import './SearchBar.css';
import { UserOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import { UserContext } from '../../Context/Context';
const { Search } = Input;

const onSearch = value => console.log(value);
export default function SearchBar() {
  const userContext = useContext(UserContext);
  const history = useHistory();
  const handleRoute = () =>{ 
    history.push("/");
  }
const { Search } = Input;
        
        
        
    return (

        <div className="searchbar" style={{marginLeft:200, marginTop:20}}>
            <span>
                <img src={ciceksepetiLogo} onClick={handleRoute}/>
            </span>
            <span>
            <Space direction="vertical">
                <Search placeholder="Ürün ara..." onSearch={onSearch}   enterButton />
            </Space>
            </span>
            <div className="user-icons">
              <ul className="user-menu-item">
                <li className="user-menu-item">
                  <a href="/login">
                    <span>
                      <UserOutlined style={{ fontSize: '30px', color: 'rgb(226, 155, 24)' }} />
                    </span>
                    <span className="user-icons-title">{ userContext.user ? userContext.user : 'Üyelik' }</span>
                  </a>
                </li>
                <li>
                  <span>
                    <ShoppingCartOutlined style={{ fontSize: '30px', color: 'rgb(49, 194, 49)' }} />
                  </span>
                  <span className="user-icons-title">Sepetim</span>
                  </li>
              </ul>
            </div>
        </div>
        
    )
}
