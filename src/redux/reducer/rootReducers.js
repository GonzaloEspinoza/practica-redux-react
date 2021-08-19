import { combineReducers } from 'redux';
import buscador from './buscadorReducer';
import game_shop from './gameShopeReducer';

const rooReducers = combineReducers({
    game_shop,
    buscador
})

export default rooReducers;
