<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <main>
    <div v-if="!vertical" class="line">
    </div>
    <div v-if="vertical" class="vertical-line"></div>
  </main>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    vertical: {
      type: Boolean,
      default: false
    }
  }
})
</script>
<style scoped>
.line {
  width: 100%;
  height: 1px;
  background-color: #e5e5e5;
}

.vertical-line {
  height: 100%;
  width: 1px;
  background-color: #e5e5e5;
}
</style>
