import { createRouter, createWebHistory } from "vue-router";

import Clients from "./components/pages/Clients.vue";
import Home from "./components/pages/Home.vue";
import About from "./components/pages/About.vue";
import Gallery from "./components/pages/Gallery.vue";
import Products from "./components/pages/Products.vue";
import Contactus from "./components/pages/Contactus.vue";
import Login from "./components/pages/Login.vue";

import Poultry from "./components/pages/Poultry.vue";
import Dairy from "./components/pages/Dairy.vue";
import Aqua from "./components/pages/Aqua.vue";

import Antibiotic from "./sub_page/Antibiotic.vue";
import Harbal from "./sub_page/Harbal.vue";
import Nutritional from "./sub_page/Nutritional.vue";
import Others from "./sub_page/Others.vue";

const routes = [
  {
    path: "/",
    component: Clients,
    redirect: "home",
    children: [
      { path: "home", component: Home },
      { path: "about", component: About },
      { path: "gallery", component: Gallery },
      { path: "products", component: Products },
      { path: "contactus", component: Contactus },
      { path: "login", component: Login },

      { path: "poultry", component: Poultry },
      { path: "dairy", component: Dairy },
      { path: "aqua", component: Aqua },

      { path: "antibiotic", component: Antibiotic },
      { path: "harbal", component: Harbal },
      { path: "nutritional", component: Nutritional },
      { path: "others", component: Others },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
