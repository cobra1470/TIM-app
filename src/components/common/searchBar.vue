<template>
    <div id="search-bar" >    
        <button class="btn-search" type="button" @click="showDialog">
        	<i class="iconfont icon-search"></i>搜索
        </button>
        <div class="dialog-search" v-show="isShow">
        	<div class="w-search">
        		<i class="iconfont icon-search"></i>
        		<input type="text" name="search" v-model="searchVal" class="input-search" autofocus autocomplete="off">
        		<button class="btn-cancel" @click="cancelSearch">取消</button>
        	</div>
        	<div class="tips">tips</div>
        	<div class="shortcut">shortcut</div>
        	<div class="result">result</div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'searchBar',
    props: {
    	searchType: {
    		default: 'all'
    	}
    },
    data(){
    	return {
    		isShow: false,
    		searchVal: null,
    	}
    },
    methods: {
    	showDialog(){
    		this.isShow = true;
    	},
    	cancelSearch(){
    		this.isShow = false;
    	}
    },
    watch: {
    	searchVal(){
    		console.log(this.searchVal);
    	}
    }
}
</script>

<style lang="scss" scoped>
	$size: 1.4rem;
	@mixin search($align: center){
		display: block;
		flex: 1;
		height: 2.4rem;
		line-height: 2.4rem;
		font-size: $size;
		color: #a1a1a1;
		text-align: $align;
		background-color: #f7f8f9;
		outline: none;
	}
	@mixin padding{
		display: flex;
		padding: .6rem 1rem;
	}

    #search-bar{
    	@include padding;
    }
    #search-bar .btn-search{
    	@include search;
    }
    #search-bar .iconfont{
    	font-size: $size;
    }
	.dialog-search{
		position: fixed;
		z-index: 999;
		width: 100vw;
		height: 100vh;
		top: 0;
		left: 0;
		background-color: #fff;
	}
	.dialog-search .w-search{
		@include padding;
		position: relative;
	}
	.dialog-search .w-search .icon-search{
		position: absolute;
		z-index: 1;
		top: 1.2rem;
		left: 1.5rem;
		font-size: $size;
	}
	.dialog-search .w-search .input-search{
		@include search($align: left);
		padding: 0 .6rem 0 2rem;
	}
	.dialog-search .btn-cancel{
		outline: none;
		background: none;
		padding-left: 1rem;
		font-size: 1.4rem;
		letter-spacing: .2rem;
	}

</style>
