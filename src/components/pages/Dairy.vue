<template>
  <div class="product">
    <div class="container">
      <div class="row">
        <div class="image">
        <img src="../../assets/image/upcomming.png"/>
        <h2>Dairy</h2>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.product {
  width: 100%;
  height: 400px;
  padding: 0;
  background: rgba(102, 241, 8, 0.473);
}
.row {
  width: 100%;
  height: 390px;
  padding: 10px;
  margin: 0;
  display: flex;
  justify-content: center;
}
.row .image{
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
}
.image img{
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
}
.image h2{
  font-size: 2.5rem;
  font-weight: 700;
  color: #000;
  text-transform: uppercase;
  text-align: center;
  margin-top: -100px;
}

@media only screen and (max-width: 436px) {
  .product {
  width: 100%;
  height: 300px;
  padding: 0;
  background: rgba(102, 241, 8, 0.473);
}
.row {
  widows: 100%;
  height: 300px;
  padding: 10px;
  margin: 0;
  display: flex;
  justify-content: center;
}
.row .image{
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
}
.image img{
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
}
.image h2{
  font-size: 2.5rem;
  font-weight: 700;
  color: #000;
  text-transform: uppercase;
  text-align: center;
  margin-top: -100px;
}
}
</style>