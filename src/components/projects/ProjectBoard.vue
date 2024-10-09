<template>
  <main class="container-fluid">
    <div class="row justify-content-between px-5">
      <div class="col-9">
        <ProjectCard />
      </div>
      <div class="col-3">
        <AddNewProject />
      </div>
    </div>
  </main>
</template>

<script>
import AddNewProject from "./AddNewProject.vue";
import ProjectCard from "./ProjectCard.vue";

export default {
  components: {
    AddNewProject,
    ProjectCard,
  },
};
</script>

<style></style>
