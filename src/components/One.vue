<template>
    <div class="one">
        我是组件one
        <button v-on:click="say">按钮</button>
        <button @click="say">哈哈</button>

        <van-cell is-link @click="showPopup">展示弹出层</van-cell>
        <!-- <van-popup v-model="show">内容</van-popup> -->
        <van-popup v-model="show" position="top" :style="{ height: '30%' }" />
    </div>
</template>

<script>
export default {
    name: "test",
    data: function () {
        return {
            msg: "vue cli 学习",
            value: true,
            show: false
        };
    },
    methods: {
        say() {
            // console.log(this.msg);
            alert(this.msg);
        },
        showPopup() {
            this.show = true;
        }
    }
};
</script>

<style scoped>
.one {
    border: 1px solid blue;
}
</style>

