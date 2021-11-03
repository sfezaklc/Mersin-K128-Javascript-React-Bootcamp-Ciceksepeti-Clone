import React from 'react'
import './login.css'
import { Row, Col, List, Card, Layout, Image } from 'antd'
import { BrowserRouter as Router, Route, NavLink, Switch } from 'react-router-dom'
import { useState, useEffect, useContext } from 'react'
import { Form, Input, Button, Checkbox } from 'antd';
import yonca from '../../images/yonca.png';
import {UserOutlined,LockOutlined} from '@ant-design/icons'
import Home from '../Home/Home'
import axios from 'axios'
import { UserContext } from '../../Context/Context'
import { useHistory } from 'react-router'



export default function Login() {
    const userContext = useContext(UserContext);
    const history = useHistory();

    const[details,setDetails]=useState({Email:"",password:""})
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [formError, setFormError] = useState("");
    const [success, setSuccess] = useState(false);

    const onFinish = (values) => {
        if( values.email.length > 0 && values.password.length > 0) {

            axios.defaults.headers.post['Content-Type'] = 'application/json';

            axios.post('http://localhost:3001/login', {email: values.email, password: values.password})
            .then((response) => {
                userContext.setUser(response.data.email);
                setSuccess(true);
                setFormError('');
                history.push('/');
            })
            .catch((error) => {
                setFormError('Email veya şifre hatalı.');
            })

            // setSuccess(true);
            // setTimeout(() => window.location = '/', 1000);
        }
    }    

    return (
        <div className="login">
            <div className="login-form">
                <Row justify="start">
                    <Col span={2} className="col1">
                        <div>
                            <h1>Çiçek Sepetine Hoşgeldiniz</h1>
                            <p>
                            Çiçek Sepetinin renkli dünyasına göz atmak için hemen Giriş Yapın.
                            </p>
                        </div>
                    </Col>
                    <Col span={2}>
                        <Image src={yonca} style={{ width: 50, height: 50 }} />
                        <h1>Giriş Yapın</h1>
                        {formError ? <div>{formError}</div> : ''}
                        {success ? <div>Giriş başarılı.</div> : ''}
                        <div>
                            <Form onFinish={onFinish} className="login-form">
                                <Form.Item name="email" >
                                    <Input name="email" id="email" prefix={<UserOutlined className="site-form-item-icon" />} placeholder="E-mail" required />
                                </Form.Item>
                                <Form.Item name="password">
                                    <Input type="password" prefix={<LockOutlined className="site-form-item-icon" />} placeholder="Password" required />
                                </Form.Item>
                                <Form.Item>
                                    <Form.Item name="remember" valuePropName="checked" noStyle>
                                        <Checkbox>Remember me</Checkbox>
                                    </Form.Item>

                                    <a className="login-form-forgot" href="">
                                        Forgot password
                                    </a>
                                </Form.Item>

                                <Form.Item>
                                    <Button type="primary" htmlType="submit" className="login-form-button">
                                        Log in
                                    </Button>
                                    Or <a href="">register now!</a>
                                </Form.Item>
                            </Form>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>

    )
}
