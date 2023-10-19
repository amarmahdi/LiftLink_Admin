import { store } from '../store'
import router from '../../../routes'

const token = store.state.core.token

export const loginGuard = (to: any, from: any, next: any) => {
  if (token) {
    router.push('/dashboard')
  } else {
    next()
  }
}