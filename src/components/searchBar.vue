<template>
    <header id="search-bar">
        {{ msg }}
    </header>
</template>

<script>
export default {
    name: 'searchBar',
    props: ['msg']
}
</script>

<style lang="scss" scoped>
    #header{
        width: 100%;
        height: 60px;
    }
</style>
