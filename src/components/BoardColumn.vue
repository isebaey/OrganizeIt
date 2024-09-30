<template>
  <div class="container-fluid mt-3">
    <div class="row g-2">
      <!-- To Do List -->
      <TasksList
        :tasks="toDoTasks"
        listTitle="📃 To Do"
        listStyle="text-bg-danger"
        @task-added="addTaskToList('toDoTasks')"
      />

      <!-- In Progress List -->
      <TasksList
        :tasks="inProgressTasks"
        listTitle="📈 In Progress"
        listStyle="text-bg-warning"
        @task-added="addTaskToList('inProgressTasks')"
      />

      <!-- Done List -->
      <TasksList
        :tasks="doneTasks"
        listTitle="✅ Done"
        listStyle="text-bg-success"
        @task-added="addTaskToList('doneTasks')"
      />
    </div>
  </div>
</template>

<script>
import AddNewTask from "./AddNewTask.vue";
import NewTask from "./ShowTask.vue";
import ShowWhenNoTasks from "./ShowWhenNoTasks.vue";
import TasksList from "./TasksList.vue";

export default {
  components: {
    NewTask,
    ShowWhenNoTasks,
    TasksList,
    AddNewTask,
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
        {
          taskId: "1",
          taskName: "Sample To Do Task",
          taskDescription: "Description for To Do Task",
          taskTag: "Urgent",
        },
      ],
    };
  },
  methods: {
    addTaskToList(listName) {
      return (newTask) => {
        this[listName].push(newTask); // Push the new task to the respective list
        console.log(`Updated ${listName}:`, this[listName]); // Log the updated task list

        // Log the state of all task lists for debugging
        console.log("To Do Tasks:", this.toDoTasks);
        console.log("In Progress Tasks:", this.inProgressTasks);
        console.log("Done Tasks:", this.doneTasks);
      };
    },
  },
};
</script>
