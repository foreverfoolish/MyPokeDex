import React from "react";
import {getColor} from "../../../../utils";
import "../pokemon.css";

function PokemonDetail({ pokemon }) {
  const getTypeStyle = (type) => {
    let backgroundColor = getColor(type);
    return { backgroundColor, color: "#FFF", margin: "5px" };
  };

  return (
    <div className="pokemon-image-container">
      <h1 className="text-center">
        N.º {pokemon.id} {pokemon.name}
      </h1>
      <img
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`}
        className="img-fluid pokemon-image-detail d-block mx-auto"
      />
      <div className="pokemon-box-details">
        <ul className="list-group list-group-horizontal justify-content-center">
          {pokemon.types.length > 0 &&
            pokemon.types.map((t, idx) => (
              <li
                key={idx}
                className="list-group-item d-flex pokemon-list-details"
                style={getTypeStyle(t.type.name)}
              >
                {t.type.name}
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}

export default PokemonDetail;