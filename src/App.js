
import {Provider} from 'react-redux'
import './App.css';
import BuscadorPokemon from './component/buscador/buscadorPokemon';
import ResultadoPokemon from './component/buscador/resultadoPokemon';
import CantidadPokemon from './component/cantidadPokemon';
import ComprarPokemon from './component/compraPokemon';

import store from './redux/store';


function App() {

  console.log(store.getState())


  return (
    <Provider store={store}>
      <div className="App">
      <div>
     
            <div>
              <div className="w-full h-min-60 bg-green-500 flex justify-center">
                <div className="bg-indigo-500 w-4/5 sm:w-2/4  my-auto rounded-lg flex flex-rows">
                  <div className="rounded-lg w-2/4 sm:w-1/2 md:w-2/3 h-full ">
                    <img className="rounded-lg" src='https://i1.wp.com/blog.enriqueoriol.com/wp-content/uploads/2018/08/reduxLogo.png?fit=1024%2C684' alt="" />
                  </div>
                  <div className="text-white y-auto  mx-2 flex flex-col justify-center mx-auto">
                    <h2 className="text-white  text-xl">
                     <CantidadPokemon />
                    </h2>
                    <ComprarPokemon />
                  </div>
                </div>
              </div>
            </div>

            <BuscadorPokemon></BuscadorPokemon>
            <div>
              <ResultadoPokemon></ResultadoPokemon>
            </div>
          </div>
      
    </div>
    </Provider>
  );
}

export default App;
