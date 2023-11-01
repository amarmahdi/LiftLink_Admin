<template>
  <div class="container">
    <div class="title">
      <Table
        :title="true"
        :titles="[
          'Vehicle ID',
          'Vehicle Name',
          'License Plate No.',
          'Type',
          'Added Date and Time',
          'Status',
        ]"
      />
    </div>
    <Table
      @click="() => $router.push('/vehicle-management/vehicle-details')"
      v-for="(item, i) in cars"
      :key="i"
      :tabel-data="[
        (<any>item).carId.toUpperCase(),
        (<any>item).carMake + ' ' + (<any>item).carModel,
        (<any>item).plateNumber,
        (<any>item).carType.toUpperCase(),
        {
          item: (<any>item).createdDate,
          type: 'dateTime',
        },
        {
          item: (<any>item).available ? 'Available' : 'Unavailable',
          type: 'status',
          error: !(<any>item).available,
        },
      ]"
    />
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import Table from "../../../components/Table.vue";
import { GET_VEHICLES } from "../../../services/gqlSrv";

export default defineComponent({
  components: {
    Table,
  },
  data() {
    return {
      loading: false,
      cars: [],
    };
  },
  mounted() {
    this.getVehiles();
    console.log(this.$store.getters.getCurrentDealership.dealershipId);
  },
  methods: {
    async getVehiles() {
      try {
        const {
          data: { getCarInfo },
        } = await this.$apollo.query({
          query: GET_VEHICLES,
          variables: {
            dealershipId: this.$store.getters.getCurrentDealership.dealershipId,
          },
        });
        this.cars = getCarInfo;
        console.log(this.cars);
      } catch (error) {
        console.log(error);
      }
    },
  },
});
</script>
<style scoped>
.title {
  margin-top: 20px;
  margin-bottom: 20px;
}
</style>
