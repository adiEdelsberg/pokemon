import React, {useEffect, useState} from 'react';
import axios from "axios";
import './PokemonItem.scss'
import {useNavigate} from "react-router-dom";

function PokemonItem({pokemon}: any) {
    const navigate = useNavigate();
    const [pokemonItem, setPokemonItem] = useState<any>({});

    function previewPokemon() {
        navigate(`/main/pokemon/${pokemonItem.id}`);
    }

    useEffect(() => {
        axios
            .get(`https://pokeapi.co/api/v2/pokemon-species/${pokemon.name}`,)
            .then((res: any) => {
                setPokemonItem(res.data);
            });
    }, [pokemon]);

    return (
        <div className={'pokemon-item'} onClick={() => {
            previewPokemon()
        }}>
            {pokemonItem.name &&
                <>
                    <span className={'pokemon-name'}>{pokemonItem.name}</span>
                    <span className={'pokemon-id'} style={{color: pokemonItem.color.name}}>{pokemonItem.id}</span>
                </>}
        </div>
    );
}

export default PokemonItem;
