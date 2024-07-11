import React, { useEffect, useState, } from 'react'
import '../estilos/home.css';
import Header from './Header';
import axios from 'axios';
import {URL_POKEMON} from '../api/apiRest'
import Card from './Card';


export default function Home() {
  const [arrayPokemon, setArrayPokemon] = useState([]);

  useEffect (() => {
    const api  = async () => {
      const limit =15
      const apiPoke = await axios.get(`${URL_POKEMON}/?offset=0&limit=${limit}`);
      setArrayPokemon(apiPoke.data.results);
    };
    api ()
  }, []);   
  
  
  


  return (
    <div>
      <Header/>

      <section>
          <ul className="pagination">
              <li className="page-item disabled">
                <a className="page-link">Previous</a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">1</a>
              </li>
              <li className="page-item active" aria-current="page">
                <a className="page-link" href="#">2</a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">3</a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">Next</a>
                </li>
          </ul>
      </section>
      
  
      <div className='Tarjetero'>
        {arrayPokemon.map((card, index) =>{
          return <Card  key={index} card={card} />
        })}
    </div>
  </div>
  )}

