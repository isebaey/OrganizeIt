import { defineStore } from "pinia";
import { useTasksStore } from "./tasks";

export const useProjectsStore = defineStore("projects", {
  state: () => ({
    projects: [
      {
        id: 1,
        name: "Learn Programming",
        description: "This is My First Project",
        toDoTasks: [],
        inProgressTasks: [],
        doneTasks: [],
      },
      {
        id: 2,
        name: "Go To Gem",
        description: "This is My Second Project",
        toDoTasks: [],
        inProgressTasks: [],
        doneTasks: [],
      },
    ],
  }),
  getters: {
    totalProjects: (state) => state.projects.length,
    inProgressProjects: (state) =>
      state.projects.filter((project) => project.state === "inprogress").length,
    upcomingProjects: (state) =>
      state.projects.filter((project) => project.state == "upcoming").length,
  },
});
