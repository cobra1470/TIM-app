<template>
    <header id="header">
        <div class="box">   
        	<div class="flex-left">
            	<slot name="left"></slot>
        	</div>
            <div class="flex-center">
            	<slot name="pageTitle">{{ pageTitle }}</slot>
            </div>
            <div class="flex-right">
            	<slot name="right">right</slot>
            </div>
        </div>
        <slot name="buffer"></slot>
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
        .box{    
       		display: flex;
    		display: -webkit-flex;
            width: 100%;
    		height: 4rem;
    		line-height: 4rem;
            .flex-left,
            .flex-right{
                flex: 0 0 18%;
                text-align: center;
                .text{
                    font-size: 1.6rem;
                    font-style: normal;
                }
            }
            .flex-center{
                width:64%;
                font-size: 1.6rem;
                text-align: center;
            }
            .iconfont{
                color: #464c56;
                font-weight: 600;
            }
        }
    }

</style>
