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
        taskTag: "urgent",
        taskArray: "toDoTasks",
      },
    ],
    inProgressTasks: [
      {
        taskId: "4",
        taskName: "Develop Authentication Module",
        taskDescription:
          "Implement user login and registration functionalities.",
        taskTag: "low",
        taskArray: "inProgressTasks",
      },
      {
        taskId: "5",
        taskName: "Integrate Payment Gateway",
        taskDescription: "Set up Stripe for handling payments.",
        taskTag: "completed",
        taskArray: "inProgressTasks",
      },
    ],
    doneTasks: [],
  }),

  // Define actions = to Vue methods
  actions: {
    addTaskToList(task, arrayName) {
      // Generate a unique taskId for the new task
      task.taskId = Date.now().toString();

      // taskArray is set to the array it belongs to
      task.taskArray = arrayName;

      // Push the new task to the specified list
      this[arrayName].push(task);
      console.log(`Added task to ${arrayName}:`, task);
    },

    deleteTask(task) {
      console.log(task, task.taskArray);
      const index = this[task.taskArray].findIndex(
        (t) => t.taskId === task.taskId
      );
      if (index != -1) {
        this[task.taskArray].splice(index, 1);
        console.log(`Deleted task from ${task.taskArray}:`, task);
      }
    },

    moveTask(task) {
      if (task.taskArray == "doneTasks") {
        return "";
      }
      console.log(task);
      this.deleteTask(task);

      if (task.taskArray == "toDoTasks") {
        task.taskArray = "inProgressTasks";
        this.addTaskToList(task, "inProgressTasks");
      } else if (task.taskArray == "inProgressTasks") {
        task.taskArray = "doneTasks";
        this.addTaskToList(task, "doneTasks");
      }
    },
  },
});
