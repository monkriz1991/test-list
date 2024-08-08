<script setup>
defineProps({
  profileName: { type: String, required: true },
});
</script>

<template>
  <div class="breadcrumbs">
    <div class="breadcrumbs__title">Все задания</div>
    <div class="breadcrumbs__name">Профиль {{ profileName }}</div>
  </div>
</template>
