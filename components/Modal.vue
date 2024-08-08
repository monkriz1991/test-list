<script setup>
const props = defineProps({
  isVisible: Boolean,
});

const emit = defineEmits(["close"]);

const formData = ref({
  phone: "",
  email: "",
  telegram: "",
  checkbox: false,
  comment: "",
});

const closeModal = () => {
  emit("close");
};

const handleSubmit = () => {
  alert(JSON.stringify(formData.value, null, 2));
  closeModal();
  formData.value = {};
};

const handleEscapeKey = (event) => {
  if (event.key === "Escape" && props.isVisible) {
    closeModal();
  }
};
watch(
  () => props.isVisible,
  (newVal) => {
    if (newVal) {
      window.addEventListener("keydown", handleEscapeKey);
    } else {
      window.removeEventListener("keydown", handleEscapeKey);
    }
  }
);
</script>

<template>
  <div v-if="isVisible" class="modal">
    <div class="modal__overlay" @click="closeModal">
      <div class="modal__content" @click.stop>
        <button class="modal__close-button" @click="closeModal">×</button>
        <h2 class="modal__title">Информация по отклику</h2>
        <form @submit.prevent="handleSubmit" class="modal__form">
          <div class="modal__form-group">
            <textarea
              id="comment"
              v-model="formData.comment"
              class="modal__textarea"
              placeholder="Комментарий"
            ></textarea>
          </div>
          <div class="modal__form-group">
            <input
              type="text"
              id="phone"
              v-model="formData.phone"
              class="modal__input"
              placeholder="Телефон"
            />
          </div>
          <div class="modal__form-group">
            <input
              type="email"
              id="email"
              v-model="formData.email"
              required
              class="modal__input"
              placeholder="Email*"
            />
          </div>
          <div class="modal__form-group">
            <input
              type="text"
              id="telegram"
              v-model="formData.telegram"
              class="modal__input"
              placeholder="Telegram"
            />
          </div>
          <div class="modal__form-group modal__form-group--checkbox">
            <label class="modal__checkbox-label">
              <input
                type="checkbox"
                v-model="formData.checkbox"
                class="modal__checkbox"
              />
              Прошу не звонить и написать мне в мессенджер
            </label>
          </div>

          <button type="submit" class="modal__submit-button">Отправить</button>
        </form>
      </div>
    </div>
  </div>
</template>
