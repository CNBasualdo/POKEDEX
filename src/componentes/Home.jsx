import React, { useEffect } from 'react'
import '../estilos/home.css';
import Header from './Header';
import axios from 'axios';
import {URL_POKEMON} from '../api/apiRest'





export default function Home() {

  useEffect(() =>{

    const api = async () =>{
      const apiPoke = await axios.get(`${URL_POKEMON}`)
      console.log(apiPoke.data);
    } 

      api()



  }, [])






  return (
    <Header/>
  )
}
