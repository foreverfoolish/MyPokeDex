import api from './service.js';

export const getPokemons = async () => {
    try {
        let response = await api.get(`https://pokeapi.co/api/v2/pokemon`, {
            limit: 151,
        });
        return response.results;
    } catch (err) {
        throw err;
    }
};

export const getPokemonData = async (url) => {
    try {
        let response = await api.get(url);
        return response;
    } catch (err) {
        throw err;
    }
};

export const getPokemonDetails = async () => {
    try {
        let pokemons = await getPokemons();
        let pokemonPromises = pokemons.map((p) => getPokemonData(p.url));
        return await Promise.all(pokemonPromises);
    } catch (err) {
        throw err;
    }
};