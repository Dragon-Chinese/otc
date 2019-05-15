import React, { Component } from 'react'
import { $axios , ws} from  '../api' 
import './css/index.css'

class Index extends Component {
    constructor(props) {
        super(props)
        this.state = {
            value : '',
            ind : ''
        }
        this.father = this.father.bind(this)
    }

    componentDidMount () {
        ws.onmessage = (event) => {
            this.setState({
                ind : event.data
            })
        }
    }

    change (e) {
        this.setState({
            value : e.target.value
        })
    }

    submit () {
        ws.send(this.state.value);
    }

    close () {
        console.log('进入了')
        ws.close = (e) => {
            console.log("链接已关闭", e);
        };
    }

    father (val) {
        console.log(val)
        console.log(this.submit())
    }

    render() {
        return (
            <div className="Index">
                <input type="text" value={this.state.value} onChange = {(e) => {
                    this.change(e)
                }}/>
                <button onClick={this.submit.bind(this)}>提交</button>
                <button onClick={this.close.bind(this)}>关闭链接</button>
                <p>{this.state.ind}</p>
            </div>
        )
    }
}

export default Index