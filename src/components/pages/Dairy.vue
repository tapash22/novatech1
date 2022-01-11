<template>
  <div class="product">
    <div class="container">
      <div class="row">
        <h3>Dairy</h3>
        <div class="col-md-3" v-for="product in products" :key="product.id">
          <router-link :to="product.url">
          <div class="card">
            <div class="card-body">
              <img :src="product.img" />
            </div>
            <div class="card-footer">
              <p>{{ product.name }}</p>
              <router-link :to="product.url">Show details</router-link>
            </div>
          </div>
          </router-link>
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
          name: "Antibiotics",
          img: require("../../assets/image/anti.png"),
          url: "/antibiotics",
        },
        {
          id: "2",
          name: "Penathaone",
          img: require("../../assets/image/nutri.jpg"),
          url: "/penathaone",
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