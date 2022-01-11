<template>
  <div class="product">
    <div class="container">
      <div class="row">
        <h3>Poultry</h3>
        <div class="col-md-3" v-for="product in products" :key="product.id">
          <div class="card">
            <div class="card-body">
              <img :src="
                    '/sub/storage/app/' + product.img
                  " />
            </div>
            <div class="card-footer">
              <p>{{ product.name }}</p>
              <router-link :to="product.url">Show details</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "poultry",
  data() {
    return {
      products: [
        {
          id: "1",
          name: "Antibiotic",
          img: require("../../assets/image/anti.png"),
          url: "/antibiotic",
        },
        {
          id: "2",
          name: "Nutrational",
          img: require("../../assets/image/nutri.jpg"),
          url: "/nutritional",
        },
        {
          id: "3",
          name: "Harbal",
          img: require("../../assets/image/harbal.jpg"),
          url: "/harbal",
        },
        {
          id: "4",
          name: "Anticoccidial",
          img: require("../../assets/image/anti.png"),
          url: "/anticoccidial",
        },
        {
          id: "5",
          name: "Probiotics",
          img: require("../../assets/image/anti.png"),
          url: "/probiotics",
        },
        {
          id: "6",
          name: "Others",
          img: require("../../assets/image/oth.png"),
          url: "/others",
        },
      ],
    };
  },

    mounted() {
    window.scrollTo(0, 0);
  },
};
</script>

<style scoped>
@import "../../assets/css/product.css";
</style>