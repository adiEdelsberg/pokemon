import React from 'react';
import './PokemonChainItem.scss'

function PokemonChainItem({pokemon, depth}: any) {
    return (
        <div className="pokemon-chain-item" style={{marginLeft: `${depth * 10}px`}}>
            {pokemon.species && <>
                <div>{pokemon.species.name}</div>
                {pokemon.evolves_to.length ?
                    pokemon.evolves_to.map((pokemon:any, index:number) => (
                        <PokemonChainItem key={index} pokemon={pokemon} depth={depth + 1}/>
                    )) : ''
                }
            </>}
        </div>
    );
}

export default PokemonChainItem;
