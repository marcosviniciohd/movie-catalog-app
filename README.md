# Aplicativo de Catálogo de Filmes

## Visão Geral
O Aplicativo de Catálogo de Filmes é uma aplicação web que exibe informações sobre os 10 filmes mais populares do The Movie Database (TMDB). A aplicação obtém dados dos filmes usando a API do TMDB e os apresenta em um layout visualmente atraente e responsivo.

## Funcionalidades
- Exibe o título, pôster e gêneros dos 10 filmes mais populares.
- Design responsivo que se adapta a diferentes tamanhos de tela.
- Tema escuro para um visual moderno e agradável.

## Tecnologias Utilizadas
- HTML
- CSS
- JavaScript (ES6)
- API do TMDB

## Instruções de Configuração
1. **Clone o repositório:**
   ```bash
   git clone <repository-url>
   cd movie-catalog-app
   ```

2. **Obtenha a Chave da API do TMDB:**
   - Cadastre-se em [The Movie Database](https://www.themoviedb.org/).
   - Gere sua chave de API nas [configurações da API](https://www.themoviedb.org/settings/api).

3. **Atualize a Chave da API:**
   - Abra `src/js/main.js` e substitua o espaço reservado pela sua chave de API real.

4. **Abra a aplicação:**
   - Abra `src/index.html` no seu navegador para visualizar a aplicação.

## Estrutura de Arquivos
```
movie-catalog-app
├── src
│   ├── index.html         # Documento HTML principal
│   ├── css
│   │   └── styles.css     # Estilos para a aplicação
│   ├── js
│   │   └── main.js        # JavaScript para buscar e exibir dados dos filmes
├── README.md              # Documentação do projeto
```

## Uso da API
A aplicação faz requisições assíncronas à API do TMDB para buscar os filmes populares. O endpoint utilizado é:
```
https://api.themoviedb.org/3/movie/popular?api_key=YOUR_API_KEY
```
Substitua `YOUR_API_KEY` pela sua chave de API real.

## Contribuição
Sinta-se à vontade para fazer um fork do repositório e enviar pull requests para quaisquer melhorias ou funcionalidades que você gostaria de adicionar.

## Licença
Este projeto é de código aberto e está disponível sob a Licença MIT.