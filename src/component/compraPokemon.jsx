import React from 'react';
import {useDispatch} from 'react-redux';

import { buy_pokemon_action, reeturn_pokemon } from '../redux/action/GameShopeAction';

const ComprarPokemon =()=>{

    const dispatch = useDispatch();
    return(
        <>
            <div>
                <div onClick={()=>dispatch(buy_pokemon_action(12))} className="border-xl bg-blue-800 hover:bg-blue-900 cursor-pointer text-white text-xs sm:text-sm my-2 p-1 rounded-xl  font-semibold">Comprar pokemon</div>
                <div onClick={()=>dispatch(reeturn_pokemon(12))} className="border-xl bg-blue-800 hover:bg-blue-900 cursor-pointer text-white text-xs sm:text-sm my-2 p-1 rounded-xl  font-semibold">Devolver</div>
            </div>
        </>
    )   
}


export default ComprarPokemon;