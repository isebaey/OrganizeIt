<template>
  <div class="card w-auto mx-2 my-3 border-light shadow-sm">
    <div class="card-body">
      <h5 class="card-title">{{ task.taskName }}</h5>
      <p class="card-text">
        {{ task.taskDescription }}
      </p>
      <button class="btn btn-sm btn-danger py-1 px-2 me-1 disabled">
        {{ task.taskTag }}
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    task: {
      type: Object,
      Required: true,
    },
  },
};
</script>

<style></style>
