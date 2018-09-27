import request from '../utils/request';

//获取用户列表
export function getUserList(data) {
    console.log("this is servlce")
    return request(`/profile/users/getUserInfo/1`);
}

//验证验证码  
export function checkCodeInfo(data) {
    return request(`/inlet/loanApplication/checkCodeInfo`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
}
