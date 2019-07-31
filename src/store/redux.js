
// webpack 打包命令更换为  webpack redux.js -o build.js
// 本demo说明redux和react完全没有关系。
// 可以只用来进行数据存储访问
import store from './store'
import {increment,decrement,reset} from '../actions/counter'

console.log(store.getState())

let unsubscribe = store.subscribe(()=>{
    console.log(store.getState())
})

store.dispatch(increment())
store.dispatch(increment())
store.dispatch(increment())
store.dispatch(increment())
store.dispatch(decrement())
store.dispatch(reset())

unsubscribe()

