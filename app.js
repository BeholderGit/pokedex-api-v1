const limit = 151;
const url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}`;
const pokemon_container = document.getElementsByClassName("pokemon-container");
const colors = {
    fire: "#FDDFDF",
    grass: "#DEFDE0",
    electric: "#fCF7DE",
    water: "#DeF3FD",
    ground: "#F4E7DA",
    rock: "#D5D5D4",
    fairy: "#FCEAFF",
    posion: "#98D7A5",
    bug: "#F8D5A3",
    dragon: "#97B3E6",
    psychic: "#EAEDA1",
    flying: "#F5F5F5",
    fighting: "#E6E0D4",
    normal: "#F5F5F5",
};

const fetchPokemons = async () => {
    try {
        const res = await fetch(url);
        const data = await res.json();
        const pokemons = data.results;
        pokemons.forEach(getPokemon);
    } catch (err) {
        console.error(err);
    }
};

const getPokemon = async (pokemon) => {
    try {
        const pokemon_data = await (await fetch(pokemon.url)).json();
        createPokemonCard(pokemon_data);
    } catch (err) {
        console.error(err);
    }
};

const createPokemonCard = (pokemon) => {
    let number = pokemon.id;
    if (number < 10) {
        number = "00" + number;
    } else if (number < 100) {
        number = "0" + number;
    }
    const pokemon_div = document.createElement("div");
    pokemon_div.classList.add("pokemon-cards");
    pokemon_container[0].appendChild(pokemon_div);
    const pokemon_img = document.createElement("img");
    pokemon_img.classList.add("img-container");
    pokemon_img.setAttribute(
        "src",
        `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${number}.png`
        /* `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`*/
    );
    pokemon_div.appendChild(pokemon_img);
    const pokemon_div_info = document.createElement("div");
    pokemon_div_info.classList.add("info");
    pokemon_div.appendChild(pokemon_div_info);
    const span = document.createElement("span");
    span.classList.add("number");
    span.insertAdjacentText("beforeend", `#${number}`);
    pokemon_div_info.appendChild(span);
    const name = document.createElement("h3");
    name.classList.add("name");
    name.insertAdjacentText("beforeend", pokemon.name);
    pokemon_div_info.appendChild(name);
    const small = document.createElement("small");
    small.classList.add("type");
    const type = pokemon.types[0].type.name;
    small.insertAdjacentText("beforeend", `type: ${type}`);
    pokemon_div_info.appendChild(small);
};

fetchPokemons();
