<template>
  <header class="d-flex align-items-center py-2 px-4 mb-4 bg-white">
    <!-- Logo Section -->
    <router-link
      class="navbar-brand d-flex justify-content-center align-items-center logo-container"
      :to="{ path: '/' }"
      title="OrgnizeIt logo"
    >
      <h1 class="logo fw-bold fs-2 me-2">
        <span class="stretch">O</span>
        <span class="stretch">r</span>
        <span class="stretch">g</span>
        <span class="stretch">n</span>
        <span class="stretch">i</span>
        <span class="falling-z">z</span>
        <span class="stretch">e</span>
        <span class="stretch">I</span>
        <span class="stretch">t</span>
      </h1>
    </router-link>

    <!-- Search component -->
    <SearchBox class="ms-auto" />

    <div class="ms-4">
      <router-link class="py-3 gap-2" :to="{ path: '/' }" title="notifications">
        <i class="fa fa-bell fs-4 text-muted"></i>
      </router-link>
    </div>

    <div class="ms-4">
      <router-link class="py-3 gap-2" :to="{ path: '/' }" title="user">
        <img
          src="https://randomuser.me/api/portraits/men/1.jpg"
          alt="User"
          title="User Settings"
          style="width: 40px"
          class="rounded-5"
        />
      </router-link>
    </div>
  </header>
</template>

<script>
import SearchBox from "./SearchBox.vue";

export default {
  components: {
    SearchBox,
  },
};
</script>

<style scoped>
aside.navbar {
  height: 100vh;
}

/* logo style */
.logo-container {
  position: relative;
  display: inline-block;
  overflow: hidden;
}

.logo {
  display: flex;
  letter-spacing: 2px;
}

/* Stretch animation for the letters */
.stretch {
  display: inline-block;
  transition:
    transform 0.3s ease,
    color 0.3s ease;
}

/* Falling Z with hover and auto-trigger animation */
.falling-z {
  display: inline-block;
  color: var(--main-color);
  transition:
    transform 0.5s ease-in-out,
    color 0.5s ease-in-out;
}

.logo-container:hover .falling-z {
  transform: rotate(-25deg) translateY(10px);
  color: #e74c3c; /* Change color to a 'danger' red when falling */
}

.logo-container:hover .stretch {
  transform: scale(1.1);
  color: var(--main-color);
}

/* Auto-trigger fall animation once on load */
.auto-fall {
  animation: bounceBack 1.5s ease forwards;
}

i {
  transition: 300ms all;
}

i:hover {
  opacity: 0.7;
}

/* Bouncing back animation when the "Z" is rescued */
@keyframes bounceBack {
  0% {
    transform: rotate(0) translateY(0);
  }
  50% {
    transform: rotate(-25deg) translateY(10px);
  }
  100% {
    transform: rotate(0) translateY(0);
  }
}
</style>
