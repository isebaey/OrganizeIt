<template>
  <div class="col-md-4">
    <div class="item py-3 text-center h3 shadow-sm" :class="listStyle">
      {{ listTitle }}
    </div>
    <div class="body text-bg-light">
      <div class="no-tasks" v-if="tasks.length === 0">
        <ShowWhenNoTasks />
      </div>
      <div class="tasks" v-if="tasks.length > 0">
        <NewTask v-for="task in tasks" :key="task.taskId" :task="task" />
      </div>
    </div>

    <!-- Add Task Button and AddNewTask form -->
    <AddTaskBTN @add-task="toggleAddTask" />

    <!-- Show the AddNewTask component based on showAddTask data -->
    <div v-show="showAddTask">
      <AddNewTask @add-new-task="handleNewTask" />
    </div>
  </div>
</template>

<script>
import AddNewTask from "./AddNewTask.vue";
import AddTaskBTN from "./AddTaskBTN.vue";
import NewTask from "./ShowTask.vue";
import ShowWhenNoTasks from "./ShowWhenNoTasks.vue";

export default {
  data() {
    return {
      showAddTask: false,
    };
  },
  components: {
    NewTask,
    ShowWhenNoTasks,
    AddTaskBTN,
    AddNewTask,
  },
  props: {
    tasks: Array,
    listTitle: String,
    listStyle: String,
  },
  methods: {
    toggleAddTask() {
      this.showAddTask = !this.showAddTask;
    },
    handleNewTask(newTask) {
      this.$emit("task-added", newTask); // Emit the task upwards
      this.showAddTask = false; // Hide the form after task is added
    },
  },
};
</script>
