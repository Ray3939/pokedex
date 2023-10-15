import React from "react";

const Pokeinfo = ({data}) => {
    console.log(data)
    return(
            <div>

                {(!data)? <div>
                    <h1>POKEDEX</h1>
                    <img style={{height:"400px", width:"500px"}} src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Pok%C3%A9_Ball_icon.svg/768px-Pok%C3%A9_Ball_icon.svg.png" alt=""/>
                </div> :(
                    <>
                    <h1>{ data.name }</h1>
                <img src={data.sprites.other["official-artwork"].front_default} alt=""/>
                    <div className="abilities" key={data.id}>
                        {
                            data.abilities.map(poke => {
                                return (
                                    <>
                                    <div className="group" key={data.id}>
                                        <h2>{poke.ability.name}</h2>
                                    </div>
                                    </>
                                )
                            })
                        }
                    </div>
                <div className="base-stat">
                    {
                        data.stats.map(poke => {
                            return (
                                <>
                                <h3>{poke.stat.name}:{poke.base_stat}</h3>
                                </>
                            )
                        })
                    }
                </div>
                    </>
                )}
                
        </div>
    )
}

export default Pokeinfo;