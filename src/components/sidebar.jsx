import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Slidebar extends Component {
    constructor(props) {
        super(props)

    }

    render() {
        return (
                <div className="left">
                    <div className="make">
                        <p className="new_make">最新成交价</p>
                        <div className="tatio">
                            <p>6.81CNY</p>
                            <span>⬆️4.23%</span>
                        </div>
                        <p className="make-price">
                            市场价
                        </p>
                        <b>6.81</b>
                    </div>
                    <div className="manage">
                        <p className="deal">交易管理</p>
                        <li><span></span>我的委托单</li>
                        <li><span></span>我的委托单</li>
                        <li><span></span>我的委托单</li>
                        <li><span></span>我的委托单</li>
                        <li><span></span>我的委托单</li>
                        <li><span></span>我的委托单</li>
                        <li><span></span>我的委托单</li>
                    </div>
                    <div className="common">
                        <p className="deal">常见问题</p>
                        <li><span></span>我的委托单</li>
                        <li><span></span>我的委托单</li>
                        <li><span></span>我的委托单</li>
                        <li><span></span>我的委托单</li>
                    </div>
                </div>
        )
    }
}

export default Slidebar