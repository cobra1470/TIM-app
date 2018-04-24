<template>
    <div id="header">
        <headerbar :msg="myMsg"></headerbar>
    </div>
</template>

<script>
// import headerbar from "./header-bar.vue"


export default {
    name: 'message',
    // components: { headerbar },
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
