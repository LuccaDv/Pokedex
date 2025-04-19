// DEfinição de variáveis e armazenamentos dos elementos HTML

const pokemonName = document.querySelector(".pokemon_name");
const pokemonNumber = document.querySelector(".pokemon_number");
const pokemonImg = document.querySelector(".pokemon_img");

const form = document.querySelector(".form");
const input = document.querySelector(".input_search");
const buttonPrev = document.querySelector(".btn-prev");
const buttonNext = document.querySelector(".btn-next");

// Definição da variável global (Pokemon inicial)
let searchPokemon = 1;

// Define a função de buscar o pokemon na API
const fetchPokemon = async (pokemon) => {
  const APIResponse = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${pokemon}`
  );

// Condição para retorno dos dados. Caso a requisição seja bem sucedida, retorna os dados, senão, não retorna nada
  if (APIResponse.status === 200) {
    const data = await APIResponse.json();
    return data;
  }
};

// Exibe as informações do pokemon
const renderPokemon = async (pokemon) => {
  pokemonName.innerHTML = "Loading..."; // Mensagem de carregamento
  pokemonNumber.innerHTML = ""; // Limpa o número

  const data = await fetchPokemon(pokemon); // Chama a função fetch anteriormente definida

  if (data) { // Bloco de condição apra caso os dados do pokemon sejam encontrados
    pokemonImg.style.display = "block";
    pokemonName.innerHTML = data.name;
    pokemonNumber.innerHTML = data.id;
    pokemonImg.src =
      data["sprites"]["other"]["official-artwork"]["front_default"];
    searchPokemon = data.id;

    input.value = "";
  } else { // Caso não seja encontrado
    pokemonName.innerHTML = "Not found :c";
    pokemonNumber.innerHTML = "";
    pokemonImg.style.display = "none";
  }
};
 
// Utiliza a informação digitada no formulário como parâmetro da função de exibição do pokémon
form.addEventListener("submit", (event) => {
  event.preventDefault();
  renderPokemon(input.value.toLowerCase());
});

// Ação para clique no butão de 'previous'
buttonPrev.addEventListener("click", () => {
  if (searchPokemon > 1) {
    searchPokemon -= 1;
    renderPokemon(searchPokemon);
  }
});

// Ação para clique no butão de 'previous'
buttonNext.addEventListener("click", () => {
  searchPokemon += 1;
  renderPokemon(searchPokemon);
});

// Exibição padrão do pokémon
renderPokemon(searchPokemon);
