<template>
    <footer id="footer">   
		<router-link class="item-flex" to="/messageList">
			<i class="iconfont icon-message" title="message"></i>
		</router-link>
		<router-link class="item-flex" to="/documentList">
			<i class="iconfont icon-documents" title="document"></i>
		</router-link>
		<router-link class="item-flex" to="accountCenter">
			<i class="iconfont icon-workplace" title="account"></i>
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
		height: 7rem;
		line-height: 7rem;
		border-top: .1rem solid #d5dbdd;
        background-color: #fff;
    }
    #footer .item-flex{
        display: block;
    	flex-grow: 1;
    	text-align: center;
    	text-decoration: none;
    }
    #footer .router-link-active .iconfont{
    	color: #0f8cff;
    }
</style>
