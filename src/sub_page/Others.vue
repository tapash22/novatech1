<template>
  <div class="product">
    <div class="container">
      <div class="row">
        <h3>Others</h3>
        <!-- <div class="col-md-3" v-for="product in products" :key="product.id">
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
        </div> -->
      </div>
    </div>
  </div>
</template>
                 
<script>
export default {
  name: "others",
  data() {
    return {
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