<template>
  <div>
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
import { computed } from "vue";
import { useTasksStore } from "../../stores/tasks";
import TasksList from "./TasksList.vue";
import TaskListView from "./TaskListView.vue";

export default {
  name: "BoardColumn",
  props: {
    currentView: {
      type: String,
      required: true,
    },
  },
  components: {
    TasksList,
    TaskListView,
  },
  setup() {
    const tasks = useTasksStore();

    const allTasks = computed(() => [
      ...tasks.toDoTasks,
      ...tasks.inProgressTasks,
      ...tasks.doneTasks,
    ]);

    const taskLists = [
      {
        title: "📃 To Do",
        style: "main-color",
        arrayName: "toDoTasks",
      },
      {
        title: "In Progress",
        style: "secondary-color",
        arrayName: "inProgressTasks",
      },
      {
        title: "Done",
        style: "success-color",
        arrayName: "doneTasks",
      },
    ];

    return {
      tasks,
      allTasks,
      taskLists,
    };
  },
};
</script>

<style scoped></style>
