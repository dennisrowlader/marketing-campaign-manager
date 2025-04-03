<template>
  <base-card>
    <form @submit.prevent="submitData">
      <div class="form-control">
        <label for="title">Title</label>
        <input type="text" id="title" name="title" ref="titleInput" />
      </div>
      <div class="form-control">
        <label for="description">Description</label>
        <input type="text" id="description" name="description" ref="descriptionInput" />
      </div>
      <div class="form-control">
        <label for="subjectLine">Subject Line</label>
        <input type="text" id="subjectLine" name="subjectLine" ref="subjectLineInput" />
      </div>
      <div class="form-control">
        <label for="emailContent">Email Content</label>
        <textarea name="emailContent" id="emailContent" ref="emailContentInput"></textarea>
      </div>
      <div>
        <base-button type="submit">Create</base-button>
      </div>
    </form>
  </base-card>
</template>

<script>
  export default {
    inject: ['createCampaign'],
    methods: {
      submitData() {
        const enteredTitle = this.$refs.titleInput.value;
        const enteredDescription = this.$refs.descriptionInput.value;
        const enteredSubjectLine = this.$refs.subjectLineInput.value;
        const enteredEmailContent = this.$refs.emailContentInput.value;

        this.createCampaign(enteredTitle, enteredDescription, enteredSubjectLine, enteredEmailContent);
      }
    }
  }
</script>

<style scoped>
label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  padding: 0.15rem;
  border: 1px solid #ccc;
}

input:focus,
textarea:focus {
  outline: none;
  border-color: #3a0061;
  background-color: #f7ebff;
}

.form-control {
  margin: 1rem 0;
}
</style>
