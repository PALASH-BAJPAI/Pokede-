import React,{useState} from 'react';
import useFetch from './useFetch';

const Pokemon = () => {
    const [num,setNum] = useState(Math.floor(Math.random() * 650));
    const {data:pokemon , loading,error} = useFetch('https://pokeapi.co/api/v2/pokemon/'+num);

    return (
        <div className="pokemon-div">
            {loading && <p className="pokemon-loading">Loading...</p>}
            {pokemon && <div className="pokemon-image"><img className="pokemon-img" src={pokemon.sprites.other.dream_world.front_default} alt={pokemon.forms[0].name} /></div>}
            {pokemon && <div className="pokemon-name">{pokemon.forms[0].name.toUpperCase()}</div>}
            {pokemon && <div className="pokemon-type">{pokemon.types[0].type.name}</div>}
        </div>
    );
}

export default Pokemon;