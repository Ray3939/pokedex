import React from "react";

const Card = ({pokemon, loading, pokemonInfo}) => {
    return(
        <>
            {
                loading ? <h1>Loading...</h1>: 
                pokemon.map((item) => {
                    return (
                        <div className="card" key={item.id} onClick={() => pokemonInfo(item)}>
                            <h2>{item.id}</h2>
                            <img src={item.sprites.other["official-artwork"].front_default} alt=""/>
                            <h3>{item.name}</h3>
                    </div>
                    )
                })
                
            }
            </>
    ) 

}

export default Card;