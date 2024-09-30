<!-- src/components/ViewToggle.vue -->
<template>
  <div class="d-flex">
    <!-- Trello View Icon -->
    <i
      class="fas fa-th fa-2x me-3"
      :class="{
        'text-primary': currentView === 'trello',
        'text-secondary': currentView !== 'trello',
      }"
      @click="setView('trello')"
      title="Trello View"
    ></i>

    <!-- List View Icon -->
    <i
      class="fas fa-list fa-2x"
      :class="{
        'text-primary': currentView === 'list',
        'text-secondary': currentView !== 'list',
      }"
      @click="setView('list')"
      title="List View"
    ></i>
  </div>
</template>

<script>
export default {
  name: "ViewToggle",
  props: {
    currentView: {
      type: String,
      required: true,
    },
  },
  methods: {
    setView(viewType) {
      this.$emit("change-view", viewType);
    },
  },
};
</script>

<style scoped>
.text-primary {
  color: #1abc9c; /* Turquoise Blue */
}

.text-secondary {
  color: #6c757d; /* Gray */
}

i {
  cursor: pointer;
  transition: color 0.3s;
}

i:hover {
  color: #1abc9c; /* Turquoise Blue on hover */
}
</style>
