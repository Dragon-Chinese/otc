import React, { Component } from 'react'
import '../lobby/lobby.scss'
import './publish.scss'
import Sidebar from '../sidebar'

class Publish extends Component {
    constructor(props) {
        super(props)

    }

    render() {
        return (
            <div className="Lobby Publish">
                <Sidebar />
                <div className="right">
                <h2>发布委托单</h2>
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
                    <main>
                        <div className="inputList">
                            <p>价格指数</p>
                            <div className="input none">
                                6.81
                            </div>
                        </div>
                        <div className="inputList">
                            <p>交易货币</p>
                            <div className="input">
                                <input placeholder="USDT" type="text"/>
                            </div>
                        </div>
                        <div className="inputList">
                            <p>交易类型</p>
                            <div className="input none">
                                固定价钱
                            </div>
                        </div>
                        <div className="inputList">
                            <p>单价</p>
                            <div className="input">
                                <input type="text"/>
                                <span>CNY</span>
                            </div>
                        </div>
                        <div className="inputList">
                            <p>数量</p>
                            <div className="input">
                                <input type="text"/>
                                <span>USDT</span>
                            </div>
                            <b>*法币账户余额 10000USDT</b>
                        </div>
                        <div className="inputList margin">
                            <p>总金额</p>
                            <div className="input none">
                                0 CNY
                            </div>
                        </div>
                        <div className="inputList">
                            <p>单笔最小交易额</p>
                            <div className="input">
                                <input type="text"/>
                                <span>CNY</span>
                            </div>
                        </div>
                        <div className="inputList">
                            <p>单笔最大交易额</p>
                            <div className="input">
                                <input type="text"/>
                                <span>CNY</span>
                            </div>
                        </div>
                        <div className="inputList">
                            <p>订单备注</p>
                            <div className="input maxinput">
                            <textarea name="" id="" cols="30" rows="10"></textarea>
                            </div>
                        </div>
                    </main>
                    <div className="info">
                           <input type="checkbox"/><p>我已知晓平台相关条例 <a href='#'>「关于法币」</a></p> 
                    </div>
                    <div className="submit">
                         <button>发布买单</button>
                         <div className="bot">
                            <p>平台服务费：0%</p>
                            <p>买单保证金： 1000 USDT</p>
                         </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Publish