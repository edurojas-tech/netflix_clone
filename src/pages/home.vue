<template>
  <div>
    <section class="section">
      <div class="container">
        <img src="../assets/img/logoNetflix.svg" alt="logo" width="200">
        <h2 class="title mt-5">Site feito com <br> Vue.js e Bulma CSS!</h2>
         <router-link to="/login" class="button is-link">
            Login
        </router-link>
      </div>
    </section>
  </div>
</template>
<script>
export default {
    name: "home"
}
</script>

