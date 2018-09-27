import * as userService from '../services/UserService';

export default {
    namespace: 'user',
    state: {
        list: null
    },
    reducers: {
        users(state, { payload: { data: users } }) {
            let user1 = users.profile;
            let list=[];
            list.push(user1)
            console.log(user1);
            return { ...state, list }; 
        }
    },
    effects: {
        //合同客户信息
        *getUserList({ payload }, { call, put }) {
            console.log("this is models")
            const { data } = yield call(userService.getUserList, payload);
            yield put({ type: 'users', payload: { data } });

        }
    },
    subscriptions: {
    },
}