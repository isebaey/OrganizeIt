<template>
  <nav
    class="navbar d-flex flex-column position-fixed top-0 start-0 shadow vh-100"
  >
    <div class="d-flex flex-column justify-between h-100">
      <!-- Logo Section -->
      <a class="navbar-brand d-flex justify-content-center my-4 w-100" href="#">
        <i class="fa fa-tasks logo fs-1" title="OrgnizeIt logo"></i>
      </a>
      <hr class="text-white w-75 mx-auto mt-1" />

      <!-- Nav Links  -->
      <ul
        class="d-flex flex-column align-items-center flex-grow-1 list-unstyled"
      >
        <li class="nav-item my-2">
          <a
            class="nav-link py-3 d-flex flex-column gap-2 align-items-center"
            href="#"
            title="Home"
          >
            <i class="fa fa-home"></i>
            <p class="h6">Home</p>
          </a>
        </li>
        <li class="nav-item my-2">
          <a
            class="nav-link py-3 d-flex flex-column gap-2 align-items-center"
            href="#"
            title="Projects List"
          >
            <i class="fa fa-rocket"></i>
            <p class="h6">Projects</p>
          </a>
        </li>
        <li class="nav-item my-2">
          <a
            class="nav-link py-3 d-flex flex-column gap-2 align-items-center"
            href="#"
            title="Create A New Project"
          >
            <i class="fa fa-tag"></i>
            <p class="h6">Tags</p>
          </a>
        </li>
        <li class="nav-item my-2">
          <a
            class="nav-link py-3 d-flex flex-column gap-2 align-items-center"
            href="#"
            title="Create A New Project"
          >
            <i class="fa fa-add"></i>
            <p class="h6">Add</p>
          </a>
        </li>
        <li class="nav-item mt-auto">
          <a
            class="nav-link my-2 d-flex justify-center"
            href="#"
            title="User Settings"
          >
            <img
              src="https://randomuser.me/api/portraits/men/1.jpg"
              alt="User"
              title="User Settings"
              style="width: 50px"
              class="rounded-5"
            />
          </a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {};
</script>

<style scoped>
.navbar {
  width: 80px;
  background: linear-gradient(180deg, #1e2024, #232527);
  color: #ffffff;
}

.logo {
  color: #20bfa9;
}

.nav-link {
  color: rgba(255, 255, 255, 0.8);
  transition:
    color 0.2s ease,
    background-color 0.2s ease;
}

.nav-link:hover,
.nav-link.active {
  color: #20bfa9;
  border-radius: 8px;
  transition: 0.3s ease;
}

i {
  font-size: 1.5rem;
}

img.rounded-5:hover {
  transform: scale(1.05);
  transition: transform 0.3s ease;
}
</style>
