import * as React from 'react';
import { useEffect } from "react";
import jwt_decode from "jwt-decode";
import { useNavigate } from 'react-router-dom'
import { Button } from '@mui/material';


export default function Admin() {
    // const [, setToken] = useState('');
    const [, setExpire] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        refreshToken()
    }, []);


    const refreshToken = async () => {
        fetch('/token')
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error('Not logged in');
                }
            })
            .then(data => {
                const decoded = jwt_decode(data.accessToken);
                setExpire(decoded.exp);
            })
            .catch(error => {
                console.log(error);
                navigate("/login");
            });
    };

    // see https://mfikri.com/en/blog/react-express-mysql-authentication
    // const fetchJWT = {
    //     interceptors: {
    //         request: {
    //             use: async (configFn) => {
    //                 const currentDate = new Date();
    //                 if (expire * 1000 < currentDate.getTime()) {
    //                     const response = await fetch('/token');
    //                     const data = await response.json();
    //                     configFn.headers.Authorization = `Bearer ${data.accessToken}`;
    //                     setToken(data.accessToken);
    //                     const decoded = jwt_decode(data.accessToken);
    //                     setExpire(decoded.exp);
    //                 }
    //                 return configFn;
    //             },
    //         },
    //     },
    // };

    const logout = async () => {
        try {
            fetch("/logout")
                .then(() => navigate("/login"))


        } catch (error) {
            console.log(error);
        }
    }





    return (
        <>
            <p>Hello</p>
            <Button onClick={logout}>Logout</Button>
        </>
    );
}