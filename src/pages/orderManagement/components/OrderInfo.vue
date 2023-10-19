<template>
  <Info :lists="lists" :show-picture="false">
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
  data() {
    return {
      lists: [] as any[],
    }
  },
  async mounted() {
    await this.assignOrderData()
  },
  methods: {
    async assignOrderData() {
      if (this.lists !== null) {
        const createdDate = new Date(this.data.createdDate);
        const createdTime = createdDate.toLocaleString('en-US', {
          hour: 'numeric',
          minute: 'numeric',
          hour12: true
        })
        const op: InfoUtil = {
          title: 'Order Placed',
          data: createdDate.toDateString()
        }
        const ot: InfoUtil = {
          title: 'Order Time',
          data: createdTime
        }
        const pm: InfoUtil = {
          title: 'Payment Method',
          data: this.data.paymentMethod ? this.data.paymentMethod : 'N/A'
        }
        const os: InfoUtil = {
          title: 'Order Status',
          data: this.data.orderStatus ? this.data.orderStatus !== 'PENDING' ? this.data.orderStatus : 'Not Assigned' : 'N/A'
        }
        const objData = [op, ot, pm, os]
        this.lists = objData
      }
    }
  }
})
</script>
<style scoped></style>
