<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="orders">
    <div class="order">
      <img class="male-07" :src="profilePic" />
      <div class="label-caption">
        <div class="title">
          <div class="john-doeson">{{ fullName }}</div>
        </div>
        <div class="tag">
          <div class="active">{{ status }}</div>
        </div>
      </div>
      <!-- <div class="btn-container"> -->
      <CustomButton
        v-if="showAssignBtn"
        :title="selected ? 'Assigned' : 'Assign'"
        :dark="!selected"
        @click="handleAssignment(driverId)"
      >
        <template v-if="!selected" v-slot:icon>
          <AssignSvg />
        </template>
        <template v-if="selected" v-slot:icon>
          <CheckSvg />
        </template>
      </CustomButton>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import CustomButton from "../../../components/CustomButton.vue";
import AssignSvg from "../../../assets/svgs/assign.vue";
import CheckSvg from "../../../assets/svgs/check.vue";

export default defineComponent({
  components: {
    CustomButton,
    AssignSvg,
    CheckSvg,
  },
  props: {
    driverId: {
      type: String,
      default: "",
    },
    fullName: {
      type: String,
      default: "John Doeson",
    },
    status: {
      type: String,
      default: "Active",
    },
    profilePic: {
      type: String,
      default:
        "https://previews.123rf.com/images/apoev/apoev2107/apoev210700033/171405527-default-avatar-photo-placeholder-gray-profile-picture-icon-business-man-illustration.jpg",
    },
    selected: {
      type: Boolean,
      default: false,
    },
    showAssignBtn: {
      type: Boolean,
      default: true,
    },
  },
  methods: {
    handleAssignment(driverId: any) {
      this.$emit("assign", driverId);
    },
  },
});
</script>
<style scoped>
.btn-container {
  width: 200px;
}

.orders,
.orders * {
  box-sizing: border-box;
}

.orders {
  background: linear-gradient(to left, #ffffff, #ffffff);
  border-radius: 12px;
  padding: 12px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  justify-content: flex-start;
  align-self: stretch;
  flex-shrink: 0;
  position: relative;
  box-shadow: 2px 4px 20px 0px rgba(46, 44, 47, 0.1);
  overflow: hidden;
  margin-bottom: 20px;
}

.order {
  display: flex;
  flex-direction: row;
  gap: 16px;
  align-items: center;
  justify-content: flex-start;
  align-self: stretch;
  flex-shrink: 0;
  position: relative;
}

.male-07 {
  border-radius: 12px;
  flex-shrink: 0;
  width: 36px;
  height: 36px;
  position: relative;
  overflow: hidden;
}

.label-caption {
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: flex-start;
  justify-content: flex-start;
  align-self: stretch;
  flex: 1;
  position: relative;
  overflow: hidden;
}

.title {
  display: flex;
  flex-direction: row;
  gap: 7.58px;
  align-items: flex-start;
  justify-content: flex-start;
  align-self: stretch;
  flex-shrink: 0;
  position: relative;
}

.john-doeson {
  color: #313638;
  text-align: left;
  font: 600 14px/112% "PP Mori", sans-serif;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-start;
}

.tag {
  background: rgba(99, 163, 117, 0.5);
  border-radius: 40px;
  padding: 10px;
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  height: 20px;
  position: relative;
}

.active {
  color: #2e2c2f;
  text-align: center;
  font: 400 12px "PP Mori", sans-serif;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.actions {
  background: #313638;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 150px;
  height: 32px;
  position: relative;
}

.actions-login {
  background: #63a375;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 150px;
  height: 32px;
  position: relative;
}

.button {
  display: flex;
  flex-direction: row;
  gap: 5.37px;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  position: relative;
}

.button-dark {
  display: flex;
  flex-direction: row;
  gap: 5.37px;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  position: relative;
}

.button-base {
  border-radius: 5.37px;
  display: flex;
  flex-direction: row;
  gap: 7px;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  position: relative;
}

.button-base-dark {
  border-radius: 5.37px;
  display: flex;
  flex-direction: row;
  gap: 7px;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  position: relative;
}

.text-base {
  display: flex;
  flex-direction: column;
  gap: 0px;
  align-items: flex-start;
  justify-content: center;
  align-self: stretch;
  flex-shrink: 0;
  position: relative;
}

.text {
  color: #eae6e5;
  text-align: left;
  font: 600 12px "PP Mori", sans-serif;
  position: relative;
  align-self: stretch;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-start;
}

.arrow {
  border-style: solid;
  border-color: rgba(234, 230, 229, 0.3);
  border-width: 0px 0px 0px 0.54px;
  padding: 0px 0px 0px 18.78px;
  display: flex;
  flex-direction: row;
  gap: 5.37px;
  align-items: center;
  justify-content: flex-start;
  flex-shrink: 0;
  position: relative;
}

.linear-notes-clipboard-check {
  border-radius: 5px;
  flex-shrink: 0;
  position: relative;
  overflow: visible;
}
</style>
