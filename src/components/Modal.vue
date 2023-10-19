<template>
  <div class="modal-container">
    <div class="modal-box" :style="`width: ${width}; height: ${height}`">
      <slot></slot>
    </div>
  </div>
</template>
<!-- make the modal contaner background blur -->
<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'Modal',
  props: {
    width: {
      type: String,
      default: '60%'
    },
    height: {
      type: String,
      default: '400px'
    }
  }
})
</script>
<style scoped>
.modal-container {
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(5px);
  z-index: 100;
  top: 0;
}

.modal-box {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
}
</style>