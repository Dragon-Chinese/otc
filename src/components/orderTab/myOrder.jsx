import React, { Component } from 'react'

class MyOrder extends Component {
    constructor(props) {
        super(props)
       
    }

    render() {
        return (
            <div className="orderList">
                <div className="finish_li">
                    <div className="top">
                        <li>
                            <p>委托单号</p>
                            <p>类型</p>
                            <p>单价</p>
                            <p>
                                <span>委托数量</span>
                                <span>成交数量</span>
                            </p>
                            <p>
                                <span>委托金额</span>
                                <span>成交金额</span>
                            </p>
                            <p>状态</p>
                            <p>下单时间</p>
                            <p></p>
                            <p>操作</p>
                        </li>
                    </div>
                    <main>
                        <li>
                        <p>136246343245678</p>
                            <p>购买</p>
                            <p>6.81CNY</p>
                            <p>
                                <span>200.00(USDT)</span>
                                <span>200.00(USDT)</span>
                            </p>
                            <p>
                                <span>200.00(USDT)</span>
                                <span>200.00(USDT)</span>
                            </p>
                            <p>接单中</p>
                            <p><span>2018-03-03 11:43:53</span></p>
                            <p></p>
                            <p className="button">详情</p>
                        </li>
                    </main>
                </div>
            </div>
        )
    }
}


export default MyOrder