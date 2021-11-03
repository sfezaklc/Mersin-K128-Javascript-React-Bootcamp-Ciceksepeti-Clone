import React from 'react'

import { Layout } from 'antd';
import { BrowserRouter as Router, Route, NavLink, Switch } from 'react-router-dom'

import Home from '../../Pages/Home/Home';
import Dogumgunu from '../../Pages/DogumGunu/DogumGunu'
import Cicek from '../../Pages/Cicek/Cicek'
import productdetail from '../../Pages/ProductDetail/ProductDetail'
import login from '../../Pages/Login/Login'
import Category from '../../Pages/Categories/Category';
import EvYasam from '../../Pages/EvYasam/EvYasam';
import Elektronik from '../../Pages/Elektronik/Elektronik'

export default function Routes() {
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/cicek" component={Cicek} />
            <Route exact path="/category" component={Category} />
            <Route exact path="/dogum-gunu" component={Dogumgunu} />
            <Route exact path="/ev-yasam" component={EvYasam} />
            <Route exact path="/elektronik" component={Elektronik} />
            <Route exact path="/login" component={login} />
            <Route exact path="/product-detail" component={productdetail} />
        </Switch>
    )
}