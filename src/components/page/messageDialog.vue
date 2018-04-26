<template>
    <div class="box">
        <header-bar :pageTitle="pageTitle" class="h-contact-list">
            <div slot="left" @click="goBack">
                <i class="iconfont icon-arrow-left"></i>
                <em class="text">消息</em>
            </div>
            <i slot="right" class="iconfont icon-arrow" @click="goBack"></i>
        </header-bar>
        <div id="mc">
            <search-bar :msg="searchMsg"></search-bar>
            <friend-list :msg="listMsg"></friend-list>
        </div>
    </div>
</template>

<script>
import searchBar from '../common/searchBar';
import friendList from '../common/friendList';

export default {
    name: 'messageDialog',
    components: {
        'search-bar': searchBar,
        'friend-list': friendList,
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
