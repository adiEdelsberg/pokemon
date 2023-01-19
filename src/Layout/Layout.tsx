import React from 'react';
import {Link, Route, Routes} from "react-router-dom";
import PokemonList from "../PokemonList/PokemonList";
import PokemonChain from "../PokemonChain/PokemonChain";
import PokemonDetails from "../PokemonDetails/PokemonDetails";

function Layout() {
  return (
      <div className="layout">
          <nav>
              <ul>
                  <li className='title'>
                      <Link to={`/login`}>login</Link>
                  </li>
                  <li>
                      <Link to={`/main/pokemon/1`}>Your Name</Link>
                  </li>
                  <li>
                      <Link to={`/main/pokemon/2`}>Your Friend</Link>
                  </li>
              </ul>
          </nav>
          <PokemonList/>
          <Routes>
              <Route path="pokemon/:id" element={<PokemonDetails />} />
          </Routes>
      </div>
  );
}

export default Layout;
