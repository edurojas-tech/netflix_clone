import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";

// importando as paginas
import login from "./pages/login.vue";
import home from "./pages/home.vue";

Vue.config.productionTip = false;
Vue.use(VueRouter);

//Configuração das Rotas
const router = new VueRouter({
  mode: "history",
  routes: [
    { path: "/login", component: login },
    { path: "/home", component: home },
    { path: "/", redirect: "/home" },
  ],
});

module.exports = {
  mode: 'production'
}

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
