## Pokédex

Criação de uma pokédex em HTML, CSS e JavaScript com base no projeto do *'Manual do Dev'* e utilização da API *PokéAPI*.

- [Projeto original](https://youtu.be/SjtdH3dWLa8?si=RHGsV_7ANYv316j5)
- [Documentação da API](https://pokeapi.co/)

### Resumo do código:

+ O primeiro Pokémon é exibido assim que a página é carregada.
+ O formulário de busca permite que o usuário pesquise um Pokémon pelo nome ou número e chamando renderPokemon.+
+ Os botões "Anterior" e "Próximo" permitem navegar pelos Pokémons, alterando o valor do ID ambos chamam o renderPokemon.
+ A função fetchPokemon busca dados de um Pokémon específico na API.
+ A função renderPokemon chama a função fetchPokemon que busca dados de um Pokémon específico na API, exibe essas informações na página e lida com casos de erro, exibindo uma mensagem de "não encontrado".

> Tudo isso é feito de forma assíncrona para garantir que a interface do usuário não congele enquanto o código aguarda as respostas da API.
