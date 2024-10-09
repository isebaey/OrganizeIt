<template>
  <div
    class="add-new-project bg-white p-4 rounded-5 shadow-sm d-flex d-flex flex-column"
  >
    <!-- Project Info -->
    <div class="project-info">
      <label for="project-title" class="h4 mb-3 text-dark">Project Info</label>
      <input
        type="text"
        id="project-title"
        class="form-control mb-3 rounded-5 p-3"
        placeholder="Project Title"
        aria-label="Project Title"
      />
      <textarea
        name="project-description"
        id="project-description"
        class="form-control text-muted rounded-5 p-3"
        rows="5"
        placeholder="Write a short description..."
        aria-label="Project Description"
      ></textarea>
    </div>

    <!-- Project Priority -->
    <div class="project-priority">
      <label for="project-priority" class="h4 mb-3 text-dark">Priority</label>
      <div class="priority-card p-3 lh-lg rounded-5 border">
        <div class="form-check">
          <input
            class="form-check-input"
            type="radio"
            value="Low"
            name="priority"
            id="priority-low"
            checked
          />
          <label class="form-check-label" for="priority-low">Low</label>
        </div>
        <div class="form-check">
          <input
            class="form-check-input"
            type="radio"
            value="Medium"
            name="priority"
            id="priority-medium"
          />
          <label class="form-check-label" for="priority-medium">Medium</label>
        </div>
        <div class="form-check">
          <input
            class="form-check-input"
            type="radio"
            value="High"
            name="priority"
            id="priority-high"
          />
          <label class="form-check-label" for="priority-high">High</label>
        </div>
        <div class="form-check">
          <input
            class="form-check-input"
            type="radio"
            value="Urgent"
            name="priority"
            id="priority-urgent"
          />
          <label class="form-check-label" for="priority-urgent">Urgent</label>
        </div>
      </div>
    </div>

    <!-- Project Timeline -->
    <div class="project-timeline">
      <label for="project-timeline" class="h4 mb-3 text-dark"
        >Set Timeline</label
      >
      <VueDatePicker
        v-model="date"
        id="project-timeline"
        aria-label="Project Timeline"
        :inline="{ input: true }"
        :enable-time-picker="false"
        text-input
        auto-apply
        class=""
      ></VueDatePicker>
      <div class="buttons d-flex justify-content-center">
        <div class="mt-3">
          <button type="submit" class="btn btn-primary btn-lg me-3 rounded-5">
            + Create Now
          </button>
          <button type="button" class="btn btn-lg btn-secondary rounded-5">
            × Not Now
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VueDatePicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";

export default {};
</script>

<style scoped>
.add-new-project {
  gap: 1.5rem;
}

.priority-card {
  background-color: #f8f9fa;
}

.form-control {
  border-radius: 0.5rem;
}

.btn {
  transition:
    background-color 0.3s ease,
    color 0.3s ease;
}

.btn-primary {
  background-color: var(--main-color);
  border-color: var(--main-color);
}

.btn-primary:hover {
  background-color: #0056b3;
  border-color: #0056b3;
}

.btn-secondary {
  background-color: #6c757d;
  border-color: #6c757d;
}

.btn-secondary:hover {
  background-color: #5a6268;
  border-color: #5a6268;
}
</style>
