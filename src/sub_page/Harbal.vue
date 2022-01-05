<template>
  <div class="product">
    <div class="container">
      <div class="row">
        <h3>Harbal</h3>
        <div class="col-md-3" v-for="product in products" :key="product.id">
          <div class="card">
            <div class="card-body">
              <img :src="product.img" />
            </div>
            <div class="card-footer">
              <p>{{ product.name }}</p>
              <router-link to=""
                >Show Details</router-link
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
                 
<script>
export default {
  name: "antibiotic",
  data() {
    return {
      products: [
        {
          id: "1",
          name: "Jinan",
          img: require("../assets/image/harbal.jpg"),
          url: "",
        },
        {
          id: "2",
          name: "Jinwoo",
          img: require("../assets/image/harbal.jpg"),
          url: "",
        },
        {
          id: "3",
          name: "Jizhong",
          img: require("../assets/image/harbal.jpg"),
          url: "",
        },
        {
          id: "4",
          name: "junyu",
          img: require("../assets/image/harbal.jpg"),
          url: "",
        },
      ],
    };
  },

    mounted() {
    window.scrollTo(0, 0);
  },
};
</script>
        
<style>
@import "../assets/css/product.css";
</style>