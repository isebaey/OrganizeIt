<template>
  <div
    class="container-fluid vh-100 d-flex justify-content-center align-items-center bg-custom-gradient"
  >
    <main class="main-container">
      <section
        class="timer card p-5 rounded-4 shadow d-flex flex-column align-items-center mx-auto"
      >
        <h1 class="display-4 fw-bold text-white mb-4">Timer Focus</h1>

        <header class="timer-buttons d-flex justify-content-center mb-4">
          <button class="btn btn-timer shadow-sm mx-2">25 Min</button>
          <button class="btn btn-timer shadow-sm mx-2">45 Min</button>
          <button class="btn btn-timer shadow-sm mx-2">60 Min</button>
        </header>

        <div class="row justify-content-between text-center mb-4">
          <div class="col-6">
            <p class="text-white">Session Length</p>
            <div
              class="counter d-flex align-items-center justify-content-center"
            >
              <button class="btn btn-default" id="sessDec">-</button>
              <div id="session" class="mx-3">25</div>
              <button class="btn btn-default" id="sessInc">+</button>
            </div>
          </div>

          <div class="col-6">
            <p class="text-white">Break Length</p>
            <div class="break d-flex align-items-center justify-content-center">
              <button class="btn btn-default" id="breakDec">-</button>
              <div id="break" class="mx-3">5</div>
              <button class="btn btn-default" id="breakInc">+</button>
            </div>
          </div>
        </div>

        <section class="p-5 d-flex flex-column align-items-center text-center">
          <p class="timer-display mb-1">24:58</p>
          <p class="text-muted mb-0">
            Completed Sessions: <span class="fw-bold">0</span>
          </p>
        </section>

        <footer class="d-flex justify-content-center mt-3">
          <button
            class="mx-2 btn-control rounded-circle bg-transparent border-0"
            title="Pause"
          >
            <i class="fa fa-pause text-danger fs-3"></i>
          </button>
          <button
            class="mx-2 btn-control rounded-circle bg-transparent border-0"
            title="Play"
          >
            <i class="fa fa-play text-success fs-1"></i>
          </button>
          <button
            class="mx-2 btn-control rounded-circle bg-transparent border-0"
            title="Reset"
          >
            <i class="fa fa-refresh text-primary fs-3"></i>
          </button>
        </footer>
      </section>
    </main>
  </div>
</template>

<style scoped>
/* Container and Background */
.bg-custom-gradient {
  background: linear-gradient(135deg, #1d78c1, #5bc0de 50%, #3498db);
}

/* Main Timer Card */
.timer {
  background: rgba(52, 152, 219, 0.1);
  backdrop-filter: blur(20px);
  border-radius: 20px;
  max-width: 450px;
  padding: 40px;
}

/* Title */
h1 {
  font-size: 2.5rem;
  color: #ffffff;
  text-shadow: 1px 1px 5px rgba(0, 0, 0, 0.4);
}

/* Timer Buttons */
.btn-timer {
  border: 1px solid rgba(255, 255, 255, 0.2);
  font-size: 1.2rem;
  color: #ffffff;
  transition: all 0.3s ease;
  border-radius: 50px;
  padding: 10px 20px;
  backdrop-filter: blur(5px);
}

.btn-timer:hover {
  background-color: #3498db;
  color: #ffffff;
  transform: scale(1.05);
}

/* Counter */
.counter,
.break {
  background: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px; /* Space between elements */
}

/* Timer Display */
.timer-display {
  font-size: 4rem;
  color: #ffffff;
  font-weight: bold;
  text-shadow: 1px 1px 10px rgba(0, 0, 0, 0.5);
}

/* Control Buttons */
.btn-control {
  padding: 0;
  cursor: pointer;
  transition: transform 0.3s ease;
  border-radius: 50%;
}

.btn-control:hover {
  transform: scale(1.1);
  background: rgba(255, 255, 255, 0.1);
}

/* Adjusted Success Color */
.text-success {
  color: rgb(71, 207, 115) !important;
}
</style>
