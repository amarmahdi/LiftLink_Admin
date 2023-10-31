<template>
  <div class="main">
    <div class="main-label-container">
      <div class="labels">
        <div class="all-orders">All Orders</div>
        <div class="pending">Pending</div>
        <div class="completed">Completed</div>
      </div>
      <div class="title">
        <TableVue
          :title="true"
          :titles="[
            'Order ID',
            'Customer Name',
            'Service Type',
            'Vehicle Type',
            'Requested Date & Time',
            'Status',
          ]"
        />
      </div>
      <TableVue
        v-for="(element, i) in tableData"
        :key="i"
        :detailsRoute="`/order-management/order-details/${element[0]}`"
        :tabel-data="element"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TableVue from "../../../components/Table.vue";
import {
  // GET_ASSIGNED_ORDER_SUBSCRIPTION,
  ORDERS,
} from "../../../services/gqlSrv";

export default defineComponent({
  components: {
    TableVue,
  },
  data() {
    return {
      tableData: [] as any[],
      getAssignedOrder: {},
    };
  },
  async mounted() {
    await this.getOrders().then(async (data) => {
      if (data) {
        data.forEach((element: any) => {
          this.addDataToTable(element);
        });
      }
    });
    // const observer = this.$apollo.subscribe({
    //   query: GET_ASSIGNED_ORDER_SUBSCRIPTION,
    // });
    // observer.subscribe({
    //   next: (data: any) => {
    //     const { orderCreated } = data.data;
    //     const newTebleData = [
    //       orderCreated.orderId.toUpperCase(),
    //       orderCreated.customer.firstName +
    //         " " +
    //         orderCreated.customer.lastName,
    //       orderCreated.serviceType.servicePackageName,
    //       orderCreated.vehicle.carName + " " + orderCreated.vehicle.carMake,
    //       {
    //         item: orderCreated.orderDeliveryDate,
    //         type: "dateTime",
    //       },
    //       {
    //         item: orderCreated.orderStatus,
    //         type: "status",
    //         error: orderCreated.orderStatus !== "PENDING",
    //       },
    //     ];
    //     const ntd = [newTebleData, ...this.tableData];
    //     this.tableData = ntd;
    //   },
    //   error: (error: any) => {
    //     console.log(error);
    //     console.log("error");
    //   },
    //   start: (start: any) => {
    //     console.log(start);
    //     console.log("start");
    //   },
    // });
  },
  methods: {
    async getOrders() {
      this.tableData = [];
      try {
        const { data } = await this.$apollo.query({
          query: ORDERS,
          fetchPolicy: "network-only",
          variables: {
            dealershipId: this.$store.getters.getCurrentDealership.dealershipId,
          },
        });
        console.log(data);
        if (data) {
          const { getOrders } = data;
          return getOrders;
        }
      } catch (error) {
        console.log(error);
      }
    },
    addDataToTable(element: any) {
      this.tableData.push([
        element.orderId.toUpperCase(),
        element.customer.firstName + " " + element.customer.lastName,
        element.serviceType.servicePackageName,
        element.vehicle.carName + " " + element.vehicle.carMake,
        {
          item: element.orderDeliveryDate,
          type: "dateTime",
        },
        {
          item: element.orderStatus,
          type: "status",
          error: element.orderStatus !== "PENDING",
        },
      ]);
    },
  },
});
</script>

<style scoped>
.main {
  width: 100%;
}

.main-label-container {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
}

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

.completed {
  color: linear-gradient(to left, rgba(46, 44, 47, 0.4), rgba(46, 44, 47, 0.4)),
    linear-gradient(to left, #eae6e5, #eae6e5);
  text-align: left;
  font: 400 20px/132% "Neue Haas Grotesk Text Pro", sans-serif;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-start;
}

.title,
.title * {
  box-sizing: border-box;
}

.title {
  width: 100%;
}

.title > * {
  flex: 1;
}

.title-items {
  color: #2e2c2f;
  text-align: left;
  font: 400 16px "Neue Haas Grotesk Text Pro", sans-serif;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 20px;
}
</style>
