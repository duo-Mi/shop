import service from "../request";

function login(data){
    return service({
        method:'post',
        url:'/login',
        data
    })
}