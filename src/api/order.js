import request from "@/utils/request";

function submitOrder(order) {
    return request({
        url: "orders/submitOrder",
        method: 'post',
        data: order
    })
}

function submitOrderDetails(orderDetails) {
    return request({
        url: "orders/submitOrderDetails",
        method: 'post',
        data: orderDetails
    })
}

export default {
    submitOrder,
    submitOrderDetails
}