<template>
  <div class="row my-3">
    <div class="col-md-4 offset-4 text-center">
      <router-link class="nav-link"
                   active-class="active"
                   exact
                   tag="a"
                   to="/">
        <img src="../../assets/img/logo.png"/>
      </router-link>
    </div>
  </div>
</template>

<script>

  export default {
    name: 'Header',
    data: () => ({
    }),
  }
</script>
