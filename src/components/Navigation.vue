<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="navigation-route">
    <div class="navigation-container">
      <div class="route" v-for="(item, i) in routeList" :key="i">
        <div class="home">{{ item }}</div>
        <ArrowRightNav />
      </div>
    </div>
    <div class="route" v-if="showSaveButtons">
      <CustomButton title="Discard Changes" />
      <CustomButton title="Save Changes" />
    </div>
    <div class="route" v-if="showAssignButton">
      <CustomButton
        title="Finish"
        @click="handleFinishButton()"
        :loading="finishBtnLoading"
      >
        <template v-slot:icon>
          <Check style="height: 100px; width: auto" />
        </template>
      </CustomButton>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import ArrowRightNav from "../assets/svgs/arrowRightNav.vue";
import CustomButton from "./CustomButton.vue";
import Check from "../assets/svgs/check.vue";

export default defineComponent({
  components: {
    ArrowRightNav,
    CustomButton,
    Check,
  },
  created() {
    this.logRoutes();
    this.updateSaveButtons();
  },
  watch: {
    $route() {
      this.logRoutes();
      this.updateSaveButtons();
    },
  },
  props: {
    showAssignButton: {
      type: Boolean,
      default: false,
    },
    finishBtnLoading: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      routeList: [],
      showSaveButtons: false,
    };
  },
  methods: {
    logRoutes() {
      this.routeList = [];
      this.$route.matched.map((route) => {
        const rt = route.path.split("/");
        rt.map((r: any) => {
          if (r !== "" && this.routeList.indexOf(r) === -1) {
            const rVal = r.split("-").join(" ");
            if (this.routeList.indexOf(rVal) === -1 && rVal !== ":id") {
              this.routeList.push(rVal);
            }
          }
        });
      });
    },
    updateSaveButtons() {
      this.showSaveButtons = this.$route.path.includes("add-vehicle");
    },
    handleFinishButton() {
      this.$emit("finish");
    },
  },
});
</script>
<style scoped>
.navigation-route,
.navigation-route * {
  box-sizing: border-box;
}

.navigation-container {
  display: flex;
  flex-direction: row;
  gap: 16px;
  align-items: center;
  justify-content: center;
  position: relative;
}

.route {
  display: flex;
  flex-direction: row;
  gap: 16px;
  padding-right: 16px;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  position: relative;
}

.home {
  color: #2e2c2f;
  text-align: left;
  font: 600 16px "PP Mori", sans-serif;
  position: relative;
  text-transform: capitalize;
}

.navigation-route {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

.actions {
  background-color: #63a375;
}

.arrow {
  width: 50px;
  height: 50px;
}
</style>
