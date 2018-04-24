<template>
    <div class="box">
        <header-bar :pageTitle="pageTitle" class="h-contact-list">
            <i slot="left" class="text">添加</i>
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
    name: 'contactList',
    components: {
        'search-bar': searchBar,
        'friend-list': friendList,
    },
    data () {
        return {
            headerMsg: 'header bar',
            searchMsg: 'search bar',
            listMsg: 'friend list',
            pageTitle: '联系人'
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
