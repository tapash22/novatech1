<template>
  <div class="product">
    <div class="container">
    <div class="row">
      <h3>Probiotics</h3>
      <div class="col-md-4" v-for="product in products" :key="product.id">
        <div class="card">
          <div class="card-body">
            <img :src="'/sub/storage/app/' +product.pimage"/>
          </div>
          <div class="card-footer">
            <p>{{product.pdname}}</p>
            <router-link
                :to="{ name: 'ProductDetail', params: { id: product.id } }"
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
import Product from '../apis/Product';
export default {

  name:"probiotics",

  data(){
    return{
      products : [],
    };
  },

  created(){
    Product.getProbiotics().then((res)=>{
      this.products = res.data;
      console.log(this.products);
    })
  }
}
</script>

<style>
@import "../assets/css/product.css";
</style>