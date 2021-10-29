import React, { useEffect, useState} from 'react';
import tmdb from './tmdb';
import movierow from './componentes/movierow';


export default () => { 

const[movieList, setMovieList] = useState([]);


useEffect(()=>{ 
const loadAll = async () =>{

  let list = await tmdb.getHomelist();
  setMovieList(list);
}

loadAll();

}, []);

  return ( 
  <div className = 'page'>
    <section className = 'lists'>
      {movieList.map((item, key)=>(

        <movierow key={key} title={item.title}items={item.items} />

    
      ))}
    </section>
  </div>
  );
}