<template>
  <div :class="active ? 'tag' : 'tag2'">
    <slot></slot>

    <div class="order-management"><span>{{ title }}</span></div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    icon: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    },
    active: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    // eslint-disable-next-line space-before-function-paren
    onClick() {
      this.$emit('click')
      console.log('clicked')
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
  border-radius: 40px;
  padding: 12px 18px 12px 14px;
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  position: relative;
  cursor: pointer;
}

.tag2 {
  border-radius: 40px;
  border-style: solid;
  border-color: #eae6e5;
  border-width: 1px;
  padding: 12px 18px 12px 14px;
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.linear-notes-clipboard-list {
  border-radius: 5px;
  flex-shrink: 0;
  position: relative;
  overflow: visible;
}

.order-management {
  color: #eae6e5;
  text-align: center;
  font: 400 14px "PP Mori", sans-serif;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
