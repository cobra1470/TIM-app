<template>
    <div class="flex-box">
        <header-bar :pageTitle="pageTitle" class="h-document-list">
            <router-link slot="left" class="iconfont icon-contact" to="contactList"></router-link>
            <i slot="right" class="iconfont icon-add"></i>
        </header-bar>
        <div id="mc">
            <search-bar :searchType="searchType">
                <template slot="btnTitle">搜索</template>
            </search-bar>
            <div class="document-list">
                00000
            </div>
        </div>
    </div>
</template>

<script>
import searchBar from '../common/searchBar'

export default {
    name: 'friendList',
    components: {
        'search-bar': searchBar,
    },
    data () {
        return {
            pageTitle: '办公',
            searchType: 'friend'
        }
    },
    methods: {},
    computed: {}
}

</script>

<style lang="scss">
    #header.h-document-list{
        background: url('../../../static/images/bg-header.png') no-repeat;
        background-size: 100%;
    }
    #header.h-document-list .flex-left .iconfont,
    #header.h-document-list .flex-right .iconfont{
        color: #fff;
    }
    #header.h-document-list .flex-center{        
        color: #fff!important;
    }
</style>
