import React, {useEffect, useState} from 'react';
import axios from "axios";
import './PokemonChain.scss'
import {useParams} from "react-router-dom";
import PokemonChainItem from "../PokemonChainItem/PokemonChainItem";

function PokemonChain() {
    const params = useParams();
    const [pokemon, setPokemon] = useState<any>({});


    useEffect(() => {
        axios
            .get(`https://pokeapi.co/api/v2/evolution-chain/${params.id}`,)
            .then((res: any) => {
                setPokemon(res.data.chain);
            });
    }, [params.id]);

    return (
        <div className={'pokemon-chain'} >
            <PokemonChainItem pokemon={pokemon} depth={0}/>
        </div>
    );
}

export default PokemonChain;
