<template>
    <div class="item-group">
        <div class="label" @click="toggle">
            <i class="iconfont" :class="show ? 'icon-triangle-down' : 'icon-triangle-right'"></i>{{ groupTitle }}
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
    props: ['friends', 'groupTitle'],
    data(){
    	return {
    		show: false
    	}
    },
    methods: {
        toggle(){
            this.show = !this.show
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
            padding: 0 1rem;
            height: 3.8rem;
            line-height: 3.8rem;
            font-size: 1.6rem;
            .iconfont{
                margin-right: .8rem;
                color: #aaaaaa;
                font-size: 1.2rem;
            }
        }
        .label:active{
            background-color: #e5e6e7;
        }
    }

</style>