const COLOR = {
    fire: '#FD7D24',
    water: '#4592C4',
    grass: '#9BCC50',
    electric: '#EED535',
    dragon: '#4A446A',
    dark: '#707070',
    psychic: '#F366B9',
    ice: '#51C4E7',
    flying: '#649BD4',
    bug: '#729F3F',
    fairy: '#FDB9E9',
    ground: '#704326',
    normal: '#A4ACAF',
    rock: '#A38C21',
    fighting: '#D56723',
    poison: '#B97FC9',
    ghost: '#7B62A3',
    steel: '#84B7B8',
};

export const getColor = (type) => {
    return COLOR[type] || COLOR.normal;
};

export function handleResponse(response) {
    if (
      response.status === 200 ||
      response.status === 202 ||
      response.statusText === "OK" ||
      response.statusText === "Created"
    ) return response.data;
    if (response.status === 400) {
      const error = response.statusText();
      throw new Error(error);
    }
    throw new Error("error with network response.");
}

export function handleError(error) {
    console.error("api call failed. " + error);
    throw error;
}