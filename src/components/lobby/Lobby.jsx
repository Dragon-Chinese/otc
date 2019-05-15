import React, { Component } from 'react'
import './lobby.scss'
import Sidebar from '../sidebar'

class Lobby extends Component {
    constructor(props) {
        super(props)
        this.state = {
            dataList : [
                {
                    name : '诚信秒姐银行',
                    ratio : '10000%',
                    num1 : '1000000',
                    num2 : '50-10000',
                    cny : '6.80CNY',
                    option : "下单",
                    num3 : '50-10000',
                    isShow : false
                },
                {
                    name : '诚信秒姐银行',
                    ratio : '10000%',
                    num1 : '1000000',
                    num2 : '50-10000',
                    cny : '6.80CNY',
                    option : "下单",
                    num3 : '50-10000',
                    isShow : false
                },
                {
                    name : '诚信秒姐银行',
                    ratio : '10000%',
                    num1 : '1000000',
                    num2 : '50-10000',
                    cny : '6.80CNY',
                    option : "下单",
                    num3 : '50-10000',
                    isShow : false
                },
                {
                    name : '诚信秒姐银行',
                    ratio : '10000%',
                    num1 : '1000000',
                    num2 : '50-10000',
                    cny : '6.80CNY',
                    option : "下单",
                    num3 : '50-10000',
                    isShow : false
                },
                {
                    name : '诚信秒姐银行',
                    ratio : '10000%',
                    num1 : '1000000',
                    num2 : '50-10000',
                    cny : '6.80CNY',
                    option : "下单",
                    num3 : '50-10000',
                    isShow : false
                },
                {
                    name : '诚信秒姐银行',
                    ratio : '10000%',
                    num1 : '1000000',
                    num2 : '50-10000',
                    cny : '6.80CNY',
                    option : "下单",
                    num3 : '50-10000',
                    isShow : false
                },
                {
                    name : '诚信秒姐银行',
                    ratio : '10000%',
                    num1 : '1000000',
                    num2 : '50-10000',
                    cny : '6.80CNY',
                    option : "下单",
                    num3 : '50-10000',
                    isShow : false
                }
            ]
        }
    }

    //点击下单操作
    place (val) {
        let newdate = this.state.dataList
        newdate.forEach((item , index) => {
            item.isShow  = false
        })
        newdate[val].isShow = !newdate[val].isShow
        this.setState({
            dataList : newdate
        })
    }

    //下单取消操作
    close (val) {
        let newdate = this.state.dataList
        newdate[val].isShow = !newdate[val].isShow
        this.setState({
            dataList : newdate
        })
    }

    //跳转下单页面
    skip () {
        this.props.history.push({pathname :"/payment"})
    }

    render() {
        return (
            <div className="Lobby">
            {/* 左面的 */}
                <Sidebar />
                {/* 右面的 */}
                <div className="right">
                    <div className="topNav">
                        <div className="type">
                            <p>
                                购买
                            </p>
                            <div className="coin">
                                <li>BTC</li>
                                <li>BTC</li>
                                <li>BTC</li>
                                <li>BTC</li>
                                <li>BTC</li>
                            </div>
                        </div>
                        <div className="type">
                             <p>
                                出售
                            </p>
                            <div className="coin">
                                <li>BTC</li>
                                <li>BTC</li>
                                <li>BTC</li>
                                <li>BTC</li>
                                <li>BTC</li>
                            </div>
                        </div>
                        <div className="input">
                            <input type="text"/>
                        </div>
                    </div>
                    {/* 大厅列表 */}
                    <div className="bodyList">
                        <div className="header-nav">
                            <li>商家(单数/完成率)</li>
                            <li>数量(USDT)</li>
                            <li>单笔限额(CNY)</li>
                            <li>单位(CNY)</li>
                            <li>支付方式</li>
                            <li>操作</li>
                        </div>
                        <div className="list">
                                {
                                    this.state.dataList.map((item , index) => {
                                        return <li key={index}>
                                        {
                                            !item.isShow?<div className="brief">
                                            <p><span>{item.name}</span><span>{item.ratio}</span></p>
                                            <p><span>{item.num1}</span></p>
                                            <p><span>{item.num2}</span></p>
                                            <p><span>{item.cny}</span></p>
                                            <p><span>{item.num3}</span></p>
                                            <p><button onClick={() => {this.place(index)}}>{item.option}</button></p>
                                            </div> : <div className="detail">
                                                  <div className="write">
                                                    <div>
                                                    <input type="text"/>
                                                    </div>
                                                    <p>--</p>
                                                    <div>
                                                    <input type="text"/>
                                                    </div>
                                                    <button onClick={() => {this.skip()}}>下单</button>
                                                    <span onClick={() => {this.close(index)}}>取消</span>
                                                  </div>  
                                                    <div className="message">
                                                    <div className="top">
                                                        <p>诚信秒结银行</p>
                                                        <p>6.81</p>
                                                    </div>
                                                    <div className="mid">
                                                        <p>数量: 123123123</p>
                                                        <p>500-100.000CNY</p>
                                                    </div>
                                                    </div>
                                                    <div className="way">
                                                        <p>兴业银行</p>
                                                    </div>
                                                    <div className="info">
                                                    商家提示：单在人在。付款秒放.无需备注-----必须实名付款，非实名付款，原路退回。收50元手续费。几个别的扫码无法支付。可以加好友发红包支付
                                                    </div>
                                                    <div className="timer">
                                                    付款期限：15分钟
                                                    </div>
                                            </div> 
                                        }  
                                            </li>
                                    })
                                }

                        </div>
                    </div>  
                </div>
            </div>
        )
    }
}


export default Lobby