<template>
  <Info :lists="lists" :imgSrc="carImg">
    <template v-slot:icon>
      <HashSvg />
    </template>
  </Info>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import Info from "../../../components/Info.vue";
import HashSvg from "../../../assets/svgs/hash.vue";
import { InfoUtil } from "../../../utils/InfoUtil";

export default defineComponent({
  components: {
    Info,
    HashSvg,
  },
  props: {
    data: {
      type: Object,
      default: {},
    },
  },
  async mounted() {
    await this.assignDatas();
  },
  data() {
    return {
      lists: [] as any[],
      carImg: "",
    };
  },
  methods: {
    async assignDatas() {
      // const orderDeliveryDate = new Date(this.data.orderDeliveryDate);
      // const orderDeliveryTimeStr = orderDeliveryDate.toLocaleString('en-US', {
      //   hour: 'numeric',
      //   minute: 'numeric',
      //   hour12: true
      // })
      // console.log(orderDeliveryTimeStr, 'orderDeliveryTimeStr')
      // const orderDeliveryDataStr = orderDeliveryDate.toDateString()

      this.carImg = this.data.carImage.imageLink;
      if (this.lists !== null) {
        const sdd: InfoUtil = {
          title: "Valet Vehicle Name",
          data: this.data.carMake,
        };
        const sdt: InfoUtil = {
          title: "Valet Vehicle License Plate",
          data: this.data.plateNumber,
        };
        const pl: InfoUtil = {
          title: "Last Service Date",
          data: "N/A",
        };
        const rs: InfoUtil = {
          title: "Vehicle Status",
          data: this.data.status,
        };
        const objData = [sdd, sdt, pl, rs];
        this.lists = objData;
      }
    },
  },
});
</script>
<style scoped></style>
