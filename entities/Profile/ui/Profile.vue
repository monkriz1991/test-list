<script setup>
import "./profile-style.scss";
defineProps({
  profile: { type: Object, required: true },
});
</script>

<template>
  <div class="profile__item">
    <div class="profile__img">
      <img :src="profile.avatar.preview" alt="" />
    </div>
    <div class="profile__content">
      <div class="profile__info">
        <h2 class="heading_h2">{{ profile.name }}</h2>
        <div class="profile__info-user">
          <Icon name="tabler:user" />
          <strong>{{ profile.name }}</strong>
        </div>
      </div>
      <div class="profile__social">
        <nuxt-link :to="profile.in_link" target="_blank">
          <Icon name="ri:instagram-fill" />
        </nuxt-link>
        <nuxt-link :to="profile.vk_link" target="_blank">
          <Icon name="ri:vk-fill" />
        </nuxt-link>
        <nuxt-link :to="profile.tw_link" target="_blank">
          <Icon name="mdi:twitter-box" />
        </nuxt-link>
        <nuxt-link :to="profile.fb_link" target="_blank">
          <Icon name="formkit:facebook" />
        </nuxt-link>
      </div>
    </div>
  </div>
</template>
