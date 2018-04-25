<template>
    <div class="item-friend">
    	<slot name="photo">
    		<div class="f-photo">
    			<img :src="'../../assets/images/photos/' + friend.photo" alt="">
    			<img :src="resetPhoto(friend.photo)" alt="">
    			<!-- <img :src="friend.photo" alt=""> -->
    		</div>
    	</slot>
    	<slot name="name">name</slot>
    	<slot name="lastMessage">lastMessage</slot>
    	<slot name="lastTimer"></slot>
        {{ friend }}
    </div>
</template>

<script>
export default {
    name: 'friend',
    props: ['friend'],
    data(){
    	return {
    		
    	}
    },
    methods: {
    	resetPhoto(src){
  			return require('../../assets/images/photos/' + src);
    	}
    }
}
</script>

<style lang="scss">
    
</style>