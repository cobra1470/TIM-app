<template>
    <div class="box">
        <header-bar :pageTitle="pageTitle" class="h-message-list">
            <router-link slot="left" class="iconfont icon-contact" to="contactList"></router-link>
            <i slot="right" class="iconfont icon-add"></i>
        </header-bar>
        <div id="mc">
            <search-bar :msg="searchMsg"></search-bar>
            <friend-list :msg="listMsg"></friend-list>
        </div>
        <footer-bar></footer-bar>
    </div>
</template>

<script>

import footerBar from '../common/footerBar';
import searchBar from '../common/searchBar';
import friendList from '../common/friendList';

export default {
    name: 'friendList',
    components: {
        'footer-bar': footerBar,
        'search-bar': searchBar,
        'friend-list': friendList,
    },
    data () {
        return {
            headerMsg: 'header bar',
            searchMsg: 'search bar',
            listMsg: 'friend list',
            pageTitle: '消息'
        }
    }
}
</script>

<style lang="scss">
    #header.h-message-list{
        background-color: #0d8cef;    
    }
    #header.h-message-list .flex-left .iconfont,
    #header.h-message-list .flex-right .iconfont{
        color: #fff;
    }
    #header.h-message-list .flex-center{        
        color: #fff!important;
    }
</style>
