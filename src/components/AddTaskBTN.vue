<template>
  <button
    class="btn btn-sm px-4 py-2 border border-light shadow-sm add-task rounded-4 mt-4 mx-auto d-block"
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
      this.$emit("add-task"); // Emit the 'add-task' event~
    },
  },
};
</script>

<style scoped>
button {
  transition:
    background-color 0.3s,
    color 0.3s;
}

button:hover {
  background-color: #3498db; /* Dark Turquoise */
  color: #ffffff;
}
</style>
