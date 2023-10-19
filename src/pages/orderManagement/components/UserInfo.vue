<template>
  <Info :lists="lists" :img-src="customerProfilePic" :user-info="true">
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
      customerProfilePic: '',
    }
  },
  methods: {
    async assignDatas() {
      console.log(this.data, "hello")
      if (this.lists !== null) {
        this.data.profilePicture.forEach((item: any) => {
          if (item.isCurrent) this.customerProfilePic = item.pictureLink
        })
        console.log(this.customerProfilePic, "hello")
        const id = this.data.userId.substring(0, 6).toUpperCase()
        const cId: InfoUtil = {
          title: 'Client ID',
          data: id
        }
        const cName: InfoUtil = {
          title: 'Client Name',
          data: this.data.firstName + ' ' + this.data.lastName
        }
        const cPhone: InfoUtil = {
          title: 'Phone Number',
          data: this.data.phone ? this.data.phone : 'N/A'
        }
        const cEmail: InfoUtil = {
          title: 'Email Address',
          data: this.data.email
        }
        const objData = [cId, cName, cPhone, cEmail]
        this.lists = objData
      }
    }
  }
})
</script>
