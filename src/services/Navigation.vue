<template>
  <div class="navigation">
    <nav>
      <div class="brand">
        <img src="../assets/image/logo.png" />
      </div>
      <div class="navbar">
        <ul class="ul">
          <li><router-link to="/home">Home</router-link></li>
          <li><router-link to="/about">About</router-link></li>
          <li><router-link to="/gallery">Gallery</router-link></li>
          <li>
            <router-link to="/products"
              >Products<i
                class="fa fa-angle-down"
                style="padding-left: 5px; padding-top: 5px"
                aria-hidden="true"
              ></i
            ></router-link>
            <ul>
              <li>
                <router-link to="/poultry"
                  >Poultry<i class="fa fa-angle-right" aria-hidden="true"></i
                ></router-link>
                <ul class="two">
                  <li>
                    <router-link to="/antibiotic">Antibiotic</router-link>
                  </li>
                  <li>
                    <router-link to="/nutritional">Nutritional</router-link>
                  </li>
                  <li>
                    <router-link to="/harbal">Harbal </router-link>
                  </li>
                  <li>
                    <router-link to="/others">Others</router-link>
                  </li>
                </ul>
              </li>
              <li>
                <router-link to="/dairy"
                  >Dairy<i class="fa fa-angle-right" aria-hidden="true"></i
                ></router-link>
                <!-- sub-category -->
                <ul class="two">
                  <li>
                    <router-link to="/antibiotic">Antibiotic</router-link>
                  </li>
                  <li>
                    <router-link to="/nutritional">Nutritional</router-link>
                  </li>
                  <li>
                    <router-link to="/harbal">Harbal </router-link>
                  </li>
                  <li>
                    <router-link to="/others">Others</router-link>
                  </li>
                </ul>
              </li>
              <li>
                <router-link to="/aqua"
                  >Aqua<i class="fa fa-angle-right" aria-hidden="true"></i
                ></router-link>
                <!-- sub-category -->
                <ul class="two">
                  <li>
                    <router-link to="/antibiotic">Antibiotic</router-link>
                  </li>
                  <li>
                    <router-link to="/nutritional">Nutritional</router-link>
                  </li>
                  <li>
                    <router-link to="/harbal">Harbal </router-link>
                  </li>
                  <li>
                    <router-link to="/others">Others</router-link>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li><router-link to="contactus">Contact us</router-link></li>
          <li><router-link to="/login">Login</router-link></li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<style scoped>
.navigation {
  width: 100%;
  height: 130px;
  padding: 0;
  margin: 0;
  background: #0a7691;
  position: fixed;
  z-index: 1;
}
nav {
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
  position: relative;
  display: flex;
  box-shadow: 2px 2px 3px #fff;
}
nav .brand {
  width: 30%;
  height: 70px;
  padding: 10px;
  margin: 0;
  display: flex;
  justify-content: center;
}
.brand img {
  width: 200px;
  height: 100px;
  padding: 0;
  margin: 0;
}
nav .navbar {
  width: 70%;
  height: 50px;
  padding: 5px;
  margin-top: 50px;
  display: flex;
  justify-content: center;
}
.navbar .ul {
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: center;
}
.navbar .ul li {
  list-style: none;
  padding: 5px;
  margin: 5px;
  align-items: center;
}
.navbar .ul li:hover ul {
  display: block;
}
.navbar .ul li a {
  font-size: 1.3rem;
  font-weight: 500px;
  text-decoration: none;
  color: #fff;
  margin: 0;
  padding: 5px;
  border-bottom: 2px none #fff;
}
.navbar .ul li a:hover,
.navbar .ul li a.router-link-exact-active {
  /* .navbar .ul li a.router-link-exact-active{ */
  border-bottom: 2px solid #fff;
}
.navbar .ul li ul {
  position: absolute;
  display: none;
  padding: 0;
  margin: 0;
  background: #0b5369;
  margin-top: 5px;
  z-index: 1;
}
.navbar .ul li ul li {
  padding: 10px;
  margin: 0;
}
.navbar .ul li ul li a {
  font-size: 1.2rem;
  font-weight: 500;
  padding: 5px;
  margin: 5px;
  display: flex;
  justify-content: space-between;
  border-bottom: none;
}
.navbar .ul li ul li a:hover,
.navbar .ul li ul li a.router-link-exact-active {
  border-bottom: none;
  color: #fff;
}
.navbar .ul li ul li a i {
  padding-top: 5px;
  padding-left: 15px;
  margin: 0;
  font-size: 1.4rem;
  font-weight: 500;
}
.navbar .ul li ul li:hover {
  background: rgba(0, 0, 0, 0.24);
}
.navbar .ul li ul li:hover .two {
  display: block;
}

.navbar .ul li ul li .two {
  position: absolute;
  display: none;
  padding: 0;
  margin-left: 115px;
  background: #0b5369;
  margin-top: -30px;
}
.navbar .ul li ul li .two li {
  padding: 10px;
  margin: 0;
  width: 200px;
}
</style>