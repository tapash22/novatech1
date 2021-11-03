<template>
  <div class="footer">
    <div class="container">
      <div class="row">
        <div class="col-md-3">
          <h3>We Are</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo odit
            fugit dolore hic consequuntur, nulla ratione deleniti corporis
            obcaecati commodi ipsum sunt, neque fugiat eaque. Exercitationem
            provident animi corporis ea!
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
            House No:25,&nbsp;Road No:04,<br />
            Sector No:10, Uttara, Dhaka-1230.
          </address>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.footer {
  background: #0b5369;
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
  font-weight: 700;
  color: aliceblue;
  text-align: center;
  padding: 5px;
}
p {
  font-size: 1rem;
  font-weight: 500;
  color: #fff;
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
}
ul li a {
  font-size: 1.2rem;
  font-weight: 500;
  color: #000;
  text-decoration: none;
}
ul li a i {
  font-size: 1.8rem;
  font-weight: 500;
  color: #fff;
  padding: 2px;
}
address {
  padding: 5px;
  margin-left: 15px;
  display: block;
  text-align: justify;
  font-size: 1.2rem;
  font-weight: 500;
  color: #fff;
}
</style>