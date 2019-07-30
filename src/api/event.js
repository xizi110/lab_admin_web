import request from '@/util/request'

export function eventList(params){
    return request({
        url: '/event/list',
        method: 'get',
        dataType: 'json',
        data: params,

    })
}