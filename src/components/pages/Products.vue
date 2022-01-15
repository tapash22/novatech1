<template>
  <div class="products">
    <div class="container">
      <div class="row">
        <h3>Products</h3>
        <div class="col-md-4" v-for="product in products" :key="product.id">
          <router-link :to="product.url">
          <div class="box">
            <div class="img">
              <img :src="product.img" />
            </div>
            <div class="text">
              <h4>{{ product.name }}</h4>
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
  data() {
    return {
      showModal: false,
      products: [
        {
          id: "1",
          name: "Poultry",
          img: require("../../assets/image/chi.png"),
          url: "/poultry",
        },
        {
          id: "2",
          name: "Dairy",
          img: require("../../assets/image/co.png"),
          url: "/dairy",
        },
        {
          id: "3",
          name: "Aqua",
          img: require("../../assets/image/fi.png"),
          url: "aqua",
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
.products {
  width: 100%;
  height: 100%;
  padding: 0;
  margin-top: 130px;
}
.row {
  width: 100%;
  padding: 10px;
  margin: 0;
  display: flex;
  justify-content: center;
}
h3 {
  font-size: 1.5rem;
  font-weight: 700;
  color: #000;
  text-align: center;
  text-transform: uppercase;
  padding: 10px;
}
.row .col-md-4 {
  margin: 0;
  padding: 10px;
  width: 33%;
  display: flex;
}
.row .col-md-4 a {
  text-decoration: none;
}
.row .col-md-4 .box {
  width: 300px;
  height: 260px;
  padding: 5px;
  margin: 5px;
  background: #0b5369;
  border: 1px solid #000;
}
.row .col-md-4 .box .img {
  width: 100%;
  height: 200px;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: center;
}
.row .col-md-4 .box .img img {
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
}
.row .col-md-4 .box .text {
  width: 100%;
  padding: 10px;
  margin: 0;
  background: #0b5369;
  border-radius: 5%;
}
.row .col-md-4 .box .text h4 {
  font-size: 1.3rem;
  font-weight: 500;
  color: #fff;
  text-align: center;
  text-transform: uppercase;
}

@media only screen and (max-width: 436px) {
  .products {
  width: 100%;
  height: 100%;
  padding: 0;
  margin-top: 130px;
}
.row {
  widows: 100%;
  padding: 10px;
  margin: 0;
  display: flex;
  justify-content: center;
}
h3 {
  font-size: 1.5rem;
  font-weight: 700;
  color: #000;
  text-align: center;
  text-transform: uppercase;
  padding: 10px;
}
.row .col-md-4 {
  margin: 0;
  padding: 10px;
  width: 100%;
  display: flex;
}
.row .col-md-4 a {
  text-decoration: none;
}
.row .col-md-4 .box {
  width: 300px;
  height: 260px;
  padding: auto;
  margin: auto;
  background: #0b5369;
  border: 1px solid #000;
}
.row .col-md-4 .box .img {
  width: 100%;
  height: 200px;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: center;
}
.row .col-md-4 .box .img img {
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
}
.row .col-md-4 .box .text {
  width: 100%;
  padding: 10px;
  margin: 0;
  background: #0b5369;
  border-radius: 5%;
}
.row .col-md-4 .box .text h4 {
  font-size: 1.3rem;
  font-weight: 500;
  color: #fff;
  text-align: center;
  text-transform: uppercase;
}
}

</style>