<template>
    <div id="rodape">
        <div class="content container pt-4">
            <p>Dúvidas? Ligue 0800-761-4631</p>
        </div>
        <div class="content container listas">
            <div>
                <ul>
                    <li>Perguntas frequentes</li>
                    <li>Perguntas de cookies</li>
                </ul>
            </div>
            <div>
                <ul>
                    <li>Centro de Ajuda</li>
                    <li>Informações corporativas</li>
                </ul>
            </div>
            <div>
                <ul>
                    <li>Termos de uso</li>
                </ul>
            </div>
            <div>
                <ul>
                    <li>Privacidade</li>
                </ul>
            </div>
        </div>
        <div class="container">
            <select style="background: none; color:#8c8c8c;" class="selectt ml-5">
                <option value="pt">Português</option>
                <option value="en">English</option>
            </select>
        </div>
        <br><br>
    </div>
</template>
<script>
export default {
    name: 'rodape'
}
</script>
<style scoped>
#rodape{
    

    /* margin-top: 200px; */
}
.content > p{
    color: #757575;
    font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif;
}

.listas{
    display: flex;
}

.listas > div{
    width: calc(100% / 4);
}

.listas > div > ul{
   list-style: none;
}

.selectt{
    background-color: #000;
    background-image: none;
    border: 1px solid #333;
    /* width: 180px; */
    padding: 20px;
}
</style>