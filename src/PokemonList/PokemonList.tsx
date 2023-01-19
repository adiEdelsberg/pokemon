import React, {useEffect, useState} from 'react';
import axios from "axios";
import './PokemonList.scss'
import PokemonItem from "../PokemonItem/PokemonItem";

function PokemonList() {

    const [pokemonList, setPokemonList] = useState<any>([]);

    useEffect(() => {
        let cancel: any;
        axios
            .get('https://pokeapi.co/api/v2/pokemon', {
                cancelToken: new axios.CancelToken((c: any) => (cancel = c)),
            })
            .then((res: any) => {
                setPokemonList(res.data.results);
            });
        return () => {
            cancel();
        };
    }, []);

    return (
        <div className="pokemon-list">
            {pokemonList.map((pokemon: any, index: number) => (
                <PokemonItem key={index} pokemon={pokemon}/>
            ))}
        </div>
    );
}

export default PokemonList;
