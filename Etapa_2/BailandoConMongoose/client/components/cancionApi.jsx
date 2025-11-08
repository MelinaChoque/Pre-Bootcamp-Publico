import axios from 'axios'
import { useEffect } from 'react'
import { useParams } from "react-router-dom";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import AppContext from "../contexto/AppContexto";

const CancionApi = ({setLogin, login}) =>{
    const navigate = useNavigate()
    const { estado, dispatch } = useContext(AppContext);

    const getDataCanciones =  () => {
        
        const URL ="http://localhost:8000/api/canciones"

        axios(URL, {headers : {token_user : localStorage.getItem("token")}}).then(response =>{
            dispatch({ type: "LISTA_CANCIONES", payload: response.data });
            setLogin(true)
        }).catch ((e => 
        {
            navigate('/login')
            setLogin(false)
            dispatch({ type: "ERRORES", payload: e.response ? e.response.data : e.message });
        }
        ))
    }
        useEffect (()=>{
        getDataCanciones()
    },[login])
    return (
        <></>
    )
}

export default CancionApi