import axios from "axios";

export const FETCH_POKEMON_REQUEST = "FETCH_POKEMON_REQUEST";
export const FETCH_POKEMON_SUCCES  = "FETCH_POKEMON_SUCCES"
export const FETCH_POKEMON_FAILURE = "FETCH_POKEMON_FAILURE"


// Actions 
export const fetchPokemonRequest =()=>{
    return{
        type:FETCH_POKEMON_REQUEST
    }
}

export const fetchPokemonsucces = (pokemon)=>{
    return{
        type:FETCH_POKEMON_SUCCES,
        payload: pokemon
    }
}



export const fetchPokemonFailure =(error)=>{
    return{
        type:FETCH_POKEMON_FAILURE,
        payload:error
    }
}

const fetchPokemon =(valor)=>{
  return (dispatch)=>{
    dispatch(fetchPokemonRequest())
    axios.get(`https://pokeapi.co/api/v2/pokemon/${valor}`)
    .then(response=>{
        dispatch(fetchPokemonsucces([response.data]))
    })
    .catch(error=>{
        console.log(error)
        dispatch(fetchPokemonFailure('fallo la peticion'))
    })
  }
}

export default fetchPokemon;