import request from '@/util/request'

export function listEvent(params){
    return request({
        url: '/event',
        method: 'get',
        dataType: 'json',
        params: params
    })
}

export function addEvent(params){
    return request({
        url: '/event',
        method: 'post',
        dataType: 'json',
        data: params,

    })
}

export function deleteEvent(eventId){
    return request({
        url: '/event',
        method: 'delete',
        dataType: 'json',
        params: {
            eventId
        }
    })
}
