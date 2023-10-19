<template>
  <div class="labels">
    <!-- <div class="all-orders">All Orders</div>
    <div class="pending">Pending</div>
    <div class="pending">Completed</div> -->
    <div v-for="(item, i) in tabList" :key="i" class="all-orders">
      <div v-if="item.active" class="all-orders">{{ item.title }}</div>
      <div v-else class="pending">{{ item.title }}</div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    tabList: {
      type: <any>Array,
      required: true,
    },
  }
});
</script>
<style scoped>
.labels,
.labels * {
  box-sizing: border-box;
}

.labels {
  display: flex;
  flex-direction: row;
  gap: 35px;
  align-items: center;
  justify-content: flex-start;
  position: relative;
  width: 100%;
}

.all-orders {
  color: #313638;
  text-align: left;
  font: 500 20px/132% "Neue Haas Grotesk Text Pro", sans-serif;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-start;
}

.pending {
  color: linear-gradient(to left, rgba(46, 44, 47, 0.4), rgba(46, 44, 47, 0.4)),
    linear-gradient(to left, #eae6e5, #eae6e5);
  text-align: left;
  font: 400 20px/132% "Neue Haas Grotesk Text Pro", sans-serif;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-start;
}
</style>
