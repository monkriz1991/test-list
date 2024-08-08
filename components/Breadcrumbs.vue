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

<style lang="scss">
.breadcrumbs {
  display: flex;
  margin: 20px 0;
  align-items: center;
  gap: 20px;

  &__title {
    font-size: 13px;
    position: relative;
    &::before {
      content: "";
      width: 3px;
      height: 3px;
      border-radius: 50%;
      background-color: #333;
      position: absolute;
      right: -11px;
      top: 8px;
    }
  }

  &__name {
    font-size: 13px;
    color: #333;
  }
}
</style>
