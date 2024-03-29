import React, { Component } from 'react'
import {connect} from 'react-redux'
import {getUserInfo} from '../actions/userInfo'

class UserInfo extends Component {
    render() {
        const {userInfo, isLoading,errorMsg} = this.props.userInfo;
        return (
            <div>
                {
                    isLoading ? '数据请求中......' : 
                    (
                        errorMsg ? errorMsg : 
                        <div>
                            <p>用户信息：</p>
                            <p>用户名称：{userInfo.name}</p>
                            <p>用户简介：{userInfo.intro}</p>
                        </div>
                    )
                }
                <button onClick={() => this.props.getUserInfo()}>请求用户信息</button>
            </div>
        )
    }
}

export default connect(
    (state) => ({ userInfo:state.userInfo}),
    {getUserInfo}
)(UserInfo)