<!-- src/components/BoardColumn.vue -->
<template>
  <div>
    <!-- View Toggle Section -->
    <div class="d-flex justify-between align-items-center mb-4">
      <h2 class="h4 text-charcoal mx-2">Task Boards</h2>
      <ViewToggle :currentView="currentView" @change-view="setView" />
    </div>

    <!-- Conditional Rendering for Views -->
    <div v-if="currentView === 'trello'" class="row g-4 overflow-auto">
      <TasksList
        v-for="list in taskLists"
        :key="list.arrayName"
        :tasks="tasks[list.arrayName]"
        :listTitle="list.title"
        :listStyle="list.style"
        :array-name="list.arrayName"
      />
    </div>

    <!-- List View -->
    <div v-else>
      <TaskListView :allTasks="allTasks" />
    </div>
  </div>
</template>

<script>
import { ref, computed } from "vue";
import { useTasksStore } from "../../stores/tasks";
import TasksList from "./TasksList.vue";
import TaskListView from "./TaskListView.vue";
import ViewToggle from "./ViewToggle.vue";

export default {
  name: "BoardColumn",
  components: {
    TasksList,
    TaskListView,
    ViewToggle,
  },
  setup() {
    const currentView = ref("trello");
    const tasks = useTasksStore();

    const setView = (viewType) => {
      currentView.value = viewType;
    };

    const allTasks = computed(() => [
      ...tasks.toDoTasks,
      ...tasks.inProgressTasks,
      ...tasks.doneTasks,
    ]);

    const taskLists = [
      {
        title: "📃 To Do",
        style: "bg-primary",
        arrayName: "toDoTasks",
      },
      {
        title: "📈 In Progress",
        style: "bg-secondary",
        arrayName: "inProgressTasks",
      },
      {
        title: "✅ Done",
        style: "bg-success",
        arrayName: "doneTasks",
      },
    ];

    return {
      currentView,
      tasks,
      setView,
      allTasks,
      taskLists,
    };
  },
};
</script>

<style scoped>
.bg-primary {
  background-color: #1abc9c; /* Turquoise Blue */
  color: #ffffff;
}

.bg-secondary {
  background-color: #e67e22; /* Sunset Orange */
  color: #ffffff;
}

.bg-success {
  background-color: #2ecc71; /* Green */
  color: #ffffff;
}
</style>
