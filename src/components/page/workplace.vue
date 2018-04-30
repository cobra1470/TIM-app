<template>
    <div class="flex-box">
        <header-bar :pageTitle="pageTitle" class="h-workplace">
            <i slot="right" class="iconfont icon-setting"></i>
            <div class="user-info" slot="buffer">
                <div class="w-title">
                    <h2 class="name">{{ userName }}<i class="iconfont icon-QRcode"></i></h2>
                    <p class="number">{{ userNumber }}</p>
                </div>
                <p class="photo">
                    <img :src="userPhoto">
                </p>
            </div>
        </header-bar>
        <div id="mc" class="mc-workplace">
            
            <a href="#" class="link-vip">
                <i class="iconfont icon-diamond"></i>
                邀请你升级为TIM高级帐户
                <i class="iconfont icon-arrow-right"></i>
            </a>
            <div class="tools">
                <div class="item-tool">
                    <i class="iconfont icon-calendar"></i>
                    <div class="title">日程</div>
                </div>
                <div class="item-tool">
                    <i class="iconfont icon-email"></i>
                    <div class="title">邮箱</div>
                </div>
                <div class="item-tool">
                    <i class="iconfont icon-phone"></i>
                    <div class="title">电话</div>
                </div>
                <div class="item-tool">
                    <i class="iconfont icon-bookmark"></i>
                    <div class="title">收藏</div>
                </div>

                <div class="item-tool mt-2">
                    <i class="iconfont icon-vallet"></i>
                    <div class="title">钱包</div>
                </div>
                <div class="item-tool">
                    <i class="iconfont icon-gift"></i>
                    <div class="title">福利</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
// import searchBar from '../common/searchBar'
import friendsData from '../../../static/mock-data/friends.json'

const __User = '398071320';
export default {
    name: 'workplace',
    components: {
        // 'search-bar': searchBar,
    },
    data () {
        return {
            pageTitle: '办公',
            userName: friendsData[__User].base.nickname,
            userNumber: __User,
            userPhoto:friendsData[__User].base.photo
        }
    },
    methods: {},
    computed: {}
}

</script>

<style lang="scss">
    #header.h-workplace{
        height: 55vw;
        background: url('../../../static/images/bg-header.png') no-repeat;
        background-size: 100%;
        .flex-center{
            color: #fff!important;
        }
        .flex-right{
            .iconfont{
                color: #fff;
            }
        }
        .user-info{
            display: flex;
            padding: 2.5rem 1rem;
            .w-title{
                flex: 1;
                .name{
                    margin-top: 2rem;
                    font-size: 2.2rem;
                    line-height: 2.2rem;
                    color: #fff;
                    .iconfont{
                        font-weight: normal;
                        color: #fff;
                        margin-left: .5rem;
                    }
                }
                .number{
                    margin-top: .5rem;
                    font-size: 1.2rem;
                    line-height: 1.2rem;
                    color: #82c4f6;
                }
            }
            .photo{
                display: flex;
                width: 25vw;
                height: 25vw;
                align-items: center;
                border-radius: 5rem;
                overflow: hidden;
                border: 3px solid hsla(0, 0, 100%, .5);
                box-shadow: 0 0 .3rem #ecedef;
                img{
                    display: block;
                    width: 100%;
                }
            }
        }
    }
    .mc-workplace{
        .link-vip{
            display: block;
            font-size: 1.4rem;
            color: #af9757;
            text-align: center;
            .iconfont{
                color: #af9757;
                font-size: 1rem;
            }
            .icon-diamond{
                font-size: 1.6rem;
            }
        }
        .tools{
            padding: 3rem 0 3rem 1rem;
            .item-tool{
                display: flex;
                .iconfont{
                    display: flex;
                    margin-right: .8rem;
                    font-size: 2.2rem;
                    color: #464c56;
                    align-items: center;
                }
                .icon-vallet{
                    font-size: 1.8rem;
                }
                .title{
                    flex: 1;
                    height: 1.6rem;
                    padding: 1rem 0;
                    line-height: 1.6rem;
                    font-size: 1.4rem;
                    border-bottom: 1px solid #f7f8f9;
                }
            }

        }
    }
</style>
