import axios from "axios";
const baseURL = "/api/books"

const upVote =(id)=>{
    return axios.put(baseURL+"/" +id)
}

export default {
    upVote
}