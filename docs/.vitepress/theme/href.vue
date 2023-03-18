<script lang="ts" setup>

    defineProps<{ title: string }>()
</script>
<template>
    <a class="module-href" :href="title">
        <slot></slot>
    </a>
</template>
<style>
.module-href {
    background: var(--vp-c-bg-soft);
    padding: 0.125rem 0.25rem;
    border-radius: 0.25rem;
    /* color: #005080; */
    transition: all .3s;
}

.module-href:hover {
    color: var(--vp-c-brand);
    text-decoration: underline;
}
</style>