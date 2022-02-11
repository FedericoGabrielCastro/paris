import Axios from "axios"

export function requestGetFoodList() {
    return Axios.request({
        method: "get",
        url: "http://localhost:8000/food/read"
    })
}