import http from "./axiosContext"

const create=(data)=>{
    return http.post("/users/",data)
}

const GetAll=()=>{
    return http.get("/users")
}

const getOne = (id) => {
    return http.get(`/users/${id}`);
};

const update = (id, Data) => {
    return http.put(`/users/${id}`,Data);
};

const remove = (id) => {
    return http.delete(`/users/${id}`);
}

export default{create, GetAll, getOne, update, remove}