import React from 'react';
import {useSelector} from 'react-redux';
// import game_shop from '../redux/reducer/gameShopeReducer';


const CantidadPokemon =()=>{

    const pokemons = useSelector(state=>state.game_shop.pokemon);

    return(
        <>
            Unidades : {pokemons}
        </>
    )
}


export default CantidadPokemon;