// src/stores/tasks.js
import { defineStore } from "pinia";

export const useTasksStore = defineStore("tasks", {
  // Define state = to Vue data
  state: () => ({
    toDoTasks: [
      {
        taskId: "1",
        taskName: "Design Landing Page",
        taskDescription:
          "Create wireframes and mockups for the new landing page.",
        taskTag: "Urgent",
      },
    ],
    inProgressTasks: [
      {
        taskId: "4",
        taskName: "Develop Authentication Module",
        taskDescription:
          "Implement user login and registration functionalities.",
        taskTag: "In Progress",
      },
      {
        taskId: "5",
        taskName: "Integrate Payment Gateway",
        taskDescription: "Set up Stripe for handling payments.",
        taskTag: "Urgent",
      },
    ],
    doneTasks: [],
  }),

  // Define actions = to Vue methods
  actions: {
    addTaskToList(task, arrayName) {
      // Generate a unique taskId for the new task
      task.taskId = Date.now().toString();
      // Push the new task to the specified list
      this[arrayName].push(task);
      console.log(`Added task to ${arrayName}:`, task);
    },
  },
});
