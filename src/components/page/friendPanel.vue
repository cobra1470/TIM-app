<template>
    <div class="box">
        <header-bar :pageTitle="pageTitle" class="h-contact-list">
            <div slot="left" @click="goBack">
                <i class="iconfont icon-arrow-left"></i>
                <em class="text">返回</em>
            </div>
            <i slot="right" class="iconfont icon-arrow" @click="goBack"></i>
        </header-bar>
        <div id="mc">
            {{ this.$route.params.number }}
        </div>
    </div>
</template>

<script>

import friendsData from '../../../static/mock-data/friends.json'

// const __Friend = 

export default {
    name: 'messagePanel',
    components: {
        
    },
    data () {
        return {
            headerMsg: 'header bar',
            searchMsg: 'search bar',
            listMsg: 'friend list',
            pageTitle: this.$route.params.number
        }
    },
    methods: {
        goBack(){
          this.$router.go(-1);
        }
    }
}
</script>

<style lang="scss">
    
</style>
