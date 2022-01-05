<template>
  <div class="gallery">
    <div class="container">
      <div class="row">
        <h3>Gallery</h3>
        <div class="col-md-4" v-for="gallery in gallerys" :key="gallery.id">
          <div class="card">
            <div class="image">
              <img :src="'/sub/'+gallery.gimage" />
              <!-- <a :href="'/sub/'+gallery.gimage">download</a> -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Gallery from "../../apis/Gallery";

export default {
  data() {
    return {
      gname: "",
      gimage: "",
      gallerys: [],
    };
  },
    created() {
    this.getGallery();
  },

    mounted() {
    window.scrollTo(0, 0);
  },

  methods:{
        getGallery() {
      Gallery.getGallery().then((response) => {
        this.gallerys = response.data;
        console.log(this.gallerys);
      });
    },

    uploadImage() {
      this.gimage = this.$refs.gimage.files[0];
    },
  }
};
</script>

<style scoped>
.gallery {
  width: 100%;
  height: 100%;
  padding: 0;
  margin-top: 130px;
}
.row {
  width: 100%;
  padding: 10px;
  margin: 0;
  display: flex;
}
h3 {
  font-size: 1.5rem;
  font-weight: 700;
  color: #000;
  text-align: center;
  text-transform: uppercase;
}

.row .col-md-4 {
  width: 33%;
  padding: 10px;
  margin: 0;
}
.col-md-4 .card {
  width: 100%;
  height: 100%;
  padding: 5px;
  margin: 0;
}
.card .image {
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
}
.image img {
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
  background-size: cover;
}

@media only screen and (max-width: 436px) {
  .gallery {
  width: 100%;
  height: 100%;
  padding: 0;
  margin-top: 130px;
}
.row {
  widows: 100%;
  padding: 10px;
  margin: 0;
  display: flex;
}
h3 {
  font-size: 1.5rem;
  font-weight: 700;
  color: #000;
  text-align: center;
  text-transform: uppercase;
}

.row .col-md-4 {
  width: 100%;
  padding: 10px;
  margin: 0;
}
.col-md-4 .card {
  width: 100%;
  height: 100%;
  padding: 5px;
  margin: 0;
}
.card .image {
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
}
.image img {
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
  background-size: cover;
}
}

</style>