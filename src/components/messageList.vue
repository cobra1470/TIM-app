<template>
    <div>
        <header-bar :msg="headerMsg"></header-bar>
        <search-bar :msg="searchMsg"></search-bar>
        <friend-list :msg="listMsg"></friend-list>
        <footer-bar></footer-bar>
    </div>
</template>

<script>

import footerBar from './footerBar';
import searchBar from './searchBar';
import friendList from './friendList';

export default {
    name: 'message',
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
