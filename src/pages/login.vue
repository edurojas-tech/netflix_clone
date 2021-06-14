<template>
  <div class="container.is-fullhd	" id="login">
    <nav
      class="navbar"
      role="navigation"
      aria-label="main navigation"
      style="background-color: rgba(0, 0, 0, 0.7);"
    >
      <div class="navbar-brand">
        <linkPage
          rota="/home"
          estilo="margin-left: 40px; margin-top: 10px; width: 200px"
          imagem="/img/logoNetflix.6dbba458.svg"
        ></linkPage>
      </div>
    </nav>
    <section id="cardLogin" style="background-color: rgba(0, 0, 0, 0.7);">
      <cardProfile></cardProfile>
    </section>
  </div>
</template>
<script>
import cardProfile from "../components/cardProfile.vue";
import linkPage from "../components/linkPage.vue";
export default {
    name: "login",
    components: {
        cardProfile,
        linkPage,
    },
};
</script>
<style scoped>
#login {
  /* border: 3px solid red; */
  height: 100vh;
  display: flex;
  flex-direction: column;
  /* background-color: rgba(58, 56, 56, 0.3); */
  background: url("../assets/img/bg-netflix.jpg");
}

#cardLogin {
  /* border: 3px solid red; */
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>