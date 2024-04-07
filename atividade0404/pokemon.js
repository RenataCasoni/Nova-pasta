window.onload = function() {
    // Ler a querystring da URL
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const evolucao = urlParams.get('evolucao');

    // Atualizar o title da página
    document.title = `Página do ${evolucao}`;

    // Fazer uma requisição fetch para a PokeAPI
    fetch(`https://pokeapi.co/api/v2/pokemon/${evolucao}`)
        .then(response => response.json())
        .then(data => {
            // Criar um elemento img
            const img = document.createElement('img');
            img.setAttribute('src', data.sprites.front_default);
            img.setAttribute('alt', evolucao);

            // Adicionar o elemento img ao body da página
            document.body.appendChild(img);
        })
        .catch(error => console.error('Erro ao carregar Pokémon:', error));
};
