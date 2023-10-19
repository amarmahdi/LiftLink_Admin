<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <div v-if="titleType === 1" class="name">{{ title }}</div>
    <div v-if="titleType === 2" class="genesis-model-g-90-2023">
      {{ title }}
    </div>
    <div v-if="titleType === 3" class="label">{{ title }}</div>
    <span v-if="titleType === 4" class="detail-header">
      {{ title }} <span class="order-id">{{ data }}</span>
    </span>
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
    titleType: {
      type: Number,
      default: 1,
    },
    data: {
      type: String,
      default: "",
    },
  },
});
</script>
<style scoped>
.name,
.name * {
  box-sizing: border-box;
}

.name {
  color: #2e2c2f;
  text-align: left;
  font: 500 16px "Neue Haas Grotesk Text Pro", sans-serif;
  position: relative;
  flex: 1;
}

.genesis-model-g-90-2023,
.genesis-model-g-90-2023 * {
  box-sizing: border-box;
}

.genesis-model-g-90-2023 {
  color: linear-gradient(to left, rgba(46, 44, 47, 0.4), rgba(46, 44, 47, 0.4)),
    linear-gradient(to left, #63a375, #63a375);
  text-align: left;
  font: 500 22px/132% "Neue Haas Grotesk Text Pro", sans-serif;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-start;
}

.label,
.label * {
  box-sizing: border-box;
}

.label {
  color: #2e2c2f;
  text-align: left;
  font: 400 14px/112% "Neue Haas Grotesk Text Pro", sans-serif;
  position: relative;
  align-self: stretch;
  display: flex;
  align-items: center;
  justify-content: flex-start;
}

.detail-header {
  font-family: "Montserrat", sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 29px;
  color: #2e2c2f;
  padding-left: 20px;
  padding-top: 5px;
}

.order-id {
  font-family: "Montserrat", sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 29px;
  color: #4e7359;
  padding-left: 20px;
  padding-top: 5px;
}
</style>
