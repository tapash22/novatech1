<template>
  <div class="about">
    <div class="container">
      <div class="row">
        <!-- <h3>About Us</h3> -->
        <div class="col-md-12">
          <div class="image">
            <img src="../../assets/image/about1.jpg" />
          </div>
          <div class="story">
            <h4>About the Company</h4>
            <p class="wrap">
              Novatech Bangladesh Ltd. is an agro based company engaged in
              importing from different countries and marketed a wide range of
              veterinary health products and animal health care products
              throughout the Bangladesh. We have made a significant industrial
              growth with our hard work. We are constantly touching new heights
              of success through our market expertise.
            </p>
            <br />
            <h4>Team Power</h4>
            <p class="wrap">
              The strength of the company lies in its qualified and experienced
              team that always tries to searching excellent quality products.
              Our main motive is to optimize client’s satisfaction level at
              every cost. We have 52 dedicated stuffs and they are working with
              dedicated and reputation of their respective place or areas.
            </p>
            <br />
            <h4>Quality Assurance</h4>
            <p class="wrap">
              Quality is our prime concern, thus we lay special emphasis on the
              quality of the products. To assure the quality, we have set up
              experienced people related to field.
            </p>
            <br />
            <h4>Background</h4>
            <p class="wrap">
              Veterinary pharmaceutical finished products such as feed premix,
              medicament premix etc.
            </p>
            <br />
            <h4>Our Vision</h4>
            <p class="wrap">
              Our products, service and people will be the most valued by animal
              health customers throughout the Bangladesh
            </p>
            <br />
            <h4>Our Mission</h4>
            <p class="wrap">
              We build focus on animal health to bring customers quality
              products, services and commitment to their business.
            </p>
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
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Alfa+Slab+One&family=Lato:wght@100&family=Lobster&family=Oswald:wght@400;500&family=Poppins:wght@100;500&family=Roboto+Condensed:wght@300&family=Roboto:wght@100&display=swap');

.about {
  width: 100%;
  height: 100%;
  padding: 0;
  margin-top: 120px;
}
.row {
  width: 100%;
  padding: 5px;
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
.col-md-12 {
  width: 100%;
  padding: 5px;
  margin: 0;
}
.col-md-12 .image {
  width: 100%;
  padding: 0;
  margin: 0;
  border: 10px solid #0a7691;
  border-radius: 10px;
}
.col-md-12 .image img {
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
}
.col-md-12 .story {
  width: 100%;
  padding: 10px;
  margin: 5px;
}
.story h4 {
  font-size: 1.4rem;
  font-weight: 900;
  font-family: 'Oswald', sans-serif;
  text-align: center;
  padding: 10px;
  text-transform: uppercase;
  border-top: 15px solid #0a7691;
  border-left: 2px solid #0a7691;
  border-right: 2px solid #0a7691;
  background: #0a7691b9;
  color: #fff;
}
.story .wrap {
  font-size: 1.2rem;
  font-weight: 900;
font-family: 'Roboto', sans-serif;
  padding: 10px;
  margin-top:-5px;
  text-align: center;
  border-bottom: 10px solid #0a7691;
  border-left: 2px solid #0a7691;
  border-right: 2px solid #0a7691;
  background: #fff;
}

@media only screen and (max-width: 436px) {
  
}

</style>