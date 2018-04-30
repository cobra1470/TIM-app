<template>
    <div class="item-group">
        <div class="label" @click="toggle">
            <i class="iconfont" :class="show ? 'icon-triangle-down' : 'icon-triangle-right'"></i>
            <h2 class="title">{{ groupTitle }}</h2>
            <em class="count">{{ getCount(friends) }}</em>
        </div>
        <div class="friends" v-show="show">
            <item-friend v-for="(item, index) in friends" :key="index" :friend="item" :to="'/friendPanel'" :class="item.status"></item-friend>
        </div>
    </div>
</template>

<script>
import friend from './friend';

import friendsData from '../../../static/mock-data/friends.json'
import groupsData from '../../../static/mock-data/groups.json'

export default {
    name: 'group',
    components: {
        'item-friend': friend,
    },
    props: ['friends', 'groupTitle', 'totalCount'],
    data(){
    	return {
    		show: false,
    	}
    },
    methods: {
        toggle(){
            this.show = !this.show
        },
        getCount(f){
            let _total = f.length;
            let _online = 0;

            if(_total){
                for(let _f of f){
                    console.log(_f)
                    if(_f.status === 'online'){
                        console.log(_online)
                        _online += 1
                        console.log(_online)

                    }
                }
            }
            return `${_online} / ${_total}`;
        }
    },
    computed: {}
}
</script>

<style lang="scss">
    .item-group{
        .item-friend{
            padding: 0 0 0 1rem;
            .flex-middle{
                height: 3.8rem;
                padding: .6rem 0;
                border-bottom: 1px solid #f7f8f9;
            }
            .f-photo{
                width: 3.8rem;
                height: 3.8rem;
                margin-top: .6rem;
            }
        }
        .offline{
            .f-photo{
                img{
                    opacity: .4;
                }
            }
        }
        .label{
            display: flex;
            padding: 0 1rem;
            height: 3.8rem;
            line-height: 3.8rem;
            .iconfont{
                margin-right: .6rem;
                color: #aaa;
                font-size: 1.4rem;
            }
            .title{
                flex: 1;
                font-weight: normal;
                font-size: 1.6rem;
            }
            .count{
                color: #808080;
            }
        }
        .label:active{
            background-color: #e5e6e7;
        }
    }

</style>