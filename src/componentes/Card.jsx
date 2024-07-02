import React, { useEffect, useState } from 'react'
import '../estilos/card.css';
import axios from 'axios';
import { URL_POKEMON } from '../api/apiRest';


export default function Card({card}) {

    const [itemPokemon, setitemPokemon] = useState({})

    console.log (itemPokemon);

    useEffect(() => {
        const dataPokemon = async () =>{
            const api = await axios.get(`${URL_POKEMON}/${card.name}`)

            setitemPokemon(api.data)

        }
        
        dataPokemon()

    }, [])

  return (
    <div className='card'>
        <img className='card-img-top' src={itemPokemon ?.sprites ?.other["official-artwork"].front_default} alt="pokemon"/>
        <div className='card-body'>
            <h5 className='card-text'>001</h5>
            <h5 className='card-title'>Name</h5>
            <div className='list-group list-group-flush'>
                <h6 className='list-group-item'>altura</h6>
                <h6 className='list-group-item'>peso</h6>
                <h6 className='list-group-item'>habitad</h6>
            </div>
        </div>
    </div>
  )
}
