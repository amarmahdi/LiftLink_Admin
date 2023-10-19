import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import Routes from "../routes/index.ts";
import { apolloProvider } from "./v-apollo.ts";
import { store, key } from "./services/store/index.ts";

const app = createApp(App);

app.use(Routes);
app.use(apolloProvider);
app.use(store, key);
app.mount("#app");
