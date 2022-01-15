<template>
  <div class="footer">
    <div class="container">
      <div class="row">
        <div class="col-md-3">
          <h3>We Are</h3>
          <p>
            Novatech Bangladesh Ltd is a top leadin importer company in Banladesh, established in 2012.
            We do import different kinds of products from different country like India, China, South-korea,
            Poland and Spain.
          </p>
        </div>
        <div class="col-md-3">
          <h3>Quick link</h3>
          <ul>
            <li><router-link to="/home">Home</router-link></li>
            <li><router-link to="/about">About</router-link></li>
            <li><router-link to="/gallery">Gallery</router-link></li>
            <li><router-link to="/products">Products</router-link></li>
            <li><router-link to="contactus">Contact us</router-link></li>
            <li><router-link to="/login">Login</router-link></li>
          </ul>
        </div>
        <div class="col-md-3">
          <h3>Connected With</h3>
          <ul>
            <li>
              <a href=""><i class="fa fa-facebook-square"></i></a>
            </li>
            <li>
              <a href=""><i class="fa fa-linkedin"></i></a>
            </li>
            <li>
              <a href=""><i class="fa fa-twitter-square"></i></a>
            </li>
            <li>
              <a href=""><i class="fa fa-instagram"></i></a>
            </li>
            <li>
              <a href=""><i class="fa fa-envelope-square"></i></a>
            </li>
          </ul>
        </div>
        <div class="col-md-3">
          <h3>Get In Touch</h3>
          <address>
            Chandona, Chowrasta<br/>
            Joydebpur, Gazipur-1702.
          </address>
        </div>
      </div>
      <div class="row2">
        <div class="col-md-12">
          <p>All right reserved in &copy;Ultrawave.digital</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.footer {
  background: #42acaf;
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
}
.row {
  padding: 10px;
  margin: 0;
}
.col-md-3 {
  padding: 0;
  margin: 0;
}
h3 {
  font-size: 1.5rem;
  font-weight: 900;
  font-family: "Luxurious Roman", cursive;
  letter-spacing: 1px;
  color: #000;
  text-align: center;
  padding: 5px;
}
p {
  font-size: 1.3rem;
  font-weight: 900;
  font-family: "Luxurious Roman", cursive;
  color: #000;
  padding: 5px;
  text-align: justify;
}
ul {
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
ul li {
  list-style: none;
  text-align: center;
  padding: 3px;
}
ul li a {
  font-size: 1.3rem;
  font-weight: 900;
  font-family: "Luxurious Roman", cursive;
  color: #000;
  padding: 5px;
}
ul li a i {
  font-size: 2rem;
  font-weight: 900;
  color: #000;
  padding: 2px;
}
address {
  padding: 5px;
  margin-left: 15px;
  display: block;
  text-align: justify;
font-size: 1.3rem;
  font-weight: 900;
  font-family: "Luxurious Roman", cursive;
  color: #000;
}
.row2{
  padding: 0;
  margin: 0;
  width: 100%;
}
.row2 .col-md-12 {
  width: 100%;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: center;
}
.row2 .col-md-12 p {
  font-size: 1rem;
  font-weight: 600;
  text-align: center;
  color: #FFf;
  padding: 0;
  margin: 0;
}

@media only screen and (max-width: 436px) {
  .footer {
  background: #7dced1;
  width: 100%;
  height: 100%;
  padding: 10px;
  margin: 0;
}
.row {
  widows: 100%;
  padding: 10px;
  margin: 0;
  display: block;
}
.col-md-3 {
  padding: 0;
  margin: 0;
  width: 100%;
}
h3 {
  font-size: 1.5rem;
  font-weight: 900;
  font-family: "Luxurious Roman", cursive;
  letter-spacing: 1px;
  color: #000;
  text-align: center;
  padding: 5px;
}
p {
  font-size: 1.3rem;
  font-weight: 900;
  font-family: "Luxurious Roman", cursive;
  color: #000;
  padding: 5px;
  text-align: justify;
}
ul {
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
ul li {
  list-style: none;
  text-align: center;
  padding: 3px;
}
ul li a {
  font-size: 1.3rem;
  font-weight: 900;
  font-family: "Luxurious Roman", cursive;
  color: #000;
  padding: 5px;
}
ul li a i {
  font-size: 2rem;
  font-weight: 900;
  color: #000;
  padding: 2px;
}
address {
  padding: 5px;
  margin-left: 15px;
  display: block;
  text-align: center;
font-size: 1.3rem;
  font-weight: 900;
  font-family: "Luxurious Roman", cursive;
  color: #000;
}
.row2{
  padding: 0;
  margin: 0;
  width: 100%;
}
.row2 .col-md-12 {
  width: 100%;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: center;
}
.row2 .col-md-12 p {
  font-size: 1rem;
  font-weight: 600;
  text-align: center;
  color: #FFf;
  padding: 0;
  margin: 0;
}
}

</style>