<template>
    <div @click="backPage()" class="link">返回主目录</div>
    <div>TensorFlow测试页</div>
</template>

<script>
    export default {
        methods: {
            backPage() {
                this.$router.go(-1);
            }
        }
    }
</script>

<style>
    .link {
        color: -webkit-link;
        cursor: pointer;
        text-decoration: underline;
    }
    .link:focus-visible {
        outline-offset: 1px;
    }
    .link:active {
        color: -webkit-activelink;
    }
</style>
