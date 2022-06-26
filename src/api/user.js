import request from "@/utils/request";

function login(users) {
    return request({
        url: "users/login",
        method: "post",
        data: users
    })
}

export default {
    login
}