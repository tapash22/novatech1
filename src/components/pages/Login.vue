<template>
  <div class="login">
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <h3>Login Form</h3>
          <form>
            <div class="form-group">
              <label>Email</label>
              <input class="form-control" type="email" v-model="form.email" />
              <span class="text-danger" v-if="errors.email">
                {{ errors.email[0] }}
              </span>
            </div>
            <div class="form-group">
              <label>Password</label>
              <input
                class="form-control"
                type="password"
                v-model="form.password"
              />
              <span class="text-danger" v-if="errors.password">
                {{ errors.password[0] }}
              </span>
            </div>
            <div class="my-3">
              <button @click.prevent="login" class="btn btn-primary">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import User from "../../apis/User";

export default {
  data() {
    return {
      form: {
        email: "",
        password: "",
        device_name:"browser",
      },
      errors: [],
    };
  },

  mounted() {
    window.scrollTo(0, 0);
  },

  methods: {
    login() {
      User.login(this.form)
        .then((response) => {
          this.$root.$emit("login", true);
          localStorage.setItem("token",response.data );
          this.$router.push('/dashboard');
        })
        .catch((error) => {
          if (error.response.status === 422) {
            this.errors = error.response.data.errors;
          }
        });
    },
  },
};
</script>

<style scoped>
.login {
  width: 100%;
  padding: 0;
  margin-top: 130px;
}
.row {
  width: 100%;
  padding: 10px;
  margin: 0;
  display: flex;
  justify-content: center;
}
.row .col-md-6 {
  width: 50%;
  height: 100%;
  padding: 10px;
  margin: 5px;
}
.col-md-6 h3 {
  font-size: 1.5rem;
  font-weight: 700;
  color: #000;
  text-align: center;
  text-transform: uppercase;
}
.col-md-6 form {
  box-shadow: 2px 2px 4px #000;
  padding: 20px;
}
.col-md-6 form label {
  font-size: 1.2rem;
  font-weight: 500;
}

@media only screen and (max-width: 436px) {
  .login {
  width: 100%;
  padding: 0;
  margin-top: 130px;
}
.row {
  widows: 100%;
  padding: 10px;
  margin: 0;
  display: flex;
  justify-content: center;
}
.row .col-md-6 {
  width: 100%;
  height: 100%;
  padding: 10px;
  margin: 5px;
}
.col-md-6 h3 {
  font-size: 1.5rem;
  font-weight: 700;
  color: #000;
  text-align: center;
  text-transform: uppercase;
}
.col-md-6 form {
  box-shadow: 2px 2px 4px #000;
  padding: 20px;
}
.col-md-6 form label {
  font-size: 1.2rem;
  font-weight: 500;
}
}
</style>