import React,{useState} from 'react';
import { useDispatch } from 'react-redux';
import fetchPokemon from '../../redux/action/buscarPokemones';

const BuscadorPokemon =()=>{

    const dispatch = useDispatch();

    const [pokemon_name, set_pokemon_name] = useState('mewtwo');
    return(
        <>
            <div className="form-group mt-10 flex justify-center">
                <div className=" flex flex-col w-1/3">
                    <label htmlFor="buscar_polkemon" className="text-white">Buscar pokemon</label>
                    <input className="rounded-lg px-2" type="text" id="buscar_pokemon"  
                    onChange={(e)=>{set_pokemon_name(e.target.value)}}
                    value={pokemon_name}
                     />
                    <button className="mx-10 my-3 hover:bg-blue-600 text-white font-semibold bg-blue-500  rounded-lg px-1"
                        onClick={()=>dispatch(fetchPokemon(pokemon_name))}
                    >Enviar</button>
                </div>
            </div>
        </>
    )
}


export default BuscadorPokemon;