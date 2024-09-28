<template>
  <div class="no-tasks vh-100 d-flex flex-column align-items-center h3">
    <AddTaskBTN />
    <p class="my-auto">No Tasks 🚫</p>
  </div>
</template>

<script>
import AddTaskBTN from "./AddTaskBTN.vue";

export default {
  components: {
    AddTaskBTN,
  },
};
</script>

<style scoped></style>
