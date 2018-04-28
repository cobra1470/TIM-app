<template>
    <div class="message-dialog">
        <div class="dialog-list" ref="dialogBox">
            <div class="item-dialog" v-for="(item, index) in listData" :key="index" :class="isIn(item) ? 'item-in' : 'item-out'">
                <div class="w-timer" v-if="setTimerLine(index)">{{ getTimer(item.timer) }}</div>
                <div class="w-dialog">
                    <template v-if="isIn(item)">
                        <router-link :to="'/friendPanel/' + dialogInfo.friendNumber">
                            <div class="i-photo">
                                <img :src="dialogInfo.friendPhoto" alt="">
                            </div>
                        </router-link>
                        <div class="i-text"> 
                            <i class="iconfont icon-triangle-left"></i>
                            <div class="text" v-html="item.text"></div>
                        </div>
                    </template>
                    <template v-else>
                        <div class="i-text"> 
                            <i class="iconfont icon-triangle-right"></i>
                            <div class="text" v-html="item.text"></div>
                        </div>
                        <router-link :to="'/friendPanel/' + dialogInfo.mineNumber">
                            <div class="i-photo">
                                <img :src="dialogInfo.minePhoto" />
                            </div>
                        </router-link>
                    </template>
                </div>
            </div>
        </div>
        <div class="dialog-output">
            <div class="w-input">
                <input type="text" v-model="outputText" class="input-text" @keyup.enter="sendText" />
                <button class="btn-send" type="button" @click="sendText">发送</button>
            </div>
            <div class="handle-bar">
                <div class="item-flex">
                    <i class="iconfont icon-voice"></i>
                </div>
                <div class="item-flex">
                    <i class="iconfont icon-pic"></i>
                </div>
                <div class="item-flex">
                    <i class="iconfont icon-camera"></i>
                </div>
                <div class="item-flex">
                    <i class="iconfont icon-face"></i>
                </div>
                <div class="item-flex">
                    <i class="iconfont icon-more"></i>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Utils from '../../assets/js/utils.js'

export default {
    name: 'friend',
    props: ['dialogInfo'],
    data(){
    	return {
            listData: this.dialogInfo.listData,
            outputText: null
    	}
    },
    methods: {
        isIn(item){
            return item.type === 'in' ? true : false;
        },
        setTimerLine(index){
            if(index > 0){
                return new Date(this.listData[index].timer).getTime() - new Date(this.listData[index - 1].timer).getTime() > 5*60*1000 ? true : false;
            }else{
                return true;
            }
        },
        getTimer(t){
            return Utils.formatTime({t: t, hasTime: true});
        },
        sendText(){
            let _text = this.outputText;
            if(_text){
                this.listData.push({
                    "text": _text,
                    "timer": new Date(),
                    "type": 'out'
                });
                this.outputText = '';
            }
        },
        scrollBottom(){
            this.$refs.dialogBox.scrollTop = this.$refs.dialogBox.scrollHeight
        }
    },
    computed: {},
    watch: {
        listData(){
            this.$nextTick(() => {
                this.scrollBottom();
            });
        }
        
    },
    mounted(){
        setTimeout(() => {
            this.scrollBottom()
        }, 100);
    }
}
</script>

<style lang="scss" scoped>
    .message-dialog{
        display: flex;
        flex-direction: column;
        height: 100%;
        .dialog-list{
            flex: 1;
            padding: 0 .6rem 1rem .6rem;
            overflow: auto;
            background-color: #f2f3f5;
            .item-dialog{
                padding: .6rem 0;
                overflow: hidden;
                .w-dialog{
                    display: flex;
                    max-width: 90%;
                }
                .i-photo{
                    width: 4rem;
                    height: 4rem;
                    border-radius: 2rem;
                    overflow: hidden;
                    img{
                        display: block;
                        width: 100%;
                    }
                }
                .i-text{
                    position: relative;
                    display: flex;
                    padding: 10px;
                    margin-left: 1.5rem;
                    font-size: 1.4rem;
                    line-height: 1.8rem;
                    align-items: center;
                    background-color: #fff;
                    box-shadow: 0 0 .3rem #ecedef;
                    border-radius: .8rem;
                    .iconfont{
                        position: absolute;
                        z-index: 1;
                        top: 1rem;
                        font-size: 1.6rem;
                        color: #fff;
                    }
                }
                .w-timer{
                    display: block;
                    width: 100%;
                    padding: 2rem 0;
                    font-size: 1.2rem;
                    color: #747475;
                    text-align: center;
                }
            }
            .item-out{
                .w-dialog{
                    margin-left: 10%;
                    justify-content: flex-end;
                }
                .i-text{
                    margin-right: 1rem;
                    background-color: #0188fb;
                    .iconfont{
                        right: -.9rem;
                        color: #0188fb!important;
                    }
                    .text{
                        color: #fff;
                    }
                }
            }
            .item-in{
                .i-text{
                    margin-left: 1rem;
                    .iconfont{
                        left: -.9rem;
                    }
                }
            }
        }
        .dialog-output{
            width: 100%;
            box-sizing: border-box;
            padding: 0 .6rem;
            .w-input{
                display: flex;
                padding: 1rem 0;
                border-bottom: 1px solid #eeeff0;
                .btn-send{
                    outline: none;
                    padding: 0 .4rem;
                    margin-left: .5rem;
                    color: #0076fb;
                    background: none;
                }
                .input-text{
                    outline: none;
                    display: block;
                    flex: 1;
                    font-size: 1.4rem;
                }
            }
            .handle-bar{
                display: flex;
                .item-flex{
                    padding: .6rem 0;
                    flex: 1;
                    text-align: center;
                    .iconfont{
                        color: #868991;
                        font-size: 2.2rem;
                    }
                }
            }
        }
        
    }
</style>