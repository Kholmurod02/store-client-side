// const { jwtDecode } = require("jwt-decode");

function saveToken (token){
    localStorage.setItem("access_token",token)
}

function getToken(){
    try {
        return jwtDecode(localStorage.getItem("access_token"))
    } catch (error) {
        console.error(error);
    }
}
function destroyToken() {
    localStorage.removeItem("access_token")
}

export {saveToken, destroyToken, getToken}