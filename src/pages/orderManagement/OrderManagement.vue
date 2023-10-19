<template>
  <div>
    <HeaderNav
      v-if="currentPage.includes('order-list')"
      active-page="OrderManagement"
      :show-user-info="false"
      banner-info-height="200px"
      banner-title="Order Management"
      banner-sub-title="These are the order statistics thus far."
      :show-search-bar="true"
    />
    <HeaderNav
      v-if="currentPage.includes('order-details')"
      active-page="OrderManagement"
      :show-user-info="false"
      banner-info-height="200px"
      banner-title="Order Management"
      banner-sub-title="These are the order statistics thus far."
      :show-message-button="true"
    />
    <HeaderNav
      v-if="currentPage.includes('message')"
      active-page="OrderManagement"
      :show-user-info="false"
      banner-info-height="200px"
      banner-title="Order Management"
      banner-sub-title="These are the order statistics thus far."
    />
    <div class="navigation-container">
      <div class="navigation-style">
        <NavigationVue
          @finish="assignOrder"
          :show-assign-button="currentPage.includes('order-details')"
          :finish-btn-loading="loading"
        />
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import HeaderNav from "../../components/HeaderNav.vue";
import NavigationVue from "../../components/Navigation.vue";
import { ASSIGN_ORDER } from "../../services/gqlSrv";

export default defineComponent({
  components: {
    HeaderNav,
    NavigationVue,
  },
  // eslint-disable-next-line space-before-function-paren
  data() {
    return {
      currentPage: this.$route.path,
      loading: false,
    };
  },
  watch: {
    $route(to, from) {
      this.currentPage = to.path;
      console.log(from);
    },
  },
  methods: {
    async assignOrder() {
      this.loading = true;
      const order = this.$store.getters.getOrder;
      try {
        console.log(order);
        const { data } = await this.$apollo.mutate({
          mutation: ASSIGN_ORDER,
          variables: {
            input: {
              customer: order.customer,
              dealershipId:
                this.$store.getters.getCurrentDealership.dealershipId,
              drivers: order.assignedDrivers,
              order: order.orderId,
              status: "pending",
              valetVehicleId: order.valetVehicleRequest,
            },
          },
        });
        console.log(data);
        this.loading = false;
        this.$router.push("/order-management/order-list");
      } catch (error) {
        console.log(error);
        this.loading = false;
      }
    },
  },
});
</script>
<style scoped>
.navigation-container {
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
}

.navigation-style {
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
}
</style>
