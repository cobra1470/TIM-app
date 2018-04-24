<template>

    <div id="app" v-cloak>
    	<h1></h1>
        <router-view/>
    </div>
</template>

<script>
    export default {
        name: 'App'
    }
</script>

<style lang="scss">
  @import  "./assets/scss/common";
</style>