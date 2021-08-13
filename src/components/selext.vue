<template>
    <div>
        <div class="container">
            <select style="background: none; color:#8c8c8c;" class="selectt ml-5">
                <option value="pt">Português</option>
                <option value="en">English</option>
            </select>
        </div>
    </div>
</template>
<script>
export default {
    name: 'selext'
}
</script>
<style scoped>
.selectt{
    background-color: #000;
    background-image: none;
    border: 1px solid #333;
    padding: 20px;
}
</style>