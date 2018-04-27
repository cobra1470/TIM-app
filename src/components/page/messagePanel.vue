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
            <message-dialog :dialogInfo="initData"></message-dialog>
        </div>
    </div>
</template>

<script>
import messageDialog from '../common/messageDialog';
import Utils from '../../assets/js/utils.js'
import friendsData from '../../../static/mock-data/friends.json'
import messagesData from '../../../static/mock-data/messages.json'

export default {
    name: 'messagePanel',
    components: {
        'message-dialog': messageDialog,
    },
    data () {
        return {
            pageTitle: null,
            mineNumber: '398071320',
        }
    },
    methods: {
        goBack(){
          this.$router.go(-1);
        }
    },
    computed: {
        initData(){
            let _friend = friendsData[this.$route.params.number];
            let __Data = {
                friendNumber: _friend.number,
                friendName: _friend.remarks.name || _friend.base.nickname,
                friendPhoto: _friend.base.photo,
                mineNumber: this.mineNumber,
                minePhoto: friendsData[this.mineNumber].base.photo,
                listData: Utils.sortByTimer({'data': messagesData[this.$route.params.number]}),
            }
            this.pageTitle = __Data.friendName;
            return __Data;
        }
    }
}
</script>

<style lang="scss">
    
</style>
