import { createApp } from "vue";
import App from "./App.vue";
import { createMemoryHistory, createRouter } from "vue-router";
import Banner from "./components/Banner.vue";
import Details from "./components/Details.vue";

const routes = [
  { path: "/", component: Banner },
  { path: "/details", component: Details },
];

export const router = createRouter({
  history: createMemoryHistory(),
  routes,
});

createApp(App).use(router).mount("#app");
