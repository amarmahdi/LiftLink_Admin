<template>
  <div class="input-container">
    <Titles :title-type="3" :title="label" />
    <div class="input-content">
      <div class="left-icon">
        <div class="base"></div>
        <div class="base2"></div>
        <div class="base3"></div>
        <div class="base4"></div>
      </div>
      <!-- <img class="male-11" src="male-11.png" v-if="showPicture" /> -->
      <input class="placeholder-value" :type="type" :value="inputValue" @input="updateValue" />
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import Titles from "./Titles.vue";

export default defineComponent({
  components: {
    Titles,
  },
  props: {
    label: {
      type: String,
      default: "Title",
    },
    showPicture: {
      type: Boolean,
      default: false,
    },
    inputValue: {
      type: String,
      default: "",
    },
    type: {
      type: String,
      default: "text",
    },
  },
  methods: {
    updateValue(event: any) {
      this.$emit("update:inputValue", event.target.value);
    },
  },
});
</script>
<style scoped>
.input-container {
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: flex-start;
  justify-content: center;
  position: relative;
  margin-top: 20px;
  width: 100%;
}

.input-content,
.input-content * {
  box-sizing: border-box;
}

.input-content {
  border-radius: 18px;
  border-style: solid;
  border-color: #eae8e5;
  border-width: 1px;
  padding: 8px 16px 8px 16px;
  display: flex;
  flex-direction: row;
  gap: 8px;
  align-items: center;
  justify-content: center;
  width: 100%;
}

.left-icon {
  flex-shrink: 0;
  width: 15px;
  height: 15px;
  position: relative;
  overflow: hidden;
}

.base {
  background: #4e7359;
  border-radius: 0px 2px 2px 2px;
  width: 3.75px;
  height: 3.75px;
  position: absolute;
  left: 3.12px;
  top: 3.12px;
}

.base2 {
  background: #4e7359;
  border-radius: 2px 2px 2px 0px;
  width: 3.75px;
  height: 3.75px;
  position: absolute;
  left: 3.12px;
  top: 8.12px;
}

.base3 {
  background: #4e7359;
  border-radius: 2px 0px 2px 2px;
  width: 3.75px;
  height: 3.75px;
  position: absolute;
  left: 8.12px;
  top: 3.12px;
}

.base4 {
  background: #4e7359;
  border-radius: 2px 2px 0px 2px;
  width: 3.75px;
  height: 3.75px;
  position: absolute;
  left: 8.12px;
  top: 8.12px;
}

.male-11 {
  border-radius: 8px;
  flex-shrink: 0;
  width: 20px;
  height: 20px;
  position: relative;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  overflow: hidden;
}

.placeholder-value {
  padding: 0px 8px 0px 20px;
  display: flex;
  flex-direction: column;
  gap: 0px;
  align-items: center;
  justify-content: center;
  flex: 1;
  height: 40px;
  position: relative;
  overflow: hidden;
  border: none;
}

/* get rid of the input focus border */
.placeholder-value:focus {
  outline: none;
}
</style>
