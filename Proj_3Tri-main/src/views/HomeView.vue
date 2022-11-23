<script>
import BestRomanceComp from "../components/BestRomanceComp.vue";
import MaisAssistidosComp from"../components/MaisAssistidosComp.vue";
export default {
  components: {
    MaisAssistidosComp,
    BestRomanceComp
}
}
</script>
<template>
  <div class="carousel">
    <div
      id="carouselExampleSlidesOnly"
      class="carousel slide"
      data-ride="carousel"
    >
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img
            class="d-block w-100"
            src="@/assets/img/JokerBannerShadows.jpg"
            alt="First slide"
          />
        </div>
        <div class="carousel-item">
          <img
            class="d-block w-100"
            src="@/assets/img/DarkKnightShadows.jpg"
            alt="Second slide"
          />
        </div>
        <div class="carousel-item">
          <img
            class="d-block w-100"
            src="@/assets/img/MortalKombatShadows.jpg"
            alt="Third slide"
          />
        </div>
      </div>
    </div>
  </div>
  <MaisAssistidosComp />
  <BestRomanceComp />
  <div>
    <h2 class="Mais_Assis">Melhores na categoria Terror</h2>
    <div class="quadras">
      <div class="quadra-prin"></div>
      <div class="quadra"></div>
      <div class="quadra"></div>
      <div class="quadra"></div>
      <div class="quadra"></div>
      <div class="quadra-ult"></div>
    </div>
  </div>
</template>

<style>

.Mais_Assis{
  color: rgb(255, 255, 255);
  font-family: 'Montserrat', sans-serif;
  margin-top: 40px;
  margin-left: 30px;
}

.quadra-prin{
  margin-top: 20px;
  background-color: rgb(148, 71, 71);
  height: 275px;
  width: 200px;
  border-radius: 10px;
  margin-left: 50px;
}

.quadra{
  margin-top: 20px;
  background-color: rgb(177, 101, 101);
  height: 275px;
  width: 200px;
  border-radius: 10px;
  margin-left: 20px;
}

.quadra-ult{
  margin-top: 20px;
  background-color: rgb(180, 43, 43);
  height: 275px;
  width: 200px;
  border-radius: 10px;
  margin-left: 20px;
  margin-right: 25px;
}

.quadras{
  display: flex;
}
</style>
