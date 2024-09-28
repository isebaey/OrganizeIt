<template>
  <div class="container-fluid mt-3">
    <div class="row g-2">
      <!-- To Do List -->
      <TasksList
        :tasks="toDoTasks"
        listTitle="📃 To Do"
        listStyle="text-bg-danger"
      />

      <!-- In Progress List -->
      <TasksList
        :tasks="inProgressTasks"
        listTitle="📈 In Progress"
        listStyle="text-bg-warning"
      />

      <!-- Done List -->
      <TasksList
        :tasks="doneTasks"
        listTitle="✅ Done"
        listStyle="text-bg-success"
      />
    </div>
  </div>
</template>

<script>
import NewTask from "./ShowTask.vue";
import ShowWhenNoTasks from "./ShowWhenNoTasks.vue";
import TasksList from "./TasksList.vue";

export default {
  components: {
    NewTask,
    ShowWhenNoTasks,
    TasksList,
  },
  data() {
    return {
      toDoTasks: [
        {
          taskId: "1",
          taskName: "Sample To Do Task",
          taskDescription: "Description for To Do Task",
          taskTag: "Urgent",
        },
        {
          taskId: "1",
          taskName: "Sample To Do Task",
          taskDescription: "Description for To Do Task",
          taskTag: "Urgent",
        },
      ],
      inProgressTasks: [],
      doneTasks: [
        {
          taskId: "3",
          taskName: "Sample Done Task",
          taskDescription: "Description for Done Task",
          taskTag: "Completed",
        },
        {
          taskId: "3",
          taskName: "Sample Done Task",
          taskDescription: "Description for Done Task",
          taskTag: "Completed",
        },
        {
          taskId: "3",
          taskName: "Sample Done Task",
          taskDescription: "Description for Done Task",
          taskTag: "Completed",
        },
      ],
    };
  },
};
</script>

<style></style>
