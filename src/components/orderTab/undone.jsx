import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Undone extends Component {
    constructor(props) {
        super(props)

    }

    render() {
        return (
            <div className="orderList">
            <div className="li">
                <div className="top">
                    <p>订单号 : 13082819990314</p>
                    <p>在线沟通</p>
                    <p>申诉中</p>
                </div>
                <main>
                        <div className="sell">
                            <div className="price">
                                <p>出售</p>
                                <span>¥683.00</span>
                            </div>
                           
                            <div className="bot">
                                <li>
                                    <p>单价:</p>
                                    <span>16.81</span>
                                </li>
                                <li>
                                    <p>数量</p>
                                    <span>1000usdt</span>
                                </li>
                            </div>
                        </div>
                        <div className="buy">
                            <p>买方 ： 专业炒币</p>
                            <div className="bot">
                                <li>
                                    <p>认证等级:</p>
                                    <span>高级认证</span>
                                </li>
                                <li>
                                    <p>注册时间</p>
                                    <span>2019-1-23</span>
                                </li>
                                <li>
                                    <p>平均付款时间:</p>
                                    <span>1.24</span>
                                </li>
                                <li>
                                    <p>成交单数/完成率:</p>
                                    <span>70/189%</span>
                                </li>
                            </div>
                        </div>
                        <div className="pay">
                            <p>支付方式 ： 银行卡</p>
                            <div className="bot">
                                 <li>
                                    <p>姓名</p>
                                    <span>张三</span>
                                </li>
                                <li>
                                    <p>账号</p>
                                    <span>1352215952</span>
                                </li>
                                <li>
                                    <p>银行卡</p>
                                    <span>招商银行(5682)</span>
                                </li>
                            </div>
                        </div>
                        <div className="info">
                            <span>请保持电话通畅申诉口令23123</span>
                        </div>
                        <div className="icon">
                            详情
                        </div>
                </main>
            </div>
            <div className="li">
                <div className="top">
                    <p>订单号 : 13082819990314</p>
                    <p>在线沟通</p>
                    <p>待支付</p>
                </div>
                <main>
                        <div className="sell">
                            <div className="price">
                                <p>出售</p>
                                <span>¥683.00</span>
                            </div>
                           
                            <div className="bot">
                                <li>
                                    <p>单价:</p>
                                    <span>16.81</span>
                                </li>
                                <li>
                                    <p>数量</p>
                                    <span>1000usdt</span>
                                </li>
                            </div>
                        </div>
                        <div className="buy">
                            <p>买方 ： 专业炒币</p>
                            <div className="bot">
                                <li>
                                    <p>认证等级:</p>
                                    <span>高级认证</span>
                                </li>
                                <li>
                                    <p>注册时间</p>
                                    <span>2019-1-23</span>
                                </li>
                                <li>
                                    <p>平均付款时间:</p>
                                    <span>1.24</span>
                                </li>
                                <li>
                                    <p>成交单数/完成率:</p>
                                    <span>70/189%</span>
                                </li>
                            </div>
                        </div>
                        <div className="pay">
                            <p>支付方式 ： 银行卡</p>
                            <div className="bot">
                                 <li>
                                    <p>姓名</p>
                                    <span>张三</span>
                                </li>
                                <li>
                                    <p>账号</p>
                                    <span>1352215952</span>
                                </li>
                                <li>
                                    <p>银行卡</p>
                                    <span>招商银行(5682)</span>
                                </li>
                            </div>
                        </div>
                        <div className="info-time">
                            <span>还剩下 : <i>12.00s</i></span>
                        </div>
                        <div className="icon">
                            详情
                        </div>
                </main>
            </div>
            <div className="li">
                <div className="top">
                    <p>订单号 : 13082819990314</p>
                    <p>在线沟通</p>
                    <p>对方已付款</p>
                </div>
                <main>
                        <div className="sell">
                            <div className="price">
                                <p>出售</p>
                                <span>¥683.00</span>
                            </div>
                           
                            <div className="bot">
                                <li>
                                    <p>单价:</p>
                                    <span>16.81</span>
                                </li>
                                <li>
                                    <p>数量</p>
                                    <span>1000usdt</span>
                                </li>
                            </div>
                        </div>
                        <div className="buy">
                            <p>买方 ： 专业炒币</p>
                            <div className="bot">
                                <li>
                                    <p>认证等级:</p>
                                    <span>高级认证</span>
                                </li>
                                <li>
                                    <p>注册时间</p>
                                    <span>2019-1-23</span>
                                </li>
                                <li>
                                    <p>平均付款时间:</p>
                                    <span>1.24</span>
                                </li>
                                <li>
                                    <p>成交单数/完成率:</p>
                                    <span>70/189%</span>
                                </li>
                            </div>
                        </div>
                        <div className="pay">
                            <p>支付方式 ： 银行卡</p>
                            <div className="bot">
                                 <li>
                                    <p>姓名</p>
                                    <span>张三</span>
                                </li>
                                <li>
                                    <p>账号</p>
                                    <span>1352215952</span>
                                </li>
                                <li>
                                    <p>银行卡</p>
                                    <span>招商银行(5682)</span>
                                </li>
                            </div>
                        </div>
                        <div className="info-time-three">
                            <span>还剩下 : <i>496.ss</i> 超时自动放币</span>
                            <div className="bot">
                                <button>确认收款</button>
                                <div className="appeal">
                                    没有收到付款？<span>申请投诉</span>
                                </div>
                            </div>
                        </div>
                        <div className="icon">
                            详情
                        </div>
                </main>
            </div>
        </div>
        )
    }
}


export default Undone