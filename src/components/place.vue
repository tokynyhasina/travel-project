<template>
  <section class="perfectPlace_wrap">
    <div class="perfect_pg_wrap">
      <div class="title_wrap_2">
        <h2 class="title2">Find The Perfect Place</h2>
      </div>
      <p class="perfect_pg">
        A list of the top 75 Best Tourist Places to See in world for a perfect holiday or
        a trip.
      </p>
      <!-- <input type="button" value="View More" class="btn_view"> -->
      <button class="btn_view">View More</button>
    </div>
    <div class="perfect_img">
      <div>
        <img
          :src="perfect.img"
          alt=""
          class="images"
          v-for="(perfect, index) in perfects"
          :key="`i-${index}}`"
        />

        <!-- <img src="../assets/image-2.svg" alt="" class="images" />
        <img src="../assets/image-1.png" alt="" class="images" />-->
        <img src="../assets/Ellipse2.svg" alt="" class="next" />
        <!--  <img src="./src/assets/Ellipse2.svg" alt="" class="next"> -->
      </div>
    </div>
  </section>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      images: null,
      perfects: [],
    };
  },
  mounted() {
    try {
      axios
        .get("https://run.mocky.io/v3/58351452-f610-4da0-baff-38512bdb28c5")
        .then((res) => {
          this.perfects = res.data.perfect;
          // console.log(res.data.perfect);
        });
    } catch (e) {
      console.error(e);
    }
  },
};
</script>
