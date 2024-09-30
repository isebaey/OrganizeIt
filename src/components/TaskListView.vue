<!-- src/components/TaskListView.vue -->
<template>
  <div class="container">
    <!-- Header with Add Task Button -->
    <div class="d-flex justify-content-between align-items-center mb-4">
      <h2 class="h4 text-charcoal">All Tasks</h2>
      <AddTaskBTN @add-task="toggleAddTask" />
    </div>

    <!-- Add Task Form -->
    <transition name="fade">
      <AddNewTask
        v-if="showAddTask"
        array-name="toDoTasks"
        @task-added="hideAddTaskForm"
      />
    </transition>

    <!-- Task List -->
    <div v-if="allTasks.length > 0" class="d-flex flex-column gap-3">
      <NewTask v-for="task in allTasks" :key="task.taskId" :task="task" />
    </div>

    <!-- No Tasks Message -->
    <div v-else class="no-tasks mt-5">
      <ShowWhenNoTasks />
    </div>
  </div>
</template>

<script>
import NewTask from "./ShowTask.vue";
import ShowWhenNoTasks from "./ShowWhenNoTasks.vue";
import AddTaskBTN from "./AddTaskBTN.vue";
import AddNewTask from "./AddNewTask.vue";

export default {
  name: "TaskListView",
  components: {
    NewTask,
    ShowWhenNoTasks,
    AddTaskBTN,
    AddNewTask,
  },
  props: {
    allTasks: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      showAddTask: false,
    };
  },
  methods: {
    toggleAddTask() {
      this.showAddTask = !this.showAddTask;
    },
    hideAddTaskForm() {
      this.showAddTask = false;
    },
  },
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
