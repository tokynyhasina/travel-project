<template>
  <section class="destination_wrap">
    <div class="title_wrap_2">
      <h2 class="title_2">Destinations near you</h2>
    </div>
    <div class="grid-container">
      <div
        class="container_fluid"
        v-for="(destination, index) in destinations"
        :key="`i-${index}`"
      >
        <img :src="destination.img" alt="" />
        <div class="pays_pg">
          <p>{{ destination.ville }}</p>
          <img src="../assets/stars.png" alt=" " />
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      destinations: null,
    };
  },
  mounted() {
    try {
      axios
        .get("https://run.mocky.io/v3/58351452-f610-4da0-baff-38512bdb28c5")
        .then((res) => {
          this.destinations = res.data.destination;
        });
    } catch (e) {
      console.error(e);
    }
  },
};
</script>
