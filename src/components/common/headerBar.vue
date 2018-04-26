<template>
    <header id="header">
    	<div class="flex-left">
        	<slot name="left">left</slot>
    	</div>
        <div class="flex-center">
        	<slot name="pageTitle">{{ pageTitle }}</slot>
        </div>
        <div class="flex-right">
        	<slot name="right">right</slot>
        </div>
    </header>
</template>

<script>
export default {
    name: 'headerBar',
    props: ['pageTitle']
}
</script>

<style lang="scss">
    #header{
   		display: flex;
		display: -webkit-flex;
        width: 100%;
		height: 4rem;
		line-height: 4rem;
    }
    #header .flex-left,
    #header .flex-right{
    	flex: 0 0 18%;
        text-align: center;
   	}
   	#header .flex-left .text,
    #header .flex-right .text{
		font-size: 1.6rem;
    	font-style: normal;
    }
    #header .flex-center{
    	width:64%;
    	font-size: 1.6rem;
    	text-align: center;
    }

</style>
