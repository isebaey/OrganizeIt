<template>
  <div class="add-new-project-sidebar shadow-sm p-3 bg-white rounded-4">
    <!-- Project Info -->
    <div class="project-info mb-3">
      <h5 class="text-muted">Add Project</h5>
      <input
        type="text"
        id="project-title"
        class="form-control mb-2"
        placeholder="Project Title"
        aria-label="Project Title"
      />
      <textarea
        id="project-description"
        class="form-control"
        rows="3"
        placeholder="Short description..."
        aria-label="Project Description"
      ></textarea>
    </div>

    <!-- Project Priority -->
    <div class="project-priority mb-3">
      <h5 class="text-muted">Priority</h5>
      <select id="project-priority" class="form-select">
        <option value="" disabled selected>Choose Priority</option>
        <option value="Low">Low</option>
        <option value="Medium">Medium</option>
        <option value="High">High</option>
        <option value="Urgent">Urgent</option>
      </select>
    </div>

    <!-- Project Timeline -->
    <div class="project-timeline mb-3">
      <h5 class="text-muted">Set Timeline</h5>
      <VueDatePicker
        v-model="date"
        aria-label="Project Timeline"
        :inline="{ input: true }"
        :enable-time-picker="false"
        text-input
        auto-apply
        class="form-control p-2"
      ></VueDatePicker>
    </div>

    <!-- Action Button -->
    <div class="d-grid">
      <button type="submit" class="btn btn-primary rounded-pill">
        + Create Now
      </button>
    </div>
  </div>
</template>

<script>
import VueDatePicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";

export default {
  data() {
    return {
      date: null,
    };
  },
};
</script>

<style scoped>
.add-new-project-sidebar {
  height: auto;
}

.text-primary {
  font-size: 1.15rem;
  font-weight: bold;
  color: var(--main-color);
}

.form-control,
.form-select {
  border-radius: 0.75rem;
}

.dp__main {
  border: none;
}

button.btn-primary {
  background-color: var(--main-color);
  transition: background-color 0.3s;
  border: none;
}

button.btn-primary:hover {
  background-color: #2980b9;
}
</style>
