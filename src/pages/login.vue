<template>
  <div class="container.is-fullhd	" id="login">
    <nav
      class="navbar"
      role="navigation"
      aria-label="main navigation"
      style="background-color: rgba(0, 0, 0, 0.7);"
    >
      <div class="navbar-brand">
        <a class="navbar-item" href="https://bulma.io">
          <img
            src="~/../assets/img/logoNetflix.svg"
            alt="netflixLogo"
          />
        </a>
      </div>
    </nav>
    <section id="cardLogin" style="background-color: rgba(0, 0, 0, 0.7);">
      <h1 class="title" style="color: white;">Login</h1>
    </section>
    <!-- <h1 class="title mt-5">tela login</h1>
        <router-link to="/home" class="button is-link">
            To go home
        </router-link> -->
  </div>
</template>
<script>
export default {
  name: "login",
};
</script>
<style scoped>
#login {
  border: 3px solid red;
  height: 100vh;
  display: flex;
  flex-direction: column;
  /* background-color: rgba(58, 56, 56, 0.3); */
  background: url("../assets/img/bg-netflix.jpg");
}

#cardLogin {
  border: 3px solid red;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
