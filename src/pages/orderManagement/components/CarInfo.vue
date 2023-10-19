<template>
  <Info :lists="lists" :imgSrc="carImg">
    <template v-slot:icon>
      <HashSvg />
    </template>
  </Info>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import Info from '../../../components/Info.vue'
import HashSvg from '../../../assets/svgs/hash.vue'
import { InfoUtil } from '../../../utils/InfoUtil'

export default defineComponent({
  components: {
    Info,
    HashSvg
  },
  props: {
    data: {
      type: Object,
      default: {}
    }
  },
  async mounted() {
    await this.assignDatas()
  },
  data() {
    return {
      lists: [] as any[],
      carImg: '',
    }
  },
  methods: {
    async assignDatas() {
      const orderDeliveryDate = new Date(this.data.orderDeliveryDate);
      const orderDeliveryTimeStr = orderDeliveryDate.toLocaleString('en-US', {
        hour: 'numeric',
        minute: 'numeric',
        hour12: true
      })
      console.log(orderDeliveryTimeStr, 'orderDeliveryTimeStr')
      const orderDeliveryDataStr = orderDeliveryDate.toDateString()
      this.carImg = this.data.vehicle.carImage.imageLink
      if (this.lists !== null) {
        const sdd: InfoUtil = {
          title: 'Service Delivery Date',
          data: orderDeliveryDataStr
        }
        const sdt: InfoUtil = {
          title: 'Service Delivery Time',
          data: orderDeliveryTimeStr
        }
        const pl: InfoUtil = {
          title: 'Pickup Location',
          data: this.data.pickupLocation
        }
        const rs: InfoUtil = {
          title: 'Requested Service',
          data: this.data.serviceType.servicePackageName
        }
        const objData = [sdd, sdt, pl, rs]
        this.lists = objData
      }
    }
  }
})
</script>
<style scoped></style>
