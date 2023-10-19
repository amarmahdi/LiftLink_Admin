<template>
  <div class="message-container">
    <BorderedContainer>
      <div class="container">
        <Titles title="New Message" />
        <InputField
          :show-picture="true"
          label="From:"
          placeholder="Email address"
        />
        <InputField
          :show-picture="true"
          label="To:"
          placeholder="Email address"
        />
      </div>
    </BorderedContainer>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import BorderedContainer from "../../../components/BorderedContainer.vue";
import Titles from "../../../components/Titles.vue";
import InputField from "../../../components/InputField.vue";

export default defineComponent({
  components: {
    BorderedContainer,
    Titles,
    InputField,
  },
});
</script>
<style scoped>
.message-container {
  width: 100%;
  margin-top: 70px;
}

.container {
  width: 100%;
  display: flex;
  flex-direction: column;
}
</style>
