<template>
    <div class="box">
        <header-bar :pageTitle="pageTitle" class="h-message-list">
            <router-link slot="left" class="iconfont icon-contact" to="contactList"></router-link>
            <i slot="right" class="iconfont icon-add"></i>
        </header-bar>
        <div id="mc">
            <search-bar :searchType="searchType"></search-bar>
            <div class="message-list">
                <item-friend v-for="(item, index) in getData" :key="index" :friend="item" :to="'/messageDialog'">
                    <p class="last-message" slot="lastMessage">{{ item.lastMessage }}</p>
                    <p class="last-timer" slot="lastTimer">{{ formatTime(item.lastTimer) }}</p>
                </item-friend>
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

import friendsData from '../../../static/mock-data/friends.json'
import messagesData from '../../../static/mock-data/messages.json'
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
        formatTime(t){
            let _now = new Date();
            let _timer = new Date(t);
            let _yesterday = new Date();
            let _week = ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"];
             
            const formatNum = num => { 
                return num < 10 ? `0${num}` : num;
            }
            _yesterday.setDate(_yesterday.getDate() -1);

            const __Timer = {
                fullYear: _timer.getFullYear(),
                month: _timer.getMonth() + 1,
                date: _timer.getDate(),
                hours: _timer.getHours(),
                minutes: _timer.getMinutes(),
                day: _timer.getDay(),
                dateString: _timer.toDateString(),
                time: _timer.getTime()
            }
            const __Now = {
                time: _now.getTime(),
                dateString: _now.toDateString(),
            }
            const __Yesterday = {
                dateString: _yesterday.toDateString(),
            }

            if(__Now.time - __Timer.time <= 7*24*60*60*1000){

                if(__Now.dateString === __Timer.dateString){
                    return `${formatNum(__Timer.hours)}:${formatNum(__Timer.minutes)}`
                } else if(__Timer.dateString === __Yesterday.dateString) {
                    return '昨天'
                }else{
                    return _week[__Timer.day];
                }
            }else{
                return `${__Timer.fullYear}-${formatNum(__Timer.month)}-${formatNum(__Timer.date)}`;
            }

        }
    },
    computed: {
        getData(){
            let _data = [];
            const compare = prop => {
                return (a,b) => {
                    let val1 = new Date(a[prop]).getTime();
                    let val2 = new Date(b[prop]).getTime();
                    return val2 - val1;
                }
            }
            Object.keys(messagesData).map(number => {
                let _message = {
                    number: number,
                    name: friendsData[number].remarks.name || friendsData[number].base.nickname,
                    photo: friendsData[number].base.photo,
                    lastMessage: messagesData[number][messagesData[number].length -1].text,
                    lastTimer: messagesData[number][messagesData[number].length -1].timer,
                }
                _data.push(_message);
            });
            return _data.sort(compare('lastTimer'));
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
