<template>
  <div class="client">
    <Navigation />
    <div class="row">
      <div class="col-md-12">
        <router-view v-slot="{ Component }">
          <component :is="Component" />
        </router-view>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Navigation from "../../services/Navigation.vue";
import Footer from "../../services/Footer.vue";

export default {
  name: "App",
  data() {
    return {
      // scrollPosition: null,
    };
  },

  components: {
    Navigation,
    Footer,
  },

    mounted() {
    window.scrollTo(0, 0);
  },
};
</script>

<style scoped>
.row {
  padding: 0;
  margin: 0;
}
.col-md-12 {
  padding: 0;
}
</style>