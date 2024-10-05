<!-- src/components/ShowTask.vue -->
<template>
  <div class="card task-card rounded-4 border-0">
    <div class="card-body">
      <div class="d-flex justify-content-between align-items-center mb-2">
        <h5 class="card-title">{{ task.taskName }}</h5>
        <span :class="tagClass">{{ formattedTag }}</span>
      </div>
      <p class="card-text">{{ task.taskDescription }}</p>
      <!-- Interactive Buttons -->
      <div class="d-flex justify-content-end mt-3">
        <button
          class="btn btn-sm btn-outline-primary me-2"
          @click="moveTask"
          title="Move Task"
        >
          <i class="fas fa-arrow-right"></i>
        </button>
        <button
          class="btn btn-sm btn-outline-danger"
          @click="deleteTask"
          title="Delete Task"
        >
          <i class="fas fa-trash"></i>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { useTasksStore } from "../../stores/tasks";

export default {
  name: "ShowTask",
  props: {
    task: {
      type: Object,
      required: true,
    },
  },
  computed: {
    formattedTag() {
      switch (this.task.taskTag) {
        case "urgent":
          return "Urgent";
        case "low":
          return "Low";
        case "completed":
          return "Completed";
        default:
          return "General";
      }
    },
    tagClass() {
      switch (this.task.taskTag) {
        case "urgent":
          return "tag urgent";
        case "low":
          return "tag low";
        case "completed":
          return "tag completed";
        default:
          return "tag general";
      }
    },
  },
  methods: {
    deleteTask() {
      const taskStore = useTasksStore();
      taskStore.deleteTask(this.task);
    },
    moveTask() {
      const taskStore = useTasksStore();
      taskStore.moveTask(this.task);
    },
  },
};
</script>

<style scoped>
.tag {
  font-size: 0.75rem;
  padding: 0.25em 0.5em;
  border-radius: 0.25rem;
  color: #fff;
}

.tag.urgent {
  background-color: #e74c3c; /* Red */
}

.tag.low {
  background-color: #f1c40f; /* Yellow */
}

.tag.completed {
  background-color: #27ae60; /* Green */
}

.tag.inProgress {
  background-color: #e67e22; /* Orange */
}

.tag.general {
  background-color: #95a5a6; /* Gray */
}

.task-card {
  transition:
    transform 0.3s,
    box-shadow 0.3s;
}

.task-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}
</style>
