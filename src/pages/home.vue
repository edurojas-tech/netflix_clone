<template>
  <div id="home">
    <section class="section">
      <div id="navbar">
        <img src="../assets/img/logoNetflix.svg" alt="logo" width="200" />
        <div class="flexx">
          <selext class="mr-3" />
          <linkPage
            rota="/login"
            estilo="background-color: #e50914; padding: 15px; text-align: center; color: white; border-radius: 7px;"
            descricao="Entrar"
            :stado="false"
          ></linkPage>
        </div>
      </div>

      <div class="container" style="height: 95%; padding-top: 85px">
        <h1
          class="title has-text-white"
          style="
            text-align: center;
            font-size: 4rem;
            font-weight: 600;
            max-width: 700px;
            margin: auto auto;
          "
        >
          Filmes, séries e muito mais. Sem limites.
        </h1>
        <h2
          class="has-text-white mt-3"
          style="text-align: center; font-size: 1.9rem"
        >
          Assista onde quiser. Cancele quando quiser.
        </h2>
        <h3
          class="has-text-white mt-3"
          style="
            text-align: center;
            font-size: 22px;
            font-weight: 600;
            max-width: 800px;
            margin: auto auto;
          "
        >
          Pronto para assistir? Informe seu email para criar ou reiniciar sua
          assinatura.
        </h3>

        <form
          style="
            width: 55%;
            margin: 20px auto;
            display: flex;
            align-itens: center;
          "
        >
          <input
            type="text"
            placeholder="email"
            class="itemsCustom input"
            required
          />
          <button type="submit" class="itemsCustom">Vamos lá</button>
        </form>
      </div>
    </section>

    <cardFluid
      v-for="info in informacoes"
      :key="info"
      :titulo="info.titulo"
      :subtitulo="info.sub"
      :urlImg="info.imagem"
      :styleOrderA="info.ordemTxt"
      :styleOrderB="info.ordemImg"
      :widthImg="info.larguraImg"
    />

    <section class="rodape">
      <rodape/>
    </section>
  </div>
</template>
<script>
import selext from "../components/selext.vue";
import linkPage from "../components/linkPage.vue";
import cardFluid from "../components/cardFluid.vue";
import rodape from "../components/rodape.vue"

export default {
  name: "home",
  components: {
    linkPage,
    selext,
    cardFluid,
    rodape
  },
  data() {
    return {
      informacoes: [
        {
          titulo: "Aproveite na TV.",
          sub: "Assista em Smart TVs, PlayStation, Xbox, Chromecast, Apple TV, aparelhos de Blu-ray e outros dispositivos.",
          imagem: "https://eduardorojas.com.br/imagensVue/x.gif",
          ordemTxt: "order: 1",
          ordemImg: "order: 2",
          larguraImg: "70%",
        },

        {
          titulo: "Baixe séries para assistir offline.",
          sub: "Salve seus títulos favoritos e sempre tenha algo para assistir.",
          imagem: "https://eduardorojas.com.br/imagensVue/mobile.jpg",
          ordemTxt: "order: 2",
          ordemImg: "order: 1",
          larguraImg: "100%",
        },

        {
          titulo: "Assista quando quiser.",
          sub: "Assista no celular, tablet, Smart TV ou notebook sem pagar a mais por isso.",
          imagem: "https://eduardorojas.com.br/imagensVue/devices.png",
          ordemTxt: "order: 1",
          ordemImg: "order: 2",
          larguraImg: "100%",
        },
      ],
    };
  },
};
</script>
<style scoped>
#home {
  background: url("../assets/bg.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  height: 100vh;
}

.section:nth-child(1) {
  background-color: rgba(0, 0, 0, 0.7);
  height: 100vh;
}
#navbar {
  display: flex;
  justify-content: space-between;
}

.flexx {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100% !important;
}

.itemsCustom:nth-child(1) {
  width: 80%;
  height: 70px !important;
}

.itemsCustom:nth-child(2) {
  width: 20%;
  height: 70px !important;
  /* padding: 20px 0; */
  background-color: #e50914;
  border: none;
  color: white;
  font-size: 1.5rem;
  font-weight: 400;
  cursor: pointer;
  border-radius: 0 5px 5px 0;
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
