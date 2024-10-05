<template>
  <div class="search-wrapper rounded-4">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      fill="none"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      class="feather feather-search"
      viewBox="0 0 24 24"
    >
      <defs></defs>
      <circle cx="11" cy="11" r="8"></circle>
      <path d="M21 21l-4.35-4.35"></path>
    </svg>
    <input class="search-input" type="text" placeholder="Search" />
  </div>
</template>

<script>
export default {};
</script>

<style>
.search-wrapper {
  border-radius: 20px;
  padding-right: 12px;
  height: 60px;
  padding-inline: 15px;
  align-items: center;
  color: #3498db;
  background-color: var(--main-bg-color);
  display: flex;
  width: 100%;
  max-width: 480px;
  box-shadow:
    0 2px 6px 0 rgba(136, 148, 171, 0.2),
    0 24px 20px -24px rgba(71, 82, 107, 0.1);
  overflow: hidden;
}

::placeholder {
  color: #3498db;
  font-size: larger;
}

.search-input {
  border: none;
  flex: 1;
  outline: none;
  height: 100%;
  padding: 0 5px;
  font-size: 16px;
  background-color: var(--main-bg-color);
}
</style>
