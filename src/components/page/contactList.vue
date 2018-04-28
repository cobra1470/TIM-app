<template>
    <div class="flex-box">
        <header-bar :pageTitle="pageTitle" class="h-contact-list">
            <i slot="left" class="text">添加</i>
            <i slot="right" class="iconfont icon-arrow-right" @click="goBack"></i>
        </header-bar>
        <div id="mc">
            <search-bar :searchType="searchType">
                <template slot="btnTitle">搜索</template>
            </search-bar>
            <div class="shortcut">
                <router-link to="/" class="flex-item">
                    <i class="iconfont icon-friend"></i>
                    <p class="label">新朋友</p>
                </router-link>
                <router-link to="/" class="flex-item">
                    <i class="iconfont icon-group-friend"></i>
                    <p class="label">群聊</p>
                </router-link>
                <router-link to="/" class="flex-item">
                    <i class="iconfont icon-business-card"></i>
                    <p class="label">名片夹</p>
                </router-link>
            </div>
            <div class="groups">
                <item-group v-for="(item, index) in groups" :key="index" :groupTitle="item.title" :friends="initData(item.title)"></item-group>
            </div>
        </div>
    </div>
</template>

<script>
import searchBar from '../common/searchBar';
import group from '../common/group';
import friendsData from '../../../static/mock-data/friends.json'
import groupsData from '../../../static/mock-data/groups.json'

export default {
    name: 'contactList',
    components: {
        'search-bar': searchBar,
        'item-group': group,
    },
    data () {
        return {
            groups: groupsData.groups,
            pageTitle: '联系人',
            searchType: 'friend'
        }
    },
    methods: {
        goBack(){
          this.$router.go(-1);
        },
        initData(type){
            let __Data = [];
            let _friends = Object.values(friendsData);
            _friends = _friends.filter((ele, index, array) => {
                return ele.base.group === type;
            });
            if(_friends.length > 0){
                for(let f of _friends){
                    __Data.push({
                        number: f.base.number,
                        name: f.remarks.name || f.base.nickname,
                        photo: f.base.photo,
                        status: f.status
                    });
                }
            }
            return __Data;
        }
    },
    computed: {}
}
</script>

<style lang="scss" scoped>
    .shortcut{
        display: flex;
        padding: 1.5rem;
        border-bottom: 1px solid #f7f8f9;
        background-color: #fff;
        .flex-item{
            flex: 1;
            text-align: center; 
            .iconfont{
                font-size: 2.8rem;
            }
            .label{
                font-size: 1.4rem;
            }
        }
    }
</style>
