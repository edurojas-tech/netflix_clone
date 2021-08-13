<template>
  <div class="container.is-fullhd" id="login">
    <nav
      class="navbar"
      role="navigation"
      aria-label="main navigation"
      style="background-color: rgba(0, 0, 0, 0.7);"
    >
      <div class="navbar-brand pt-3">
        <linkPage
          rota="/home"
          estilo="margin-left: 40px; margin-top: 10px; width: 200px"
          imagem="/img/logoNetflix.6dbba458.svg"
          :stado=true
        ></linkPage>
      </div>
    </nav>
    <section id="cardLogin">
      <cardLogin class="elementologin"></cardLogin>
    </section>
    <section class="rodape">
      <rodape/>
    </section>
  </div>
</template>
<script>
import cardLogin from "../components/cardLogin.vue";
import linkPage from "../components/linkPage.vue";
import rodape from "../components/rodape.vue"
export default {
    name: "login",
    components: {
        cardLogin,
        linkPage,
        rodape
    },
};
</script>
<style scoped>
#login {
  /* height: ; */
  display: flex;
  flex-direction: column;
  background: url("../assets/img/bg-netflix.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
}

#cardLogin {
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.7);
}

.rodape{
  height: 300px;
  padding-top: 20px;
  background-color: rgba(0, 0, 0, 0.918);
}

@media(max-width: 600px){
  .rodape{
    height: auto;
  }
}
</style>