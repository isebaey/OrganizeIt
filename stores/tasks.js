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

    moveTask(task, direction) {
      const { taskArray } = task;

      // Prevent moving left from toDoTasks or right from doneTasks
      if (
        (taskArray === "toDoTasks" && direction === "left") ||
        (taskArray === "doneTasks" && direction === "right")
      ) {
        return; //  return if the move is not allowed
      }

      // Create a copy of the task to avoid directly modifying the original before deleting it ahhhhhaaa
      const taskCopy = { ...task };

      // Handle moving left
      if (direction === "left") {
        if (taskArray === "inProgressTasks") {
          taskCopy.taskArray = "toDoTasks";
          this.addTaskToList(taskCopy, "toDoTasks");
        } else if (taskArray === "doneTasks") {
          taskCopy.taskArray = "inProgressTasks";
          this.addTaskToList(taskCopy, "inProgressTasks");
        }
      }

      // Handle moving right
      else if (direction === "right") {
        if (taskArray === "toDoTasks") {
          taskCopy.taskArray = "inProgressTasks";
          this.addTaskToList(taskCopy, "inProgressTasks");
        } else if (taskArray === "inProgressTasks") {
          taskCopy.taskArray = "doneTasks";
          this.addTaskToList(taskCopy, "doneTasks");
        }
      }

      // Delete the original task after moving it to a new list
      this.deleteTask(task);
    },
  },
});
