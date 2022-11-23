import axios from "axios";
export default class FilmeApi {
  async BuscarTodosOs6Filmes() {
    const response = await axios.get(
      "https://api.themoviedb.org/3/movie/popular?api_key=c4aecfa4b10ef5cc747dcad83dcdc9b2&language=pt-BR&page=1"
    );
    return response.data.results.slice(0, 6);
  }
  async pesquisarFilmes() {
    const response = await axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=c4aecfa4b10ef5cc747dcad83dcdc9b2&language=pt-BR&page=1&include_adult=false`,
    );
    return response.data.results;
  }
  async BuscarTodosOsFilmes() {
    const response = await axios.get(
      "https://api.themoviedb.org/3/movie/popular?api_key=c4aecfa4b10ef5cc747dcad83dcdc9b2&language=pt-BR&page=1"
    );
    return response.data.results;
  }
  async BuscarTodosEmCartaz() {
    const response = await axios.get(
      "https://api.themoviedb.org/3/movie/now_playing?api_key=c4aecfa4b10ef5cc747dcad83dcdc9b2&language=en-US&page=1"
    );
    return response.data.results.slice(0, 4);
  }
  async Buscar4Artistas() {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${this.id}/credits?api_key=c4aecfa4b10ef5cc747dcad83dcdc9b2&language=pt-BR`
    );
    return response.data.results.slice(0, 4);
  }
  async BuscarFilmesPorGenero(genero) {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=c4aecfa4b10ef5cc747dcad83dcdc9b2&language=pt-BR&page=1&with_genres=${genero}`
    );
    return response.data.results;
  }
}