<template>
    <footer id="footer">     
		<div class="item-flex">
			<i class="iconfont icon-message">message</i>
		</div>
		<div class="item-flex">
			<i class="iconfont icon-documents-line">document</i>
		</div>
		<div class="item-flex">
			<i class="iconfont icon-gerenzhongxinkaobei">account</i>
		</div>
    </footer>
</template>

<script>
export default {
    name: 'footerBar',
    props: ['msg']
}
</script>

<style lang="scss" scoped>

    #footer{
		display: flex;
		display: -webkit-flex;
    }
    #footer .item-flex{
    	flex-grow: 1;
    	text-align: center;
    }
</style>
