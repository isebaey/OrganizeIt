<!-- src/components/AddNewTask.vue -->
<template>
  <!-- Add Task Form -->
  <div class="bg-offwhite rounded-lg shadow p-4 my-3">
    <form @submit.prevent="addTask">
      <div class="mb-3">
        <label for="taskName" class="form-label">Task Name</label>
        <input
          v-model="task.taskName"
          type="text"
          id="taskName"
          class="form-control"
          placeholder="Enter task name"
          required
        />
      </div>
      <div class="mb-3">
        <label for="taskDescription" class="form-label">Task Description</label>
        <textarea
          v-model="task.taskDescription"
          id="taskDescription"
          rows="3"
          class="form-control"
          placeholder="Enter task description"
          required
        ></textarea>
      </div>
      <div class="mb-3">
        <label for="taskTag" class="form-label">Task Tag</label>
        <select
          v-model="task.taskTag"
          id="taskTag"
          class="form-select"
          required
        >
          <option value="" disabled>Select a Tag</option>
          <option value="urgent">Urgent</option>
          <option value="low">Low</option>
          <option value="completed">Completed</option>
          <option value="inProgress">In Progress</option>
        </select>
      </div>
      <div class="d-flex justify-end">
        <button
          type="submit"
          class="btn btn-primary d-flex align-items-center"
          :disabled="!task.taskName || !task.taskDescription || !task.taskTag"
          title="Add Task"
        >
          <i class="fas fa-plus me-2"></i> Add Task
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import { useTasksStore } from "../../stores/tasks";

export default {
  name: "AddNewTask",
  props: {
    arrayName: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      task: {
        taskName: "",
        taskDescription: "",
        taskTag: "",
      },
    };
  },
  methods: {
    addTask() {
      const taskStore = useTasksStore();
      taskStore.addTaskToList(this.task, this.arrayName);
      this.$emit("task-added");
      this.task = {
        taskName: "",
        taskDescription: "",
        taskTag: "",
        taskArray: this.arrayName,
      };
    },
  },
};
</script>

<style scoped>
/* Optional: Additional styling if needed */
</style>
