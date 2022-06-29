import React,{useState} from 'react';
import useFetch from './useFetch';

const Pokemon = () => {
    const [num,setNum] = useState(Math.floor(Math.random() * 650));
    const {data:pokemon , loading,error} = useFetch('https://pokeapi.co/api/v2/pokemon/'+num);

    return (
        <>
        <div className="round-container">
        <div className="pokemon-round">⚪</div>
        </div>
        <div className="pokemon-div">
            {loading && <p className="pokemon-loading">Loading...</p>}
            {pokemon && <div className="pokemon-image"><img className="pokemon-img" src={pokemon.sprites.other.dream_world.front_default} alt={pokemon.forms[0].name} /></div>}
            {pokemon && <div className="pokemon-name">{pokemon.forms[0].name.toUpperCase()}</div>}
            {pokemon && <div className="pokemon-type">Type : {pokemon.types[0].type.name}</div>}
        </div>
        <div className="pokemon-arrows">
            <img onClick={()=>setNum(Math.max(0,num-1))}  className="arrow-left" src={require('../img/left.png')} alt="Click left"/>
            <img onClick={()=>setNum(Math.min(649,num+1))} className="arrow-right" src={require('../img/right.png')} alt="Click right"/>
        </div>
        <button className="random-button" onClick={()=>setNum(Math.floor(Math.random() * 650))}>Random</button>
        </>
    );
}

export default Pokemon;