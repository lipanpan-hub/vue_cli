<template>
    <div class="hello">
        <h1>{{ msg }}</h1>
        <h3>Installed CLI Plugins</h3>
        <h1>VUE CLI 学习 哈哈</h1>
        <button>哈哈</button>
    </div>
</template>

<script>
export default {
    name: "HelloWorld",
    props: { msg: String }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello {
    border: 1px solid black;
}
</style>
