<template>
  <div class="container">
    <HeaderNav active-page="EmployeeManagement" banner-info-height="200px" />
    <div class="content">
      <div class="content-container">
        <router-view />
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import HeaderNav from "../../components/HeaderNav.vue";

export default defineComponent({
  components: {
    HeaderNav,
  },
});
</script>
<style scoped>
.content {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.content-container {
  width: 80%;
}
</style>
