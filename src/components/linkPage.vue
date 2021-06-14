<template>
  <div>
    <router-link
      :class="classe"
      :to="rota"
    >
      <img :src="imagem" :style="estilo">
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
      classe: String
    }
}
</script>
