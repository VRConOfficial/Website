<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import Header from "@/components/Header.vue";
</script>

<template>
  <Header msg="" />

  <RouterView />
</template>

<style>
@import "@/assets/base.css";

header {
  display: flex;
  justify-content: center;
  line-height: 1.5;
  background-color: var(--clr-accent1);
  width: 100%;
}

@media (hover: hover) {
  a:hover {
    background-color: hsla(160, 100%, 37%, 0.2);
  }
}
</style>
