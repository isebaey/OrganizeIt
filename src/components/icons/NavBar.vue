<template>
  <nav
    class="navbar navbar-expand-lg d-flex flex-column position-fixed top-0 start-0 p-1 shadow vh-100"
  >
    <div class="container-fluid d-flex flex-column">
      <a class="navbar-brand" href="#">OrganizeIt</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav d-flex flex-column align-items-center">
          <li class="nav-item h3">
            <a
              :class="`nav-link ${isActive(0) ? 'active' : ''} p-4`"
              @click="setActive(0)"
              aria-current="page"
              href="#"
              ><i class="fa fa-home" aria-hidden="true"></i>
            </a>
          </li>
          <li class="nav-item h3">
            <a :class="`nav-link ${isActive(1) ? 'active' : ''} p-4`" @click="setActive(1)" href="#"
              ><i class="fa fa-folder-open" aria-hidden="true"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: null // Track the index of the active link
    }
  },
  methods: {
    setActive(index) {
      this.activeIndex = index // Set the active index on click
    },
    isActive(index) {
      return this.activeIndex === index // Check if the index is active
    }
  }
}
</script>

<style>
.navbar {
  width: 80px;
  background-color: #f8f9fa;
}
</style>
