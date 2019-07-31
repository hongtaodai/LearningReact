import React from 'react'
import ReactDom from 'react-dom'
import UserInfo from './component/UserInfo'
import {Provider} from 'react-redux'
import store from './store/store'

if(module.hot){
    module.hot.accept();
}

ReactDom.render
(
    <Provider store={store}><UserInfo></UserInfo></Provider>,document.getElementById('app')
)