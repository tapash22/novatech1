<template>
  <div class="home">
    <div class="slide">
      <Slider />
    </div>
    <div class="container">
      <h3>Stay With Us</h3>
      <div class="message">
        <p>
          We are constantly touching new heights of success through our market expertise.
        </p>
      </div>
      <div class="product">
        <h3>Products</h3>
        <div class="row">
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

      <div class="partners">
        <h3>Partners</h3>
        <div class="row">
          <div class="col-md-2" v-for="partner in partners" :key="partner.id">
            <div class="card">
              <div class="card-body">
                <img
                  :src="
                    '/sub/' + partner.pimage
                  "
                />
              </div>
              <div class="card-footer">
                <p class="name">{{ partner.pname }}</p>
                <p class="link">
                  <a :href="partner.plink">Website Link</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="contact">
        <h3>Contact Us</h3>
        <div class="row">
          <div class="col-md-12">
            <p>
              Click here to contact us
              <a @click="onclick()">Show</a>
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- model for contact us -->
    <div
      class="modal"
      id="edit"
      tabindex="-1"
      role="dialog"
      aria-labelledby="editLabel"
      aria-hidden="true"
      v-if="showModal"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="editLabel">Contact Form</h5>
          </div>
          <div class="modal-body">
            <form>
              <div class="form-group">
                <label>Name</label>
                <input class="form-control" v-model="cname" />
              </div>
              <div class="form-group">
                <label>Email</label>
                <input class="form-control" v-model="cmail" />
              </div>
              <div class="form-group">
                <label>Phone</label>
                <input class="form-control" v-model="cphone" />
              </div>
              <div class="form-group">
                <label>Message</label>
                <textarea class="form-control" v-model="cdes"></textarea>
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" @click="inClose()">
              Close
            </button>
            <button
              type="button"
              class="btn btn-primary"
              @click="sendMessage()"
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Slider from "../../services/Slider.vue";
import Partner from "../../apis/Partner";

