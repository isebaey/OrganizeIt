<script setup>
import NavBar from "./components/NavBar.vue";
import BoardColumn from "./components/BoardColumn.vue";
</script>

<template>
  <div class="container-fluid vh-100">
    <div class="row">
      <!-- Fixed Sidebar  -->
      <header class="col-md-1 vh-100">
        <NavBar />
      </header>

      <!-- Main board content -->
      <main class="col-11">
        <board-column />
      </main>
    </div>
  </div>
</template>

<style scoped>
/* Horizontal scroll for columns */
.board-container {
  overflow-x: auto;
  padding: 1rem;
  white-space: nowrap;
}
</style>
