<template>
    <div id="app" v-cloak >
		<transition :name="transitionName">	
			<router-view></router-view>
		</transition>   	
    </div>
</template>

<script>
    export default {
        name: 'App',
        data (){
        	return {
        		transitionName: ''
        	}
        }, 
        watch: {
			$route(to, from) {
				//如果to索引大于from索引,判断为前进状态,反之则为后退状态
				if(to.meta.index < from.meta.index){
					//设置动画名称
					this.transitionName = 'slide-left';
				}else{
					this.transitionName = 'slide-right';
				}
			}
        }
    }
</script>

<style lang="scss">
  @import  "./assets/scss/common";
  @import  "../static/fonts/iconfont.css";
</style>