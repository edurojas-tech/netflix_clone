<template>
  <div>
    <router-link
      :class="classe"
      :to="rota"
      :style="estilo"
    >
      <img :src="imagem" :style="estilo" v-show="stado">
      {{descricao}}
    </router-link>
  </div>
</template>
<script>
export default {
    name: "linkPage",
    props: {
      rota : String,
      estilo : String,
      imagem : String,
      descricao: String,
      classe: String,
      stado: Boolean
    }
}
</script>
