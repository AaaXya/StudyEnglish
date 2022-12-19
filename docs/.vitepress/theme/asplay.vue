<template>
    <i class="read-it-out" @click="asplay()">
        <slot></slot>
    </i>
</template>

<script setup>
const { item } = defineProps({
    item: String,
})
const kind = item.split('-')
const voice = new Audio(`/${kind[0]}/${kind[1]}.mp3`)
function asplay() {
    voice.play();
}
</script>
