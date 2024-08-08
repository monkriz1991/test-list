<script setup>
import "./profile-style.scss";
import { defineProps } from "vue";

const props = defineProps({
  profile: {
    type: Object,
    required: true,
    default: () => ({}),
  },
});
</script>

<template>
  <div class="profile__item">
    <div class="profile__img">
      <img
        :src="profile?.avatar?.preview || 'default-avatar'"
        alt="Profile Image"
      />
    </div>
    <div class="profile__content">
      <div class="profile__info">
        <h2 class="heading_h2">{{ profile?.name || "Default Name" }}</h2>
        <div class="profile__info-user">
          <Icon name="tabler:user" />
          <strong>{{ profile?.name || "Default Name" }}</strong>
        </div>
      </div>
      <div class="profile__social">
        <nuxt-link :to="profile?.in_link || '#'" target="_blank">
          <Icon name="ri:instagram-fill" />
        </nuxt-link>
        <nuxt-link :to="profile?.vk_link || '#'" target="_blank">
          <Icon name="ri:vk-fill" />
        </nuxt-link>
        <nuxt-link :to="profile?.tw_link || '#'" target="_blank">
          <Icon name="mdi:twitter-box" />
        </nuxt-link>
        <nuxt-link :to="profile?.fb_link || '#'" target="_blank">
          <Icon name="formkit:facebook" />
        </nuxt-link>
      </div>
    </div>
  </div>
</template>
