import React, { Component } from 'react'
import '../lobby/lobby.scss'
import Sidebar from '../sidebar'
import './order.scss'
import Undone from '../orderTab/undone'
import Finish from '../orderTab/finish'
import Cancel from '../orderTab/cancel'
import MyOrder from '../orderTab/myOrder'
class Order extends Component {
    constructor(props) {
        super(props)
        this.state = {
            navList : [
                {
                    name : '未完成订单'
                },
                {
                    name : '已完成订单'
                },
                {
                    name : '已取消订单'
                },
                {
                    name : '我的委托单'
                },
            ],
            active : 0
        }
    }

    tabNav (ind) {
        this.setState({
            active : ind
        })
    }

    render() {
        return (
            <div className="Lobby Order">
                <Sidebar />
                <div className="right">
                    <div className="identity">
                        <div className="left_detail">
                            <div className="name">
                                诚信秒结币行
                            </div>
                            <div className="kyc">
                                <p>认证等级</p>
                                <span>实名认证</span>
                                <span>高级认证</span>
                            </div>
                            <div className="time">
                                <p>注册时间：</p>
                                <span>2019 1-12</span>
                            </div>
                            <div className="discharged">
                                平均付款时间，平均放币时间每日24:00更新
                            </div>
                        </div>
                        <div className="right_detail">
                            <div className="top">
                                <li>10000</li>
                                <li>24</li>
                                <li>99.99%</li>
                                <li>00.00</li>
                                <li>00.00</li>
                            </div>
                            <div className="bot">
                                <li>交易总额(CNY)</li>
                                <li>总单数</li>
                                <li>完成率</li>
                                <li>平均付款时间</li>
                                <li>平均放币时间</li>
                            </div>
                        </div>
                    </div>
                    <nav>
                       {
                        this.state.navList.map((item , index) => {
                            return <li className={index === this.state.active ? 'active' : ''} key={index} onClick={() => {this.tabNav(index)}}>
                                {item.name}
                            </li>
                        })   
                        }
                    </nav>
                    {
                        !this.state.active ? <Undone /> : this.state.active===1 ? <Finish /> : this.state.active===2 ?  <Cancel /> :  <MyOrder />
                    }
                </div>
            </div>
        )
    }
}

export default Order