<template>
    <i class="read-it-out" @click="asplay()">
        <slot></slot>
    </i>
</template>

<script lang="ts" setup>
    const { item } = defineProps<{
        item: string,
    }>()
    const voice = new Audio(`/${item.replace('-', '/')}.mp3`)
    function asplay() {
        voice.play();
    }
</script>
