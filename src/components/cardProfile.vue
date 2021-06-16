<template>
  <div id="cardProfile">
    <div>
      <h1 style="text-align: left">Entrar</h1>
      <form action="" method="POST" class="form-group" style="text-align: left">
        <input
          type="email"
          placeholder="Email ou Número de telefone"
          class="control"
        />
        <input type="password" placeholder="Senha" class="control" />
      </form>
    </div>
  </div>
</template>
<script>
export default {
  name: "cardProfile",
};
</script>
<style scoped>
#cardProfile {
  background-color: rgba(0, 0, 0, 0.6);
  /* height: 70%; */
  width: 450px;
  padding: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

#cardProfile h1 {
  color: #fff;
  font-size: 32px;
  font-weight: 700;
  margin-bottom: 28px;
}

input.control {
  background: #333;
  width: 100%;
  margin: 10px 0;
  text-align: left;
  border-radius: 4px;
  border: 0;
  color: #fff;
  height: 50px;
  line-height: 50px;
  padding: 16px;
}
</style>
