<script>
export default {
  data() {
    return {};
  },
  mounted() {},
};
</script>

<template>
  <header>
    <nav class="navbar">
      <!-- LOGO -->
      <div class="logo">Tvelia</div>
      <!-- NAVIGATION MENU -->
      <ul class="nav-links">
        <!-- USING CHECKBOX HACK -->
        <input type="checkbox" id="checkbox_toggle" />
        <label for="checkbox_toggle" class="hamburger">&#9776;</label>

        <!-- NAVIGATION MENUS -->
        <div class="menu">
          <router-link to="/" class="bold">Home</router-link>
          <router-link to="/About" class="bold">About</router-link>
          <router-link to="/" class="bold">Adventures</router-link>
          <router-link to="/" class="bold">Contact</router-link>
          <router-link to="/" class="bold">Login</router-link>
          <router-link to="/" class="bold">sign up</router-link>
        </div>
      </ul>
    </nav>
  </header>
  <!-- <router-link to="/" class="text-black text-2xl text-center">Home</router-link>
  <router-link to="/about" class="text-black text-2xl text-center">About</router-link> -->
</template>

<style scoped></style>
