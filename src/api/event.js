import request from '@/util/request'

export function getEvent(eventId){
    return request({
        url: '/event/' + eventId,
        method: 'get',
        dataType: 'json',
    })
}

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

export function updateEvent(form){
    return request({
        url: '/event',
        method: 'put',
        dataType: 'json',
        data: form,
    })
}
