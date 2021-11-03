<template>
  <div class="product">
    <div class="container">
      <div class="row">
        <h3>Aqua</h3>
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
  name: "poultry",
  data() {
    return {
      products: [
        {
          id: "1",
          name: "Antibiotic",
          img: require("../../assets/image/anti.png"),
          url: "",
        },
        {
          id: "2",
          name: "Nutrational",
          img: require("../../assets/image/nutri.jpg"),
          url: "",
        },
        {
          id: "3",
          name: "Harbal",
          img: require("../../assets/image/harbal.jpg"),
          url: "",
        },
        {
          id: "4",
          name: "Others",
          img: require("../../assets/image/oth.png"),
          url: "",
        },
      ],
    };
  },
};
</script>

<style scoped>
@import "../../assets/css/product.css";
</style>