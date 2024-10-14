<template>
  <div
    class="d-flex gap-2 justify-content-center align-items-center position-relative"
  >
    <h4 class="position-absolute start-0">Project Name</h4>
    <!-- Trello View Icon -->
    <i
      class="fas fa-th fs-5"
      :class="{
        'text-active': $route.query.view === 'trello',
        'text-secondary': $route.query.view !== 'trello',
      }"
      @click="setView('trello')"
      title="Trello View"
    >
      <span class="mx-2 fs-5">Grid</span>
    </i>

    <!-- List View Icon -->
    <i
      class="fas fa-list fs-5"
      :class="{
        'text-active': $route.query.view === 'list',
        'text-secondary': $route.query.view !== 'list',
      }"
      @click="setView('list')"
      title="List View"
    >
      <span class="mx-2 fs-5">List</span>
    </i>
  </div>
</template>

<script>
export default {
  name: "ViewToggle",
  methods: {
    setView(viewType) {
      this.$router.push({
        path: "/tasks",
        query: { view: viewType },
      });
    },
  },
};
</script>

<style scoped>
.text-active {
  color: #3498db;
}

i {
  cursor: pointer;
  transition: color 0.3s;
}

i:hover {
  color: #3498db;
}

span {
  font-family: "Roboto", sans-serif;
  font-weight: 200;
}
</style>
