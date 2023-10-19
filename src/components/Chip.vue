<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="tag">
    <div class="flat-battery">{{ text }}</div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    text: {
      type: String,
      default: ''
    }
  }
})
</script>
<style scoped>
.tag,
.tag * {
  box-sizing: border-box;
}

.tag {
  background: rgba(99, 163, 117, 0.5);
  border-radius: 40px;
  padding: 8px 12px 8px 12px;
  display: flex;
  flex-direction: row;
  gap: 8px;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  position: relative;
}

.flat-battery {
  color: #2e2c2f;
  text-align: center;
  font: 400 14px "PP Mori", sans-serif;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
