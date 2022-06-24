import React from 'react';

const Card=({num,title})=>{
    return(
        <div className="card-header">
            <div className="card-img">
            <img src={require(`../img/img${num}.png`)} height="300px" width="300px" alt="Pokedex"/>
            </div>
            <div className="card-title">
            {title}
            </div>
        </div>
    )
}

export default Card;