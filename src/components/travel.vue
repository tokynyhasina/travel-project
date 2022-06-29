<template>
  <section>
    <div class="title_wrap_2">
      <h2 class="title_2">Top rated Experiences on Travel</h2>
    </div>
    <div class="experiences_wrap">
      <div class="experience" v-for="(travel, index) in travels" :key="`i-${index}`">
        <img :src="travel.img" alt="" class="img_ex" />
        <div>
          <p>{{ travel.text }}</p>
          <p class="stars_pg">{{ travel.location }}</p>
          <img src="../assets/Group11.svg" alt="" />
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
      travels: null,
    };
  },
  mounted() {
    try {
      axios
        .get("https://run.mocky.io/v3/58351452-f610-4da0-baff-38512bdb28c5")
        .then((res) => {
          this.travels = res.data.travel;
        });
    } catch (e) {
      console.error(e);
    }
  },
};
</script>
