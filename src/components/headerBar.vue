<template>
    <header id="header">
        {{ msg }}
    </header>
</template>

<script>
export default {
    name: 'headerBar',
    props: ['msg']
}
</script>

<style lang="scss" scoped>
    #header{
        width: 100%;
        height: 60px;
    }
</style>
