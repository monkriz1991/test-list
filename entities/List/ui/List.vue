<script setup>
import "./list-style.scss";
const props = defineProps({
  itemJob: { type: Object, required: true },
});
const isModalVisible = ref(false);

const listJobs = computed(() => props.itemJob);

const openModal = () => {
  isModalVisible.value = true;
};
const closeModal = () => {
  isModalVisible.value = false;
};
</script>

<template>
  <div class="job-card">
    <div class="job-card__type">
      <span>{{ listJobs.category_name }}</span>
    </div>
    <div class="job-card__title">
      <strong>{{ listJobs.name }}</strong>
    </div>
    <div class="job-card__description">
      <p>{{ listJobs.text }}</p>
    </div>
    <div class="job-card__bottom">
      <div class="job-card__bottom-left">
        <div class="job-card__bottom-left-price">
          {{ listJobs.price_format }}
        </div>
        <div class="job-card__bottom-left-deadline">{{ listJobs.dedline }}</div>
      </div>
      <div class="job-card__bottom-right">
        <button class="job-card__button" @click="openModal">
          Взять задачу
        </button>
        <Modal :isVisible="isModalVisible" @close="closeModal" />
      </div>
    </div>
  </div>
</template>
