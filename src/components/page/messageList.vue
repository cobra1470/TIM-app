<template>
    <div class="box">
        <header-bar :pageTitle="pageTitle" class="h-message-list">
            <router-link slot="left" class="iconfont icon-contact" to="contactList"></router-link>
            <i slot="right" class="iconfont icon-add"></i>
        </header-bar>
        <div id="mc">
            <search-bar :searchType="searchType">
                <template slot="btnTitle">搜索</template>
            </search-bar>
            <div class="message-list">
                <item-friend v-for="(item, index) in initData" :key="index" :friend="item" :to="'/messagePanel'">
                    <p class="last-message" slot="lastText">{{ item.lastText }}</p>
                    <p class="last-timer" slot="lastTimer">{{ getTimer(item.lastTimer) }}</p>
                </item-friend>
            </div>
        </div>
        <footer-bar></footer-bar>
    </div>
</template>

<script>
import footerBar from '../common/footerBar'
import searchBar from '../common/searchBar'
import friend from '../common/friend'
import Utils from '../../assets/js/utils.js'

import friendsData from '../../../static/mock-data/friends.json'
import messagesData from '../../../static/mock-data/messages.json'

export default {
    name: 'friendList',
    components: {
        'footer-bar': footerBar,
        'search-bar': searchBar,
        'item-friend': friend,
    },
    data () {
        return {
            pageTitle: '消息',
            searchType: 'friend'
        }
    },
    methods: {
        getTimer(t){
            return Utils.formatTime({t: t});
        }
    },
    computed: {
        initData(){
            const __Data = [];
            Object.keys(messagesData).map(number => {
                let _friend = friendsData[number];
                let _dialog = Utils.sortByTimer({'data': messagesData[number]});
                let _message = {
                    number: number,
                    name: _friend.remarks.name || _friend.base.nickname,
                    photo: _friend.base.photo,
                    lastText: _dialog[_dialog.length - 1].text,
                    lastTimer: _dialog[_dialog.length - 1].timer,
                }
                __Data.push(_message);
            });
            return Utils.sortByTimer({'data': __Data, 'reverse': true, 'prop': 'lastTimer'});
        } 
    }
}

</script>

<style lang="scss">
    #header.h-message-list{
        background: url('../../../static/images/bg-header.png') no-repeat;
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
