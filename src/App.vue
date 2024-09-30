<!-- src/App.vue -->
<template>
  <div class="d-flex">
    <!-- Fixed Sidebar -->
    <aside class="navbar d-flex flex-column align-items-center py-4">
      <NavBar />
    </aside>

    <!-- Main Content -->
    <main class="flex-grow-1 p-4 overflow-auto">
      <BoardColumn />
    </main>
  </div>
</template>

<script setup>
import NavBar from "./components/NavBar.vue";
import BoardColumn from "./components/BoardColumn.vue";
</script>

<style scoped>
/* Ensure the sidebar takes full height */
aside.navbar {
  height: 100vh;
}
</style>
