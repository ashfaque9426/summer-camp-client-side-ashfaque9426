import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth";


const axiosSecure = axios.create({
    baseURL: 'https://b7a12-summer-camp-server-side-ashfaque9426.vercel.app',
});

const useAxiosSecure = () => {
    const navigate = useNavigate();
    const { logOut } = useAuth();

    useEffect(()=> {
        axiosSecure.interceptors.request.use(config => {
            const token = localStorage.getItem('summer-token');
            if (token) {
                config.headers.Authorization = `Bearer ${token}`
            }
            return config;
        });

        axiosSecure.interceptors.response.use(response => response, async error => {
            if (error.response && error.response.status === 401 || error.response.status === 403) {
                await logOut();
                navigate('/login');
            }
            return Promise.reject(error);
        })
    }, [logOut, navigate]);

    return [axiosSecure];
}

export default useAxiosSecure;