//const saludar = (nombre) => 
// alert('hola'+ nombre);
//}
//const procesarEntradaUsuario = (callback => {
//
//   var nombre =
//})

const cuandoLleguElpokemon = (pokemon) => {
    console.log(pokemon.sprites.front_default)
    const image = document.getElementById("pokemon-image")
    image.src = pokemon.sprites.front_default
}
const pokemonName = prompt('Elije tu pokemon :')

fetch('https://pokeapi.co/api/v2/pokemon/' + pokemonName)
    .then(response => response.json())
    .then(cuandoLleguElpokemon);