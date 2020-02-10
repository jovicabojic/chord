<template>
  <div class="container">
    <div class="row margin-top">
      <div class="col-8 offset-2">
        <div class="row medium-font">
          <div class="col-3">
            <a href="#">
            </a>
          </div>
          <div class="col-6 text-center">
            <h3><strong>Account login</strong></h3>
          </div>
        </div>
        <div class="row big-font">
          <div class="col text-center">
            <p>
              <strong>
                Welcome back!
                <br>
                Great to see you again
              </strong>
            </p>
          </div>
        </div>
      </div>
      <div class="col-8 offset-2 background">
        <form @submit.prevent="submit" autocomplete="no">
          <div class="form-row my-3">
            <div class="col">
              <input v-model="auth.email"
                     id="email"
                     name="email"
                     type="text"
                     class="form-control login-input"
                     placeholder="Email">
            </div>
            <div class="col">
              <input v-model="auth.password"
                     id="password"
                     name="password"
                     type="password"
                     class="form-control login-input"
                     placeholder="Password">
            </div>
          </div>
          <input type="submit" class="btn btn-primary form-control login-button"
                 value="Login">
        </form>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex'

  export default {
    name: 'Home',
    data: () => ({
      auth: {
        email: '',
        password: ''
      }
    }),
    computed: {
      ...mapGetters({
        authToken: 'authToken',
      })
    },
    methods: {
      ...mapActions([
        'login'
      ]),
      submit () {
        if(this.authToken) {
          this.login({...this.auth})
        }
      }
    }
  }
</script>
