<script>
import axios from "axios";
import FilmeApi from "../api/filmes.js";
const filmeapi = new FilmeApi();
export default {
  data() {
    return {
      genres: [],
      genre: {},
      name: {},
      artistas: [],
      artista: {},
    };
  },
  props: {
    poster: String,
    nome_filme: String,
    sinopse_filme: String,
    data_lancamento: Number,
    duracao: Number,
    genero_filme: String,
    generos: Array,
  },
  async created() {
    this.filmes = await filmeapi.BuscarTodosOsFilmes();
    const url = `https://api.themoviedb.org/3/movie/${this.id}/credits?api_key=df0a1976ab5aa969146a8dbff08f0123&language=pt-BR`;
    const { data } = await axios.get(url);
    this.artistas = data;
  },
  methods: {
    getPosterUrl(profile_path) {
      return `https://image.tmdb.org/t/p/w500${profile_path}`;
    },
  },
};
</script>

<template>
    <div class="lds">
        <div class="Esq">
            <div>
              <img class="Img_Filme" :src="poster" alt="">
                <h2 class="Tit_Filme">{{ nome_filme }}</h2>
                <a class="Desc_Filme">{{ sinopse_filme }}</a>
            </div>
        </div>
        <div class="l-dir">
            <div class="img-dir">
                <div class="dentro-img"></div>
                <div class="texto">Alguma coisa muito Fofa</div>
            </div>
            <div class="img-dir">
                <div class="dentro-img"></div>
            </div>
            <div class="img-dir">
                <div class="dentro-img"></div>
            </div>
            <div class="img-dir">
                <div class="dentro-img"></div>
            </div>
            <div class="img-dir">
                <div class="dentro-img"></div>
            </div>
            <div class="img-dir">
                <div class="dentro-img"></div>
            </div>
        </div>
    </div>
</template>

<style>

.lds{
  margin-left: 2%;
  display: flex;
}
/*--------------------------------------------------*/
.Img_Filme {
  background-color: rgb(219, 170, 170);
  height: 70vh;
  width: auto;
}

.Tit_Filme{
  font-size: 40px;
  color: white;
  margin-top: 20px;
  font-family: 'Montserrat', sans-serif;
}

.Desc_Filme{
  font-family: 'Open Sans', sans-serif;
  max-width: 100px;
  height: 100px;
}

/*----------------------------------------------------*/

.img-dir {
  margin-top: 20px;
  background-color: #111111;
  height: 145px;
  width: 490px;
  margin-left: 7%;
  border-radius: 10px;
  float: left;
}

.dentro-img{
  background-color: #171C28;
  height: 125px;
  width: 210px;
  justify-content: center;
  margin-top: 10px;
  position: absolute;
  margin-left: 10px;
}

.texto{
  margin-left: 230px;
  position: absolute;
  margin-top: 15px;
  font-family: 'Open Sans', sans-serif;
}

/*-----------------------------------------------------*/


</style>