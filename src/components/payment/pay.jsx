import React, { Component } from 'react'
import './pay.scss'

class componentName extends Component {
    constructor(props) {
        super(props)
        this.state = {
            //是否显示遮罩
            isShow : false,
            //是否等待放币
            isAwait : false
        }
    }

    componentWillMount() {

    }

    //确认付款
    Affirm () {
        this.setState({
            isShow : false,
            isAwait : true
        })
    }

    //去支付
    Gopay () {
        this.setState({
            isShow : true
        })
    }

    render() {
        return (
            <div className="Pay">
                <div className="flow">

                </div>
                <div className="wrap">
                    <div className="detail">
                        <div className="head">
                            <p>订单号：#1234563451234</p>
                            <p>
                                <span>21</span>
                                :
                                <span>12</span>
                            </p>
                        </div>
                        <div className="total">
                            您向张三李四购买了123453个USDT
                        </div>
                        <p className="unit">单价 : 600/300 USDT</p>
                        <p className="gross">总价 : <span>500</span> USDT</p>
                        <h2>选择支付方式</h2>
                        <div className="go_pay">
                            {!this.state.isAwait ? <div className="button" onClick={this.Gopay.bind(this)}>去支付</div>
                            : <div className="button await">等待对方放币</div>    
                            }   
                            <p>商家以缴纳123456USDT保证金，请您放心使用</p>
                        </div>
                    </div>
                    <div className="exchange">
                        <div className="head">
                            <p>诚信秒结银行</p>
                            <span></span>
                        </div>
                        <div className="message">
                            <div className="mess_detail">
                                <p className="date">2019-2-12</p>
                                <p className="hint">您已成功下单请您啊啊啊啊啊啊啊啊</p>
                                <p className="other">撒打算打算打算打算打算打算的</p>
                                <p className="own">思安戴斯滴哦奥斯达搜ID叫哦啊是激动啊时间都啊睡觉哦</p>
                                <p className="other">撒打算打算打算打算打算打算的</p>
                                <p className="own">思安戴斯滴哦奥斯达搜ID叫哦啊是激动啊时间都啊睡觉哦</p>
                                <p className="other">撒打算打算打算打算打算打算的</p>
                                <p className="own">思安戴斯滴哦奥斯达搜ID叫哦啊是激动啊时间都啊睡觉哦</p>
                                <p className="other">撒打算打算打算打算打算打算的</p>
                                <p className="own">思安戴斯滴哦奥斯达搜ID叫哦啊是激动啊时间都啊睡觉哦</p>
                                <p className="other">撒打算打算打算打算打算打算的</p>
                                <p className="own">思安戴斯滴哦奥斯达搜ID叫哦啊是激动啊时间都啊睡觉哦</p>
                                <p className="other">撒打算打算打算打算打算打算的</p>
                                <p className="own">思安戴斯滴哦奥斯达搜ID叫哦啊是激动啊时间都啊睡觉哦1</p>

                            </div>
                        </div>
                        <div className="bottom">
                            <span></span>
                            <input placeholder="请输入消息..." type="text"/>
                            <p className="send">发送</p>
                        </div>
                    </div>
                </div>
                <div className="issue">
                    <h3>常见问题:</h3>
                </div>
                {/* 弹窗提示 */}
                {this.state.isShow ? <div className="confirm">
                    <div className="frame">
                        <div className="top">
                            确认收款
                        </div>
                        <div className="total">
                                500 <span>CNY</span>
                        </div>
                        <li>
                            <p>对方银行卡号:</p>
                            <span>1234567654345676543456543</span>
                        </li>
                        <li>
                            <p>对方银行:</p>
                            <span>北京分行</span>
                        </li>
                        <li>
                            <p>对方姓名:</p>
                            <span>二傻</span>
                        </li>
                        <div className="message">
                            <span>*平台不支持自动扣款，请务必用您本人的账户向以上账号自行转账</span>
                            <span>*转账时请勿备注BTC、USDT等数字货币敏感信息，否则卖家可以拒收</span>
                        </div>
                        <div className="bottom">
                            <div className="butWrap">
                                <button>还未付款</button>
                                <button onClick={this.Affirm.bind(this)}>确认支付</button>
                            </div>
                        </div>
                    </div>
                </div> : ''}
            </div>
        )
    }
}

export default componentName