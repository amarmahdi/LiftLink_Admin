import { store } from "../store";
import router from "../../../routes";

const token = store.state.core.token;

export const authGuard = (to: any, from: any, next: any) => {
  if (token) {
    next();
  } else {
    next('/login');
  }
}
