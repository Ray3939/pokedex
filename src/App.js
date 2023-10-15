import React, { useEffect, useState } from 'react';
import './App.css';
import Card from './Card';
import Pokeinfo from './Pokeinfo';
import axios from 'axios';

const App = () => {
  const [pokedata, setPokedata] = useState([]);
  const [loading, setLoading] = useState(true);
  const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon/");
  const [nextUrl, setNextUrl] = useState();
  const [prevUrl, setPrevUrl] = useState();
  const [pokeDex, setPokeDex] = useState();

  const PokeFun=async() => {
    setLoading(true)
    const res=await axios.get(url);
    // console.log(res.data);
    setNextUrl(res.data.next);
    setPrevUrl(res.data.previous);
    getPokemon(res.data.results);
    setLoading(false)
  }

  const getPokemon=async(res) => {
    res.map(async(item) => {
      const result=await axios.get(item.url)
      setPokedata(state=> {
        state=[...state,result.data]
        state.sort((a,b) => a.id>b.id?1:-1)
        return state;
      })

    })
  }

  useEffect(() => {
    PokeFun();
  },[url])

  return (
    <div className='container'>
      <div className='left-content'>
        <Card pokemon={pokedata} loading={loading} pokemonInfo={poke=>setPokeDex(poke)}/>
      </div>
      <div className='right-content'>
        <Pokeinfo data={pokeDex}/>
      </div>
    </div>
  )
}

export default App;
