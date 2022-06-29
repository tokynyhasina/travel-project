<template>
  <section>
    <div class="feeling_wrap">
      <div class="feeling" v-for="(feeling, index) in feelings" :key="`i-${index}}`">
        <img :src="feeling.img" alt="" class="img_feeling" />
        <div>
          <p class="colorPg feeling_pg">{{ feeling.info }}</p>
          <p class="feeling_pg">{{ feeling.text_info }}</p>
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
      image: null,
      feelings: null,
    };
  },
  mounted() {
    try {
      axios
        .get("https://run.mocky.io/v3/58351452-f610-4da0-baff-38512bdb28c5")
        .then((res) => {
          this.feelings = res.data.feeling;
        });
    } catch (e) {
      console.error(e);
    }
  },
};
</script>
