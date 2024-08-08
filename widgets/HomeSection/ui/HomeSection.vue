<script setup>
import { Profile } from "@/entities/Profile";
import { List } from "@/entities/List";
import { useAllDataStore } from "~/stores/main";
import "./home-section.scss";

const title = ref("Все задания");
// Использование Pinia Store
const [allDataStore] = [useAllDataStore()];
await allDataStore.requestAllData();
const { seo } = storeToRefs(allDataStore);
const { list } = storeToRefs(allDataStore);
const { profile } = storeToRefs(allDataStore);

useSeoMeta({
  title: seo.value.seo.title || "Title",
  keywords: "",
  description: seo.value.seo.text || "Description",
});
</script>
<template>
  <section class="home">
    <div class="_container">
      <Breadcrumbs :profileName="profile.name" />
    </div>
    <div class="home__container _container">
      <div class="home__profile">
        <Profile :profile="profile" />
      </div>
      <div class="home__list">
        <h1 class="home__title heading_h1">{{ title }}</h1>
        <List v-for="(job, index) in list" :key="index" :itemJob="job" />
      </div>
    </div>
  </section>
</template>
