<template>
    <div id="search-bar">
        {{ msg }}
    </div>
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
