import axios from "axios";
export const API_URL='http://192.168.1.76:4000/API/';

export const register= async ( nombre, apellido, empresa, email, password)=>{
    return axios.post(`${API_URL}auth/new-user`, 
    { name: nombre, last_name: apellido, company:empresa, email:email, password:password })
    .then(res => {
      console.log(res);
      console.log(res.data);
    })
};

export const logIn= async (email, password) =>{
    return axios.post(`${API_URL}auth/login`,{email:email ,passwordreq: password})
    .then(response=>{
        if (response.data.token){
            localStorage.setItem("user", JSON.stringify(response.data));
        }
        return response.data;
    })
};

export const logOut = () => {
    localStorage.removeItem("user");
};

export const getCurrentUser = () => {
    return JSON.parse(localStorage.getItem("user"))
};
