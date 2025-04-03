<template>
  <ul>
    <campaign-item
      v-for="item in campaigns"
      :key="item.id"
      :title="item.title"
      :description="item.description"
      :subject-line="item.subjectLine"
      :email-content="item.emailContent"
    ></campaign-item>
  </ul>
</template>

<script>
import CampaignItem from './CampaignItem.vue';

export default {
  inject: ['campaigns'],
  components: {
    CampaignItem,
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
  margin: auto;
  max-width: 40rem;
}
</style>
