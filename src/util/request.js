import Axios from "axios";


 const request= Axios.create({
    baseURL: "http://localhost",
    timeout: 15000,
    headers: {'authorization':"1234567890"},
}) ;
export default request