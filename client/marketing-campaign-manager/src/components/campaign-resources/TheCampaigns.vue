<template>
  <base-card>
    <base-button
      @click="setSelectedTab('campaign-list')"
      :mode="campaignListButtonMode"
      >Campaign List</base-button
    >
    <base-button
      @click="setSelectedTab('create-campaign')"
      :mode="createCampaignButtonMode"
      >Create Campaign</base-button
    >
  </base-card>
  <keep-alive>
    <component :is="selectedTab"></component>
  </keep-alive>
</template>

<script>
import CampaignList from './CampaignList.vue';
import CreateCampaign from './CreateCampaign.vue';

export default {
  components: {
    CampaignList,
    CreateCampaign,
  },
  data() {
    return {
      selectedTab: 'campaign-list',
      storedCampaigns: [
        {
          id: 'campaign1',
          title: 'Campaign 1',
          description: 'A first marketing campaign.',
          subjectLine: 'Welcome to the program!',
          emailContent: 'Content for the email will go here.',
        },
        {
          id: 'campaign2',
          title: 'Campaign 2',
          description: 'Another marketing campaign.',
          subjectLine: 'Flash sale tomorrow!',
          emailContent: 'Content for the email will go here.',
        },
      ],
    };
  },
  provide() {
    return {
      campaigns: this.storedCampaigns,
      createCampaign: this.createCampaign,
    };
  },
  computed: {
    campaignListButtonMode() {
      return this.selectedTab === 'campaign-list' ? null : 'flat';
    },
    createCampaignButtonMode() {
      return this.selectedTab === 'create-campaign' ? null : 'flat';
    },
  },
  methods: {
    setSelectedTab(tab) {
      this.selectedTab = tab;
    },
    createCampaign(title, description, subjectLine, emailContent) {
      const newCampaign = {
        id: new Date().toISOString(),
        title: title,
        description: description,
        subjectLine: subjectLine,
        emailContent: emailContent,
      };
      this.storedCampaigns.unshift(newCampaign);

      fetch('http://localhost:3000/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          campaign: this.newCampaign
        })
      })

      this.selectedTab = 'campaign-list';
    },
  },
};
</script>
