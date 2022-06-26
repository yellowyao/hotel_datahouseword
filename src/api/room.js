import request from "@/utils/request";


function findAllRoomsByStatusAndType(query) {
    return request({
        url: 'rooms/findAllRoomsByStatusAndType',
        method: 'post',
        data: query
    })
}

export default {
    findAllRoomsByStatusAndType
}