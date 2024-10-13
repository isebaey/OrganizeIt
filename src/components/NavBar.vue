<template>
  <nav
    class="navbar d-flex flex-column position-fixed top-0 start-0 shadow vh-100"
  >
    <div class="d-flex flex-column justify-between h-100">
      <!-- Logo Section -->
      <router-link
        class="navbar-brand d-flex justify-content-center my-4 w-100"
        :to="{ path: '/' }"
        title="OrgnizeIt logo"
      >
        <i class="fa fa-tasks logo fs-1"></i>
      </router-link>
      <hr class="text-white w-75 mx-auto mt-1" />

      <!-- Nav Links -->
      <ul
        class="d-flex flex-column align-items-center flex-grow-1 list-unstyled"
      >
        <li class="nav-item my-2">
          <router-link
            class="nav-link py-3 d-flex flex-column gap-2 align-items-center"
            :to="{ path: '/' }"
            title="Dashboard"
          >
            <i class="fa fa-dashboard"></i>
            <p class="h6">Dashboard</p>
          </router-link>
        </li>
        <li class="nav-item my-2">
          <router-link
            class="nav-link py-3 d-flex flex-column gap-2 align-items-center"
            :to="{ path: '/projects' }"
            title="Projects List"
          >
            <i class="fa fa-rocket"></i>
            <p class="h6">Projects</p>
          </router-link>
        </li>
        <li class="nav-item my-2">
          <router-link
            class="nav-link py-3 d-flex flex-column gap-2 align-items-center"
            :to="{ path: '/tasks' }"
            title="Manage your Tasks"
          >
            <i class="fa fa-list"></i>
            <p class="h6">Tasks</p>
          </router-link>
        </li>
        <li class="nav-item my-2">
          <router-link
            class="nav-link py-3 d-flex flex-column gap-2 align-items-center"
            :to="{ path: '/tags' }"
            title="Tags"
          >
            <i class="fa fa-tag"></i>
            <p class="h6">Tags</p>
          </router-link>
        </li>
        <li class="nav-item my-2">
          <router-link
            class="nav-link py-3 d-flex flex-column gap-2 align-items-center"
            :to="{ path: '/calendar' }"
            title="Calendar"
          >
            <i class="fa fa-calendar"></i>
            <p class="h6">Calendar</p>
          </router-link>
        </li>
        <li class="nav-item my-2">
          <router-link
            class="nav-link py-3 d-flex flex-column gap-2 align-items-center"
            :to="{ path: '/timer' }"
            title="Set a timer by using Pomodoro"
          >
            <i class="fa fa-stopwatch"></i>
            <p class="h6">Timer</p>
          </router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {};
</script>

<style scoped>
.nav-link {
  color: rgba(255, 255, 255, 0.8);
  transition: color 0.2s ease;
}

.nav-link.router-link-active {
  color: #3498db;
}

i {
  font-size: 1.5rem;
}
</style>
