<template>
    <div class="box box-friend-panel">
        <header-bar :pageTitle="pageTitle" :class="{'no-bg' : noBg}">
            <div slot="left" @click="goBack">
                <i class="iconfont icon-arrow-left"></i>
                <em class="text">返回</em>
            </div>
            <router-link to="" slot="right" class="text">更多</router-link>
        </header-bar>
        <div id="mc" ref="mc">
            <div class="w-title">
                <div class="photo">
                    <img :src="base.photo">
                </div>
                <div class="info-title">
                    <h2 class="name">
                        {{ getFriendName }}
                        <i class="iconfont" :class="'icon-' + private.gender"></i>
                    </h2>
                    <p class="signature">{{ base.signature }}</p>
                    <p class="age-location">
                        {{ getAge }} {{ base.location }}
                    </p>
                </div>
            </div>
            <div class="info-group">
                <div class="item-info">
                    <label class="label">账号</label>
                    <p class="text">{{ base.number }}</p>
                </div>
                <div class="item-info">
                    <label class="label">昵称</label>
                    <p class="text">{{ base.nickname }}</p>
                </div>
                <div class="item-info">
                    <label class="label">空间</label>
                    <p class="text">{{ base.zoneName }}</p>
                </div>
                <div class="item-info">
                    <label class="label">分组</label>
                    <p class="text">{{ base.group }}</p>
                </div>
            </div>
            <div class="info-group">
                <item-info :info="remarks.name">
                    <template slot="label">备注名</template>
                </item-info>
                <item-info :info="remarks.phone">
                    <template slot="label">手机</template>
                </item-info>
            </div>
            <div class="info-group">
                <item-info :info="private.birthday">
                    <template slot="label">生日</template>
                </item-info>
                <item-info :info="remarks.company">
                    <template slot="label">公司</template>
                </item-info>
                <item-info :info="private.phone">
                    <template slot="label">故乡</template>
                </item-info>
                <item-info :info="private.Email">
                    <template slot="label">邮箱</template>
                </item-info>
            </div>
        </div>
        <div class="handle-bar" v-if="base.number != mineNumber">
            <router-link to="/" class="flex-item">QQ电话</router-link>
            <router-link :to="'/messagePanel/' + base.number" class="flex-item">发消息</router-link>
        </div>
    </div>
</template>

<script>
import Vue from 'vue'
import friendsData from '../../../static/mock-data/friends.json'

export default {
    name: 'messagePanel',
    components: {
        'item-info': {
            template: `<div class="item-info" v-if="info">
                    <label class="label">
                        <slot name="label">手机</slot>
                    </label>
                    <p class="text">{{ info }}</p>
                </div>`,
            props: ['info'],
        }
    },
    data () {
        return {
            mineNumber: '398071320',
            base: friendsData[this.$route.params.number].base,
            remarks: friendsData[this.$route.params.number].remarks,
            private: friendsData[this.$route.params.number].private,
            noBg: true,
            pageTitle: null,
        }
    },
    methods: {
        goBack(){
          this.$router.go(-1);
        }
    },
    computed: {
        getFriendName(){
            return this.remarks.name || this.base.nickname;
        },
        getAge(){
            return this.private.birthday ? new Date().getFullYear() - new Date(this.private.birthday).getFullYear() + '岁' : null;
        }
    },
    mounted(){
        this.$refs.mc.onscroll = () => {
            if(this.$refs.mc.scrollTop > 90){
                this.noBg = false;
                this.pageTitle = '个人资料';
            }else{
                this.noBg = true;
                this.pageTitle = null;
            }
        }
    }
}
</script>

<style lang="scss">
    .box-friend-panel{
        #header{
            position: relative;
            z-index: 1;
        }
        #header.no-bg{
            background: none;
            .iconfont,
            .text,
            em{
                color: #fff;
            }
        }
        #mc{
            position: relative;
            z-index: 0;
            margin-top: -4rem;
            background-color: #f6f7f9;
            .w-title{
                position: relative;
                .photo{
                    display: flex;
                    max-height: 19rem;
                    align-items: center;
                    overflow: hidden;
                    img{
                        display: block;
                        width: 100%;
                    }
                }
                .info-title{
                    position: absolute;
                    z-index: 1;
                    bottom: 1rem;
                    padding: 0 1.6rem;
                    .name, p{
                        color: #fff;
                        font-size: 1.2rem;
                        line-height: 1.6rem;
                    }
                    .name{
                        font-weight: normal;
                        font-size: 2.2rem;
                        line-height: 2.8rem;
                        .iconfont{
                            font-size: 2.2rem;
                        }
                        .icon-male{
                            color: #00a4ff;
                        }
                        .icon-female{
                            color: #ff5f56;
                        }
                    }
                } 
            }
            .info-group{
                padding-left: 1.6rem;
                line-height: 2.2rem;
                background-color: #fff;
                box-shadow: 0 0 .2rem #ecedef;
                .item-info{
                    padding: .6rem 0;
                    border-bottom: 1px solid #f2f3f5;
                    .label{
                        color: #797979;
                        font-size: 1.2rem;
                    }
                    .text{
                        font-size: 1.6rem;
                    }
                }
                .item-info:last-child{
                    margin-bottom: 1.5rem;

                }
            }
        }
        .handle-bar{
            display: flex;
            border-top: 1px solid #f0f0f2;
            .flex-item{
                flex: 1;
                display: block;
                height: 4.4rem;
                line-height: 4.4rem;
                font-size: 1.6rem;
                text-align: center;
                text-decoration: none;
            }
            .flex-item:last-child{
                color: #fff;
                background-color: #0188fb;
            }
        }
    }
</style>
