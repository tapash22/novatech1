import { createRouter, createWebHistory } from "vue-router";

import Clients from "./components/pages/Clients.vue";
import Home from "./components/pages/Home.vue";
import About from "./components/pages/About.vue";
import Gallery from "./components/pages/Gallery.vue";
import Products from "./components/pages/Products.vue";
import Contactus from "./components/pages/Contactus.vue";
import Login from "./components/pages/Login.vue";
import Register from "./components/pages/Register.vue";

import Poultry from "./components/pages/Poultry.vue";
import Dairy from "./components/pages/Dairy.vue";
import Aqua from "./components/pages/Aqua.vue";

import Antibiotic from "./sub_page/Antibiotic.vue";
import Harbal from "./sub_page/Harbal.vue";
import Nutritional from "./sub_page/Nutritional.vue";
import Others from "./sub_page/Others.vue";

import Dashboard from "./components/pages/Dashboard.vue";
import Slider from "./components/pages/Slider.vue";
import Gallerys from "./components/pages/Gallerys.vue";
import Product from "./components/pages/Product.vue";
import ProductDetail from "./services/ProductDetail.vue";
import Partner from "./components/pages/Partner.vue";

const routes = [
  {
    path: "/",
    component: Clients,
    redirect: "home",
    meta: { guestOnly: true },
    children: [
      { path: "home", component: Home },
      { path: "about", component: About },
      { path: "gallery", component: Gallery },
      { path: "products", component: Products },
      { path: 'products/:id',name:'ProductDetail', component: ProductDetail },
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

  {
    path: '/dashboard', component: Dashboard, redirect: "/dashboard/register", meta: { authOnly: true }, children: [
      { path: "register", component: Register },
      { path: 'slider', component: Slider },
      { path: 'gallerys', component: Gallerys },
      { path: 'product', component: Product },
      { path: 'partner', component: Partner },
      
    ]
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

function isLoggedIn() {
  return localStorage.getItem("token");
}

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.authOnly)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    if (!isLoggedIn()) {
      next({
        path: "/login",
        query: { redirect: to.fullPath }
      });
    } else {
      next();
    }
  } else if (to.matched.some(record => record.meta.guestOnly)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    if (isLoggedIn()) {
      next({
        path: "/dashboard",
        query: { redirect: to.fullPath }
      });
    } else {
      next();
    }
  } else {
    next(); // make sure to always call next()!
  }
});

export default router;