export default {
  data() {
    return {
      showModal: false,
      partners: [],
      products: [
        {
          id: "1",
          name: "Poultry",
          img: require("../../assets/image/chi.jpg"),
          url: "/poultry",
        },
        {
          id: "2",
          name: "Dairy",
          img: require("../../assets/image/co.jpg"),
          url: "/dairy",
        },
        {
          id: "3",
          name: "Aqua",
          img: require("../../assets/image/fi.jpg"),
          url: "/aqua",
        },
      ],
    };
  },
  components: {
    Slider,
  },

  created() {
    this.getPartners();
  },

  methods: {
    getPartners() {
      Partner.getPartner().then((response) => {
        this.partners = response.data;
        console.log(this.partners);
      });
    },
    onclick() {
      this.showModal = true;
    },

    inClose() {
      this.showModal = false;
    },
  },

  mounted() {
    window.scrollTo(0, 0);
  },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Alfa+Slab+One&family=Lato:wght@100&family=Lobster&family=Oswald:wght@400;500&family=Poppins:wght@100;500&family=Roboto+Condensed:wght@300&family=Roboto:wght@100&display=swap');

.home {
  width: 100%;
  height: 100%;
  padding: 0;
  margin-top: 130px;
}
.home .slide {
  width: 100%;
  height: 500px;
  padding: 0;
  margin: 0;
  background: rgba(0, 0, 0, 0.404);
}
h3 {
font-size: 1.8rem;
  font-weight: 900;
  font-family: 'Oswald', sans-serif;
  color: #000;
  text-align: center;
  padding-top: 20px;
  margin-top: 10px;
  text-transform: uppercase;
}
.message {
  width: 100%;
  padding: 0;
  margin-top: 20px;
  display: flex;
  justify-content: center;
  
}
.message p {
  font-size: 1.4rem;
  font-weight: 900;
font-family: 'Roboto', sans-serif;
  margin-left: 5%;
  margin-right: 5%;
  padding: 30px;
  text-align: justify;
  border-top: 5px solid #0b5369;
  border-left: 2px solid #0b5369;
  border-right: 2px solid #0b5369;
  border-bottom: 10px solid #0b5369;
}

.product {
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 10px;
}
.product .row {
  width: 100%;
  padding: 0;
  margin: 0;
}
.product .row .col-md-4 {
  margin: 0;
  padding: 10px;
  width: 33%;
  display: flex;
}
.product .row .col-md-4 a {
  text-decoration: none;
}
.product .row .col-md-4 .box {
  width: 300px;
  height: 260px;
  padding: 5px;
  margin: 5px;
  background: #fff;
}
.product .row .col-md-4 .box .img {
  width: 100%;
  height: 200px;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: center;
}
.product .row .col-md-4 .box .img img {
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
}
.product .row .col-md-4 .box .text {
  width: 100%;
  padding: 10px;
  margin: 0;
  background: #fff;
  border-bottom: 10px solid #0b5369;
  border-left: 2px solid #0b5369;
  border-right: 2px solid #0b5369;
  border-top: 1px solid #0b5369;
}
.product .row .col-md-4 .box .text h4 {
  font-size: 1.5rem;
  font-weight: 900;
  font-family: 'Oswald', sans-serif;
  color: #000;
  text-align: center;
  text-transform: uppercase;
}

.partners {
  width: 100%;
  height: 100%;
  padding: 10px;
  margin: 0;
}

.partners .row {
  padding: 10px;
  margin: 5px;
}
.partners .row .col-md-2 {
  width: 20%;
  padding: 10px;
  margin: 0;
}
.partners .col-md-2 .card {
  width: 100%;
  height: 250px;
  padding: 0;
  margin: 0;
  z-index: 0;
}
.partners .col-md-2 .card .card-body {
  width: 100%;
  height: 150px;
  padding: 5px;
  margin: 0;
  background: #fff;
  filter: brightness(100%);
}
.partners .col-md-2 .card .card-body img {
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
}
.partners .col-md-2 .card .card-footer {
  width: 100%;
  height: 100px;
  padding: 0;
  margin: 0;
  border-bottom: 10px solid #0b5369;
  border-left: 2px solid  #0b5369;
  border-right: 2px solid #0b5369;
}
.partners .col-md-2 .card .card-footer .name {
  font-size: 1.5rem;
  font-weight: 900;
  font-family: 'Oswald', sans-serif;
  letter-spacing: 1px;
  color: #fff;
  text-align: center;
  padding: 10px;
  margin: 0;
  text-transform: uppercase;
  background: #0b5369;
}
.partners .col-md-2 .card .card-footer .link {
  cursor: pointer;
  font-size: 1rem;
  font-weight: 500;
  color: blue;
  text-decoration: none;
  padding: 5px;
  margin: 0;
  text-align: center;
}

.contact {
  width: 100%;
  height: 100%;
  padding: 10px;
  margin: 0;
}
.contact .row {
  padding: 10px;
  margin: 5px;
}
.contact .row .col-md-12 {
  padding: 0;
  margin: 0;
}
.contact .row .col-md-12 p {
  text-align: center;
  font-size: 1.4rem;
  font-weight: 900;
font-family: 'Roboto', sans-serif;
}
.contact .row .col-md-12 p a {
  color: blue;
  text-decoration: underline;
  cursor: pointer;
}

.modal {
  display: block;
  margin-top: 8%;
  border: none;
}
.modal-header,
.modal-body,
.modal-footer {
  border: none;
}
.modal .modal-title {
  font-size: 1.5rem;
  font-weight: 500;
}
.modal .modal-body {
  padding: 20px;
  margin: 0;
}
.modal .modal-body form label {
  font-size: 1.2rem;
  font-weight: 500;
}


@media only screen and (max-width: 436px) {
  
}

</style>