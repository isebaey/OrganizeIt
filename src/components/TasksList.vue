<!-- src/components/TasksList.vue -->
<template>
  <div class="col-md-4">
    <div
      class="d-flex justify-between align-items-center p-3 rounded-4 shadow-sm"
      :class="listStyle"
    >
      <h5 class="mb-0">{{ listTitle }}</h5>
    </div>
    <div class="p-3 bg-offwhite" style="min-height: 300px">
      <div v-if="tasks.length === 0" class="no-tasks">
        <ShowWhenNoTasks />
      </div>
      <div v-else class="d-flex flex-column gap-3">
        <NewTask v-for="task in tasks" :key="task.taskId" :task="task" />
      </div>
    </div>

    <!-- Add Task Button and AddNewTask form -->
    <div class="p-2">
      <AddTaskBTN @add-task="toggleAddTask" />
      <transition name="fade">
        <AddNewTask
          v-if="showAddTask"
          :array-name="arrayName"
          @task-added="hideAfterAddTask"
        />
      </transition>
    </div>
  </div>
</template>

<script>
import AddNewTask from "./AddNewTask.vue";
import AddTaskBTN from "./AddTaskBTN.vue";
import NewTask from "./ShowTask.vue";
import ShowWhenNoTasks from "./ShowWhenNoTasks.vue";

export default {
  name: "TasksList",
  components: {
    NewTask,
    ShowWhenNoTasks,
    AddTaskBTN,
    AddNewTask,
  },
  props: {
    tasks: {
      type: Array,
      required: true,
    },
    listTitle: {
      type: String,
      required: true,
    },
    listStyle: {
      type: String,
      required: true,
    },
    arrayName: {
      type: String,
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
    hideAfterAddTask() {
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

.no-tasks {
  color: #6c757d;
  font-size: 1.2rem;
  text-align: center;
}
</style>
