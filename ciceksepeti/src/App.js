import 'antd/dist/antd.css';
import { Layout } from 'antd';
import { useState } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Routes from './Components/Routes/Routes'
import MyHeader from './Components/Header/MyHeader'
import SearchBar from './Components/SearchBar/SearchBar';
import { UserContext } from './Context/Context';
const { Header, Content, Footer } = Layout;

function App() {
const [user, setUser] = useState('');

  return (
    <UserContext.Provider value={{user, setUser}}>
      <Layout className="layout">
      <BrowserRouter>
        <SearchBar />
        <MyHeader />
        <Content>
          <Switch>
            <Routes />
          </Switch>
        </Content>
      </BrowserRouter>
    </Layout>
    </UserContext.Provider>
  );
}

export default App;
