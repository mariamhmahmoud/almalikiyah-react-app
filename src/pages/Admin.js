import * as React from 'react';
import { useState, useEffect } from "react";
import jwt_decode from "jwt-decode";
import { useNavigate } from 'react-router-dom'
import { Button } from '@mui/material';
import axios from 'axios';


export default function Admin() {
    const [name, setName] = useState('');
    const [token, setToken] = useState('');
    const [expire, setExpire] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        refreshToken()
        getUsers()
    });


    const refreshToken = async () => {
        fetch('https://expressjs-server-production-754b.up.railway.app/token', { credentials: 'include' })
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error('Not logged in');
                }
            })
            .then(data => {
                console.log(data)
                const decoded = jwt_decode(data.accessToken);
                setExpire(decoded.exp);
            })
            .catch(error => {
                console.log(error);
                navigate("/login");
            });
    };

    // see https://mfikri.com/en/blog/react-express-mysql-authentication
    const axiosJWT = axios.create();

    axiosJWT.interceptors.request.use(async (config) => {
        const currentDate = new Date();
        if (expire * 1000 < currentDate.getTime()) {
            const response = await axios.get('https://expressjs-server-production-754b.up.railway.app/token', { credentials: 'include' });
            config.headers.Authorization = `Bearer ${response.data.accessToken}`;
            setToken(response.data.accessToken);
            const decoded = jwt_decode(response.data.accessToken);
            setName(decoded.name);
            setExpire(decoded.exp);
        }
        return config;
    }, (error) => {
        return Promise.reject(error);
    });

    const getUsers = async () => {
        const response = await axiosJWT.get('/testing', {
            headers: {
                Authorization: `Bearer ${token}`,
                credentials: 'include'
            },

        });
        console.log(response)
    }

    const logout = async () => {
        try {
            fetch("https://expressjs-server-production-754b.up.railway.app/logout", { credentials: 'include' })
                .then(() => navigate("/login"))


        } catch (error) {
            console.log(error);
        }
    }





    return (
        <>
            <p>Hello {name}</p>
            <Button onClick={logout}>Logout</Button>
        </>
    );
}