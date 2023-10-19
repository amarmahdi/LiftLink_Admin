<template>
  <div class="container">
    <HeaderNav active-page="VehicleManagement" :banner-title="title"
      banner-sub-title="Get an overview information of the valet vehicles in the eco-system." banner-info-height="200px"
      :show-add-vehicle-button="showAddVehicleButton" />
    <div class="content">
      <div class="content-wrapper">
        <div class="nav-wrapper">
          <NavigationVue />
        </div>
        <router-view />
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import HeaderNav from "../../components/HeaderNav.vue";
import NavigationVue from "../../components/Navigation.vue";

export default defineComponent({
  components: {
    HeaderNav,
    NavigationVue,
  },
  data() {
    return {
      showAddVehicleButton: true,
      title: "Vehicle Management",
    };
  },
  watch: {
    $route() {
      this.updateLists();
    },
  },
  created() {
    this.updateLists();
  },
  methods: {
    updateLists() {
      const route = this.$route.path;
      if (route === "/vehicle-management/add-vehicle") {
        this.title = "Add Vehicle";
        this.showAddVehicleButton = false;
      } else {
        this.title = "Vehicle Management";
        this.showAddVehicleButton = true;
      }
    },
  },
});
</script>
<style scoped>
.container {
  width: 100%;
}

.content {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.content-wrapper {
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
}

.nav-wrapper {
  margin-top: 50px;
  margin-bottom: 50px;
  width: 100%;
}
</style>
