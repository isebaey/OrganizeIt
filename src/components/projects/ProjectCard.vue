<template>
  <div class="Projects-section bg-white rounded-5 p-4 shadow-sm">
    <!-- Projects Section Header -->
    <div
      class="projects-section-header d-flex justify-content-between text-muted mb-3"
    >
      <h2>Projects</h2>
      <h2 class="time">December, 12</h2>
    </div>

    <!-- Projects Status  -->
    <div class="projects-status d-flex gap-5 mb-3">
      <div class="item-status">
        <span class="status-number h2 fw-bold d-flex">45</span>
        <span class="status-type fs-4"
          >In Progress <span class="fs-5">○</span></span
        >
      </div>
      <div class="item-status">
        <span class="status-number h2 fw-bold d-flex">24</span>
        <span class="status-type fs-4"
          >Upcoming <span class="fs-5">○</span></span
        >
      </div>
      <div class="item-status">
        <span class="status-number h2 fw-bold d-flex">62</span>
        <span class="status-type fs-4">Total Projects</span>
      </div>
    </div>

    <!-- Display Projects -->
    <div class="container-fluid">
      <div class="row">
        <!-- Project -->
        <div class="col-md-4">
          <div class="card p-4 mb-4 rounded-5 border-0 shadow-sm">
            <div
              class="header d-flex justify-content-between text-muted mb-3 time fs-6"
            >
              <span>December 12</span>
              <span class="badge bg-success">Done</span>
            </div>
            <h3 class="heading mb-3">projects</h3>
            <div class="progress-section">
              <p class="fs-6 text-muted">Progress</p>
              <div class="progress mb-2">
                <div
                  class="progress-bar"
                  role="progressbar"
                  style="width: 100%"
                  aria-valuenow="70"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
              <p class="fs-6 text-end">100%</p>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card p-4 mb-4 rounded-5 border-0 shadow-sm">
            <div
              class="header d-flex justify-content-between text-muted mb-3 time fs-6"
            >
              <span>December 12</span>
              <span class="badge bg-success">Done</span>
            </div>
            <h3 class="heading mb-3">projects</h3>
            <div class="progress-section">
              <p class="fs-6 text-muted">Progress</p>
              <div class="progress mb-2">
                <div
                  class="progress-bar"
                  role="progressbar"
                  style="width: 100%"
                  aria-valuenow="70"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
              <p class="fs-6 text-end">100%</p>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card p-4 mb-4 rounded-5 border-0 shadow-sm">
            <div
              class="header d-flex justify-content-between text-muted mb-3 time fs-6"
            >
              <span>December 12</span>
              <span class="badge bg-success">Done</span>
            </div>
            <h3 class="heading mb-3">projects</h3>
            <div class="progress-section">
              <p class="fs-6 text-muted">Progress</p>
              <div class="progress mb-2">
                <div
                  class="progress-bar"
                  role="progressbar"
                  style="width: 100%"
                  aria-valuenow="70"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
              <p class="fs-6 text-end">100%</p>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card p-4 mb-4 rounded-5 border-0 shadow-sm">
            <div
              class="header d-flex justify-content-between text-muted mb-3 time fs-6"
            >
              <span>December 12</span>
              <span class="badge bg-success">Done</span>
            </div>
            <h3 class="heading mb-3">projects</h3>
            <div class="progress-section">
              <p class="fs-6 text-muted">Progress</p>
              <div class="progress mb-2">
                <div
                  class="progress-bar"
                  role="progressbar"
                  style="width: 100%"
                  aria-valuenow="70"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
              <p class="fs-6 text-end">100%</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <ProjectsList />
</template>

<script>
import { useProjectsStore } from "../../../stores/projects";
import ProjectsList from "./ProjectsList.vue";

export default {
  data() {},
  components: {
    ProjectsList,
  },
  methods: {},
  computed: {
    projects() {},
  },
};
</script>

<style></style>
