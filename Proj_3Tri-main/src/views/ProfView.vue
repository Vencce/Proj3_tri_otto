<template>
  <div class="Wrapper_Fundo">
    <div class="Prin_Base">
        <div class="User_Img">
            <img src="@/assets/img/Icon.png" />
            <div class="User_Info">
                <p class="User_CodName"> User_CodName </p>
                <p class="User_AccName"> User_AccName </p>
        </div>
        </div>
        <div class="User_Watched">
            <p class="Tit_Wat">Assistidos</p>
            <div class="Movies_Group_1">
                <div class="Movie_Single">
                </div>
                <div class="Movie_Single">
                </div>
                <div class="Movie_Single">
                </div>
                <div class="Movie_Single">
                </div>
            </div>
            <div class="Movies_Group_2">
                <div class="Movie_Single">
                </div>
                <div class="Movie_Single">
                </div>
                <div class="Movie_Single">
                </div>
                <div class="Movie_Single">
                </div>
            </div>
        </div>
        
    </div>
  </div>
</template>

<style>
.Wrapper_Fundo{
  display: grid;
  place-items: center;
}

.Prin_Base{
  border-radius: 25px;
  background-color: #131313;
  width: 95%;
  height: 100%;
  display: flex;
}

/* * * * * * * * * * * * * * * * * * * */
.User_Img{
  margin-left: 10vh;
  margin-top: 8vh;
  margin-bottom: 3vh;
}

.User_Img img{
  width: 40vh;
}

/* * * * * * * * * * * * * * * * * * * */
.Tit_Wat{
  font-size: 55px;
  font-weight: 300;
  margin-top: 2.5vh;
  margin-left: 5vh;
}

.Movies_Group_1{
  margin-bottom: 5vh;
  display: flex;
}

.Movies_Group_2{
  margin-bottom: 5vh;
  display: flex;
}

.Movie_Single{
  background-color: #171C28;
  height: 42.5vh;
  width: 29.5vh;
  margin-left: 4.5vh;
}

/* * * * * * * * * * * * * * * * * * * */
.User_Info{
  margin-top: 2vh;
}

.User_CodName{
  font-size: 3vh;
  font-weight: 500;
  margin-bottom: -0.5vh;
}

.User_AccName{
  font-size: 3vh;
  font-weight: 300;
}

</style>