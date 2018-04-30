<template>
    <div class="item-folder">  
        <router-link class="thumb" to="/">
            <img :src="folder.thumb">
        </router-link>
        <div class="w-title">
            <h3 class="title">{{ folder.title }}</h3>
            <div class="handle" v-if="folder.type === 'user'">...</div>
        </div>
        <div class="count">{{ folder.count }}项</div>
    </div>
</template>

<script>
export default {
    name: 'folder',
    props: ['folder'],
    data(){
    	return {
    		
    	}
    },
    methods: {}
}
</script>

<style lang="scss" scoped>
    .item-folder{
        flex: 0 0 50%;
        padding-right: 1rem;
        margin-bottom: 2rem;
        box-sizing: border-box;
        .thumb{
            display: block;
            padding: 1rem;
            overflow: hidden;
            background-color: #e6e9ed;
            img{
                display: block;
                width: 100%;
            }
        }
        .w-title{
            display: flex;
            padding: .5rem 0;
            font-size: 1.4rem;
            .title{
                flex: 1;
            }
            .handle{
                width: 40px;
                padding-right: .5rem;
                text-align: right;
                color: #808080;
            }
        }
        .count{
            font-size: 1rem;
            color: #808080;
        }
    }
</style>