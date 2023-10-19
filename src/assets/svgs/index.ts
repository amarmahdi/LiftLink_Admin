import { defineComponent, markRaw } from 'vue'
import HashSvg from './hash.vue'
import orderSvg from './order.vue'
import AccountsSvg from './accounts.vue'

export default defineComponent({
  name: 'SvgComponents',
  components: {
    HashSvg: markRaw(HashSvg),
    OrderSvg: markRaw(orderSvg),
    AccountsSvg: markRaw(AccountsSvg)
  }
})
