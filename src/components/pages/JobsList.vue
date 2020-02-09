<template>
  <section>
    <template v-if="jobs">
      <div class="row">
        <div v-for="job in jobs"
             :key="job.name"
             class="col-6 col-sm-6 col-md-4 col-lg-3 mb-4">
        </div>
      </div>
    </template>
  </section>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex'

  export default {
    name: 'JobsList',
    computed: {
      ...mapGetters({
        jobs: 'jobs'
      })
    },
    methods: {
      ...mapActions(
        ['getJobs']
      )
    },
    mounted () {
      this.getJobs()
    }
  }
</script>

