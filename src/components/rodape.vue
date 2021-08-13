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
        <selext />
    </div>
</template>
<script>
import selext from "./selext.vue"
export default {
    name: 'rodape',
    components: {selext}
}
</script>
<style scoped>
.content > p{
    color: #757575;
    font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif;
}

.listas{
    display: flex;
}

@media(max-width: 800px){
    .listas{
        display: flex;
        flex-direction: column;
    }
    .listas > div{
        margin-bottom: 25px;
        width: 100% !important;
        /* border: 2px solid red; */
    }
}

.listas > div{
    width: calc(100% / 4);
}

.listas > div > ul{
   list-style: none;
}
</style>