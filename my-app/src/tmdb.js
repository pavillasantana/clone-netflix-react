const API_KEy ='5b1f71c3334439d0b857a5f578b53887';
const API_BASE = "https://api.themoviedb.org/3";

/*
Todos LGBT++
Com maior pontuação (trending)
Com menor pontuação ()
Em alta (top rated)
comédia
romance 
documentários
terror
-séries = com suas sub categorias

*/
const basicFetch = async (endpoint) =>{
    const req = await fetch (`${API_BASE}${endpoint}`);
    const json = await req.json();
    return json;
}



export default {
getHomelist:async ()=> {
    return[
        {
            slug: 'originals',
            title: 'Originais da Netflix',
            items:await basicFetch(`/discover/tv?with_network=213&language=pt-BR&api_key=${API_KEy}`),
        },
        { 
            slug: 'trending',
            title: 'Recomendados Para Você',
            items: await basicFetch(`/trending/all/week?language=pt-BR&api_key${API_KEy}`),
        },
        {
            slug: 'comedy',
            title: 'Comédia',
            items: await basicFetch(`/discover/movie?with_genres=35&language=pt-BR&api_key${API_KEy}`),
        },
        { 
            slug: 'horror',
            title: 'Terror',
            items: await basicFetch(`/discover/movie?with_genres=27&language=pt-BR&api_key${API_KEy}`),
        },
        { 
            slug: 'romance',
            title: 'Romance',
            items: await basicFetch(`/discover/movie?with_genres=10749&language=pt-BR&api_key${API_KEy}`),
        },
        { 
            slug: 'action  ',
            title: 'Ação',
            items: await basicFetch(`/discover/movie?with_genres=28&language=pt-BR&api_key${API_KEy}`),
        },
        {
            slug: 'LGBT',
            title: 'LGBTQ+',
            items: await basicFetch(`/discover/movie?with_genres=158718&language=pt-BR&api_key${API_KEy}`),
            
        },
    ]
}

}