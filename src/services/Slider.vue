<template>
  <carousel :autoplay="4000" :nav="true" :wrap-around="true">
    <slide v-for="slider in sliders" :key="slider.id">
      <img :src="'/sub/storage/app/' + slider.simage" />
    </slide>

    <template #addons>
      <pagination />
    </template>
  </carousel>
</template>


<script>
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Pagination } from "vue3-carousel";
import Slider from "../apis/Slider";

export default {
  name: "Slider",
  data() {
    return {
      sliders: [],
    };
  },
  components: {
    Carousel,
    Slide,

    Pagination,
  },

  created() {
    Slider.getSlider().then((response) => {
      this.sliders = response.data;
      console.log(this.sliders);
    });
  },
};
</script>

<style scoped>
img {
  width: 100%;
  height: 500px;
  background-size: cover;
  background-position: center;
  padding: 0;
  margin: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.9s ease;
  overflow: hidden;
  visibility: visible;
  position: absolute;
  width: 100%;
  opacity: 1;
}

.fade-enter,
.fade-leave-to {
  visibility: hidden;
  width: 100%;
  opacity: 0;
}

@media only screen and (max-width: 436px) {
  img {
    width: 100%;
    height: 300px;
    background-size: cover;
    background-position: center;
    padding: 0;
    margin: 0;
  }
}
</style>