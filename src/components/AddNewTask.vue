<template>
  <!-- Add Task -->
  <div class="card mx-2 my-3 shadow-sm border-0 rounded-3">
    <div class="card-body">
      <div class="mb-3">
        <label for="taskName" class="form-label">Task Name</label>
        <input
          type="text"
          class="form-control"
          id="taskName"
          placeholder="Enter task name"
        />
      </div>
      <div class="mb-3">
        <label for="taskDescription" class="form-label">Task Description</label>
        <textarea
          class="form-control"
          id="taskDescription"
          rows="3"
          placeholder="Enter task description"
        ></textarea>
      </div>
      <div class="mb-3">
        <label for="taskTag" class="form-label">Task Tag</label>
        <div class="input-group">
          <select class="form-select" id="taskTag">
            <option value="urgent">Urgent</option>
            <option value="low">Low</option>
            <option value="completed">Completed</option>
            <option value="new">Add New Tag</option>
          </select>
        </div>
      </div>
      <button type="submit" class="btn btn-light d-block mx-auto">
        Add Task
      </button>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
