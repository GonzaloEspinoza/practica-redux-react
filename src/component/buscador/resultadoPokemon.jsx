import React from 'react';
import { useSelector } from 'react-redux';

const ResultadoPokemon = () => {

    const buscador = useSelector(state=>state.buscador)
    return (
        <>
            <div>
                <h3 className="text-white">Resultado</h3>
                { buscador.loading && <div className="text-white">Buscando...</div>}
                {
                    buscador.pokemon.length>=1 &&
                    <div className="text-green-400">
                    <img src={buscador.pokemon[0].sprites.front_default} alt="">
                    </img>
                        <span>{buscador.pokemon[0].name}</span>
                    </div>
                }
                {
                    buscador.error !=='' && <span className="text-red-500">{buscador.error}</span>
                }
            </div>
        </>
    )
}

export default ResultadoPokemon;