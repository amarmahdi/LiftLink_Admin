<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div @click="onClick" :class="title ? 'orders-title title' : 'orders'">
    <div class="data">
      <div class="check-box" v-if="title && showRadioBtn"></div>
      <svg
        v-if="!title"
        class="check-box"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12Z"
          stroke="#2E2C2F"
          stroke-width="1.5"
        />
      </svg>
      <slot name="title"></slot>
      <div v-for="(item, i) in titles" :key="i" class="genesis-g-90">
        {{ item }}
      </div>
      <div v-for="(td, i) in tabelData" :key="i" class="liu-wayne">
        <span class="tirmmed" v-if="typeof td === 'string'">{{
          `${i === 0 ? td.substring(0, 6) : td}`
        }}</span>
        <div v-if="typeof td === 'object'">
          <div v-if="td.type === 'status'" class="skills2">
            <div :class="!td.error ? 'tag' : 'tag-red'">
              <div :class="!td.error ? 'available' : 'pending'">
                {{ td.item }}
              </div>
            </div>
          </div>
        </div>
        <div v-if="typeof td === 'object'">
          <div v-if="td.type === 'dateTime'" class="skills2">
            <div :class="td.item ? 'tag' : 'tag-red'">
              <div :class="td.item ? 'available' : 'pending'">
                {{ formatDate(td.item) }}
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- <div v-if="title" class="genesis-g-90">Order ID</div>
      <div v-if="!title" class="_332211">332211</div>
      <div v-if="title" class="genesis-g-90">Customer Name</div>
      <div v-if="!title" class="liu-wayne">Liu Wayne</div>
      <div v-if="title" class="genesis-g-90">Service Type</div>
      <div v-if="!title" class="skills">
        <div class="tag">
          <div class="yearly-inspection">Yearly Inspection</div>
        </div>
      </div>
      <div v-if="title" class="genesis-g-90">Vehicle Type</div>
      <div v-if="!title" class="genesis-g-90">Genesis G90</div>
      <div v-if="title" class="genesis-g-90">Requested Date &amp; Time</div>
      <div v-if="!title" class="liu-wayne">2021-05-12 12:00</div>
      <div v-if="title" class="genesis-g-90">Status</div>
      <div v-if="!title" class="skills2">
        <div class="tag">
          <div class="pending">Pending</div>
        </div>
      </div> -->
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    title: {
      type: Boolean,
      default: false,
    },
    titles: {
      type: Array,
      default: () => [],
    },
    tabelData: {
      type: Array,
      default: () => [],
    },
    detailsRoute: {
      type: String,
      default: "",
    },
    showRadioBtn: {
      type: Boolean,
      default: true,
    },
  },
  methods: {
    // eslint-disable-next-line space-before-function-paren
    onClick() {
      if (this.detailsRoute) {
        this.$router.push(this.detailsRoute);
      }
    },
    formatDate(dateString: any) {
      const date = new Date(dateString);
      return date.toLocaleString("en-us", {
        day: "numeric",
        month: "short",
        year: "numeric",
        hour: "numeric",
        minute: "numeric",
      });
    },
  },
});
</script>

<style scoped>
.title {
  background: #eae6e5;
  border-radius: 8px;
  opacity: 0.800000011920929;
  height: 39px;
  display: flex;
  flex-direction: row;
  gap: 0px;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-top: 40px;
  margin-bottom: 40px;
}

.orders,
.orders * {
  box-sizing: border-box;
}

.orders {
  background: #ffffff;
  border-radius: 12px;
  padding: 12px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  justify-content: flex-start;
  flex-shrink: 0;
  box-shadow: 2px 4px 20px 0px rgba(46, 44, 47, 0.1);
  overflow: hidden;
  width: 100%;
  margin-bottom: 20px;
}

.orders-title {
  background: #eae6e5;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  justify-content: flex-start;
  flex-shrink: 0;
  box-shadow: 2px 4px 20px 0px rgba(46, 44, 47, 0.1);
  overflow: hidden;
  width: 100%;
  margin-top: 40px;
  margin-bottom: 40px;
}

.data {
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 31px;
}

.data > * {
  flex: 1;
}

.check-box {
  overflow: visible;
  flex: 0;
  flex-basis: 100px;
}

._332211 {
  color: #313638;
  text-align: left;
  font: 400 14px/112% "PP Mori", sans-serif;
  display: flex;
  align-items: center;
  justify-content: flex-start;
}

.liu-wayne {
  color: #313638;
  text-align: left;
  font: 400 14px/112% "PP Mori", sans-serif;
  display: flex;
  align-items: center;
  justify-content: flex-start;
}

.skills {
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: flex-start;
  justify-content: flex-start;
}

.tag {
  background: rgba(99, 163, 117, 0.36);
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

.tag-red {
  background: rgba(251, 26, 83, 0.36);
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

.yearly-inspection {
  color: #2e2c2f;
  text-align: center;
  font: 400 14px "PP Mori", sans-serif;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.skills2 {
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: flex-start;
  justify-content: flex-start;
}

.pending {
  color: #2e2c2f;
  text-align: center;
  font: 400 14px "PP Mori", sans-serif;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.genesis-g-90 {
  color: #313638;
  text-align: left;
  font: 600 14px/112% "PP Mori", sans-serif;
  display: flex;
  align-items: center;
  justify-content: flex-start;
}
</style>
