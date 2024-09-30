<template>
  <!-- Add Task Form -->
  <div class="card mx-auto my-2 shadow-sm border-0 rounded-3 w-75">
    <div class="card-body">
      <div class="mb-3">
        <label for="taskName" class="form-label">Task Name</label>
        <input
          v-model="taskName"
          type="text"
          class="form-control"
          id="taskName"
          placeholder="Enter task name"
        />
      </div>
      <div class="mb-3">
        <label for="taskDescription" class="form-label">Task Description</label>
        <textarea
          v-model="taskDescription"
          class="form-control"
          id="taskDescription"
          rows="3"
          placeholder="Enter task description"
        ></textarea>
      </div>
      <div class="mb-3">
        <label for="taskTag" class="form-label">Task Tag</label>
        <div class="input-group">
          <select class="form-select" id="taskTag" v-model="taskTag">
            <option value="" disabled>Select a Tag</option>
            <option value="urgent">Urgent</option>
            <option value="low">Low</option>
            <option value="completed">Completed</option>
            <option value="inProgress">In Progress</option>
          </select>
        </div>
      </div>
      <button
        type="submit"
        class="btn btn-light d-block mx-auto"
        @click="emitNewTask"
      >
        Add Task
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      taskName: "",
      taskDescription: "",
      taskTag: "",
    };
  },
  methods: {
    emitNewTask() {
      const id = Date.now().toString(); // Generate the ID

      if (this.taskName && this.taskDescription && this.taskTag) {
        this.$emit("add-new-task", {
          taskId: id,
          taskName: this.taskName,
          taskDescription: this.taskDescription,
          taskTag: this.taskTag,
        });

        console.log("Task emitted:", {
          taskId: id,
          taskName: this.taskName,
          taskDescription: this.taskDescription,
          taskTag: this.taskTag,
        });

        // Clear the form
        this.taskName = "";
        this.taskDescription = "";
        this.taskTag = "";
      } else {
        alert("Please fill in all fields");
      }
    },
  },
};
</script>
