<template>
  <div class="gallery">
    <div class="container">
      <div class="row">
        <h3>Gallery</h3>
        <div class="col-md-4" v-for="gallery in gallerys" :key="gallery.id">
          <div class="card">
            <div class="image">
              <img :src="gallery.image" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      gallerys: [
        {
          id: "1",
          name: "picture",
          image: require("../../assets/image/gallery.jpg"),
        },
        {
          id: "2",
          name: "picture",
          image: require("../../assets/image/gallery.jpg"),
        },
        {
          id: "3",
          name: "picture",
          image: require("../../assets/image/gallery.jpg"),
        },
      ],
    };
  },
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
</style>