import React, { Component } from 'react'
import './home.scss'
import 'swiper/dist/css/swiper.min.css'

import Swiper from 'swiper/dist/js/swiper.js'
class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    componentDidMount () {
        new Swiper('.swiper-container', {
            // slidesPerView : 3,
            // spaceBetween : 20,
            loop : true,
            autoplay : true
        })
    }

    render() {
        return (
            <div className="Home">
                <div className="swiper-container">
                    <div className="swiper-wrapper">
                        <div className="swiper-slide">Slide 1</div>
                        <div className="swiper-slide">Slide 2</div>
                        <div className="swiper-slide">Slide 3</div>
                    </div>
                    <div className="swiper-pagination"></div>
                </div>
                <div className="product">
                    <div className="main">
                          <li>
                              <p>BTC指数</p>
                              <span>¥26.2.221</span>
                              <b>+ 0.05</b>
                          </li>
                          <li>
                              <p>ETH指数</p>
                              <span>¥26.2.221</span>
                              <b>+ 0.05</b>
                          </li>
                          <li>
                              <p>BHP指数</p>
                              <span>¥26.2.221</span>
                              <b>+ 0.05</b>
                          </li>
                    </div>
                </div>
                <div className="buy">
                    <h2>
                    品牌名——OTC法币交易
                    </h2>
                    <span>
                    支持多国法币购买BTC、ETH、BHP
                    </span>
                    <li>
                        <p>下单</p><i></i><p>转账</p>
                        <i></i><p>成交</p>
                    </li>
                    <div className="submit">
                        <button>购买BTC</button>
                        <button>出售BTC</button>
                    </div>
                </div>
                <div className="sign">
                    <h2>注册一个品牌名账号开启数字货币交易</h2>
                    <div className="input">
                        <input placeholder="请输入您的手机号码" type="text"/>
                        <button>注册</button>
                    </div>
                </div>
                <footer>
                    
                </footer>
            </div>
        )
    }
}


export default Home