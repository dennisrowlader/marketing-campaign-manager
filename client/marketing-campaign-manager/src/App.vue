<template>
  <the-header title="Marketing Campaign Manager"></the-header>
  <the-campaigns :campaigns="storedCampaigns"></the-campaigns>
</template>

<script>
import TheHeader from './components/layouts/TheHeader.vue';
import TheCampaigns from './components/campaign-resources/TheCampaigns.vue';

export default {
  components: {
    TheHeader,
    TheCampaigns
  }
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

* {
  box-sizing: border-box;
}

html {
  font-family: 'Roboto', sans-serif;
}

body {
  margin: 0;
}
</style>