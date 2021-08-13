<template>
    <div id="cardFluid">
        <div class="columns container" style="margin: auto auto;">
            <div class="column" :style="styleOrderA">
                <div style="display: flex; height: 100% !important; justify-content: center; flex-direction: column; text-align: left;">
                    <h1 class="has-text-white" style="font-size: 3.125rem; line-height: 1.1; margin-bottom: .5rem;">
                        {{titulo}}
                    </h1>
                    <h2 class="has-text-white" style="font-size: 22px">
                        {{subtitulo}}
                    </h2>
               </div>
            </div>
            <div class="column" :style="styleOrderB">
                <img :src="urlImg" class="has-ratio" :width="widthImg"/>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'cardFluid',
    props: {
        titulo: String,
        subtitulo: String,
        urlImg: String,
        styleOrderA: String,
        styleOrderB: String,
        widthImg: String
    }
}
</script>
<style scoped>
#cardFluid{
    border-bottom: 8px solid #222;
    background-color: black;
    padding: 40px 120px;
}

@media (max-width: 800px) {
    #cardFluid{
        padding: 40px 20px;
    }
}
.column:nth-child(2){
    text-align: center;
}
h1{
    font-weight: 800;
    font-family: 'Netflix Sans','Helvetica Neue',Helvetica,Arial,sans-serif;
}
</style>