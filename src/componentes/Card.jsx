import React, { useEffect, useState } from 'react'
import '../estilos/card.css';
import axios from 'axios';
import { URL_ESPECIES, URL_POKEMON } from '../api/apiRest';


export default function Card({card}) {

    const [itemPokemon, setitemPokemon] = useState({})
    const [especiePokemon, setEspeciePokemon] = useState({})


    useEffect(() => {
        const dataPokemon = async () =>{
            const api = await axios.get(`${URL_POKEMON}/${card.name}`)
            setitemPokemon(api.data)
        }
        dataPokemon()
    }, [])
    
    
    useEffect(() => {
        const dataEspecie = async () => {
            const URL = card.url.split("/");           

            const api = await axios.get(`${URL_ESPECIES}/${URL[6]}`);
            setEspeciePokemon (api.data);
        }
        dataEspecie()
    }, []);

    console.log(especiePokemon ?.color ?.name);


  return (
    <div className='card'>
    <div className='fondoCard'>
        <img className='card-img-top' src={itemPokemon ?.sprites ?.other["official-artwork"].front_default} alt="pokemon"/>
    </div>
        <div className='card-body'>
            <div className='pokeInfo'>
                <button className={`bg-${especiePokemon ?.color ?.name} botonTipo `} ></button>
                <h3 className='card-text'>001</h3>
            </div>
            <h5 className='card-title'>Name</h5>
            <div className='list-group list-group-flush'>
                <h6 className='list-group-item'>altura</h6>
                <h6 className='list-group-item'>peso</h6>
                <h6 className='list-group-item'>habitad</h6>
            </div>
            <div >
                {itemPokemon ?.stats?.map((sta, index) =>{
                return (
                    <div className='stats' key={index}>
                        <span>{sta.stat.name}</span>
                        <span>{sta.base_stat}</span>
                    </div>
                );
                })}
            </div>
        </div>
    </div>
    )
}
