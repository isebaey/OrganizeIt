import "./assets/main.css";

import { createApp } from "vue";
import App from "./App.vue";

// Import Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";

// Import Bootstrap Bundle JS (includes Popper)
import "bootstrap/dist/js/bootstrap.bundle.min.js";

// Import Font Awesome CSS
import "@fortawesome/fontawesome-free/css/all.min.css";

// Srotre Management
import { createPinia } from "pinia";

// Import Vue Router
import { createRouter, createWebHistory } from "vue-router";
import BoardColumn from "./components/BoardColumn.vue";
import ProjectBoard from "./components/projects/ProjectBoard.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/projects", component: ProjectBoard },
    {
      path: "/tasks",
      component: BoardColumn,
      props: (route) => ({ currentView: route.query.view || "trello" }),
    },
    {
      path: "/",
      component: BoardColumn,
      props: { currentView: "trello" },
    },
  ],
});

const app = createApp(App);

// Create router instance
app.use(router);

// Create a Pinia instance
const pinia = createPinia();
app.use(pinia);

app.mount("#app");
