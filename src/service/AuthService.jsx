import http from "./axiosContext"

const signup=(data)=>{
    return http.post("/auth/signup",data)
}

const signin=(data)=>{
    return http.post("/auth/signin",data)
}

const logout = () => {
    return http.get("/auth/logout");
};

const update = (id, Data) => {
    return http.put(`/users/${id}`,Data);
};


export default{signup, signin, logout, update}