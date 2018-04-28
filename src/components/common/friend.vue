<template>
    <router-link class="item-friend" :to="to + '/' + friend.number">
    	<slot name="photo">
    		<div class="f-photo">
                <img :src="friend.photo" alt="">
    		</div>
    	</slot>
        <div class="flex-middle">
            <slot name="name">
                <h2 class="name">{{ friend.name }}</h2>   
            </slot>
            <slot name="lastText"></slot>
        </div>
    	<slot name="lastTimer"></slot>
    </router-link>
</template>

<script>
export default {
    name: 'friend',
    props: ['friend', 'to'],
    data(){
    	return {
    		
    	}
    },
    methods: {}
}
</script>

<style lang="scss">
    $gray: #808080;

    .item-friend{
        display: flex;
        padding: 1rem .6rem;
    }
    .item-friend:active{
        background-color: #e5e6e7;
    }
    .item-friend .f-photo{
        width: 4.8rem;
        height: 4.8rem;
        border-radius: 2.4rem;
        overflow: hidden;
    }
    .item-friend .f-photo img{
        display: block;
        width: 100%;
    }
    .item-friend .last-timer{
        width: 6rem;
        font-size: .8rem;
        line-height: 2.4rem;
        text-align: right;
        color: $gray;
    }
    .item-friend .flex-middle{
        display: flex;
        flex-direction: column;
        flex: 1;
        margin-left: 1rem;
        min-width: 0;
    }
    .item-friend .flex-middle .name,
    .item-friend .flex-middle .last-message{
        display: flex;
        flex: 1;
        align-items:center;
        font-weight: normal;
    }
    .item-friend .flex-middle .last-message{
        display: block;
        line-height: 2.4rem;
        font-size: 1.2rem;
        color: $gray;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
    }

</style>