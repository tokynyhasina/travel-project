<template>
  <section class="partners_section">
    <div class="title_wrap_2">
      <h2 class="title_2">Our Partners</h2>
    </div>
    <div class="grid-container">
      <div
        class="container_fluid"
        v-for="(partner, index) in partners"
        :key="`i-${index}`"
      >
        <img :src="partner.img" alt=" " />
        <div class="pays_pg">
          <p>{{ partner.name }}</p>
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
      partners: null,
    };
  },
  mounted() {
    axios
      .get("https://run.mocky.io/v3/7e6d24a1-af71-4a98-8fb7-b158bfb13f4a")
      .then((res) => {
        this.partners = res.data.partner;
      });
  },
};
</script>
