import {BUY_POKEMON, RETURN_POKEMON}  from '../action/GameShopeAction'


const default_game_shope ={
    pokemon:30
}

const game_shop = (state = default_game_shope, action)=>{
    switch(action.type){
        case BUY_POKEMON:
            return{
                ...state,
                pokemon:state.pokemon  - action.payload
            }

        case RETURN_POKEMON:
            return {
                ...state,
                pokemon:state.pokemon + action.payload
            }
        default: return state
    }
}

export default game_shop