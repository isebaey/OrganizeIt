<template>
  <button
    class="btn btn-lg px-4 py-2 border border-light shadow-sm add-task rounded-4 mt-4 mx-auto d-block"
    @click="emitAddTask"
  >
    + Add Task
  </button>
</template>

<script>
export default {
  methods: {
    emitAddTask() {
      console.log("Add Task button clicked");
      this.$emit("add-task"); // Emit the 'add-task' event
    },
  },
};
</script>

<style scoped>
button {
  transition: 0.3s all;
}

button:hover {
  background: #f5f5f5;
}
</style>
