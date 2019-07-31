import React, { Component } from 'react'

export default class HelloWorld extends Component {
    state={
        count:0
    }
    _handleClick=()=>{
        this.setState({count:++this.state.count})
    }
    _minusClick=()=>{
        this.setState({count:--this.state.count})
    }
    render() {
        return (
            <div>
                this is home~<br/>
                当前计数：{this.state.count}<br/>
                <button onClick={() => this._handleClick()}>自增</button>
                <button onClick={() => this._minusClick()}>自减</button>
            </div>
        )
    }
}
