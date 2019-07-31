import React, { Component } from 'react'
import {connect} from 'react-redux'
import {increment,decrement,reset} from '../actions/counter'

class Counter extends Component {
    render() {
        return (
            <div>
                当前counter为:{this.props.counter.count}
                <input type="button" value="增加" onClick={()=>{this.props.increment()}}/>
                <input type="button" value="减少" onClick={()=>{this.props.decrement()}}/>
                <input type="button" value="重置" onClick={()=>{this.props.reset()}}/>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        counter:state.counter
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        increment:() => dispatch(increment()),
        decrement:() => dispatch(decrement()),
        reset:() => dispatch(reset()),
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Counter)