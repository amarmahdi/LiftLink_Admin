import { store } from '../store'
import router from '../../../routes'

const token = (<any>store.state).core.token

export const loginGuard = (_to: any, _from: any, next: any) => {
  if (token) {
    router.push('/dashboard')
  } else {
    next()
  }
}