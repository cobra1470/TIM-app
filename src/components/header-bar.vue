<template>
    <div class="header">
        {{ msg }}
    </div>
</template>

<script>
export default {
    name: 'headerbar',
    props: ['msg']
}
</script>

<style lang="scss" scoped>
    #header{
        width: 100%;
        height: 60px;
    }
</style>
