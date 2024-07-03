import React, { useEffect, useState } from 'react'
import '../estilos/home.css';
import Header from './Header';
import axios from 'axios';
import {URL_POKEMON} from '../api/apiRest'
import Card from './Card';


export default function Home() {
  const [arrayPokemon, setArrayPokemon] = useState([]);
  
  useEffect(()=> {
    const api = async () =>{
      const apiPoke = await axios.get(`${URL_POKEMON}`)

      setArrayPokemon(apiPoke.data.results);
    }; 

      api()
  }, []);


  return (
    <div>
      <Header/>
      <div className='decoracion'>
        <button></button>
        
      </div>
      <div className='Tarjetero'>
        {arrayPokemon.map((card, index) =>{
          return <Card  key={index} card={card} />
        })}
    </div>
  </div>
  )
}
