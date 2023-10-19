import { InjectionKey } from "vue";
import { createStore, useStore as storeHook, Store } from "vuex";
import createPersistedState from "vuex-persistedstate";

export interface State {
  user: any;
  token: any;
  isLoggedIn: boolean;
  currentDealership: any;
  order: any[];
}

export const key: InjectionKey<Store<State>> = Symbol();

const CoreModuleState = {
  state: () => ({
    token: null,
    isLoggedIn: false,
    user: null,
    currentDealership: null,
    order: [],
  }),
  mutations: {
    setToken(state: State, token: string) {
      state.token = token;
    },
    setUser(state: State, user: any) {
      state.user = user;
    },
    setLoggedIn(state: State, isLoggedIn: boolean) {
      state.isLoggedIn = isLoggedIn;
    },
    setCurrentDealership(state: State, currentDealership: any) {
      state.currentDealership = currentDealership;
    },
    setOrder(state: State, order: any[]) {
      state.order = order;
    },
  },
  actions: {
    async setToken({ commit }: any, token: string) {
      await commit("setToken", token);
    },
    async setUser({ commit }: any, user: any) {
      await commit("setUser", user);
    },
    async setLoggedIn({ commit }: any, isLoggedIn: boolean) {
      await commit("setLoggedIn", isLoggedIn);
    },
    async setCurrentDealership({ commit }: any, currentDealership: any) {
      await commit("setCurrentDealership", currentDealership);
    },
    async setOrder({ commit }: any, order: any[]) {
      await commit("setOrder", order);
    },
  },
  getters: {
    getToken(state: State) {
      return state.token;
    },
    getUser(state: State) {
      return state.user;
    },
    getLoggedIn(state: State) {
      return state.isLoggedIn;
    },
    getCurrentDealership(state: State) {
      return state.currentDealership;
    },
    getOrder(state: State) {
      return state.order;
    },
  },
};

export const store = createStore<State>({
  modules: {
    core: CoreModuleState,
  },
  plugins: [
    createPersistedState({
      storage: window.localStorage,
      paths: [
        "core.token",
        "core.isLoggedIn",
        "core.user",
        "core.currentDealership",
        "core.order",
      ],
    }),
  ],
});

export function useStore() {
  return storeHook(key);
}
