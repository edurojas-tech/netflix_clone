<template>
  <div>
    <section class="section">
      <div class="container">
        <img src="../assets/img/logoNetflix.svg" alt="logo" width="200" />
        <h2 class="title mt-5">
          Site feito com <br />
          Vue.js e Bulma CSS!
        </h2>
        <linkPage
          rota="/login"
          classe="button is-link nav-item"
          descricao="Login"
        ></linkPage>
      </div>
    </section>
  </div>
</template>
<script>
import linkPage from "../components/linkPage.vue";
export default {
  name: "home",
  components: {
    linkPage,
  },
};
</script>
<style scoped>

</style>
