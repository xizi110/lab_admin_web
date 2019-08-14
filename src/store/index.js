import Vue from 'vue'
import Vuex from 'vuex'
import { login } from '@/api/auth'
import { getToken, setToken_Username, setUser } from '../util/auth';

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        token: getToken(),
        username: "",
    },
    getters:{
        username: state => state.username
    },
    mutations: {
        SET_TOKEN: (state, token) => {
            state.token = token
        },
        SET_USERNAME: (state, username) => {
            state.username = username
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
                        const tokenStr = data.token
                        setToken_Username(tokenStr,username)
                        commit('SET_TOKEN', tokenStr)
                        console.log(username)
                        commit('SET_USERNAME', username)
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
