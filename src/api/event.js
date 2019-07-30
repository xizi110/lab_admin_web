import request from '@/util/request'

export function eventList(params){
    return request({
        url: '/event/list',
        method: 'get',
        dataType: 'json',
        data: params,

    })
}

export function eventAdd(params){
    return request({
        url: '/event/add',
        method: 'post',
        dataType: 'json',
        data: params,

    })
}