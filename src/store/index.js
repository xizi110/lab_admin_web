import Vue from 'vue'
import Vuex from 'vuex'
import {login} from '@/api/auth'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        
    },
    mutations: {
    },
    actions: {
        Login({ commit }, form) {
            const username = form.username.trim();
            const password = form.password.trim();
            const code = form.code.trim();
            // action异步处理，dispatch可以知道action什么时候执行结束
            return new Promise((resolve, reject) => {
                login(username, password, code).then(res => {
                    // if (res.data.code == 10000) {
                    //     console.log(res.data.msg);
                    // }
                    resolve()
                }).catch(error => {
                    reject(error);
                })
            })

        }
    }
})

export default store
