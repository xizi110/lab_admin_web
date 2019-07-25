import Vue from 'vue'
import Vuex from 'vuex'
import { login } from '@/api/auth'
import { getToken, setToken } from '../util/auth';

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        token: getToken(),
    },
    mutations: {
        SET_TOKEN: (state, token) => {
            state.token = token
        },
    },
    actions: {
        Login({ commit }, form) {
            const username = form.username.trim();
            const password = form.password.trim();
            const code = form.code.trim();
            // action异步处理，dispatch可以知道action什么时候执行结束
            return new Promise((resolve, reject) => {
                login(username, password, code).then(response => {
                    if (response.code == 10000) {
                        const data = response.data
                        console.log(data)
                        const tokenStr = data.token
                        setToken(tokenStr)
                        console.log("getToken = " + getToken())
                        commit('SET_TOKEN', tokenStr)
                    }
                    resolve()
                }).catch(error => {
                    reject(error);
                })
            })

        }
    }
})

export default store
