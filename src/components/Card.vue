<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="orders" :style="{ width: width }">
    <div class="header">
      <slot name="icon"></slot>
      <slot name="icon2"></slot>
    </div>
    <div v-if="!analysis" class="details">
      <div class="header2">
        <div class="placeholder">{{ title }}</div>
        <div class="header3">
          <div class="caption">{{ data }}</div>
          <div class="tag">
            <div class="_12-8">12.8%</div>
          </div>
        </div>
      </div>
      <div class="header4">
        <div class="placeholder2">Greater than last month</div>
      </div>
    </div>
    <div v-if="analysis" class="analysis-container">
      <slot name="content"></slot>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    width: {
      type: String,
      default: '320px'
    },
    title: {
      type: String,
      default: ''
    },
    analysis: {
      type: Boolean,
      default: false
    },
    data: {
      type: String,
      default: ''
    }
  }
})
</script>
<style scoped>
.orders,
.orders * {
  box-sizing: border-box;
}

.orders {
  background: #eae6e5;
  border-radius: 20px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 18px;
  align-items: flex-start;
  justify-content: flex-start;
  flex-shrink: 0;
  overflow: hidden;
}

.header {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  align-self: stretch;
  flex-shrink: 0;
}

.linear-business-statistic-pie-chart-2 {
  flex-shrink: 0;
  overflow: visible;
}

.details {
  display: flex;
  flex-direction: column;
  gap: 0px;
  align-items: flex-start;
  justify-content: flex-start;
  align-self: stretch;
  flex-shrink: 0;
}

.header2 {
  display: flex;
  flex-direction: column;
  gap: 0px;
  align-items: flex-start;
  justify-content: center;
  align-self: stretch;
  flex-shrink: 0;
}

.placeholder {
  color: #2e2c2f;
  text-align: left;
  font: 200 16px/116% "PP Mori", sans-serif;
  align-self: stretch;
  height: 26px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
}

.header3 {
  display: flex;
  flex-direction: row;
  gap: 12px;
  align-items: center;
  justify-content: flex-start;
  align-self: stretch;
  flex-shrink: 0;
  height: 38px;
}

.caption {
  color: #2e2c2f;
  text-align: left;
  font: 500 24px/112% "Neue Haas Grotesk Text Pro", sans-serif;
  display: flex;
  align-items: center;
  justify-content: flex-start;
}

.tag {
  background: #63a375;
  border-radius: 40px;
  padding: 10px;
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  height: 20px;
}

._12-8 {
  color: #eae6e5;
  text-align: center;
  font: 600 12px "PP Mori", sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
}

.header4 {
  display: flex;
  flex-direction: row;
  gap: 40px;
  align-items: center;
  justify-content: flex-start;
  align-self: stretch;
  flex-shrink: 0;
}

.placeholder2 {
  color: #2e2c2f;
  text-align: left;
  font: 300 16px/116% "Neue Haas Grotesk Text Pro", sans-serif;
  align-self: stretch;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-start;
}

.analysis-container {
  width: 100%;
}
</style>
