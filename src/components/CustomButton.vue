<template>
  <div :class="dark ? 'actions-login' : 'actions'">
    <div :class="dark ? 'button-dark' : 'button'">
      <div :class="dark ? 'button-base-dark' : 'button-base'">
        <div class="text-base">
          <div :class="dark ? 'text-dark' : 'text'">{{ title }}</div>
        </div>
        <div class="arrow">
          <div class="vertical-line"></div>
          <slot v-if="!loading" name="icon"></slot>
          <FingerPrint v-if="loading" :color="dark ? '#eae6e5' : '#2e2c2f'" :size="24" />
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import * as EpicSpinners from 'epic-spinners'

console.log(EpicSpinners)

export default defineComponent({
  components: {
    FingerPrint: EpicSpinners.FingerprintSpinner
  },
  props: {
    title: {
      type: String,
      default: 'Add a new Employee'
    },
    dark: {
      type: Boolean,
      default: false
    },
    loading: {
      type: Boolean,
      default: false
    }
  }
})

</script>
<style scoped>
.vertical-line {
  border-left: 1px #eae6e5 solid;
  position: absolute;
  right: 10px;
}

.actions,
.actions * {
  box-sizing: border-box;
}

.actions {
  background: #eae6e5;
  border-radius: 14px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 80%;
  height: 48px;
  position: relative;
  flex: 1;
  cursor: pointer;
}


.actions-login {
  background: #2e2c2f;
  border-radius: 14px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 80%;
  height: 48px;
  position: relative;
}


.button {
  display: flex;
  flex-direction: row;
  gap: 7.15px;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 100%;
  padding-right: 20px;
}

.button-dark {
  display: flex;
  flex-direction: row;
  gap: 7.15px;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 100%;
}

.button-base {
  border-radius: 7.15px;
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: center;
  justify-content: space-around;
  position: relative;
  flex: 1;
}

.button-base-dark {
  border-radius: 7.15px;
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: center;
  justify-content: space-around;
  position: relative;
  width: 100%;
}

.text-base {
  padding: 0px 10.73px 0px 0px;
  display: flex;
  flex-direction: column;
  gap: 3.58px;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: 20px;
}

.text-base-dark {
  padding: 0px 10.73px 0px 0px;
  display: flex;
  flex-direction: column;
  gap: 3.58px;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: 20px;
}

.text {
  color: #2e2c2f;
  text-align: left;
  font: 600 16px "PP Mori", sans-serif;
  position: relative;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  width: max-content;
}

.text-dark {
  color: #eae6e5;
  text-align: left;
  font: 600 16px "PP Mori", sans-serif;
  position: relative;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  width: max-content;
}

.arrow {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 10%;
  position: relative;
}

.arrow>* {
  width: 100%;
}

.linear-users-user-plus {
  position: relative;
  overflow: visible;
}
</style>
