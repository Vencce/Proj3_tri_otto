<script>
export default {
  props: {
    poster: String,
    nome_fsa: String,
    link_filme: {
      type: Object,
    },
  },
  methods: {
    UrlDoFilme(id) {
      return `/Filmes/${id}`;
    },
  },
};
</script>
<template>
  <div id="section3-container" class="container">
    <img class="cardfilmes" :src="poster" />
    <div class="overlay">
      <div class="text">
        <h4 class="nome_filme">{{ nome_fsa }}</h4>
        <router-link :to="UrlDoFilme(link_filme.id)">
          <button class="verMais">VER MAIS</button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<style>
.cardfilmes {
  background-color: #2f00ff;
  display: block;
  width: 200px;
  height: auto;
  border-radius: 15px;
}
.container {
  margin: 5px;
  position: relative;
  width: 13%;
}
</style>
