<script>
import CardFilmesSection3 from "./CardFilmesSection3.vue";
import FilmeApi from "../api/filmes.js";
const filmeapi = new FilmeApi();
export default {
  components: {
    CardFilmesSection3
  },
  data() {
    return {
      filmes: [],
    };
  },
  async created() {
    this.filmes = await filmeapi.BuscarTodosOs6Filmes();
  },
  methods: {
    getPosterUrl(poster_path) {
      return `https://image.tmdb.org/t/p/w500${poster_path}`;
    },
  },
};
</script>

<template>
    <div class="section3">
    <div>
      <div>
        <h3 class="PoEmh3">Mais Assistidos do Brasil</h3>
        <div class="filmes-linhas">
          <CardFilmesSection3
            v-for="filme of filmes"
            :key="filme.id"
            :link_filme="filme"
            :poster="getPosterUrl(filme.poster_path)"
            :nome_fsa="filme.title"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.section3 {
  background-color: black;
  margin: 10px;
  color: white;
  display: flex;
  border-radius: 15px;
  margin-left: 16px;
}
.PoEmh3{
  font-size: 2.5em;
}
#section3-container{
  width: 21%;
}
.filmes-linhas {
  display: flex;
  justify-content: center;
}
</style>