import React, { useEffect, useState, } from 'react'
import '../estilos/home.css';
import Header from './Header';
import axios from 'axios';
import {URL_POKEMON} from '../api/apiRest'
import Card from './Card';


export default function Home() {
  const [arrayPokemon, setArrayPokemon] = useState([]);
  const [globalpokemon, setGlobalPokemon] = useState([])
  const [xpage, setXpage] = useState(1);
  const [buscar, setBuscar] = useState('');

  useEffect (() => {
    const api  = async () => {
      const limit =151
      const xp = (xpage - 1) * limit
      const apiPoke = await axios.get(`${URL_POKEMON}/?offset=${xp}&limit=${limit}`);
      setArrayPokemon(apiPoke.data.results);
    };
    api ()
    getGlobalPokemons()
  }, [xpage]);   

  const getGlobalPokemons = async ()=>{
    const res = await axios.get(`${URL_POKEMON}?offset=0&limit=151`)

    const promises = res.data.results.map(pokemon => {
      return pokemon; 
    });
    const results = await Promise.all(promises)
    setGlobalPokemon(results)
  };

  const filterPokemons = buscar?.length > 0 
  ? globalpokemon ?.filter(pokemon => pokemon?.name?.includes(buscar))
  : arrayPokemon; 
  
  const obetenerBusqueda = (e) =>{
    const texto = e.toLowerCase()
    setBuscar(texto)
    setXpage(1)
  }
  


  return (
    <div>
      <Header obetenerBusqueda={obetenerBusqueda} />

    
      
  
      <div className='Tarjetero'>
        {filterPokemons.map((card, index) =>{
          return <Card  key={index} card={card} />
        })}
    </div>
  </div>
  )}

