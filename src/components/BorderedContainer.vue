<template>
  <div class="container">
    <div :class="horizontal ? 'bordered-container' : 'bordered-container2'">
      <slot></slot>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    title: {
      type: String,
      default: "",
    },
    horizontal: {
      type: Boolean,
      default: false,
    },
  },
});
</script>
<style scoped>
.container {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.bordered-container {
  width: 100%;
  border: 1px solid #E5E5E5;
  box-sizing: border-box;
  border-radius: 10px;
  padding: 20px;
  display: flex;
}

.bordered-container2 {
  width: 100%;
  border: 1px solid #E5E5E5;
  box-sizing: border-box;
  border-radius: 10px;
  padding: 20px;
  display: flex;
  flex-direction: column;
}
</style>
