import { store } from "../store";

const token = store.state.core.token;

export const authGuard = (_to: any, _from: any, next: any) => {
  if (token) {
    next();
  } else {
    next('/login');
  }
}
