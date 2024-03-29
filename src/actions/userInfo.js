export const GET_USER_INFO_REQUEST = "userInfo/GET_USER_INFO_REQUEST"
export const GET_USER_INFO_SUCCESS = "userInfo/GET_USER_INFO_SUCCESS"
export const GET_USER_INFO_FAIL = "userInfo/GET_USER_INFO_FAIL"

function getUserInfoRequest() {
    return {
        type: GET_USER_INFO_REQUEST
    }
}

function getUserInfoSuccess(userInfo) {
    return {
        type: GET_USER_INFO_SUCCESS,
        userInfo: userInfo
    }
}

function getUserInfoFail() {
    return {
        type: GET_USER_INFO_FAIL
    }
}
// fetch
// export function getUserInfo() {
//     return function (dispatch) {
//         dispatch (getUserInfoRequest())
//         setTimeout(() => {            
//             return fetch('http://localhost:8080/api/user.json')
//             .then(res => {
//                 return res.json()
//             })
//             .then(json => {
//                 dispatch(getUserInfoSuccess(json))
//             })
//             .catch(() => {
//                 dispatch(getUserInfoFail())
//             })
//         }, 2000);
//     }
// }

// axios
export function getUserInfo() {
    return {
        types: [GET_USER_INFO_REQUEST, GET_USER_INFO_SUCCESS, GET_USER_INFO_FAIL],
        promise: client => client.get(`http://localhost:8080/api/user.json`)
        afterSuccess:(dispatch,getState,response)=>{
            /*请求成功后执行的函数*/
        },
        otherData:otherData
    }
}