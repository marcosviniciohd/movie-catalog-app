const apiKey = '7dc17b29f90150fbad02b544f027a2b9&region';
const apiUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=pt-BR&page=1`;

async function buscarFilmesPopulares() {
    try {
        const resposta = await fetch(apiUrl);
        if (!resposta.ok) {
            throw new Error('Resposta de rede não foi ok');
        }
        const dados = await resposta.json();
        exibirFilmes(dados.results);
    } catch (erro) {
        console.error('Houve um problema com sua operação de busca:', erro);
    }
}

function exibirFilmes(filmes) {
    const containerFilmes = document.getElementById('movie-container');
    containerFilmes.innerHTML = ''; 
    filmes.forEach(filme => {
        const cartaoFilme = criarCardFilme(filme);
        containerFilmes.appendChild(cartaoFilme);
    });
}

function criarCardFilme(filme) {
    const cartao = document.createElement('div');
    cartao.classList.add('movie-card');

    const titulo = document.createElement('h3');
    titulo.textContent = filme.title;

    const poster = document.createElement('img');
    poster.src = `https://image.tmdb.org/t/p/w500${filme.poster_path}`;
    poster.alt = `Poster de ${filme.title}`;

    const generos = document.createElement('p');
    generos.textContent = obterGeneros(filme.genre_ids).join(', ');

    const dataLancamento = document.createElement('p');
    dataLancamento.textContent = `Lançamento: ${filme.release_date ? filme.release_date.split('-').reverse().join('/') : 'N/A'}`;

    const pontuacao = document.createElement('p');
    pontuacao.textContent = `Pontuação: ${filme.vote_average ? filme.vote_average.toFixed(1) : 'N/A'}`;

    cartao.appendChild(poster);
    cartao.appendChild(titulo);
    cartao.appendChild(generos);
    cartao.appendChild(dataLancamento);
    cartao.appendChild(pontuacao);

    cartao.style.cursor = 'pointer';
    cartao.addEventListener('click', () => {
        window.open(`https://www.themoviedb.org/movie/${filme.id}`, '_blank');
    });

    return cartao;
}

function obterGeneros(idsGeneros) {
    const mapaGeneros = {
        28: 'Ação',
        12: 'Aventura',
        16: 'Animação',
        35: 'Comédia',
        80: 'Crime',
        99: 'Documentário',
        18: 'Drama',
        10751: 'Família',
        14: 'Fantasia',
        36: 'História',
        27: 'Terror',
        10402: 'Música',
        9648: 'Mistério',
        10749: 'Romance',
        878: 'Ficção Científica',
        10770: 'Filme para TV',
        53: 'Suspense',
        10752: 'Guerra',
        37: 'Faroeste'
    };

    return idsGeneros.map(id => mapaGeneros[id] || 'Gênero Desconhecido');
}

document.addEventListener('DOMContentLoaded', buscarFilmesPopulares);