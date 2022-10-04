const url = "https://pokeapi.co/api/v2/pokemon?limit=151";
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
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
};

fetchPokemons();
