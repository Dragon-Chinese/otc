import React, { Component } from 'react'

class Header extends Component {
    constructor(props) {
        super(props)
        this.state = {
            //列表
            navList : [
                {
                    id : 0,
                    name : '首页'
                },
                {
                    id : 0,
                    name : 'OTC法比交易'
                },
            ],
            //选中
            active : 1
        }
    }

    render() {
        return (
            <div className="Header">
                <h1 className="logo"></h1>
                <div className="leftList">
                 {
                     this.state.navList.map((item , index) => {
                         return <li key={index} className={index==this.state.active ? 'active' : ''}>
                            {item.name}
                         </li>
                     })
                 }
                </div>
            </div>
        )
    }
}


export default Header