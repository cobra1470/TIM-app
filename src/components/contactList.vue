<template>
    <header-bar :msg="myMsg"></header-bar>
</template>

<script>

export default {
    name: 'message',
    data () {
        return {
            myMsg: '12333'
        }
    }
}
</script>

<style lang="scss" scoped>
    #header{
        width: 100%;
        height: 60px;
    }
</style>
