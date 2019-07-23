import request from '@/util/request'

export function login(username, password, code) {
    return request({
        url: '/auth/login',
        method: 'post',
        dataType: 'json',
        data: {
            username,
            password,
            code
        }

    })
}