import request from "@/utils/request";

export function getMoviesApi(params) {
    return request({
        url: "/movies",
        method: "GET",
        params
    });
}
