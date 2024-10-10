// main.js
import "./assets/main.css";

import { createApp } from "vue";
import App from "./App.vue";

// Import Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";

// Import Bootstrap Bundle JS (includes Popper)
import "bootstrap/dist/js/bootstrap.bundle.min.js";

// Import Font Awesome CSS
import "@fortawesome/fontawesome-free/css/all.min.css";

// State Management with Pinia
import { createPinia } from "pinia";

// Import VueDatePicker
import VueDatePicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";

// Import Vue Router
import { createRouter, createWebHistory } from "vue-router";
import BoardColumn from "./components/BoardColumn.vue";
import ProjectBoard from "./components/projects/ProjectBoard.vue";

import Tags from "./components/Tags.vue";
import Calendar from "./components/Calendar.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/projects", component: ProjectBoard },
    { path: "/calendar", component: Calendar },
    { path: "/tags", component: Tags },
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

// Use Router and Pinia
app.use(router);
app.use(createPinia());

// Register Global Components
app.component("VueDatePicker", VueDatePicker);

app.mount("#app");
