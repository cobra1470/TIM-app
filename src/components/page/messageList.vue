<template>
    <div class="box">
        <header-bar :pageTitle="pageTitle" class="h-message-list">
            <router-link slot="left" class="iconfont icon-contact" to="contactList"></router-link>
            <i slot="right" class="iconfont icon-add"></i>
        </header-bar>
        <div id="mc">
            <search-bar :searchType="searchType"></search-bar>
            <!-- <friend-list :msg="listMsg"></friend-list> -->
            <div class="message-list">
                <!-- {{typeof getData}} -->
                <item-friend v-for="(item, index) in getData" :key="index" :friend="item">{{ item }}</item-friend>
            </div>
        </div>
        <footer-bar></footer-bar>
    </div>
</template>

<script>
import footerBar from '../common/footerBar';
import searchBar from '../common/searchBar';
import friend from '../common/friend';
// import friendList from '../common/friendList';

import friendsData from '../../assets/static-data/friends.json'
import messagesData from '../../assets/static-data/messages.json'
// console.log(messagesData)

export default {
    name: 'friendList',
    components: {
        'footer-bar': footerBar,
        'search-bar': searchBar,
        'item-friend': friend,
    },
    data () {
        return {
            headerMsg: 'header bar',
            searchMsg: 'search bar',
            // item: 'friend info',
            pageTitle: '消息',
            searchType: 'friend'
        }
    },
    methods: {
        
    },
    computed: {
        getData(){
            let _data = [];
            Object.keys(messagesData).map(number => {
                let _message = {
                    number: number,
                    name: friendsData[number].remarks.name || friendsData[number].base.nickname,
                    photo: friendsData[number].base.photo,
                    lastMessage: messagesData[number][messagesData[number].length -1].text,
                }
                _data.push(_message);
            });
            return _data;
        }
    }
}

</script>

<style lang="scss">
    #header.h-message-list{
        background: url('../../assets/images/bg-header.png') no-repeat;
        background-size: 100%;   
    }
    #header.h-message-list .flex-left .iconfont,
    #header.h-message-list .flex-right .iconfont{
        color: #fff;
    }
    #header.h-message-list .flex-center{        
        color: #fff!important;
    }
</style>
