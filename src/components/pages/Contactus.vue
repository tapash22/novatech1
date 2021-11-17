<template>
  <div class="contactus">
    <div class="image">
      <img src="../../assets/image/contact.jpg" />
    </div>
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <div class="box">
            <div class="add">
              <h5>Find Us :</h5>
              <address>
                House No:25,&nbsp;Road No:04,<br />
                Sector No:10, Uttara, Dhaka-1230.
              </address>
            </div>
            <div class="info">
              <h5>Mobile:</h5>
              <p>+8801776235423</p>
            </div>
            <div class="info">
              <h5>Email:</h5>
              <p>info@novatechbdltd.com</p>
            </div>
            <div class="info">
              <h5>Facebook:</h5>
              <p>novatech@gmail.com</p>
            </div>
            <div class="info">
              <h5>Linkdin:</h5>
              <p>novatech@gmail.com</p>
            </div>
          </div>
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
}
</script>

<style scoped>
.contactus {
  width: 100%;
  height: 100%;
  padding: 0;
  margin-top: 130px;
}
.image {
  widows: 100%;
  height: 500px;
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
  justify-content: center;
}
h3 {
  font-size: 1.5rem;
  font-weight: 700;
  color: #000;
  text-align: center;
  text-transform: uppercase;
}
.row .col-md-6 {
  width: 50%;
  padding: 10px;
  margin: 5px;
  display: flex;
  justify-content: center;
}
.row .col-md-6 .box {
  width: 100%;
  height: 100%;
  padding: 10px;
  margin: 0;
  background: rgb(231, 230, 230);
}
.row .col-md-6 .box .add {
  display: flex;
  width: 100%;
  padding: 5px;
  margin: 0;
  margin-left: 20%;
}
.row .col-md-6 .box .add h5 {
  width: 100px;
  font-size: 1.2rem;
  font-weight: 600;
  text-align: right;
  padding: 0;
  margin-right: 10px;
}
.row .col-md-6 .box .add address {
  font-size: 1rem;
  font-weight: 500;
  text-align: justify;
  padding: 0;
  margin: 0;
}
.row .col-md-6 .box .info {
  display: flex;
  width: 100%;
  padding: 5px;
  margin-left: 20%;
}
.row .col-md-6 .box .info h5 {
  width: 100px;
  font-size: 1.2rem;
  font-weight: 600;
  text-align: right;
  padding: 0;
  margin-right: 10px;
}
.row .col-md-6 .box .info p {
  font-size: 1rem;
  font-weight: 500;
  padding: 0;
  margin: 0;
  text-align: center;
}
</style>