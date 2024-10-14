<!-- App.vue -->

<template>
  <div class="d-flex">
    <!-- Fixed Sidebar -->
    <aside class="navbar d-flex flex-column align-items-center">
      <NavBar />
    </aside>

    <!-- Main Content -->
    <main class="flex-grow-1 overflow-auto">
      <!-- Header for View Toggle and user data -->
      <TopHeader />
      <!-- Router View -->
      <router-view class="px-4"></router-view>
    </main>
  </div>
</template>

<script>
import NavBar from "./components/NavBar.vue";
import TopHeader from "./components/TopHeader.vue";

export default {
  components: {
    NavBar,
    TopHeader,
  },
  data() {
    return {
      currentView: "trello",
    };
  },
  mounted() {
    // Trigger animation once on page load
    const fallingZ = document.querySelector(".falling-z");
    fallingZ.classList.add("auto-fall");

    // Remove auto-fall class after animation completes so that hover works correctly
    setTimeout(() => {
      fallingZ.classList.remove("auto-fall");
    }, 1500); // Length of the animation in ms
  },
  methods: {
    setView(viewType) {
      console.log("Switching to:", viewType); // For debugging
      this.$router.push({
        path: "/tasks",
        query: { view: viewType },
      }); // Update the current view using query parameters
    },
  },
};
</script>

<style scoped></style>
