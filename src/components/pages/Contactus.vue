<template>
  <div class="contactus">
    <div class="image">
      <img src="../../assets/image/22.jpg" />
    </div>
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <h3>Office Location</h3>
          <address>
            House No:25,&nbsp;Road No:04,<br />
            Sector No:10, Uttara, Dhaka-1230.
          </address>
        </div>
        <div class="col-md-6">
          <h3>Online Tracing</h3>
          <ul>
            <li><p class="wrap">Mobile : </p><p> +8801776235423</p></li>
            <li><p class="wrap">Email : </p><p> info@novatechbdltd.com</p></li>
            <li><p class="wrap">Facebook : </p><p> novatech@gmail.com</p></li>
            <li><p class="wrap">linkedin : </p><p> novatech@linkedin.com</p></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    window.scrollTo(0, 0);
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Alfa+Slab+One&family=Lato:wght@100&family=Lobster&family=Oswald:wght@400;500&family=Poppins:wght@100;500&family=Roboto+Condensed:wght@300&family=Roboto:wght@100&display=swap");

.contactus {
  width: 100%;
  height: 100%;
  padding: 0;
  margin-top: 130px;
}
.image {
  widows: 100%;
  height: 300px;
  padding: 0;
  margin: 0;
}
.image img {
  width: 100%;
  height: 100%;
  background-position: center;
  background-size: cover;

}
.row {
  width: 100%;
  padding: 10px;
  margin: 0;
  display: flex;
}
.row .col-md-6 {
  width: 45%;
  padding: 5px;
  margin: 5px;
  background: #fff;
}
h3 {
  font-size: 1.5rem;
  font-weight: 900;
  font-family: "Oswald", sans-serif;
  color: #000;
  text-align: center;
  text-transform: uppercase;
}
.col-md-6 address {
  font-size: 1.2rem;
  font-weight: 800;
  font-family: "Roboto", sans-serif;
  text-align: center;
  color: #000;
  border-right: 5px solid #7dced1;
}
.col-md-6 ul{
  padding: 5px;
  margin: 0;
  width: 100%;
}
ul li{
  display: flex;
  justify-content: center;
  text-align: center;
  padding: 0;
  margin: 0;
}

ul li .wrap{
  font-size: 1.2rem;
  font-weight: 700;
    font-family: "Oswald", sans-serif;
    width: 100px;
    display: flex;
    justify-content: center;
    text-align: center;
}
ul li p{
  font-size: 1.2rem;
  font-weight: 800;
  font-family: "Roboto", sans-serif;
  width: 150px;
  padding: 0;
  margin: 0;
}

@media only screen and (max-width: 436px) {
  .contactus {
  widows: 100%;
  height: 100%;
  padding: 0;
  margin-top: 130px;
}
.image {
  width: 100%;
  height: 300px;
  padding: 0;
  margin: 0;
}
.image img {
  width: 100%;
  height: 100%;
  background-position: center;
  background-size: cover;
}
.row {
  width: 100%;
  padding: 10px;
  margin: 0;
  display: block;
}
.row .col-md-6 {
  width: 100%;
  padding: 5px;
  margin: 5px;
  background: #fff;
}
h3 {
  font-size: 1.5rem;
  font-weight: 900;
  font-family: "Oswald", sans-serif;
  color: #000;
  text-align: center;
  text-transform: uppercase;
}
.col-md-6 address {
  font-size: 1.2rem;
  font-weight: 800;
  font-family: "Roboto", sans-serif;
  text-align: center;
  color: #000;
  border-right: 5px none;
}
.col-md-6 ul{
  padding: 0;
  margin: 0;
  width: 100%;
}
ul li{
  display: flex;
  justify-content: left;
  text-align: center;
  padding: 0;
  margin: 0;
}

ul li .wrap{
  font-size: 1.2rem;
  font-weight: 700;
    font-family: "Oswald", sans-serif;
    width: 100px;
    display: flex;
    justify-content: center;
    text-align: center;
}
ul li p{
  font-size: 1.2rem;
  font-weight: 800;
  font-family: "Roboto", sans-serif;
  width: 150px;
  padding: 0;
  margin: 0;
}
}
</style>