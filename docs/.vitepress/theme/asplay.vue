<template>
    <i class="read-it-out" @click="asplay()">
        <slot></slot>
    </i>
</template>

<script setup>
const { item } = defineProps({
    item: String,
})
const voice = new Audio(`/${item.replace('-', '/')}.mp3`)
function asplay() {
    voice.play();
}
</script>
