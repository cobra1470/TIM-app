<template>
    <div class="flex-box">
        <header-bar :pageTitle="pageTitle" class="h-document-list">
            <router-link slot="left" class="iconfont icon-monitor" to="/"></router-link>
            <i slot="right" class="iconfont icon-add"></i>
        </header-bar>
        <div id="mc">
            <search-bar :searchType="searchType">
                <template slot="btnTitle">搜索</template>
            </search-bar>
            <div class="document-list">
                <div class="shortcut">
                    <router-link class="flex-item" to="/">
                        <i class="iconfont icon-timer"></i>
                        <p class="label">最近浏览</p>
                    </router-link>
                    <router-link class="flex-item" to="/">
                        <i class="iconfont icon-file"></i>
                        <p class="label">本机文件</p>
                    </router-link>
                    <router-link class="flex-item" to="/">
                        <i class="iconfont icon-cloud-file"></i>
                        <p class="label">微云文件</p>
                    </router-link>
                    <router-link class="flex-item" to="/">
                        <i class="iconfont icon-word"></i>
                        <p class="label">WPS文件</p>
                    </router-link>
                </div>
                <div class="list">
                    <item-folder v-for="(item, index) in documents" :key="index" :folder="item"></item-folder>
                    <div class="new-folder">
                        <div class="w-bg">     
                            <i class="iconfont icon-add-folder"></i>
                            <p class="title">新建文件夹</p>
                        </div>
                    </div>
                </div>
                <div class="disk-info">
                    <div class="info">
                        剩余{{ disk.remaining }}，共{{ disk.total }}
                    </div>
                    <a href="#" class="link">了解更多 ></a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import searchBar from '../common/searchBar'
import folder from '../common/folder'
import documentsData from '../../../static/mock-data/documents.json'

export default {
    name: 'friendList',
    components: {
        'search-bar': searchBar,
        'item-folder': folder,
    },
    data () {
        return {
            pageTitle: '云文件',
            searchType: 'doc',
            disk: documentsData.disk,
            documents: documentsData.documents
        }
    },
    methods: {},
    computed: {}
}

</script>

<style lang="scss">
    #header.h-document-list{
        background: url('../../../static/images/bg-header.png') no-repeat;
        background-size: 100%;
        .flex-left,
        .flex-right,
        .flex-center{
            color: #fff!important;
            .iconfont{
                color: #fff;
            }
        }
    }
    .document-list{
        .shortcut{
            display: flex;
            padding: 1.5rem;
            border-bottom: 1px solid #f7f8f9;
            background-color: #fff;
            .flex-item{
                flex: 1;
                text-align: center; 
                .iconfont{
                    color: #979fa9;
                    font-size: 2.2rem;
                }
                .label{
                    font-size: 1.2rem;
                }
            }
        }
        .list{
            display: flex;
            flex-wrap: wrap;
            padding: 2rem 0 2rem 1rem;
            border-top: 1px solid #f7f8f9;
            .new-folder{
                box-sizing: border-box;
                display: flex;
                flex: 0 0 50%;
                padding-right: 1rem;
                box-sizing: border-box;
                .w-bg{
                    width: 100%;
                    // height: 12rem;
                    padding: 2.5rem 0 3rem 0;
                    text-align: center;

                    background-color: #e6e9ed;
                    .iconfont{
                        font-size: 4.8rem;
                        color: #c4daef;
                    }
                    .title{
                        color: #808080;
                        font-size: 1.2rem; 

                    }
                }
            }
        }
        .disk-info{
            margin: 3rem 0 1.5rem 0;
            font-size: 1.2rem;
            text-align: center;
            .link{
                color: #0188fb;
                line-height: 1.6rem;
            }
        }
    }



</style>
