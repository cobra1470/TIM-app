<template>
    <div class="friend-list">
        {{ msg }}
    </div>
</template>

<script>
export default {
    name: 'friendList',
    props: ['msg']
}
</script>

<style lang="scss" scoped>
    #header{
        width: 100%;
        height: 60px;
    }
</style>
