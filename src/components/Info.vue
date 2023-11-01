<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="overview">
    <div class="" v-if="showPicture">
      <div v-if="!userInfo" class="car-img">
        <img :src="imgSrc" alt="user" />
      </div>
      <div v-if="userInfo" class="userImg">
        <img :src="imgSrc" alt="user" />
      </div>
    </div>
    <div class="title-container">
      <div class="titles" v-for="(list, i) in lists" :key="i">
        <div class="date">
          <slot name="icon"></slot>
          <div class="client-id">{{ (<any>list).title }}</div>
        </div>
        <div class="headline-6">{{ (<any>list).data }}</div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    showPicture: {
      type: Boolean,
      default: true
    },
    lists: {
      type: Array,
      default: () => []
    },
    imgSrc: {
      type: String,
      default: ''
    },
    userInfo: {
      type: Boolean,
      default: false
    }
  }
})
</script>
<style scoped>
.car-img {
  background: #ffffff;
  padding: 4px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  position: relative;
  overflow: hidden;
}

.car-img img {
  width: 230px;
  height: 170px;
  object-fit: cover;
  border-radius: 20px;
}

.userImg {
  background: #ffffff;
  padding: 4px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  position: relative;
  overflow: hidden;
  margin-right: 40px;
}

.userImg img {
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 40px;
}

.overview,
.overview * {
  box-sizing: border-box;
}

.overview {
  background: #ffffff;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  align-self: stretch;
  flex-shrink: 0;
  position: relative;
}

.titles {
  background: #ffffff;
  padding: 4px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  position: relative;
  overflow: hidden;
}

.title-container {
  background: #ffffff;
  padding: 4px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  gap: 20px;
  align-items: center;
  justify-content: space-between;
  width: 100%;
}

.date {
  display: flex;
  flex-direction: row;
  gap: 7px;
  align-items: center;
  justify-content: flex-start;
  flex-shrink: 0;
  position: relative;
}

.linear-network-it-programming-hashtag-chat {
  border-radius: 3px;
  flex-shrink: 0;
  position: relative;
  overflow: visible;
}

.client-id {
  color: #2e2c2f;
  text-align: center;
  font: 400 14px/22px "PP Mori", sans-serif;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.headline-6 {
  color: #2e2c2f;
  text-align: center;
  font: 600 16px/36px "PP Mori", sans-serif;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.linear-users-user {
  flex-shrink: 0;
  position: relative;
  overflow: visible;
}

.client-name {
  color: #2e2c2f;
  text-align: center;
  font: 400 14px/22px "PP Mori", sans-serif;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.linear-call-phone-rounded {
  flex-shrink: 0;
  position: relative;
  overflow: visible;
}

.phone-number {
  color: #2e2c2f;
  text-align: center;
  font: 400 14px/22px "PP Mori", sans-serif;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.linear-messages-conversation-letter {
  flex-shrink: 0;
  position: relative;
  overflow: visible;
}

.email-address {
  color: #2e2c2f;
  text-align: center;
  font: 400 14px/22px "PP Mori", sans-serif;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
