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



    let pokeId = itemPokemon?.id?.toString();
    if (pokeId?.length == 1){
        pokeId = "00" + pokeId;
    } else if (pokeId?.length == 2){
        pokeId == "0" + pokeId;
    }


  return (
    <div className='card'>
    <div className='fondoCard'>
        <img className='card-img-top' src={itemPokemon ?.sprites ?.other["official-artwork"].front_default} alt="pokemon"/>
    </div>
        <div className='card-body'>
            <div className='pokeInfo'>
                <div className='tipo'>
                    {itemPokemon?.types?.map((ti, index) => {
                        return( 
                        <p key={index} className={`color-${ti.type.name} botonTipo`}> 
                            {ti.type.name}
                        </p>
                        );
                    })}    
                </div>
                <h3 className='card-text'>#{pokeId}</h3>
            </div>
            <h5 className='card-title'> {itemPokemon.name} </h5>
            <div className='list-group list-group-flush'>
                <h6 className='list-group-item'>Altura: {itemPokemon.height}0 Cm</h6>
                <h6 className='list-group-item'>Peso: {itemPokemon.weight} kg</h6>
                <h6 className='list-group-item'>Habitat: {especiePokemon?.habitat?.name}</h6>
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
