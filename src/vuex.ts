import { Store } from "vuex/types/index.js";
import { State as st } from "./services/store/index";

declare module "@vue/runtime-core" {
  // declare your own store states
  interface State extends st {
    core: {
      currentDealership: any;
      token: string;
      isLoggedIn: boolean;
      order: any[];
    };
  }
  // provide typings for `this.$store`
  interface ComponentCustomProperties {
    $store: Store<State>;
  }
}
