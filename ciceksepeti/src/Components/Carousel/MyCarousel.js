import React, { Component } from "react";
import './mycarousel.css'
import { Carousel, Image, Card, Avatar} from 'antd';
import { CommentOutlined , StarOutlined, InfoCircleOutlined  } from '@ant-design/icons'


import adidas from '../../images/Adidas.jpg'
import procsin from '../../images/Procsin.jpg'
import koton from '../../images/koton.png'
import penti from '../../images/penti.png'
import avon from '../../images/avon.png'
import sleepy from '../../images/Sleepy.jpg'
import altınbas from '../../images/Altınbaş.png'
import defacto from '../../images/DeFacto.jpg'
import butikpasta from '../../images/Butik Pasta.png'
import barbie from '../../images/Barbie.png'
import salonbitki from '../../images/Salon Bitkileri.png'
const { Meta } = Card;
const contentStyle = {
    height: '100px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
};

export default function MyCarousel() {

    return (
        <div>
            
            <Carousel autoplay slidesToShow={10}>
                <div>
                <Avatar size={100} src={<Image src={adidas} style={{ width: 100, borderRadius:15 }} />} />
                </div>
                <div>
                <Avatar size={100} src={<Image src={procsin} style={{ width: 100, borderRadius:25 }} />} />
                </div>
                <div>
                <Avatar size={100} src={<Image src={avon} style={{ width: 100, borderRadius:25 }} />} />
                </div>
                <div>
                <Avatar size={100} src={<Image src={butikpasta} style={{ width: 100, borderRadius:25 }} />} />
                </div>
                <div>
                <Avatar size={100} src={<Image src={koton} style={{ width: 100, borderRadius:25 }} />} />
                </div>
                <div>
                <Avatar size={100} src={<Image src={penti} style={{ width: 100, borderRadius:25 }} />} />
                </div>
                <div>
                <Avatar size={100} src={<Image src={sleepy} style={{ width: 100, borderRadius:25 }} />} />
                </div>
                <div>
                <Avatar size={100} src={<Image src={salonbitki} style={{ width: 100, borderRadius:25 }} />} />
                </div>
                <div>
                <Avatar size={100} src={<Image src={defacto} style={{ width: 100, borderRadius:25 }} />} />
                </div>
                <div>
                <Avatar size={100} src={<Image src={altınbas} style={{ width: 100, borderRadius:25 }} />} />
                </div>
                <div>
                <Avatar size={100} src={<Image src={barbie} style={{ width: 100, borderRadius:25 }} />} />
                </div>
            </Carousel>,
        </div>
    );
}
