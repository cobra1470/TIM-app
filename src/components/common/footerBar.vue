<template>
    <footer id="footer">   
		<router-link class="item-flex" to="/">
			<i class="iconfont icon-message" title="message"></i>
		</router-link>
		<router-link class="item-flex" to="/documentList">
			<i class="iconfont icon-documents" title="document"></i>
		</router-link>
		<router-link class="item-flex" to="workplace">
			<i class="iconfont icon-workplace" title="workplace"></i>
		</router-link>
    </footer>
</template>

<script>
export default {
    name: 'footerBar',
    props: ['msg'],
}
</script>

<style lang="scss">
    #footer{
		display: flex;
		display: -webkit-flex;
        width: 100%;
		height: 5.6rem;
		line-height: 5.6rem;
		border-top: .1rem solid #d5dbdd;
        background-color: #fff;
    }
    #footer .iconfont{
        color: #8e9098;
        font-size: 2.8rem;
    }
    #footer .item-flex{
        display: block;
    	flex-grow: 1;
    	text-align: center;
    }
    #footer .router-link-exact-active .iconfont{
    	color: #0f8cff;
    }
</style>
