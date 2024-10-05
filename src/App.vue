<template>
  <div class="d-flex">
    <!-- Fixed Sidebar -->
    <aside class="navbar d-flex flex-column align-items-center">
      <NavBar />
    </aside>

    <!-- Main Content -->
    <main class="flex-grow-1 overflow-auto">
      <!-- Header for View Toggle and user data -->
      <header
        class="d-flex align-items-center mx-3 py-4 px-4 my-4 bg-white rounded-4"
      >
        <!-- Pass currentView and listen for the event to change the view -->
        <ViewToggle :currentView="currentView" @change-view="setView" />

        <!-- Search component -->
        <SearchBox class="ms-4" />

        <div
          class="d-flex justify-content-between align-items-center gap-2 ms-auto"
        >
          <a href="#" title="User Settings">
            <img
              src="https://randomuser.me/api/portraits/men/1.jpg"
              alt="User"
              title="User Settings"
              style="width: 50px"
              class="rounded-5"
            />
          </a>
          <span class="text-uppercase fw-bold">sebaey</span>
        </div>
      </header>

      <!-- Only RouterView, no need for manual BoardColumn -->
      <RouterView class="px-4" />
    </main>
  </div>
</template>

<script>
import NavBar from "./components/NavBar.vue";
import SearchBox from "./components/SearchBox.vue";
import ViewToggle from "./components/ViewToggle.vue";

export default {
  components: {
    NavBar,
    SearchBox,
    ViewToggle,
  },
  data() {
    return {
      currentView: "trello", // Set the default view in App.vue
    };
  },
  methods: {
    setView(viewType) {
      console.log("Switching to:", viewType); // Add this

      this.$router.push({
        path: "/tasks",
        query: { view: viewType },
      }); // Update the current view using query parameters
    },
  },
};
</script>

<style scoped>
/* Ensure the sidebar takes full height */
aside.navbar {
  height: 100vh;
}
</style>
