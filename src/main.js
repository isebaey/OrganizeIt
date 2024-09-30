import "./assets/main.css";

import { createApp } from "vue";
import App from "./App.vue";

// Import Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";

// Import Bootstrap Bundle JS (includes Popper)
import "bootstrap/dist/js/bootstrap.bundle.min.js";

// Import Font Awesome CSS
import "@fortawesome/fontawesome-free/css/all.min.css";

import { createPinia } from "pinia";

const app = createApp(App);

// Create a Pinia instance
const pinia = createPinia();
app.use(pinia);

app.mount("#app");
