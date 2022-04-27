import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import LetteredAvatar from 'react-lettered-avatar';
import { getFunctionName } from '@mui/utils/getDisplayName';
import { CircularProgress } from '@mui/material';

function Todo(){

    const navigate = useNavigate();
    const [userDetails,setUserDetails] = useState();

    let { id } = useParams();

    function returnPage(event){
        navigate(`/`);
      }

      useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/todos/${id}`).then((res) => {
            const userId = res.data.userId || {};
            return axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`);
        }).then((res) => {
            const response = res.data;
            setUserDetails(response);
        });
    }, []);

    const {name , username, email,address} = userDetails || [];

    return(
        <>
        <div style={{ display: "inline-grid"}}>
        <LetteredAvatar
            name= {name}
        />
        <p>username: {username}</p>
        {address ? <p> address: {address.street}{address.city}</p> : <CircularProgress />}
        <a href="#">{email}</a>
        <button type="button" onClick={returnPage}>Return</button>
        </div>
        </>
    )
}

export default Todo;