<template>
    <div class="flex-box">
        <router-view></router-view>
        <footer-bar></footer-bar>
    </div>
</template>

<script>
import footerBar from '../common/footerBar'

export default {
    name: 'friendList',
    components: {
        'footer-bar': footerBar,
    },
    methods: {},
    computed: {}
}

</script>
<style lang="scss">

</style>
