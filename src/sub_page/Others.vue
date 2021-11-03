<template>
  <div class="product">
    <div class="container">
      <div class="row">
        <h3>Others</h3>
        <div class="col-md-3" v-for="product in products" :key="product.id">
          <div class="card">
            <div class="card-body">
              <img :src="product.img" />
            </div>
            <div class="card-footer">
              <p>{{ product.name }}</p>
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
          img: require("../assets/image/jinan.png"),
          url: "",
        },
        {
          id: "2",
          name: "Jinwoo",
          img: require("../assets/image/jinwoo.png"),
          url: "",
        },
        {
          id: "3",
          name: "Jizhong",
          img: require("../assets/image/jizhong.png"),
          url: "",
        },
        {
          id: "4",
          name: "junyu",
          img: require("../assets/image/junyu.png"),
          url: "",
        },
        {
          id: "5",
          name: "Ewha",
          img: require("../assets/image/ewha.png"),
          url: "",
        },
      ],
    };
  },
};
</script>
        
<style>
@import "../assets/css/product.css";
</style>