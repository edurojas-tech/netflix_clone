<template>
  <div id="cardLogin">
    <div>
      <h1 style="text-align: left">Entrar</h1>
      <form action="" method="POST" class="form-group" style="text-align: left">
        <input
          type="email"
          placeholder="Email ou Número de telefone"
          class="control"
          required
        />
        <input
          type="password"
          placeholder="Senha"
          class="control"
          maxlength="10"
          required
        />

        <button type="submit" class="btnEntrar">
          Entrar
        </button>

        <div class="check-link">
          <div>
            <input type="checkbox" style="cursor:pointer"/>
            <label for="#" class="ml-2" style="color: #b3b3b3; font-size: 14px;">Lembre-se de mim</label>
          </div>
          <div>
            <a href="#">
              Precisa de Ajuda?
            </a>
          </div>
        </div>


        <div class="areaFace">
          <div style="display:flex; ">
            <span><img src="../assets/img/face-logo.png" alt="facelogo" width="20"></span>
            <a class="ml-2" style="color: #b3b3b3; font-size: 13px;" href="#">Conectar com Facebook</a>
          </div>
          <div class="mt-2">
            <p>Novo por aqui? <a href="#" class="text-white">Assinte agora</a></p>
            <br>
            <p>
              Esta página é protegida pelo Google reCAPTCHA para garantir que você não é um robô. <a href="#">Saiba mais.</a>
            </p>
          </div>
        </div>
        
      </form>
    </div>
  </div>
</template>
<script>
export default {
  name: "cardLogin",
};
</script>
<style scoped>
#cardLogin {
  background-color: rgba(0, 0, 0, 0.6);
  width: 450px;
  padding: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 30px;
}

#cardLogin h1 {
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

.btnEntrar{
  background-color: #E50914;
  width: 100%;
  padding: 14px;
  color: white;
  font-size: 20px;
  font-weight: 500;
  border: none;
  border-radius: 5px;
  margin-top: 10px;
  cursor: pointer;
}

.check-link{
  display: flex;

}

.check-link > div{
  /* border: 3px solid red; */
  display: block;
  padding: 5px;
  width: calc(100% / 2);
}

.check-link > div:nth-child(2){
  text-align: right;
}

.check-link > div:nth-child(2) > a{
  color: #b3b3b3;
}

.check-link > div:nth-child(2) > a:hover{
  text-decoration: underline;
}

.areaFace{
  margin-top: 70px;
}

.text-white{
  color: white;
  /* text-decoration: underline; */
}

p{
  font-size: 14px;
  color: #8c8c8c;
}
</style>
