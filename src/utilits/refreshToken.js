import { http } from "./http";


export const refreshToken = () => {
    http.interceptors.request.use((config)=>{
        const token = localStorage.getItem('Token');
        if(token){
            config.headers['Authorization'] = `Token ${token}`;
        }else{
            config.headers= {}
        }
        return config
    })
};

